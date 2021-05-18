# run this script after creating a template project
# in order to copy desired files from selected ag-grid
# plunker templates (e.g. range-selection) onto the template 

cd $T2_HOME

read -p "Enter JIRA ticket number:" TICKET

PROJECT_DIR_PATH="$T2_HOME/projects/t2-$TICKET"

cd $PROJECT_DIR_PATH

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

rm -rf src/App.js src/App.css src/App.test.js src/logo.svg

cp -r "$T2_HOME/templates/react/src/index.css" "$PROJECT_DIR_PATH/src"

# modify template
INJECT_CSS="import './index.css'"
# if using mac install gsed ---> brew install gsed
# if using windows use sed 
gsed -i "8a $INJECT_CSS" "$PROJECT_DIR_PATH/src/index.js"

echo "complete"
echo "LINK TO CODESANDBOX: https://codesandbox.io/s/github/ahmedagadir/t2/tree/main/projects/t2-${TICKET}"
echo "LINK TO STACKBLITZ: https://stackblitz.com/github/ahmedagadir/t2/tree/main/projects/t2-${TICKET}"

git add . && /
git commit -m "t2-$TICKET with $DOCS_EXAMPLE docs template created" && /
git push && /

code .



















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
