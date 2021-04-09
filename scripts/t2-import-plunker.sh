#!/usr/bin/env bash

# 1) create angular project
# 2) create folder import
# 3) fetch content of plunker and put in import folder
# 4) override? copy from 

T2_CREATE_ANGULAR="$T2_HOME/scripts/t2-create-angular.sh"

source $T2_CREATE_ANGULAR TICKET="4321" TEMPLATE="angular"

PROJECT_LOCATION="$T2_HOME/projects/t2-4321"

cd $PROJECT_LOCATION

# pwd

mkdir import

cp -r "/Users/ahmedgadir/Downloads/Project/" "$PROJECT_LOCATION/import"

# sudo mount -o remount,rw "$PROJECT_DIR_PATH/src"

# chmod - r 777 *

# chmod -R 777 src

ls -l 

chmod -R 755 *

ls -l

cd import

rm index.html systemjs-angular-loader.js systemjs.config.js

cd ..


#  didnt work
# cp -rf "$PROJECT_LOCATION/import/" "$PROJECT_DIR_PATH/src"
# mv -v $PROJECT_LOCATION/import/* $PROJECT_LOCATION/src
# mv -f $PROJECT_LOCATION/import/* $PROJECT_LOCATION/src


# works
rsync -a $PROJECT_LOCATION/import/ $PROJECT_LOCATION/src
rm -rf $PROJECT_LOCATION/import/*