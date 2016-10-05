![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Use Docker containers for easier development #

## Challenge ##
You can use Docker for running applications and easier deployment, but you can also benefit from Docker in your daily development workflow. Would it not be easy if you can switch between tool versions without starting up a VM or re-installing the tool on your OS? You can !

## Prerequisites ##
To get started with this mini-hack, you need a Virtual Machine where you can run Docker images. Windows 2016 has the possibility to run Docker images natively. Windows 10 also has this possibility. This mini-hack uses a Windows 2016 Server Core image that is available in the Azure Gallery.

- Log in to your Azure Account
- Click the New Button on the left hand side 
- Search for **Windows Server 2016 with Containers Tech Preview 5** and select the image 
- Create the new image by following the steps in the wizard
- Set up a Remote Desktop connection and login to the Virtual Machine you just created

## The Assignment ##

### Step 1 - Create 2 versions of a tool container ###
From the **source** folder copy all the content to your Virtual Machine or clone the Git repository on your local machine. 

Open a command line to this folder and navigate to the **tool10** folder.

Take a look at the Dockerfile and see what happens.

With the command 

```
docker build -t techdaysmh:tool10 .
```

Build the image with version 1.0 of the tool (Note the [.] at the end of the command).

Repeat this for the **tool20** folder and call the image `techdaysmh:tool20`

### Step 2 - Create a starter batch file for the tool ###
On the Host machine copy the **tool.bat** file to a folder **C:\DockerBat** and add this folder to your **PATH**.

Now that you added this to your path you can type the command anywhere.

```
tool argument1 argument2
``` 

This starts up a Docker container and runs the tool.bat in the container and outputs this.

### Step 3 - Change the tool batch file to run another version of your tool ###
Change the **tool.bat** file to run version 2.0 of your tool by changing the startup container.

## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Show the docker history to validate you have run the correct instances

After validation by the host you can use the TechDays 16 app to unlock the Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>
