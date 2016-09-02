# Deploy ARM Template and Powershell DSC #

## Challenge ##
You can create PaaS or IaaS services in Azure by adding and configure them in the Azure Portal. This is fine for one-time creation. But when you need to create the same environment multiple times it’s error-prone and time consuming. Let’s automate this repeating work.

In this challenge, you will use Azure and an ARM template to provision IaaS services to Azure. This will involve logging into the Azure Portal, create and use an ARM template and execute the ARM template from Visual Studio. 

## Prerequisites ##
- You will need an Azure Account where the resources of the PaaS or IaaS environments will be created. 
- Visual Studio 2015 with Azure SDK 2.9

## The Assignment ##
Create an ARM template to create a Windows Virtual Machine and configure a DSC to add IIS with WebDeploy and ASP.NET. Than execute the template and provision the Virtual Machine. The following steps can be taken:

### Step 1 - Open Visual Studio ###
Open Visual Studio and create a new Project by choosing for Cloud -> Azure Resource Group.

### Step 2 - Select Windows Virtual Machine ###
Choose for Windows Virtual Machine and *click OK*.

### Step 3 - Examine project ###
Examine the contents of the created project. Pay special attention to the resources that will be created by the ARM template.

### Step 4 - Add resources ###
Add DSC to the ARM template by opening the ARM Template. Than in the JSON outline window, right click on resources. *Click Add* new resource.

### Step 5 - Select PowerShell DSC Extension ###
Select PowerShell DSC Extension. Give it a name and click Add.

### Step 6 - Examine ARM template ###
Examine the updated ARM template and the current DSC file in the directory DSC.

### Step 7 - Open DSC file ###
Open the DSC file and remove the comments. Which leaves all the DSC statements.

### Step 8 - Investigate DSC file ###
Investigate what will be installed by examining the DSC file.

### Step 9 - Create Storage Account###
Before deploying, create a Storage account in Azure Portal.

### Step 10 - Fill requested fields ###
Deploy the project and fill in all requested fields

### Step 11 - Connect to VM ###
Connect to the Virtual Machine in Azure

## Finished! ##
### Step 12 - Create Storage Account ###
See that IIS and all other options that are configured in DSC are installed
