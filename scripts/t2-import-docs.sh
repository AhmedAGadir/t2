# on something already created
# prompt the user to pick from a list of examples to import from the docs
# at the start only JS: range selection

# curl URL -X GET


cd $T2_HOME



read -p "Enter JIRA ticket number:" TICKET


curl -o  $T2_HOME/projects/$TICKET/src/App.js https://www.ag-grid.com/examples/range-selection/range-selection/packages/react/index.jsx 

# curl -o  index.html https://www.ag-grid.com/examples/range-selection/range-selection/packages/react/index.html   
# curl -o  index.jsx https://www.ag-grid.com/examples/range-selection/range-selection/packages/react/index.jsx 
# curl -o systemjs.config.js https://www.ag-grid.com/example-runner/grid-react-boilerplate/systemjs.config.js

code .
