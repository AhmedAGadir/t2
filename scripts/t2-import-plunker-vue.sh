#!/usr/bin/env bash

read -p "Enter angular ticket number:" TICKET_NUMBER
read -p "Enter project name in downloads folder:" PROJECT_TO_IMPORT_NAME

PROJECT_TO_IMPORT_LOCATION="/Users/ahmedgadir/Downloads/$PROJECT_TO_IMPORT_NAME"
PROJECT_LOCATION="$T2_HOME/projects/t2-$TICKET_NUMBER"

cd $PROJECT_LOCATION

echo PROJECT_TO_IMPORT_LOCATION

# import plunker (if exists) from downloads folder: /Downloads/project_angular/
mkdir import
cp -r "$PROJECT_TO_IMPORT_LOCATION/" "$PROJECT_LOCATION/import"
# change permissions, make writeable
chmod -R 755 *
# remove files we dont need from the imported folder
cd import
# rm index.html systemjs-angular-loader.js systemjs.config.js main.ts
cd ..

# overwrite template with imported files
rsync -a $PROJECT_LOCATION/import/ $PROJECT_LOCATION/src
rm -rf $PROJECT_LOCATION/import/*

# delete import folder
rm import

# update repo
git add . 
git commit -m 'update'
git push