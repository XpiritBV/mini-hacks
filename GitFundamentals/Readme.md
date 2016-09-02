# Getting started with Git #

## Challenge ##
Git is getting more popular every day. The learning curve can be quite steep and because Git was born on the command line it can be quite frightening. But once you know how it works it is great and you will definitely reap the benefits of it.


## Prerequisites ##
To get started with this mini-hack, you need to have the Git command line tools installed on your machine. Also, as an extra, you should have Visual Studio to see Git working within Visual Studio

## The Assignment ##

### Validate your Git installation ###

Open a command line and type 

	git

you should see the git commands in your command window


### Create a new Git Repo ###

We will create a new Git repository. A repository starts locally and keeps all your changes and history. 

**Command Line**

- Navigate to a working folder (c:\work)
- type `git init minihack`

**Visual Studio**
- Open Visual Studio
- Open Team Explorer and navigate to the [Connect] page
- In the [Local Repositories] add a new Git Repo

### Add files and commit changes ###

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

