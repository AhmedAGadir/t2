#!/usr/bin/env bash

T2_CREATE_ANGULAR="$T2_HOME/scripts/t2-create-angular.sh"

read -p "Enter angular ticket number:" TICKET_NUMBER

source $T2_CREATE_ANGULAR TICKET=$TICKET_NUMBER TEMPLATE="angular"

PROJECT_LOCATION="$T2_HOME/projects/t2-$TICKET_NUMBER"

cd $PROJECT_LOCATION

# import plunker (if exists) from downloads folder: /Downloads/project_angular/
mkdir import
cp -r "/Users/ahmedgadir/Downloads/project_angular/" "$PROJECT_LOCATION/import"
# change permissions, make writeable
chmod -R 755 *
# remove files we dont need from the imported folder
cd import
rm index.html systemjs-angular-loader.js systemjs.config.js main.ts
cd ..
rm import
# overwrite template with imported files
rsync -a $PROJECT_LOCATION/import/ $PROJECT_LOCATION/src
rm -rf $PROJECT_LOCATION/import/*

git add . 
git commit -m 'update'
git push