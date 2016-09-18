![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Creating a Build Definition

## Challenge ##
In this challange you will create a new build definition. You will use a GitHub repository for the sources and will learn how to use tasks in your build definition. You will build this code using the hosted build agent.

## Prerequisites ##
To get started with this mini-hack, you will need the following 

- Create a Microsoft Account (e.g. Outlook.com)
- Create a GitHub account
    - Navigate to https://github.com and signup for a new account
    - Verify your GitHub account via emails
- Create a Visual Studio Team Systems (VSTS) account
    - Signup for a free VSTS account here https://www.visualstudio.com/

## The Assignment ##

### Step 1 - Getting the code ###
First navigate to the Xpirit GitHub (https://github.com/xpiritbv)
Fork the existing repository under your account.

### Step 2 - Create a build definition ###
Navigate to your VSTS Account. Create a new build definition, choose to start with an empty template.

Bind the forked GitHub repository to your build definition. 

Make a new 'Connection' that allows you to connect to GitHub from VSTS. Authorize the usage of GitHub. Choose the forked repository. Use the 'Master' branch. Save your build definition, provide a name, and validate if the build is succesfull. If you have a green build you can take the next step.

### Step 3 - Building the solution ###
Add the 'Visual Studio Build' task and configure this to build the solution.

### Step 4 - Running the tests ###
Add the 'Visual Studio Test' step and configure this to run the tests.
Run the build to verify that the unit test passed.

## Finished! ##
You have succesfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Succesfull build with unittest result in the summary

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>
