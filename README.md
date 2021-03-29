# t2

add the following to your .zshrc file
(if you cant find your zsh file see https://superuser.com/questions/886132/where-is-the-zshrc-file-on-mac):

add the following paths there (replace with your file paths):
export T2_SCRIPTS=/Users/ahmedgadir/GitHub/t2/scripts
export T2_PROJECTS=/Users/ahmedgadir/GitHub/t2/scripts
export T2_HOME=/Users/ahmedgadir/GitHub/t2
export PATH=$T2_SCRIPTS:$PATH

(the above variables may/ may not require quotation marks)
=== 
make the scripts in the script folder executable using 
$ chmod +x SCRIPT_NAME



===
change the codesandbox and stackblitz links to refer to your github

run the projects:
(make sure youre using zsh shell):
t2-create-react.sh TICKET="11111" TEMPLATE="react"

