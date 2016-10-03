![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Robot Challenge - The lazy bot #

## Challenge ##
In the Robot Challenge min-hacks you will learn to control a robot using JavaScript. The robot has been pre-programmed with features to follow lines, make corners, drive through darkness and stop at the end of a track. By finding - and fixing - bugs in the code you will be able to reach the finish with these robots. A fun way to work with JavaScript, NodeJS and Arduino based robots.

## Prerequisites ##
To get started with this mini-hack, you will need the following 

**Install required software**

- Download and install the software dependencies for your operation system:
    - NodeJS for Windows <https://nodejs.org/dist/v4.4.4/node-v4.4.4-x86.msi>
    - Git for Windows <https://git-scm.com/download/win>
    - NodeJS for Mac <https://nodejs.org/dist/v4.4.4/node-v4.4.4.pkg>
    - Git for Mac <https://git-scm.com/download/mac>
- Download and install your favorite text editor, we recommend 
    - Visual Studio Code <https://code.visualstudio.com/>

**Download project and install project dependencies**
- Clone repository from github, open a command line or terminal and use the following command: ` git clone https://github.com/xxx` 

- While still in your terminal go into the project folder and install the dependencies: `npm install` 

**Connect the mBot**
- Turn on the mBot with the power switch
- Use the bluetooth on your laptop to select and pair to the Makeblock device.
- (Windows Only) To use the robot on windows we need the bluetooth com port. To find this go to

        -> ‘Control Panel’ 
        -> ‘Hardware and Sound’ 
        -> ‘Devices and printers’ 
        -> ‘Bluetooth Devices’ 
    Check the properties of the makeblock device and write down the com port.

## The Assignment ##

### Step 1 - Run the bot ###

- (Windows Only) Go into the project folder and open the package.json file change the COMX value to the COM port used by your machine. For example COM6.
- To run the mBot go into your project folder and open the terminal

OS/X:  
``` 
npm run robot-mac
``` 

Windows:
``` 
 npm run robot-windows
``` 

### Step 2 - Getting to the finish ###

The mBot robot has been programmed to follow a path to the finish line. The robot feels a bit sick. While moving over the track it will slow down and never make it to the end. Can you make it better?

Fix the code to get to the finish line!

## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);
!
- You're robot has passed the finishline!

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>