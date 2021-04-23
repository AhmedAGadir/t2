#!/usr/bin/env bash

cd $T2_HOME

# SUB ROUTINES - HELPERS PATHS
EXIT_IF_NO_TICKET_PROVIDED="$T2_HOME/scripts/helpers/exit-if-no-ticket-provided.sh"
EXIT_IF_PROJECT_ALREADY_EXIST="$T2_HOME/scripts/helpers/exit-if-project-already-exists.sh"
APPLY_TEMPLATE_IF_PROVIDED="$T2_HOME/scripts/helpers/apply-template-if-provided.sh"

read -p "Enter JIRA ticket number:" TICKET

PS3="Select a framework: "

select TEMPLATE in angular react vue vanilla empty
do
    echo "Selected framework: $TEMPLATE"
    break;
done

PROJECT_DIR_PATH="$T2_HOME/projects/t2-$TICKET"

source $EXIT_IF_NO_TICKET_PROVIDED #USES PROJECT PATH
source $EXIT_IF_PROJECT_ALREADY_EXIST #  PROJECT WITH THE TICKET NR ALREADY EXIST = EXIT

TEMPLATE_DIR_PATH="$T2_HOME/templates/$TEMPLATE"

git pull && /

case "$TEMPLATE" in  
    'blank')
        echo 'empty project being created'
        mkdir $PROJECT_DIR_PATH;
        ;;
    'angular')
        ng new my-ag-grid --directory "./projects/t2-$TICKET" --style scss --routing false --strict true --skip-git true && /
        npm i --save ag-grid-angular ag-grid-community ag-grid-enterprise --prefix $PROJECT_DIR_PATH && /
        ;;
    'react')
        npx create-react-app $PROJECT_DIR_PATH && /
        npm i --save ag-grid-react ag-grid-community ag-grid-enterprise --prefix $PROJECT_DIR_PATH && /
        ;;
    'vue')
        cd $T2_HOME/projects && /
        vue create -d t2-$TICKET && /
        npm i --save ag-grid-vue ag-grid-community ag-grid-enterprise vue-property-decorator@^8.0.0 --prefix $PROJECT_DIR_PATH && /
        cd $T2_HOME &&/
        ;;
    'vanilla')
        echo 'this is a vanilla js project'
        cp -r $TEMPLATE_DIR_PATH/. $PROJECT_DIR_PATH
        npm i --prefix $PROJECT_DIR_PATH && /
        ;;
    *) 
    echo "$TEMPLATE not recognised"
    ;;
esac

source $APPLY_TEMPLATE_IF_PROVIDED

git add . && /
git commit -m "t2-$TICKET with $TEMPLATE template created" && /
git push && /

echo "complete"
echo "LINK TO CODESANDBOX: https://codesandbox.io/s/github/ahmedagadir/t2/tree/main/projects/t2-${TICKET}"
echo "LINK TO STACKBLITZ: https://stackblitz.com/github/ahmedagadir/t2/tree/main/projects/t2-${TICKET}"

code $PROJECT_DIR_PATH
