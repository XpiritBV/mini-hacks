![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Use VSTS Release Management to set Build Quality #

## Challenge ##
In a multi-team environment where teams maintain their own builds and where a release contains multiple components it is important to keep rack of Build Quality. In this way you can easily get the builds you need without having to contact all the teams. You can use VSTS Release Management to achieve this.

## Prerequisites ##
To get started with this mini-hack, you need a Visual Studio Team Services Account. 

## The Assignment ##

### Step 1 - Create a new Team Project and upload source ###
In this step you need to create a new Team Project in VSTS and check-in a new Visual Studio Code Project into VSTS.

- Log in to your VSTS account and create a new Team Project. As a name suggestion you can call it BuildQuality-Minihack
- Open Visual Studio and create a new Project. It does not really matter what kind of project. A ConsoleApplication is good enough. 
- Check-in or commit your sources to your source control. 

*For a walkthrough on using Source Control in VSTS please check MSDN*

- For TFVC - [https://www.visualstudio.com/en-us/docs/tfvc/add-files-server](https://www.visualstudio.com/en-us/docs/tfvc/add-files-server "https://www.visualstudio.com/en-us/docs/tfvc/add-files-server")
- For Git - [https://www.visualstudio.com/en-us/docs/git/tutorial/creatingrepo](https://www.visualstudio.com/en-us/docs/git/tutorial/creatingrepo "https://www.visualstudio.com/en-us/docs/git/tutorial/creatingrepo")

### Step 2 - Set up a build for your project ###
In this step you will set-up a new build definition that builds your project.

- Open Visual Studio Team Services and navigate to the Build Hub. 
- Create a new build definition based on the Visual Studio Template
- Save the build as Product1
- Queue the build

### Step 3 - Set up approval flow for the build ###
In this step we will create a release definition with a manual approval flow

- Navigate to the Release Hub
- Create a new Release Definition based on the Empty template and based on the build you just created 
- Rename the environment to test and assign a approver for this environment
- Add a 
-  task and switch to Inline Powershell
- Change the message from "Hello World!" into Approved
- Start a new Release and approve it!

### Step 4 - Setting Build Quality ###
You can imagine that you can do more that executing a Powershell script. But in the end of the release stage you want to set the Build Quality of the related build to "Ready for Release". For this we are going to use the REST API of VSTS.

- Create a [Scripts] folder in your project and add the Powershell script from the [source] folder 
- Check in the script to your repository
- Modify the build so that this script will be added as an artifact. You can do this by changing the [Contents] path of the Copy Files tasks to 
    
    `**\scripts\*`
- Queue the build
- Open the release definition and change the Powershell task to use a file. Point to the file in scripts folder
- In the arguments add

    `-BuildID $(RELEASE.ARTIFACTS.Product1.BUILDID) -BuildTags “Ready for Release;MiniHack”

- Start the release
- Check the build tags !

### Step 5 - Links ###
For a detailed explanation of the steps check [http://xpir.it/minihack-buildquality](http://xpir.it/minihack-buildquality "http://xpir.it/minihack-buildquality")