#!/usr/bin/env bash

    # need to add some compiler options 
    # gsed -i "/compilerOptions/a \"noImplicitAny\": false,\n\"strictPropertyInitialization\": false," "$PWD/tsconfig.json"

    # need to move AG Grid style imports from src/styles.scss -> src/app/app.component.ts for codesandbox
    # echo "[Angular only] injecting AG Grid stylesheet imports from src/app/app.component.ts -> src/styles.scss for codesandbox"
    STYLE_IMPORTS=$( gsed -n "/import 'ag-grid-community\/dist\/styles\//p" src/app/app.component.ts )
    FORMATTED_STLYE_IMPORTS=$( echo $STYLE_IMPORTS | gsed -e 's/import/@import/g' | gsed -e 's/; /;\\n/g' )
    
    # delete any current AG Grid stylesheet imports
    # gsed -i "/@import 'ag-grid-community\/dist\/styles/d" "src/styles.scss"
    # inject new stylesheet imports
    # gsed -i "2a $( echo $FORMATTED_STLYE_IMPORTS )" "$PWD/src/styles.scss" 

    gsed -i "s/@import 'ag-grid-community\/dist\/styles/$FORMATTED_STLYE_IMPORTS/g" "$PWD/src/styles.scss" 

    # change private properties -> public properties in component
    # this is because component templates only have access to public properties
    # gsed -i 's/private/public/g' "$PWD/src/app/app.component.ts" 
    # change this rowData: [] -> rowData: any
    # gsed -i 's/rowData: \[\]/rowData: any/g' "$PWD/src/app/app.component.ts" 




# source "./ag-grid.config.sh"

# # DOCS_EXAMPLE='tree-data'
# # FRAMEWORK='angular'

# if [[ $DOCS_EXAMPLE == "tree-data" ]]
# then
#     echo 'importing tree data stylesheet imports'
#     case "$FRAMEWORK" in  
#         'angular')
#             TREE_DATA_STYLE_IMPORTS='<link rel="stylesheet" href="styles.css"/>'
#             gsed -i "/<\/head>/i $TREE_DATA_STYLE_IMPORTS" "$PWD/src/index.html"
#             ;;
#         'react')
#             TREE_DATA_STYLE_IMPORTS="import './style.css'"
#             gsed -i "8a $TREE_DATA_STYLE_IMPORTS" "$PWD/src/index.js"
#             ;;
#         'vue')
#             TREE_DATA_STYLE_IMPORTS='<link rel="stylesheet" href="styles.css"/>'
#             gsed -i "/<\/head>/i $TREE_DATA_STYLE_IMPORTS" "$PWD/public/index.html"
#             ;;
#         'vanilla')
#             TREE_DATA_STYLE_IMPORTS='<link rel="stylesheet" href="styles.css"/>'
#             gsed -i "/<\/head>/i $TREE_DATA_STYLE_IMPORTS" "$PWD/index.html"
#             ;;
#         *) 
#         echo "Could not inject stylesheets"
#         ;;
#     esac
# fi



#     # need to add some compiler options 
#     gsed -i "/compilerOptions/a \"noImplicitAny\": false,\n\"strictPropertyInitialization\": false," "$PWD/tsconfig.json"

#     # need to move AG Grid style imports from src/styles.scss -> src/app/app.component.ts for codesandbox
#     echo "[Angular only] injecting AG Grid stylesheet imports from src/app/app.component.ts -> src/styles.scss for codesandbox"
#     STYLE_IMPORTS=$( gsed -n "/import 'ag-grid-community\/dist\/styles\//p" src/app/app.component.ts )
#     FORMATTED_STLYE_IMPORTS=$( echo $STYLE_IMPORTS | gsed -e 's/import/@import/g' | gsed -e 's/; /;\\n/g' )
#     # delete any current AG Grid stylesheet imports
#     # gsed -i "/@import 'ag-grid-community\/dist\/styles/d" "src/styles.scss"
#     # inject new stylesheet imports
#     gsed -i "2a $( echo $FORMATTED_STLYE_IMPORTS )" "$PWD/src/styles.scss" 

    
#     STYLE_IMPORTS_TO_REPLACE="@import 'ag-grid-community\/dist\/styles"



#     # change private properties -> public properties in component
#     # this is because component templates only have access to public properties
#     # gsed -i 's/private/public/g' "$PWD/src/app/app.component. ts" 
#     # change this rowData: [] -> rowData: any
#     # gsed -i 's/rowData: \[\]/rowData: any/g' "$PWD/src/app/app.component.ts" 






#     # need to move AG Grid style imports from src/styles.scss -> src/app/app.component.ts for codesandbox
#     # echo "[Angular only] injecting AG Grid stylesheet imports from src/app/app.component.ts -> src/styles.scss for codesandbox"

#     # STYLE_IMPORTS=$( gsed -n "/import 'ag-grid-community\/dist\/styles\//p" src/app/app.component.ts )
#     # FORMATTED_STLYE_IMPORTS=$( echo $STYLE_IMPORTS | gsed -e 's/import/@import/g' | gsed -e 's/; /;\\n/g' )
#     # echo $FORMATTED_STLYE_IMPORTS

#     # # delete any current AG Grid stylesheet imports
#     # gsed -i '/@import \"ag-grid-community\/dist\/styles/d' "src/styles.scss"

#     # # inject new imports
#     # gsed -i "2a $( echo $FORMATTED_STLYE_IMPORTS )" "$PWD/src/styles.scss" 


#     # gsed -i 's/rowData: \[\]/rowData: any/g' "$PWD/src/app/app.component.ts" 
    


# # STYLE_IMPORTS=$( gsed -n "/@import/p" src/styles.scss )
# # FORMATTED_STLYE_IMPORTS=$( echo $STYLE_IMPORTS | gsed -e 's/( @)\|@//g' | gsed -e 's/; /;\\n/g' )

# # gsed -i "/@Component/i $( echo $FORMATTED_STLYE_IMPORTS )" "$PWD/src/app/app.component.ts" 

# # FORMATTED_STLYE_IMPORTS=$( gsed -n "/@import/p" src/styles.scss | gsed -e 's/( @)\|@//g' | gsed -e 's/; /;\\n/g' )


# # STYLE_IMPORTS=$( gsed -n "/@import/p" src/styles.scss )
# # MODIFIED_STYLE_IMPORTS=$( echo $STYLE_IMPORTS | gsed -e 's/( @)\|@//g' | gsed -e 's/; /;\\n/g' )


# # ====







# # # URL=$( echo "$i" | jq -r )
# # curl -o tmp.html "https://www.ag-grid.com/examples/range-selection/range-selection/packages/reactFunctional/index.html"
# # # match the <style></style> tags and store them in a variable
# # PAGE_STYLES=$( gsed -n "/<style.*/,/<\/style>/p" tmp.html )
# # # echo $PAGE_STYLES 
# # # escape for use in sed 
# # ESCAPED_PAGE_STYLES=$(printf '%s\n' "$PAGE_STYLES" | gsed -e 's/[\/&"]/\\&/g')
# # # echo $ESCAPED_PAGE_STYLES
# # gsed -i "1i $( echo $PAGE_STYLES )" "$PWD/tmp.css"
# # gsed -i "1i $( echo $ESCAPED_PAGE_STYLES )" "$PWD/tmp.css"




# # STYLE_IMPORTS=$( gsed -n "/@import/p" src/styles.scss )
# # MODIFIED_STYLE_IMPORTS=$( echo $STYLE_IMPORTS | gsed -e 's/( @)\|@//g' | gsed -e 's/; /;\\n/g' )





# # MODIFIED_STYLE_IMPORTS=$( echo "$STYLE_IMPORTS" | gsed -e 's/((y)|(xy))/5/g')
# # MODIFIED_STYLE_IMPORTS=$( echo "$STYLE_IMPORTS" | gsed -e 's/ ?@//g' | gsed -e 's/;/;\\n/g')
# # STYLE_IMPORTS_2=${STYLE_IMPORTS//@/\\\n}
# # echo $STYLE_IMPORTS_2
# # echo $MODIFIED_STYLE_IMPORTS

# # gsed -i "/@Component/i $( echo $STYLE_IMPORTS )" "$PWD/src/app/app.component.ts" 
# # gsed -i "/@Component/i $( echo $MODIFIED_STYLE_IMPORTS )" "$PWD/src/app/app.component.ts" 





# # STYLES_WITHOUT_AT=${STYLE_IMPORTS//@/}
# # STYLES_W_LINEBREAKS_WITHOUT_AT=${STYLES_WITHOUT_AT//;/;\\n}

# # gsed -i "/@Component/i $( echo $STYLES_WITHOUT_AT )" "$PWD/src/app/app.component.ts" 
# # gsed -i "/@Component/i $( echo $STYLES_W_LINEBREAKS_WITHOUT_AT )" "$PWD/src/app/app.component.ts" 


# # echo 'creating ag-grid.config.sh...'
# # BOOL=true
# # echo "export DOCS_IMPORTED=$BOOL" >> ag-grid.config.sh

# # \"noImplicitAny\": false,

# # gsed -i "/compilerOptions/a \"noImplicitAny\": false,\n\"strictPropertyInitialization\": false," "$PWD/tsconfig.json"

# # "rules": {}
# # to: 
# # "rules": { 
# # 	"no-unused-vars": "off",
# # 	"no-undef": "off"
# # }


# # gsed -i "s/\"rules\": {}/\"rules\": {\"no-unused-vars\": \"off\",\"no-undef\": \"off\"}/" $PWD/package.json


# # source "./ag-grid.config.sh"

# # if [[ $DOCS_IMPORTED == true ]]
# # then
# #     echo 'you can only run this script once per project.'
# #     exit 1
# # else 
# #     BOOL=false
# #     gsed -i "s/.*DOCS_IMPORTED.*/export DOCS_IMPORTED=$BOOL/" $PWD/ag-grid.config.sh
# # fi








# # # import FRAMEWORK variable
# # source "./ag-grid.config.sh"

# # # fetch DOCS_EXAMPLE metadata from t2/docs/metadata directory
# # T2_DOCS_METADATA_DIR_PATH="$T2_HOME/docs/metadata"

# # DOCS_EXAMPLE="range-selection"


# # # inject style tags from the docs example's index.html into the project
# # jq -c .$FRAMEWORK'.indexHTML' $T2_DOCS_METADATA_DIR_PATH/$DOCS_EXAMPLE.json | while read i; do
# #     # first create an temporary HTML file where we will output the fetched index.html file
# #     URL=$( echo "$i" | jq -r )
# #     curl -o tmp.html $URL
# #     # match the <style></style> tags and store them in a variable
# #     PAGE_STYLES=$( gsed -n "/<style.*/,/<\/style>/p" tmp.html )
# #     # escape for use in sed 
# #     ESCAPED_PAGE_STYLES=$(printf '%s\n' "$PAGE_STYLES" | sed -e 's/[\/&"]/\\&/g')
# #     # inject into project index.html file
# #     gsed -i "/<\/head>/i $(echo $ESCAPED_PAGE_STYLES)" "$PWD/index.html"
# #     # delete temporary HTML file
# #     rm -rf $PWD/tmp.html
# # done

# # echo $FRAMEWORK

# # if [[ $FRAMEWORK == "vanilla" ]]
# # then
# #     VANILLA_IMPORTS="import \"ag-grid-community/dist/styles/ag-grid.css\";\nimport \"ag-grid-community/dist/styles/ag-theme-alpine.css\";\nimport \"ag-grid-enterprise\";\nimport * as agGrid from \"ag-grid-community\";\n"
# #     gsed -i "1i $VANILLA_IMPORTS" "$PWD/src/index.js"
# # fi




# # if [[ $FRAMEWORK == "vue" ]]
# # then
# #     # the AG Grid docs use vue templates so we need to run this
# #     # allow compiling vue templates 
# #     echo "module.exports = { runtimeCompiler: true }" >> vue.config.js
# #     # we also need to replace the root vue element
# #     ROOT_BEFORE="<div id=\"app\"><\/div>"
# #     ROOT_AFTER="<div id=\"app\"><my-component>Loading Vue example<\/my-component><\/div>"

# #     gsed -i "s/$ROOT_BEFORE/$ROOT_AFTER/g" "$PWD/public/index.html"
# # fi



# # echo 'injecting styles...'

# # STYLES="<style>\
# #     html, body, #root {\
# #         height: 100%;\
# #         width: 100%;\
# #         margin: 0;\
# #         box-sizing: border-box;\
# #         -webkit-overflow-scrolling: touch;\
# #     }\
# #     \
# #     html {\
# #         position: absolute;\
# #         top: 0;\
# #         left: 0;\
# #         padding: 0;\
# #         overflow: auto;\
# #     }\
# #     \
# #     body {\
# #         padding: 1rem;\
# #         overflow: auto;\
# #     }\
# # </style>
# # "

# # case "$FRAMEWORK" in  
# #     'angular')
# #     gsed -i "/<\/head>/i $STYLES" "$PWD/src/index.html"
# #         ;;
# #     'react')
# #     gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
# #         ;;
# #     'vue')
# #     gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
# #         ;;
# #     'vanilla')
# #     gsed -i "/<\/head>/i $STYLES" "$PWD/index.html"
# #         ;;
# #     *) 
# #     echo "Could not inject stylesheets"
# #     ;;
# # esac

# # # # angular
# # # gsed -i "/<\/head>/i $STYLES" "$PWD/src/index.html"
# # # # react
# # # gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
# # # # vue
# # # gsed -i "/<\/head>/i $STYLES" "$PWD/public/index.html"
# # # # vanilla
# # # gsed -i "/<\/head>/i $STYLES" "$PWD/index.html"


# # # DOCS_STYLE_SHEET="styles.css"

# # # case "$FRAMEWORK" in  
# # #     'angular')
# # #         DOCS_STYLE_SHEET="styles.css"
# # #         # copy stylesheets into project
# # #         cp -r "$T2_HOME/docs/styles/$DOCS_STYLE_SHEET" "$PWD/src"
# # #         # inject CSS import into project route
# # #         IMPORT_STYLES="import './$DOCS_STYLE_SHEET'"
# # #         # if using mac install gsed ---> brew install gsed
# # #         # if using windows use sed 
# # #         gsed -i "8a $IMPORT_STYLES" "$PWD/src/index.js"
# # #         ;;
# # #     'react')
# # #         cat > src/styles.css
# # #         gsed -i "1a 'hello'" "$PWD/src/styles.css"

# # #         gsed -i "1a $STYLES" "$PWD/text.txt"

# # #         # DOCS_STYLE_SHEET="styles.css"
# # #         # # copy stylesheets into project
# # #         # cp -r "$T2_HOME/docs/styles/$DOCS_STYLE_SHEET" "$PWD/src"
# # #         # # inject CSS import into project route
# # #         # IMPORT_STYLES="import './$DOCS_STYLE_SHEET'"
# # #         # # if using mac install gsed ---> brew install gsed
# # #         # # if using windows use sed 
# # #         # gsed -i "8a $IMPORT_STYLES" "$PWD/src/index.js"
# # #         ;;
# # #     *) 
# # #     echo "Could not inject stylesheets"
# # #     ;;
# # # esac

# # # gsed -i "1a $STYLES" "$PWD/text.txt"









# # # T2_PROJECTS_DIR_PATH="$T2_HOME/projects"

# # # if [[ $PWD != $T2_PROJECTS_DIR_PATH/** ]]
# # # then
# # #     echo "You must run this script from within a subdirectory inside $T2_PROJECTS"
# # #     exit 1
# # # fi

# # # if [[ -f ag-grid.config.sh ]]
# # # then
# # #     echo 'reading ag-grid.config.sh file...'
# # # else 
# # #     echo "ag-grid.config.sh file is missing"
# # #     exit 1
# # # fi

# # # # ====================
# # # # ====================
# # # # ====================

# # # FRAMEWORK="react"
# # # DOCS_EXAMPLE="range-selection"

# # # echo "importing [$DOCS_EXAMPLE][$FRAMEWORK] example from the AG Grid docs..."

# # # # fetch DOCS_EXAMPLE metadata from t2/docs-metadata directory

# # # T2_DOCS_DIR_PATH="$T2_HOME/docs-metadata"

# # # # install jq 
# # # # https://stedolan.github.io/jq/
# # # # https://stedolan.github.io/jq/

# # # # iterate over filesToFetch and import them
# # # jq -c .$FRAMEWORK'.filesToFetch[]' $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json | while read i; do
# # #     # do stuff with $i
# # #     docs_url=$( echo "$i" | jq -r '.url' )
# # #     destination=$( echo "$i" | jq -r '.destination' )
# # #     echo "$docs_url > $destination"

# # #     # fetch and import
# # #     curl -o $destination $docs_url 
# # # done

# # # # iterate over filesToRemoveFromTemplate and delete them
# # # jq -c .$FRAMEWORK'.filesToRemoveFromTemplate[] | .' $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json | while read i; do
# # #     # do stuff with $i
# # #     fileToDelete=$PWD/$(echo "$i" | jq -r)
# # #     # delete file
# # #     rm -rf $fileToDelete
# # # done





# # # #  jq -c .react.filesToFetch[]|[url,destination] $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json
# # # # FILES_TO_FETCH=$(jq -c .$FRAMEWORK'.filesToFetch[]|[.url,.destination]' $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json)

# # # # FILES_TO_FETCH=$(jq .$FRAMEWORK.filesToFetch $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json)
# # # # echo $FILES_TO_FETCH
# # # # FILES_TO_REMOVE_FROM_TEMPLATE=$(jq .$FRAMEWORK.filesToRemoveFromTemplate $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json)
# # # # echo $FILES_TO_REMOVE_FROM_TEMPLATE

# # # # for i in "${FILES_TO_FETCH[@]}"
# # # # do
# # # #     # url=$i.url
# # # #     # destination=$i.destination
# # # #     # echo $url 
# # # #     # echo $dest
# # # # 	echo "file to remove: $i"
# # # # done

# # # # jq -c .$FRAMEWORK'.filesToFetch[]|[.url,.destination]' $T2_DOCS_DIR_PATH/$DOCS_EXAMPLE.json | while read i; do
# # # #     # do stuff with $i
# # # #     echo "item $i"
# # # # done





# # # # test=$(curl -s "docs-metadata/range-selection.json" | jq)
# # # # test=$(jq $T2_HOME/docs-metadata/range-selection.json)

# # # # echo $test

# # # # jq .message.temperature raul.json 

# # # # # -s for silent
# # # # curl -s URL | jq

# # # # # returns everything
# # # # curl -s URL | jq '.' 

# # # # # .value array
# # # # curl -s URL | jq '.value'
# # # # # first joke
# # # # curl -s URL | jq '.value[0]'
# # # # # joke property 
# # # # curl -s URL | jq '.value[0].joke'

# # # # save to a variable
# # # # joke=$(curl -s http://api.icndb.com/jokes/random/3 | jq '.value[0].joke')

# # # # echo $joke


# # # # ================
# # # # =================


# # # # 








# # # # DOCS_URL=''

# # # # case "$DOCS_EXAMPLE" in  
# # # #     'range-selection')
# # # #         DOCS_URL="https://www.ag-grid.com/examples/range-selection/range-selection/packages/reactFunctional/index.jsx"
# # # #         ;;
# # # #     'row-grouping')
# # # #         DOCS_URL="https://www.ag-grid.com/examples/grouping/auto-column-group/packages/reactFunctional/index.jsx"
# # # #         ;;
# # # #     *) 
# # # #     echo "$DOCS_EXAMPLE not recognised"
# # # #     ;;
# # # # esac

# # # # curl -o src/index.js $DOCS_URL 

# # # # echo 'removing unwanted files...'

# # # # rm -rf src/App.js src/App.css src/App.test.js src/logo.svg

# # # # echo 'injecting stylesheets...'

# # # # cp -r "$T2_HOME/templates/react/src/index.css" "$PWD/src"

# # # # # modify template
# # # # INJECT_CSS="import './index.css'"
# # # # # if using mac install gsed ---> brew install gsed
# # # # # if using windows use sed 
# # # # gsed -i "8a $INJECT_CSS" "$PWD/src/index.js"

# # # # echo "[$FRAMEWORK]$DOCS_EXAMPLE docs injected!"
