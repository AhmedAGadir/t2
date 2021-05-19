#!/usr/bin/env bash

EXIT_IF_NOT_RUNNING_FROM_PROJECT="$T2_HOME/scripts/helpers/exit-if-not-running-from-project.sh"

source $EXIT_IF_NOT_RUNNING_FROM_PROJECT

chmod -R 755 *

PS3="Select an AG Grid template: "

select DOCS_EXAMPLE in range-selection row-grouping
do
    echo "Selected AG Grid templalate: $DOCS_EXAMPLE"
    break;
done

DOCS_URL=''

case "$DOCS_EXAMPLE" in  
    'range-selection')
        DOCS_URL='https://www.ag-grid.com/examples/range-selection/range-selection/packages/reactFunctional/index.jsx'
        ;;
    'row-grouping')
        DOCS_URL='https://www.ag-grid.com/examples/grouping/auto-column-group/packages/reactFunctional/index.jsx'
        ;;
    *) 
    echo "$DOCS_EXAMPLE not recognised"
    ;;
esac

curl -o src/index.js $DOCS_URL 

echo 'removing unwanted files...'

rm -rf src/App.js src/App.css src/App.test.js src/logo.svg


echo 'injecting stylesheets...'

cp -r "$T2_HOME/templates/react/src/index.css" "$PWD/src"

# modify template
INJECT_CSS="import './index.css'"
# if using mac install gsed ---> brew install gsed
# if using windows use sed 
gsed -i "8a $INJECT_CSS" "$PWD/src/index.js"

echo "[$FRAMEWORK]$DOCS_EXAMPLE docs example imported!"


















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

