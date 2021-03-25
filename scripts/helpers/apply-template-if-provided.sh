# # test if TEMPLATE PROVIDED AND IF TEMPLATE FOLDER EXIST
# # If exist then use that template by copying over files from template to project
echo 'apply template if provided'
if [ "$TEMPLATE" ]; then
  if test -d "$TEMPLATE_DIR_PATH"; then
    echo "applying $TEMPLATE template"
    'cp' -rf $TEMPLATE_DIR_PATH/* $PROJECT_DIR_PATH
  fi
else
  echo "NO TEMPLATE PROVIDED - creating regular angular project"
fi