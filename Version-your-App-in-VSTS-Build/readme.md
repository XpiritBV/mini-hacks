![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Version your App in VSTS Build #

## Challenge ##
In this Mini-Hack you will learn to add additional build steps to your build definition. In this hack you will execute a custom PowerShell file to version your assemblies. This build will use a local build agent to build it.

## Prerequisites ##
To get started with this mini-hack, you will need the following 

- Create a Microsoft Account (e.g. Outlook.com)
- Create a GitHub account
    - Navigate to https://github.com and signup for a new account
    - Verify your GitHub account via emails
- Create a Visual Studio Team Systems (VSTS) account
    - Signup for a free VSTS account here https://www.visualstudio.com/

## The Assignment ##

### Step 1 - Download Agent ###

Download the latest Build Agent, by navigating to admin section of your VSTS account. 

Navigate to Agent Queues, and click to download agent button. Follow the instructions to download and configure the agent. 
 
Detailed guidance can be found here: [https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows)

Navigate to your profiles security settings. Create a Personal Access Token (PAT). This PAT is required to register the agent. 
After registration you can safely revoke this PAT.

Verify that you have registered your agent successfully in VSTS. It should be visible in the selected pool, the indicator should light up green.

### Step 2 - Use Local Agent ###

Update the build definition to use your local agent. This is configured on the build definitions General tab.
Run the build to verify the build runs on your local machine. 

### Step 3 - Add PowerShell step ###

Add a new PowerShell build step to the build, place it before the Visual Studio Build step.
Configure the build step to run the provided script, **"\Scripts\SetAssemblyVersion.ps1**", in the repository.

Provide the scripts with the following Arguments **"-AssemblyVersion "1.0.C.D"**

The script will determine an assembly number based on the current date.
The pattern for this format is: **1.0.1609.2016** for the first build of on the 2nd of September 2016.

### Step 4 - Artifacts ###

Add a Copy Publish Artifacts files step to your build definition. Configure this step to drop the generated DLL as a server drop.

Leave the Copy Root argument empty.

Specify the following contents filter: **\*\*\bin\\$(BuildConfiguration)\\\*\*\\\*Githubbuild\*test\*.dll**

Specify the following Artifact name: DLL

Make sure its a Server Drop type.

## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Show the contents of the server drop build.

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>
