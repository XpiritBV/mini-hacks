![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Getting started with Git #

## Challenge ##
Git is getting more popular every day. The learning curve can be quite steep and because Git was born on the command line it can be quite frightening. But once you know how it works it is great and you will definitely reap the benefits of it.


## Prerequisites ##
To get started with this mini-hack, you need to have the Git command line tools installed on your machine. Also, as an extra, you should have Visual Studio to see Git working within Visual Studio

## The Assignment ##

### Step 1- Validate your Git installation ###

Open a command line and type 

	git

you should see the git commands in your command window


### Step 2 - Clone an exisiting repository ###

We do not always start fresh so we need a way to get stuff from an existing repository.

**Command Line**

- Create a new working folder (e.g. c:\tmp) to get the sources
- type `git clone https://github.com/XpiritBV/mini-hacks` to clone the mini-hacks repository

**Visual Studio**
- Open Visual Studio
- Open Team Explorer and navigate to the [Connect] page
- In the [Local Repositories] choose Clone and fill in the Mini-Hacks url `https://github.com/XpiritBV/mini-hacks`
- 
### Step 3 - Create a new Git Repo ###

Now we will create a new Git repository. A repository starts locally and keeps all your changes and history. 

**Command Line**

- Navigate to a working folder (c:\work)
- type `git init minihack`

**Visual Studio**
- Open Visual Studio
- Open Team Explorer and navigate to the [Connect] page
- In the [Local Repositories] add a new Git Repo

### Step 4 - Add files and commit changes ###

Your working folder is your complete Git repository. You can add/change/delete files in here. In order to make them part of the repository you need to add them to the staging area and commit the changes.

**Command Line**

- In your working folder create a new text file [readme.txt] and add some text to this file
- On the command line type `git status` to see the changes. The file is now untracked.
- Add the file to your staging area (pending change) by typing `git add readme.txt` you can also add everything by typing `git add.`
- Commit your changes to the git repo by typing `git commit -m "added first file"`
- Your changes are now committed. To see the history type `git log` 
- Add some lines and commit your changes again

**Visual Studio**
- Add or change a file 
- Open Team explorer and navigate to the changes tab
- Commit your changes

### Step 5 - Create a branch and merge changes ###
In Git a branch is just a pointer to a cmmoit making them really light-weight. You should create lots of them during your daily workflow

**Command Line**

- In your working folder type `git branch -b featureA` . This creates a branch and makes it active
- Make some changes and commit the change. Do his twice
- Switch to the master branch by typing `git checkout master`
- Merge the featureA branch into master by typing `git merge featureA`. What happens under the hood is that only the master pointer will start pointing to the same commit as featureA. No real merge is performed but what we call a fast-forward merge

**Visual Studio**
- In Team Explorer create a branch featureA
- Make changes and merge them back to the master branch

### Step 6 - Pushing to a remote repository ###
In order to make your changes avalable to others you can either share your folder on the network or push to a central location like VSTS.

-Create a new Team Project in VSTS and choose Git as Source Control System
-Navigate to the Code tab and copy the Clone URL

**Command Line**
- Go to your working folder and type `git remote add origin [cloneurl]`
- Type `git push origin master` to sync your master branch to the remote repository
- 
**Visual Studio**
- In Team Explorer connect to your Git Repo 
- Go to Settings | Repository settings
- Add the remote [cloneurl] and call it `origin`
- Go to the Sync Hub and publish your branch