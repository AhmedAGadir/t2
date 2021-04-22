#!/usr/bin/env bash

read -p "Enter ticket number:" TICKET_NUMBER
read -p "Enter project name in downloads folder:" PROJECT_TO_IMPORT_NAME

PROJECT_TO_IMPORT_LOCATION="/Users/ahmedgadir/Downloads/$PROJECT_TO_IMPORT_NAME"
PROJECT_LOCATION="$T2_HOME/projects/t2-$TICKET_NUMBER"

cd $PROJECT_LOCATION

# create import folder
mkdir import
# import project from downloads folder
cp -r "$PROJECT_TO_IMPORT_LOCATION/" "$PROJECT_LOCATION/import"
# change permissions, make writeable
chmod -R 755 *

# remove files we dont need from the imported folder
# rm import/index.html import/systemjs-angular-loader.js import/systemjs.config.js import/main.ts

# overwrite template with imported files
rsync -a $PROJECT_LOCATION/import/ $PROJECT_LOCATION/src
rm -rf $PROJECT_LOCATION/import/*

# delete import folder
rm -r import

# update repo
git add . 
git commit -m 'imported project and overwrote template for T2-' + $TICKET_NUMBER
git push