# Setting up the CLI environment 

## Installing CLI dependencies

Create React App (latest  v4.0.3) - (no need to install this globally) 

Angular CLI (latest v12.0.4)
```
npm install -g @angular/cli
```
Vue CLI (latest v4.5.13)
```
npm install -g @vue/cli
```
Brew:

https://brew.sh/ 

GSED:
```
brew install gnu-sed
```
JQ:
```
brew install jq
```

## Setting up the CLI environment

Choose a home folder for your scripts e.g. `~/t2-home` (from here on this doc will assume that you are using `~/t2-home` as your home folder).
```
cd ~
mkdir t2-home
```
Update your profile file to add some global variables to your machine. If you are using zsh terminal then open `~/.zshrc`
```
open ~/.zshrc
```
If you can’t find your `.zshrc` file you may need to create it. (See https://superuser.com/questions/886132/where-is-the-zshrc-file-on-mac)

Add the following exports to the end of your profile:
```
export T2_HOME=~/t2-home
export T2_SCRIPTS=$T2_HOME/scripts 
export PATH=$T2_SCRIPTS:$PATH
```
You can also choose to add an optional export `MY_EDITOR` and set it to a command that will open created projects in your preferred text editor.
```
# optional (below MY_EDITOR is set to open projects in vscode)
export MY_EDITOR=code
```
Run the following code to make sure your current terminal session picks up the changes.
```
source ~/.zshrc 
```
# Initialise / Reset the CLI

## Initialising the CLI

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
t2-update-cache -[framework]
```

## Resetting the CLI

If you need to reset the CLI then run
```
echo $T2_HOME
# since we are about to delete this folder, triple check it is the correct folder!
rm -rf $T2_HOME
mkdir $T2_HOME
```
and then follow the steps from the top of this guide.

# Using the CLI

## Creating a project
To create a project choose on of the following depending on the FW you want to use:

```
t2-get -react [name]
t2-get -angular [name]
t2-get -vue [name]
t2-get -vanilla [name]
```
This will create a new project in the `~/t2-home/projects/[name]` that you can immediately open and begin using. The script will then update the cached project for whichever framework the project was created in.

## Running a project
Once that you have a project created, you can run it like this:

For react, angular, and vanilla:
```
cd $T2_HOME/projects/[name]
npm start
```
For vue:
```
cd $T2_HOME/projects/[name]
npm run serve
```

## Updating a project

You can update a project with any editor, just as normal, the source code of the project is in 
```
cd $T2_HOME/projects/[name]
```
Remember to push as soon as you are happy with your changes

Note that all projects have live editing, so you can run the project and do changes at the same time.

## Pushing a project

To push a project to GitHub:

```
cd $T2_HOME/projects/[name]
t2-push [OPTIONAL_COMMENT]
```

You can then follow the link shown in the console to see the project running on codesandbox

## Importing a docs example into a project

To import an example from the ag-grid docs

```
cd $T2_HOME/projects/[name]
t2-import-docs
```
This will show you an interactive screen where you can choose which docs to import

Note that this script can only be run once per project.

# Updating the CLI scripts

If a change on the scripts are made, you will have to update them
```
cd $T2_HOME
git pull
```