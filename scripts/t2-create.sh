#!/usr/bin/env bash

cd $T2_HOME

read -p "Enter JIRA ticket number:" TICKET

# if no ticket -> exit process 
if [ "$TICKET" ]; then
  echo "Creating $TICKET"
else
  echo "No ticket provided"
  exit 1
fi


# if project already exists -> exit process

PROJECT_DIR_PATH="$T2_HOME/projects/t2-$TICKET"

if test -d "$PROJECT_DIR_PATH"; then
  echo "Project with ticket name already exists"
  exit 1
fi


# select a framework
PS3="Select a framework: "

select FRAMEWORK in angular react vue vanilla
do
    echo "Creating a new $FRAMEWORK AG Grid template project..."
    break;
done

TEMPLATE_DIR_PATH="$T2_HOME/templates/$FRAMEWORK"

# git pull && /

# create project
case "$FRAMEWORK" in  
    'angular')
        # ng new my-ag-grid --directory "./projects/t2-$TICKET" --style scss --routing false --strict true --skip-git true && /
        ng new my-ag-grid --directory "./projects/t2-$TICKET" --style scss --routing false --strict false --skip-git true && /
        npm i --save ag-grid-angular ag-grid-community ag-grid-enterprise --prefix $PROJECT_DIR_PATH && /
        ;;
    'react')
        npx create-react-app $PROJECT_DIR_PATH && /
        npm i --save ag-grid-react ag-grid-community ag-grid-enterprise --prefix $PROJECT_DIR_PATH && /
        ;;
    'vue')
        cd $T2_HOME/projects && /
        vue create -i '{ "useConfigFiles": true, "plugins": { "@vue/cli-plugin-babel": {} }, "vueVersion": "2", "cssPreprocessor": "node-sass" }' t2-$TICKET && /
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

# cd into project
cd "projects/t2-$TICKET"

# change read-write permission
chmod -R 755 *

# apply template
echo "applying $FRAMEWORK template"
'cp' -rf $TEMPLATE_DIR_PATH/* $PROJECT_DIR_PATH

# create ag-grid.config file (contains framework)
echo 'creating ag-grid.config.sh file...'
echo "TICKET=\"$TICKET\"" >> ag-grid.config.sh
echo "FRAMEWORK=\"$FRAMEWORK\"" >> ag-grid.config.sh
echo "DOCS_IMPORTED=false" >> ag-grid.config.sh



# angular specific
if [[ $FRAMEWORK == "angular" ]]
then
  # need to move AG Grid style imports from src/styles.scss -> src/app/app.component.ts for codesandbox
  echo "[Angular only] injecting AG Grid stylesheet imports from src/styles.scss -> src/app/app.component.ts for codesandbox"

  STYLE_IMPORTS=$( gsed -n "/@import/p" src/styles.scss )
  FORMATTED_STLYE_IMPORTS=$( echo $STYLE_IMPORTS | gsed -e 's/( @)\|@//g' | gsed -e 's/; /;\\n/g' )

  gsed -i "/@Component/i $( echo $FORMATTED_STLYE_IMPORTS )" "$PWD/src/app/app.component.ts" 
fi


echo "======================================================"
echo "new AG Grid $FRAMEWORK project [t2-$TICKET] created."
echo "$PROJECT_DIR_PATH"
echo "======================================================"

code $PROJECT_DIR_PATH
