#!/usr/bin/env bash

cd $T2_HOME

read -p "Enter JIRA ticket number:" TICKET

# Checks if the TICKET EXISTS, IF NOT EXIT THE PROCESS
if [ "$TICKET" ]; then
  echo "CREATING $TICKET"
else
  echo "NO TICKET PROVIDED"
  exit 1
fi

PROJECT_DIR_PATH="$T2_HOME/projects/t2-$TICKET"

# PROJECT WITH THE TICKET NR ALREADY EXIST = EXIT
if test -d "$PROJECT_DIR_PATH"; then
  echo "PROJECT WITH THE TICKET NAME ALREADY EXIST"
  exit 1
fi

PS3="Select a framework: "

select FRAMEWORK in angular react vue vanilla
do
    echo "creating a $FRAMEWORK AG Grid template project..."
    break;
done

TEMPLATE_DIR_PATH="$T2_HOME/templates/$FRAMEWORK"

# git pull && /

# create project
case "$FRAMEWORK" in  
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
        echo 'creating a vanilla js project'
        cp -r $TEMPLATE_DIR_PATH/. $PROJECT_DIR_PATH
        npm i --prefix $PROJECT_DIR_PATH && /
        ;;
    *) 
    echo "$FRAMEWORK not recognised"
    ;;
esac

cd "projects/t2-$TICKET"

# change read-write permission
chmod -R 755 *

# apply template
echo "applying $FRAMEWORK template"
'cp' -rf $TEMPLATE_DIR_PATH/* $PROJECT_DIR_PATH

# create ag-grid.config file
echo 'creating ag-grid.config.sh...'
echo "export FRAMEWORK=\"$FRAMEWORK\"" >> ag-grid.config.sh

code $PROJECT_DIR_PATH
