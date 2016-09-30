![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Deploy ARM Template with Powershell #

## Challenge ##
In Azure Resource Manager the easiest way to deploy and maintain infrastructure is by using ARM Templates. This minihack will get you started deploying your first ARM Template to Azure RM.

## Prerequisites ##
To get started with this mini-hack, you need Azure Powershell 1.x installed and an Azure subscription.

- Start powershell
- Logon to Azure with Login-AzureRmAccount

## The Assignment ##

### Step 1 - search arm template ###
Go to https://azure.microsoft.com/en-us/documentation/templates/ and search an ARM template you want to deploy.
For example you can *search Sql Web* and use the __Provision a Web App with a SQL Database__:

> This template provisions a Web App, SQL Database, AutoScale settings, Alert rules and App Insights. It configures a connection string in the web app for the database.

### Step 2 - download ###
You go **Browse on GitHub** and download the template and parameters file to a local directory.
Open the file to see the resources you are about to deploy to Azure. Next you can check the Parameters file. You need to change the sql password to a complex password to meet the password policy requirements.

### Step 3 - deploy the ARM template ###
Open your Powershell cmd line. Navigate to the directory where you have saved the files downloaded in step 2. To deploy the templates to Azure you can run:

> New-AzureRmResourceGroup -Name MiniHacksResourceGroupTechdays -Location "West Europe"

> New-AzureRmResourceGroupDeployment -Name ExampleMiniHackDeployment -ResourceGroupName MiniHacksResourceGroupTechdays -TemplateFile azuredeploy.json -TemplateParameterFile azuredeploy.parameters.json

### Step 4 - Cleaning up ##

Before you clean up, check the finish steps below to gather a badge first! After that;

Logon to the your subscription on the Azure portal and *Check the Resource Group MiniHacksResourceGroupTechdays*. There you can find your new resources. 
To delete the resource from powershell you can execute:

> Remove-AzureRmResourceGroup -Name MiniHacksResourceGroupTechdays

## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- The resourcegroup with the resources that you have provisioned

After validation by the host you can use the TechDays 16 app to unlock the Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>