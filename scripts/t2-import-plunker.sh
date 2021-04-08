#!/usr/bin/env bash

# 1) create angular project
# 2) create folder import
# 3) fetch content of plunker and put in import folder
# 4) override? copy from 

T2_CREATE_ANGULAR="$T2_HOME/scripts/t2-create-angular.sh"

source $T2_CREATE_ANGULAR TICKET="3334" TEMPLATE="angular"

PROJECT_LOCATION="$T2_HOME/projects/t2-3334"

cd $PROJECT_LOCATION

# pwd

mkdir import

cp -r "/Users/ahmedgadir/Downloads/Project/" "$PROJECT_LOCATION/import"

# sudo mount -o remount,rw "$PROJECT_DIR_PATH/src"

chmod 777 *

cp -rf "$PROJECT_LOCATION/import/" "$PROJECT_DIR_PATH/src"