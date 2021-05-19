#!/usr/bin/env bash

# specific to each framework
FRAMEWORK="reactFunctional"
FILES_TO_REMOVE="src/App.js src/App.css src/App.test.js src/logo.svg"

# import docs example 
IMPORT_DOCS="$T2_HOME/scripts/helpers/import-docs.sh"
source $IMPORT_DOCS
