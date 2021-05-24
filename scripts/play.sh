#!/usr/bin/env bash

source "./ag-grid.config.sh"

echo $FRAMEWORK

if [[ $FRAMEWORK == "vanilla" ]]
then
    VANILLA_IMPORTS="import \"ag-grid-community/dist/styles/ag-grid.css\";\nimport \"ag-grid-community/dist/styles/ag-theme-alpine.css\";\nimport \"ag-grid-enterprise\";\nimport * as agGrid from \"ag-grid-community\";\n"

    gsed -i "1i $VANILLA_IMPORTS" "$PWD/src/index.js"
fi




# if [[ $FRAMEWORK == "vue" ]]
# then
#     # the AG Grid docs use vue templates so we need to run this
#     # allow compiling vue templates 
#     echo "module.exports = { runtimeCompiler: true }" >> vue.config.js
#     # we also need to replace the root vue element
#     ROOT_BEFORE="<div id=\"app\"><\/div>"
#     ROOT_AFTER="<div id=\"app\"><my-component>Loading Vue example<\/my-component><\/div>"

#     gsed -i "s/$ROOT_BEFORE/$ROOT_AFTER/g" "$PWD/public/index.html"
# fi



# echo 'injecting styles...'

# STYLES="<style>\
#     html, body, #root {\
#         height: 100%;\
#         width: 100%;\
#         margin: 0;\
#         box-sizing: border-box;\
#         -webkit-overflow-scrolling: touch;\
#     }\
#     \
#     html {\
#         position: absolute;\
#         top: 0;\
#         left: 0;\
#         padding: 0;\
#         overflow: auto;\
#     }\
#     \
#     body {\
#         padding: 1rem;\
#         overflow: auto;\
#     }\
# </style>
# "

# case "$FRAMEWORK" in  
#     'angular')
#     gsed -i "/<\/head>/i $STYLES" "$PWD/src/index.html"
#         ;;
#     'react')
#     gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
#         ;;
#     'vue')
#     gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
#         ;;
#     'vanilla')
#     gsed -i "/<\/head>/i $STYLES" "$PWD/index.html"
#         ;;
#     *) 
#     echo "Could not inject stylesheets"
#     ;;
# esac

# # # angular
# # gsed -i "/<\/head>/i $STYLES" "$PWD/src/index.html"
# # # react
# # gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
# # # vue
# # gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
# # # vanilla
# # gsed -i "/<\/head>/i $STYLES" "$PWD/index.html"


# # DOCS_STYLE_SHEET="styles.css"

# # case "$FRAMEWORK" in  
# #     'angular')
# #         DOCS_STYLE_SHEET="styles.css"
# #         # copy stylesheets into project
# #         cp -r "$T2_HOME/docs/styles/$DOCS_STYLE_SHEET" "$PWD/src"
# #         # inject CSS import into project route
# #         IMPORT_STYLES="import './$DOCS_STYLE_SHEET'"
# #         # if using mac install gsed ---> brew install gsed
# #         # if using windows use sed 
# #         gsed -i "8a $IMPORT_STYLES" "$PWD/src/index.js"
# #         ;;
# #     'react')
# #         cat > src/styles.css
# #         gsed -i "1a 'hello'" "$PWD/src/styles.css"

# #         gsed -i "1a $STYLES" "$PWD/text.txt"

# #         # DOCS_STYLE_SHEET="styles.css"
# #         # # copy stylesheets into project
# #         # cp -r "$T2_HOME/docs/styles/$DOCS_STYLE_SHEET" "$PWD/src"
# #         # # inject CSS import into project route
# #         # IMPORT_STYLES="import './$DOCS_STYLE_SHEET'"
# #         # # if using mac install gsed ---> brew install gsed
# #         # # if using windows use sed 
# #         # gsed -i "8a $IMPORT_STYLES" "$PWD/src/index.js"
# #         ;;
# #     *) 
# #     echo "Could not inject stylesheets"
# #     ;;
# # esac

# # gsed -i "1a $STYLES" "$PWD/text.txt"









# # T2_PROJECTS_DIR_PATH="$T2_HOME/projects"

# # if [[ $PWD != $T2_PROJECTS_DIR_PATH/** ]]
# # then
# #     echo "You must run this script from within a subdirectory inside $T2_PROJECTS"
# #     exit 1
# # fi

# # if [[ -f ag-grid.config.sh ]]
# # then
# #     echo 'reading ag-grid.config.sh file...'
# # else 
# #     echo "ag-grid.config.sh file is missing"
# #     exit 1
# # fi

# # # ====================
# # # ====================
# # # ====================

# # FRAMEWORK="react"
# # DOCS_EXAMPLE="range-selection"

# # echo "importing [$DOCS_EXAMPLE][$FRAMEWORK] example from the AG Grid docs..."

# # # fetch DOCS_EXAMPLE metadata from t2/docs-metadata directory

# # T2_DOCS_DIR_PATH="$T2_HOME/docs-metadata"

# # # install jq 
# # # https://stedolan.github.io/jq/
# # # https://stedolan.github.io/jq/

# # # iterate over filesToFetch and import them
# # jq -c .$FRAMEWORK'.filesToFetch[]' $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json | while read i; do
# #     # do stuff with $i
# #     docs_url=$( echo "$i" | jq -r '.url' )
# #     destination=$( echo "$i" | jq -r '.destination' )
# #     echo "$docs_url > $destination"

# #     # fetch and import
# #     curl -o $destination $docs_url 
# # done

# # # iterate over filesToRemoveFromTemplate and delete them
# # jq -c .$FRAMEWORK'.filesToRemoveFromTemplate[] | .' $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json | while read i; do
# #     # do stuff with $i
# #     fileToDelete=$PWD/$(echo "$i" | jq -r)
# #     # delete file
# #     rm -rf $fileToDelete
# # done





# # #  jq -c .react.filesToFetch[]|[url,destination] $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json
# # # FILES_TO_FETCH=$(jq -c .$FRAMEWORK'.filesToFetch[]|[.url,.destination]' $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json)

# # # FILES_TO_FETCH=$(jq .$FRAMEWORK.filesToFetch $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json)
# # # echo $FILES_TO_FETCH
# # # FILES_TO_REMOVE_FROM_TEMPLATE=$(jq .$FRAMEWORK.filesToRemoveFromTemplate $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json)
# # # echo $FILES_TO_REMOVE_FROM_TEMPLATE

# # # for i in "${FILES_TO_FETCH[@]}"
# # # do
# # #     # url=$i.url
# # #     # destination=$i.destination
# # #     # echo $url 
# # #     # echo $dest
# # # 	echo "file to remove: $i"
# # # done

# # # jq -c .$FRAMEWORK'.filesToFetch[]|[.url,.destination]' $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json | while read i; do
# # #     # do stuff with $i
# # #     echo "item $i"
# # # done





# # # test=$(curl -s "docs-metadata/range-selection.json" | jq)
# # # test=$(jq $T2_HOME/docs-metadata/range-selection.json)

# # # echo $test

# # # jq .message.temperature raul.json 

# # # # -s for silent
# # # curl -s URL | jq

# # # # returns everything
# # # curl -s URL | jq '.' 

# # # # .value array
# # # curl -s URL | jq '.value'
# # # # first joke
# # # curl -s URL | jq '.value[0]'
# # # # joke property 
# # # curl -s URL | jq '.value[0].joke'

# # # save to a variable
# # # joke=$(curl -s http://api.icndb.com/jokes/random/3 | jq '.value[0].joke')

# # # echo $joke


# # # ================
# # # =================


# # # 








# # # DOCS_URL=''

# # # case "$DOCS_EXAMPLE" in  
# # #     'range-selection')
# # #         DOCS_URL="https://www.ag-grid.com/examples/range-selection/range-selection/packages/reactFunctional/index.jsx"
# # #         ;;
# # #     'row-grouping')
# # #         DOCS_URL="https://www.ag-grid.com/examples/grouping/auto-column-group/packages/reactFunctional/index.jsx"
# # #         ;;
# # #     *) 
# # #     echo "$DOCS_EXAMPLE not recognised"
# # #     ;;
# # # esac

# # # curl -o src/index.js $DOCS_URL 

# # # echo 'removing unwanted files...'

# # # rm -rf src/App.js src/App.css src/App.test.js src/logo.svg

# # # echo 'injecting stylesheets...'

# # # cp -r "$T2_HOME/templates/react/src/index.css" "$PWD/src"

# # # # modify template
# # # INJECT_CSS="import './index.css'"
# # # # if using mac install gsed ---> brew install gsed
# # # # if using windows use sed 
# # # gsed -i "8a $INJECT_CSS" "$PWD/src/index.js"

# # # echo "[$FRAMEWORK]$DOCS_EXAMPLE docs injected!"
