#!/usr/bin/env bash

# INPUTS > TICKET, TEMPLATE

cd $T2_HOME

# SUB ROUTINES - HELPERS PATHS
PARSE_TICKET_TEMPLATE_ARGUMENTS="$T2_HOME/scripts/helpers/parse-ticket-template-arguments.sh"
EXIT_IF_NO_TICKET_PROVIDED="$T2_HOME/scripts/helpers/exit-if-no-ticket-provided.sh"
EXIT_IF_PROJECT_ALREADY_EXIST="$T2_HOME/scripts/helpers/exit-if-project-already-exists.sh"
APPLY_TEMPLATE_IF_PROVIDED="$T2_HOME/scripts/helpers/apply-template-if-provided.sh"

source $PARSE_TICKET_TEMPLATE_ARGUMENTS # PARSES TICKET,TEMPLATE into variables

PROJECT_DIR_PATH="$T2_HOME/projects/t2-$TICKET"
source $EXIT_IF_NO_TICKET_PROVIDED #USES PROJECT PATH
source $EXIT_IF_PROJECT_ALREADY_EXIST #  PROJECT WITH THE TICKET NR ALREADY EXIST = EXIT


TEMPLATE_DIR_PATH="$T2_HOME/templates/$TEMPLATE"



git pull && /

#  VUE SPECIFIC SCRIPT
cd $T2_HOME/projects && /
vue create -d t2-$TICKET && /
npm i --save ag-grid-vue ag-grid-community ag-grid-enterprise vue-property-decorator@^8.0.0 && /
cd $T2_HOME &&/
# VUE SPECIFIC END
source $APPLY_TEMPLATE_IF_PROVIDED

git add . && /
git commit -m "t2-$TICKET  with $TEMPLATE template created" && /
git push && /

echo "complete"
echo "LINK TO CODESANDBOX: https://codesandbox.io/s/github/davis4acca/t2/tree/main/projects/t2-${TICKET}"
echo "LINK TO STACKBLITZ: https://stackblitz.com/github/davis4acca/t2/tree/main/projects/t2-${TICKET}"
