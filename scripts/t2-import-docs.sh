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
    fileToDelete=$(echo "$i" | jq -r)
    # delete file
    echo "Removing $fileToDelete from project"
    rm -rf $PWD/$fileToDelete
done


# inject CSS
echo 'injecting styles...'






case "$FRAMEWORK" in  
    'angular')
        DOCS_STYLE_SHEET="styles.css"
        # copy stylesheets into project
        cp -r "$T2_HOME/docs/styles/$DOCS_STYLE_SHEET" "$PWD/src"
        # inject CSS import into project route
        IMPORT_STYLES="import './$DOCS_STYLE_SHEET'"
        # if using mac install gsed ---> brew install gsed
        # if using windows use sed 
        gsed -i "8a $IMPORT_STYLES" "$PWD/src/index.js"
        ;;
    'react')
        DOCS_STYLE_SHEET="styles.css"
        # copy stylesheets into project
        cp -r "$T2_HOME/docs/styles/$DOCS_STYLE_SHEET" "$PWD/src"
        # inject CSS import into project route
        IMPORT_STYLES="import './$DOCS_STYLE_SHEET'"
        # if using mac install gsed ---> brew install gsed
        # if using windows use sed 
        gsed -i "8a $IMPORT_STYLES" "$PWD/src/index.js"
        ;;
    *) 
    echo "Could not inject stylesheets"
    ;;
esac




# finished
echo "[$FRAMEWORK]$DOCS_EXAMPLE docs injected!"


# ==================================
# ==================================



# # run this script to download an ag-grid project
# # (e.g. range-selection) locally

# # curl URL -X GET


# cd $T2_HOME/projects

# mkdir test 

# cd test

# curl -o  index.html https://www.ag-grid.com/examples/range-selection/range-selection/packages/react/index.html   
# curl -o  index.jsx https://www.ag-grid.com/examples/range-selection/range-selection/packages/react/index.jsx 
# curl -o systemjs.config.js https://www.ag-grid.com/example-runner/grid-react-boilerplate/systemjs.config.js

# code

