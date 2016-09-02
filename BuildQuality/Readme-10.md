# Use VSTS Release Management to set Build Quality #

## Challenge ##
In a multi-team environment where teams maintain their own builds and where a release contains multiple components it is important to keep rack of Build Quality. In this way you can easily get the builds you need without having to contact all the teams. You can use VSTS Release Management to achieve this.

## Prerequisites ##
To get started with this mini-hack, you need a Visual Studio Team Services Account. 

## The Assignment ##

### Create a new Team Project and upload source ###
In this step you need to create a new Team Project in VSTS and check-in a new Visual Studio Code Project into VSTS.

- Log in to your VSTS account and create a new Team Project. As a name suggestion you can call it BuildQuality-Minihack
- Open Visual Studio and create a new Project. It does not really matter what kind of project. A ConsoleApplication is good enough. 
- Check-in or commit your sources to your source control. 

*For a walkthrough on using Source Control in VSTS please check MSDN*

- For TFVC - [https://www.visualstudio.com/en-us/docs/tfvc/add-files-server](https://www.visualstudio.com/en-us/docs/tfvc/add-files-server "https://www.visualstudio.com/en-us/docs/tfvc/add-files-server")
- For Git - [https://www.visualstudio.com/en-us/docs/git/tutorial/creatingrepo](https://www.visualstudio.com/en-us/docs/git/tutorial/creatingrepo "https://www.visualstudio.com/en-us/docs/git/tutorial/creatingrepo")

### Set up a build for your project ###
In this step you will set-up a new build definition that builds your project.

- Open Visual Studio Team Services and navigate to the Build Hub. 
- Create a new build definition based on the Visual Studio Template
- Save the build as BuildQuality
- Queue the build








### Validate your Docker Deployment ###
Log in to the virtual machine and validate your Docker Host by typing the following command on a command line

    docker run -ti windowsservercore cmd

This starts up (docker run) a clean Windows Server Core docker container (windowsservercore) in terminal mode (-ti) and opens the command line in this container (cmd)


Exit the container by typing

    exit

Try the following commands 



- List all available images - `docker images` 
- List all running containers - `docker ps`
- List all running and stopped containers - `docker ps -a`


### Start a container and enable IIS ###
Start a new windowsservercore container. Once inside the container enter Powershell Mode by typing `powershell` on the command line. 

Install the Web server feature in this container by typing.

    Install-WindowsFeature Web-Server

Also install the following components in your container
- Web-Asp-net45
- Web-Windows-Auth

### Save your container as new base image ###
Now that you have prepared the container you can save this container as a new base image.

Exit the container and type `docker ps -a` to list all the stopped container. Find the container that was most recently stopped and take note of the name.	

![](mh-docker-1.png)

To save the current state of the container in a new container image you can commit the container by typing 

    docker commit <container-hid-hash> techdaysmh:iisbase

When the commit completes, run the command `docker images' and see that your image is there!

