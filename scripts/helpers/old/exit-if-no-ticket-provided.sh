# # NO TICKET = EXIT
# Checks if the TICKET EXISTS, IF NOT EXIT THE PROCESS
if [ "$TICKET" ]; then
  echo "CREATING $TICKET"
else
  echo "NO TICKET PROVIDED"
  exit 1
fi