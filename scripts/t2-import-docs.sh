# run this script after creating a template project
# in order to copy desired files from selected ag-grid
# plunker templates (e.g. range-selection) onto the template 

cd $T2_HOME

read -p "Enter JIRA ticket number:" TICKET

PROJECT_DIR_PATH="$T2_HOME/projects/t2-$TICKET"

cd $PROJECT_DIR_PATH

chmod -R 755 *

curl -o src/index.js https://www.ag-grid.com/examples/range-selection/range-selection/packages/react/index.jsx 

rm -rf src/App.js src/App.css src/App.test.js src/logo.svg

cp -r "$T2_HOME/templates/react/src/index.css" "$PROJECT_DIR_PATH/src"

# modify template
IMPORT_INDEX_CSS="import './index.css'"
# if using mac install gsed ---> brew install gsed
# if using windows use sed 
gsed -i "8a $IMPORT_INDEX_CSS" "$PROJECT_DIR_PATH/src/index.js"

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
