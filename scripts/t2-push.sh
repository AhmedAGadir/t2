#!/usr/bin/env bash 

T2_PROJECTS_DIR_PATH="$T2_HOME/projects"

# if running script from outside of our projects folder -> exit
if [[ $PWD != $T2_PROJECTS_DIR_PATH/** ]]
then
    echo "You must run this script from within a subdirectory inside $T2_PROJECTS"
    exit 1
fi

# if ag-grid.config.sh file missing -> exit
if [[ -f ag-grid.config.sh ]]
then
    echo 'reading ag-grid.config.sh file...'
else 
    echo "ag-grid.config.sh file is missing"
    exit 1
fi

source "./ag-grid.config.sh"

cd $T2_HOME

git add . && /
git commit -m "update" && /
git push && /

echo "complete"
echo "======================================================"
echo "LINK TO CODESANDBOX: https://codesandbox.io/s/github/ahmedagadir/t2/tree/main/projects/t2-${TICKET}"
# stackblitz isnt really working 
# echo "LINK TO STACKBLITZ: https://stackblitz.com/github/ahmedagadir/t2/tree/main/projects/t2-${TICKET}"
echo "======================================================"

xdg-open https://codesandbox.io/s/github/ahmedagadir/t2/tree/main/projects/t2-${TICKET}