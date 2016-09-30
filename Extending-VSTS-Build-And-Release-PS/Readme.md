![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Extending VSTS Build and Release using Powershell #

## Challenge ##
The new Build and Release system has a pretty nice list of tasks shipping out-of-the-box, but chances are you may need specific extensions to the build system to do something special.
In this mini-hack you'll create your first Build task using PowerShell.

## Prerequisites ##
To get started with this mini-hack, you need a Visual Studio Team Services Account of which you are the administrator. 

## The Assignment ##

### Step 1 - Install the TFS Cross Platform tools ###
In this step you need to install Node and the TFS Cross platform tools so you can upload your build task later.

- Download and install Node.js https://nodejs.org/en/
- Open a administrative command line
- Install tfs-cli using: `npm install -g tfx-cli`
- Test that you can call tfx by running: `tfx --help`

*For a more extensive walkthrough on installing tfx:*

- https://github.com/Microsoft/tfs-cli/blob/master/README.md

### Step 2 - Use tfx to scaffold a basic build task ###
In this step you will use `tfx` to scaffold a basic build task

- Open a commandline prompt
- Navigate to a directory which will hold your build task (e.g. `c:\buildtasks\`)
- Scaffold your build task by running `tfx build tasks create`. 

Enter the following values:

```
C:\temp>tfx build tasks create
TFS Cross Platform Command Line Interface v0.3.20
Copyright Microsoft Corporation
> Task Name: MyFirstPowershellTask
> Friendly Task Name: My first powershell task
> Task Description: My first powershell task
> Task Author: yournamehere

created task @ C:\temp\MyFirstPowershellTask
id   : e3dc5740-7e5f-11e6-89ea-23cb918ddd40
name: MyFirstPowershellTask

A temporary task icon was created.  Replace with a 32x32 png with transparencies
```

### Step 3 - Clean up the task and get the Powershell SDK ###
In this step you will remove the files you won't need and will install the VSTS Task SDK for Powershell

- Delete `myscript.js`, as we'll only create a powershell version in this step.
- Download the VSTS Task SDK from GitHub (https://github.com/Microsoft/vsts-task-lib/archive/master.zip).
- Create a folder named `ps_modules` under the folder created by step 2.
- Place the `VSTSTaskSdk` folder from the `vsts-task-lib-master.zip` under the `ps_modules` you've just created. You'll find it in `vsts-tasl-lib\powershell`.

The folder structure should look like this:

```
    \MyfirstPowershellTask
	  \ps_modules
	    \VSTSTaskSdk
		  \strings
		  *.ps1
		  VstsTaskSdk.psd1
		  VstsTaskSdk.psm1
```

### Step 4 - Implement your task ###
In this step we will give body to the task. Remember that this is "just a piece of powershell", you can do just about anything here. In our case we will simply print a message to the console.

- Open `Myscript.ps1` in your favorite editor (e.g. PowerShell ISE, Visual Studio Code)
- Replace the current contents with:

```
    $Message = Get-VstsInput -Name "msg"

	Write-Host $Message
	Write-VstsSetResult -Result "Succeeded"   
```

 - Open `task.json` in your favorite editor
 - Remove the input definition for the "Current Working Directory" input parameter.
 - Remove the execution section for "Node".

### Step 5 - Upload your task to your VSTS account ###
In order to use the task in your build definition, you'll need to upload it to your account usign the `tfx` utility. You will need a PAT in order to authenticate .

- If you haven't done this already, create a PAT (Personal Access Token) so you can upload your task to your Visual Studio Team Services account. See: https://www.visualstudio.com/en-us/docs/setup-admin/team-services/use-personal-access-tokens-to-authenticate
- Open a command prompt and enter `tfx login --service-url https://{youraccount}.visualstudio.com` --token {your PAT}`, replace the account and the token with your real values. (if your VSTS accoutn has been around for a while you may need to append `/DefaultCollection` to the service url).
- Go to the directory that contains your task (e.g. `c:\buildtasks\MyFirstPowershellTask`) and enter: `tfx build tasks upload --task-root .`

Your task has now been uploaded to VSTS. Next time you want to upload your task to the same account, make sure teh task has a higher version number specified in its `task.json`.

### Step 6 - Create a Build definition and see your task in action ###
To see your Task in action you'll need a Build or Release Definition.

- Navigate to your VSTS account and open/create a Team Project.
- Navigate to the Build&Release and then Builds tab and create a new Build Definition using "+New""
- Use the "Empty" template and accept all default options.
- Use "+Add Build Step" to add your build step from the "Utility" category.
- Set the "Message" to "Techdays Mini-hack!"
- Save the build and queue it using "Queue new Build" to see your build step in action


## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Show the build log for your build task showing "Techdays Mini-hacks!" in the build log.

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>