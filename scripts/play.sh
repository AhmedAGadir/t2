#!/usr/bin/env bash


if [ $# -eq 0 ] || ( [ ! $1 == 'create' ] && [ ! $1 == 'init' ] ) ; then
  echo 'you must pass either "create" or "init" as a parameter to this script'
  exit 1
fi

mode=$1

PROJECT_NAME=''
FRAMEWORKS=''

case "$mode" in  
'init')
    FRAMEWORKS="angular react vue vanilla"
    ;;
'create')
    read -p "Enter JIRA ticket number:" PROJECT_NAME

    # if no ticket -> exit process 
    if [ "$PROJECT_NAME" ]; then
        echo "Creating $PROJECT_NAME"
    else
        echo "No ticket provided"
        exit 1
    fi

    # to lowercase
    PROJECT_NAME=$(echo "t2-$PROJECT_NAME" | tr '[:upper:]' '[:lower:]')

    # select a framework
    PS3="Select a framework: "

    select FRAMEWORKS in angular react vue vanilla
        do
            echo "Creating a new $FRAMEWORKS AG Grid template project..."
            break;
        done
    ;;
esac

for FRAMEWORK in $FRAMEWORKS 
    do 

    cd $T2_HOME

    PROJECT_DIR_PATH=""

    case "$mode" in  
    'init')
        PROJECT_NAME="cached-$FRAMEWORK"
        PROJECT_DIR_PATH="$T2_HOME/cache/$PROJECT_NAME"
        ;;
    'create')
        PROJECT_DIR_PATH="$T2_HOME/projects/$PROJECT_NAME"

        # if project already exists -> exit process
        if test -d "$PROJECT_DIR_PATH"; then
        echo "Project with ticket name already exists"
        exit 1
        fi
        ;;
    esac

    
    TEMPLATE_DIR_PATH="$T2_HOME/templates/$FRAMEWORK"

    # git pull && /

    # create project
    case "$FRAMEWORK" in  
        'angular')
            RELATIVE_DIR_PATH=''
            case "$mode" in  
            'init')
                RELATIVE_DIR_PATH="./cache/$PROJECT_NAME"
                ;;
            'create')
                RELATIVE_DIR_PATH="./projects/$PROJECT_NAME"
                ;;
            esac
            ng new my-ag-grid --directory $RELATIVE_DIR_PATH --style scss --routing false --strict false --skip-git true && /
            npm i --save ag-grid-angular ag-grid-community ag-grid-enterprise --prefix $PROJECT_DIR_PATH && /
            ;;
        'react')
            npx create-react-app $PROJECT_DIR_PATH && /
            npm i --save ag-grid-react ag-grid-community ag-grid-enterprise --prefix $PROJECT_DIR_PATH && /
            ;;
        'vue')
            PROJECT_PARENT_DIR_PATH=""
            case "$mode" in  
            'init')
                PROJECT_PARENT_DIR_PATH="$T2_HOME/cache"
                ;;
            'create')
                PROJECT_PARENT_DIR_PATH="$T2_HOME/projects"
                ;;
            esac
            cd $PROJECT_PARENT_DIR_PATH && /
            vue create -i '{ "useConfigFiles": true, "plugins": { "@vue/cli-plugin-babel": {} }, "vueVersion": "2", "cssPreprocessor": "node-sass" }' $PROJECT_NAME && /
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
    cd $PROJECT_DIR_PATH

    # change read-write permission
    chmod -R 755 *

    # apply template
    echo "applying $FRAMEWORK template"
    'cp' -rf $TEMPLATE_DIR_PATH/* $PROJECT_DIR_PATH

    # create ag-grid.config file (contains framework)
    echo 'creating ag-grid.config.sh file...'
    echo "TICKET=\"$PROJECT_NAME\"" >> ag-grid.config.sh
    echo "FRAMEWORK=\"$FRAMEWORK\"" >> ag-grid.config.sh
    echo "DOCS_EXAMPLE=\"\"" >> ag-grid.config.sh



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
    echo "new AG Grid $FRAMEWORK project [$PROJECT_NAME] created."
    echo "$PROJECT_DIR_PATH"
    echo "======================================================"

    code $PROJECT_DIR_PATH

done