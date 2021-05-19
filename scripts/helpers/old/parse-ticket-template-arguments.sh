
# HARDCODED PARSE TICKET AND TEMPLATE ARGUMENTS
# PARSES into variables i.e: TICKET="123" TEMPLATE="react"  
for ARGUMENT in "$@"
do
    KEY=$(echo $ARGUMENT | cut -f1 -d=)
    VALUE=$(echo $ARGUMENT | cut -f2 -d=)   

    case "$KEY" in
            TICKET)              TICKET=${VALUE} ;;
            TEMPLATE)    TEMPLATE=${VALUE} ;;     
            *)   
    esac    
done