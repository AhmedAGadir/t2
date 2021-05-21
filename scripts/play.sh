#!/usr/bin/env bash

T2_PROJECTS_DIR_PATH="$T2_HOME/projects"

if [[ $PWD != $T2_PROJECTS_DIR_PATH/** ]]
then
    echo "You must run this script from within a subdirectory inside $T2_PROJECTS"
    exit 1
fi

if [[ -f ag-grid.config.sh ]]
then
    echo 'reading ag-grid.config.sh file...'
else 
    echo "ag-grid.config.sh file is missing"
    exit 1
fi

source "./ag-grid.config.sh"
echo "This is a [$FRAMEWORK] project"



# PS3="Select an AG Grid template: "

# select DOCS_EXAMPLE in range-selection row-grouping
# do
#     echo "Selected AG Grid templalate: $DOCS_EXAMPLE"
#     break;
# done

FRAMEWORK="react"
DOCS_EXAMPLE="range-selection"

# install jq 
# https://stedolan.github.io/jq/
# https://stedolan.github.io/jq/

T2_DOCS_DIR_PATH="$T2_HOME/docs-metadata"

# test=$(curl -s "docs-metadata/range-selection.json" | jq)
test=$(jq $T2_HOME/docs-metadata/range-selection.json)

echo $test

# jq .message.temperature raul.json 

# # -s for silent
# curl -s URL | jq

# # returns everything
# curl -s URL | jq '.' 

# # .value array
# curl -s URL | jq '.value'
# # first joke
# curl -s URL | jq '.value[0]'
# # joke property 
# curl -s URL | jq '.value[0].joke'

# save to a variable
# joke=$(curl -s http://api.icndb.com/jokes/random/3 | jq '.value[0].joke')

# echo $joke


# ================
# =================


# 








# DOCS_URL=''

# case "$DOCS_EXAMPLE" in  
#     'range-selection')
#         DOCS_URL="https://www.ag-grid.com/examples/range-selection/range-selection/packages/reactFunctional/index.jsx"
#         ;;
#     'row-grouping')
#         DOCS_URL="https://www.ag-grid.com/examples/grouping/auto-column-group/packages/reactFunctional/index.jsx"
#         ;;
#     *) 
#     echo "$DOCS_EXAMPLE not recognised"
#     ;;
# esac

# curl -o src/index.js $DOCS_URL 

# echo 'removing unwanted files...'

# rm -rf src/App.js src/App.css src/App.test.js src/logo.svg

# echo 'injecting stylesheets...'

# cp -r "$T2_HOME/templates/react/src/index.css" "$PWD/src"

# # modify template
# INJECT_CSS="import './index.css'"
# # if using mac install gsed ---> brew install gsed
# # if using windows use sed 
# gsed -i "8a $INJECT_CSS" "$PWD/src/index.js"

# echo "[$FRAMEWORK]$DOCS_EXAMPLE docs injected!"
