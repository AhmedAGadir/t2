#!/usr/bin/env bash








# if [ -n $MY_EDITOR ]; then
    
# fi

# echo $1PAGE_STYLES=$( gsed -n "/<style.*/,/<\/style>/p" tmp.html )

#  echo "-react" | gsed -n 's/-(react|angular|vue|vanilla)/p'

# echo "-react" |
#  sed -n  's/.*-[react|angular|vue|vanilla]/\1/p'

echo "-REACT" | gsed -n -e 's/-\(react\).*/\1/p' -e 's/-\(REACT\).*/\1/p' 

# echo '-react' | sed -E -e 's/-\(react|angular\).*/\1/p'


# echo $*
# echo 'arguments ^^'

# if [ -z $1 ] ; then
#   echo 'you must pass "-[framework]" as a parameter to this script'
#   exit 1
# fi

# # to lowercase
# FRAMEWORK=$(echo "$1" | tr '[:upper:]' '[:lower:]')



# # ==========

# if [ ! $FRAMEWORK == 'angular' ] && [ ! $FRAMEWORK == 'react' ] && [ ! $FRAMEWORK == 'vue' ] && [ ! $FRAMEWORK == 'vanilla' ] ; then
#   echo 'you must pass the framework in the following format: -angular | -react | -vue | -vanilla'
#   exit 1
# fi


# if [ -z $2 ] ; then
#   echo 'you must pass the project name as the second paramater to this script'
#   echo 'e.g. t2-get -[framework] [project_name]'
#   exit 1
# fi

# # to lowercase
# PROJECT_NAME=$(echo "$2" | tr '[:upper:]' '[:lower:]')

# echo "Creating [$PROJECT_NAME] $FRAMEWORK project..."