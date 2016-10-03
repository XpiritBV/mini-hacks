![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Extending VSTS Build and Release using Javascript #

## Challenge ##
The new Build and Release system has a pretty nice list of tasks shipping out-of-the-box, but chances are you may need specific extensions to the build system to do something special.
In this mini-hack you'll create your first Build task using Javascript.

## Prerequisites ##
To get started with this mini-hack, you need a Visual Studio Team Services Account of which you are the administrator. 

## The Assignment ##

### Step 1 - Install the TFS Cross Platform tools ###
In this step you need to install Node and the TFS Cross platform tools so you can upload your build task later.

- Download and install Node.js https://nodejs.org/en/
- Open a administrative command line
- Install tfs-cli using: `npm install -g tfx-cli@0.3.28`
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
> Task Name: MyFirstJavascriptTask
> Friendly Task Name: My First Javascript Task
> Task Description: My First Javascript Task
> Task Author: yournamehere

created task @ C:\temp\MyFirstJavascriptTask
id   : 83746360-7f46-11e6-9939-effd981ccf75
name: MyFirstJavascriptTask

A temporary task icon was created.  Replace with a 32x32 png with transparencies
```

### Step 3 - Clean up the task and get the VSTS Task SDK ###
In this step you will remove the files you won't need and will install the VSTS Task SDK for Powershell

- Delete `myscript.ps1`, as we'll only create a powershell version in this step.
- Open an administrative command prompt and navigate to the folder where your task was created.
- Initialize your local folder for Node: `npm init`
- Install typings using `npm install typings -g` we'll use that to manage the Typescript Bindings for the Task SDK,
- Install the VSTS Task SDK using `npm install vsts-task-lib --save`.
- Install the Typescript Bindings for Node: `typings install dt~node --global --save`
- Install the Typescript Bindings for Q: `typings install dt~q --global --save`
- Install the Typescript 2.0 compiler: `npm install -g typescript@beta`

### Step 4 - Implement your task ###
In this step we will give body to the task. Remember that this is "just a piece of powershell", you can do just about anything here. In our case we will simply print a message to the console.

- Rename `sample.js` to `sample.ts` in your favorite editor (e.g. Visual Studio Code)
- Replace the current contents with:

```
///<reference path="./typings/index.d.ts" />
import tl = require("vsts-task-lib/task");

const msg = tl.getInput('msg', true);
tl._writeLine(msg);
tl.setResult(tl.TaskResult.Succeeded);
```

 - Open `task.json` in your favorite editor
 - Remove the input definition for the "Current Working Directory" input parameter.
 - Remove the execution section for "Powershell3".
 - Compile the typescript file to Javascript by calling `tsc sample.ts` (tsc is installed here by default: `C:\Program Files (x86)\Microsoft SDKs\TypeScript\2.0\tsc.exe`)

### Step 5 - Upload your task to your VSTS account ###
In order to use the task in your build definition, you'll need to upload it to your account usign the `tfx` utility. You will need a PAT in order to authenticate .

- If you haven't done this already, create a PAT (Personal Access Token) so you can upload your task to your Visual Studio Team Services account. See: https://www.visualstudio.com/en-us/docs/setup-admin/team-services/use-personal-access-tokens-to-authenticate
- Open a command prompt and enter `tfx login --service-url https://{youraccount}.visualstudio.com` --token {your PAT}`, replace the account and the token with your real values. (if your VSTS accoutn has been around for a while you may need to append `/DefaultCollection` to the service url).
- Go to the directory that contains your task (e.g. `c:\buildtasks\MyFirstJavascriptTask`) and enter: `tfx build tasks upload --task-root .`

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
