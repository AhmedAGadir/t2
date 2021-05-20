# #!/usr/bin/env bash

# T2_PROJECTS_DIR_PATH="$T2_HOME/projects"

# if [[ $PWD != $T2_PROJECTS_DIR_PATH/** ]]
# then
#     echo "You must run this script from within a subdirectory inside $T2_PROJECTS"
#     exit 1
# fi

# if [[ -f ag-grid.config.sh ]]
# then
#     echo 'reading ag-grid.config.sh file...'
# else 
#     echo "ag-grid.config.sh file is missing"
#     exit 1
# fi

# source "./ag-grid.config.sh"

# if [ "$FRAMEWORK" == "react" ] 
# then
#     FRAMEWORK="reactFunctional"
# fi

# echo $FRAMEWORK

rm -rf src/App.js src/App.css src/App.test.js src/logo.svg