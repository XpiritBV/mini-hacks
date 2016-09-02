# Optimize & Enhance your Build #

## Challenge ##
In this mini-hack you will learn several optimization & enhancements to your build defintion. These features can help you keep your build and output quick en lean.

## Prerequisites ##
To get started with this mini-hack, you will need the following 

- Create a Microsoft Account (e.g. Outlook.com)
- Create a GitHub account
    - Navigate to https://github.com and signup for a new account
    - Verify your GitHub account via emails
- Create a Visual Studio Team Systems (VSTS) account
    - Signup for a free VSTS account here https://www.visualstudio.com/

## The Assignment ##

### Step 1 ###

Edit your build definition, and choose to make ik a Multi-Configuration Build.
Specify the following Multipliers: **BuildConfiguration, BuildPlatform**
Choose to let then run in parallel.

Specify the following BuildConfigurations to build: **Debug,Release**

Build and verify the build uses multiple configurations.

### Step 2 ###

Since we have multiple configurations, lets make sure we get the output seperatly dropped
Update the Publish Artifacts step and specify the following Artifact Name: **DLL - $(BuildConfiguration)** 

Run a build and verify in the succesfull build artifacts that you now have multiple outputs.

### Finished! ###
Explain how you'll be able to see that you've succesfully completed the minihack.