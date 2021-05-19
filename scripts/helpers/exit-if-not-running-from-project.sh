#!/usr/bin/env bash

T2_PROJECTS_DIR_PATH="$T2_HOME/projects"

echo 'testing to make sure this script is running from the right place'

if [[ $PWD != $T2_PROJECTS_DIR_PATH/** ]]
then
    echo 'you must run this script within a subdirectory inside $T2_PROJECTS'
    exit 1
fi

echo 'passed'