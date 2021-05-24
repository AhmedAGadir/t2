#!/usr/bin/env bash

T2_PROJECTS_DIR_PATH="$T2_HOME/projects"

# if running script from outside of our projects folder -> exit
if [[ $PWD != $T2_PROJECTS_DIR_PATH/** ]]
then
    echo "You must run this script from within a subdirectory inside $T2_PROJECTS"
    exit 1
fi

# select a docs example to import
DOCUMENATION_EXAMPLES="range-selection row-grouping server-side-row-model tree-data"

PS3="Select an AG Grid Docs Example: "

select DOCS_EXAMPLE in $DOCUMENATION_EXAMPLES
do
    echo "Selected AG Grid Docs Example: $DOCS_EXAMPLE"
    break;
done


# if ag-grid.config.sh file missing -> exit
if [[ -f ag-grid.config.sh ]]
then
    echo 'reading ag-grid.config.sh file...'
else 
    echo "ag-grid.config.sh file is missing"
    exit 1
fi

# import FRAMEWORK variable
source "./ag-grid.config.sh"
echo "importing [$DOCS_EXAMPLE][$FRAMEWORK] example from the AG Grid docs..."

# fetch DOCS_EXAMPLE metadata from t2/docs/metadata directory
T2_DOCS_METADATA_DIR_PATH="$T2_HOME/docs/metadata"

# install jq 
# https://stedolan.github.io/jq/

# iterate over filesToFetch and import them
jq -c .$FRAMEWORK'.filesToFetch[]' $T2_DOCS_METADATA_DIR_PATH/$DOCS_EXAMPLE.json | while read i; do
    # do stuff with $i
    docs_url=$( echo "$i" | jq -r '.url' )
    destination=$( echo "$i" | jq -r '.destination' )
    echo "$docs_url > $destination"

    # fetch and import
    curl -o $destination $docs_url 
done

# iterate over filesToRemoveFromTemplate and delete them
jq -c .$FRAMEWORK'.filesToRemoveFromTemplate[] | .' $T2_DOCS_METADATA_DIR_PATH/$DOCS_EXAMPLE.json | while read i; do
    # do stuff with $i
    fileToDelete=$( echo "$i" | jq -r )
    # delete file
    echo "Removing $fileToDelete from project"
    rm -rf $PWD/$fileToDelete
done


# inject CSS
echo 'injecting styles...'

STYLES="<style>\
    html, body, #root {\
        height: 100%;\
        width: 100%;\
        margin: 0;\
        box-sizing: border-box;\
        -webkit-overflow-scrolling: touch;\
    }\
    \
    html {\
        position: absolute;\
        top: 0;\
        left: 0;\
        padding: 0;\
        overflow: auto;\
    }\
    \
    body {\
        padding: 1rem;\
        overflow: auto;\
    }\
</style>
"

case "$FRAMEWORK" in  
    'angular')
    gsed -i "/<\/head>/i $STYLES" "$PWD/src/index.html"
        ;;
    'react')
    gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
        ;;
    'vue')
    gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
        ;;
    'vanilla')
    gsed -i "/<\/head>/i $STYLES" "$PWD/index.html"
        ;;
    *) 
    echo "Could not inject stylesheets"
    ;;
esac


# vue specific code

if [[ $FRAMEWORK == "vue" ]]
then
    # the AG Grid docs use vue templates so we need to run this
    # allow compiling vue templates 
    echo "module.exports = { runtimeCompiler: true }" >> vue.config.js
    # we also need to replace the root vue element
    ROOT_BEFORE="<div id=\"app\"><\/div>"
    ROOT_AFTER="<div id=\"app\"><my-component>Loading Vue example<\/my-component><\/div>"

    gsed -i "s/$ROOT_BEFORE/$ROOT_AFTER/g" "$PWD/public/index.html"
fi

if [[ $FRAMEWORK == "vanilla" ]]
then
    VANILLA_IMPORTS="import \"ag-grid-community/dist/styles/ag-grid.css\";\nimport \"ag-grid-community/dist/styles/ag-theme-alpine.css\";\nimport \"ag-grid-enterprise\";\nimport * as agGrid from \"ag-grid-community\";\n"
    gsed -i "1i $VANILLA_IMPORTS" "$PWD/src/index.js"
fi


# finished
echo "[$FRAMEWORK]$DOCS_EXAMPLE docs injected!"
