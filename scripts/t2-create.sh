#!/usr/bin/env bash

cd $T2_HOME

read -p "Enter JIRA ticket number:" TICKET

PS3="Select a framework: "

select TEMPLATE in angular react vue vanilla
do
    echo "Selected framework: $TEMPLATE"
    break;
done

PROJECT_DIR_PATH="$T2_HOME/projects/t2-$TICKET"

# Checks if the TICKET EXISTS, IF NOT EXIT THE PROCESS
if [ "$TICKET" ]; then
  echo "CREATING $TICKET"
else
  echo "NO TICKET PROVIDED"
  exit 1
fi

# PROJECT WITH THE TICKET NR ALREADY EXIST = EXIT
if test -d "$PROJECT_DIR_PATH"; then
  echo "PROJECT WITH THE TICKET NR ALREADY EXIST"
  exit 1
fi

TEMPLATE_DIR_PATH="$T2_HOME/templates/$TEMPLATE"

git pull && /

case "$TEMPLATE" in  
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

code $PROJECT_DIR_PATH
