Install Dependencies

Download GSED and JQ on your machine. You may first need to install/update homebrew:

Homebrew:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
GSED:
```
brew install gnu-sed
```
JQ: 
```
brew install jq
```
Setting Up

Choose a home folder for your scripts e.g. `~/t2-home` (from here on this doc will assume that you are using `~/t2-home` as your home folder).
```
cd ~
mkdir t2-home
```
Update your profile file to add some global variables to your machine. If you are using zsh terminal then open ~/.zshrc
```
open ~/.zshrc
```
If you can’t find your .zshrc file you may need to create it. (See https://superuser.com/questions/886132/where-is-the-zshrc-file-on-mac)

Add the following exports to the end of your profile:(the `MY_EDITOR` property is set to vscode by default, however you can set it to whatever editor you use e.g. if you use webstorm you would set it to `MY_EDITOR=webstorm`)
```
export T2_HOME=~/t2-home
export T2_SCRIPTS=$T2_HOME/scripts 
export T2_PROJECTS=$T2_HOME/projects 
export PATH=$T2_SCRIPTS:$PATH
export MY_EDITOR=code
```
Run the following code to make sure your current terminal session picks up the changes.
```
source ~/.zshrc 
echo $T2_HOME
```
Clone the project repo from within the project folder
```
cd $T2_HOME
git clone https://github.com/AhmedAGadir/t2.git .
```
Make all scripts executable
```
cd $T2_HOME
chmod -R +x scripts
```
Initialise the project cache:
```
t2-init
```
This might take a while so go get a coffee and chill out.This will create a cache folder in your home folder with cached projects for angular, react, vue and vanilla js.

** - Note that if you would ever like to update a specific framework in the cache to use the latest versions of it’s dependencies, you can run:
```
t2-update-cache $FRAMEWORK
```
Using the CLI

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
(Remember to push to github using t2-push if you want these changes to be reflected in code sandbox)