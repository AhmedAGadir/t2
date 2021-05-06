# run this script after creating a template project
# in order to copy desired files from selected ag-grid
# plunker templates (e.g. range-selection) onto the template 

cd $T2_HOME

read -p "Enter JIRA ticket number:" TICKET

cd $T2_HOME/projects/t2-$TICKET

chmod -R 755 *

curl -o src/App.js https://www.ag-grid.com/examples/range-selection/range-selection/packages/react/index.jsx 

code .




# ==================================
# ==================================



# run this script to download an ag-grid project
#  (e.g. range-selection) locally

# # curl URL -X GET


# cd $T2_HOME/projects

# mkdir test 

# cd test

# curl -o  index.html https://www.ag-grid.com/examples/range-selection/range-selection/packages/react/index.html   
# curl -o  index.jsx https://www.ag-grid.com/examples/range-selection/range-selection/packages/react/index.jsx 
# curl -o systemjs.config.js https://www.ag-grid.com/example-runner/grid-react-boilerplate/systemjs.config.js

# code
