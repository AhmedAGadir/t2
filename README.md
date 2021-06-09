## Setting up

Choose a home folder for your scripts (this can be anywhere on your computer). For instance ~/t2-home (from here on this doc will assume that you are using ~/t2-home as your home folder, if you are not, then you should be aware when copy-pasting the commands) 
```
cd ~
mkdir t2-home
```
Update your profile file, if you are using zsh => ~/.zshrc(if you can’t find your .zshrc file see https://superuser.com/questions/886132/where-is-the-zshrc-file-on-mac):
```
code ~/.zshrc
```
Add this to the end of your profile:
```
export T2_HOME=~/t2-home 
export T2_SCRIPTS=$T2_HOME/scripts 
export T2_PROJECTS=$T2_HOME/scripts 
export PATH=$T2_SCRIPTS:$PATH
```
To make sure your current terminal session picks up the changes
```
source ~/.zshrc 
```
Clone this repo: 
```
cd $T2_HOME
git clone https://github.com/AhmedAGadir/t2.git .
```
make every script executable
```
cd $T2_HOME
chmod -R +x scripts
```
Lastly we’ll need to initialise the cache. So run:
```
t2-init
```
This will create a cache folder in your home folder with cached projects for angular, react, vue and vanilla js.Note that if you would ever like to update an indivual folder in the cache you can run:
```
t2-update-cache $FRAMEWORK
````
## Creating AG Grid Template Projects

To create a project run:
```
t2-get $FRAMEWORK
```
and follow the steps in the terminal.This will create a new project in the ~/t2-home/projects folder 

To push this to GitHub and get a codesandox link in the console run:
```
t2-push [OPTIONAL_COMMENT]
```
You can then follow the link shown in the console to see the project running on codesandbox

To import an example from the ag-grid docs
```
cd $T2_HOME/projects/T2-$TICKET_NUMBER
t2-import-docs
```
(Remember to push to github if you want these changes to be reflected in code sandbox)

Things to note:

