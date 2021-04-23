#!/usr/bin/env bash

read -p "Enter JIRA ticket number:" TICKET_NUMBER
read -p "Enter project name in downloads folder:" PROJECT_TO_IMPORT_NAME

PROJECT_TO_IMPORT_PATH="/Users/ahmedgadir/Downloads/$PROJECT_TO_IMPORT_NAME"
TEMPLATE_PROJECT_PATH="$T2_HOME/projects/t2-$TICKET_NUMBER"

cd $TEMPLATE_PROJECT_PATH

# create import folder
mkdir import
# import project from downloads folder
cp -r "$PROJECT_TO_IMPORT_PATH/" "$TEMPLATE_PROJECT_PATH/import"
# change permissions, make writeable
chmod -R 755 *


# =========================================
# =========================================
# =========================================

# remove files we dont need from the imported folder e.g.
# rm import/index.html import/systemjs-angular-loader.js import/systemjs.config.js import/main.ts

# overwrite template with imported files
# # rsync -a $TEMPLATE_PROJECT_PATH/import/ $TEMPLATE_PROJECT_PATH/src
# rsync -a $TEMPLATE_PROJECT_PATH/import/ $TEMPLATE_PROJECT_PATH
# rm -rf $TEMPLATE_PROJECT_PATH/import/*


read -p "Enter a space seperated list of files/folders you want to import:" IMPORT_LIST

for IMPORT_ITEM in $IMPORT_LIST 
    do 
        rsync -a $TEMPLATE_PROJECT_PATH/import/$IMPORT_ITEM $TEMPLATE_PROJECT_PATH
        rm -rf $TEMPLATE_PROJECT_PATH/import/$IMPORT_ITEM*

done

# =========================================
# =========================================
# =========================================

# install updated dependancies 
npm i --save --prefix $TEMPLATE_PROJECT_PATH && /

# delete import folder
rm -r import

# update repo
git add . 
git commit -m 'imported project and overwrote template for T2-' + $TICKET_NUMBER
git push

