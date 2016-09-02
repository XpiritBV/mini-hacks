# Infrastructure as Code - Deploy ARM Template with Portal #

## Challenge ##
You can create PaaS or IaaS services in Azure by adding and configure them in the Azure Portal. This is fine for one-time creation. But when you need to create the same environment multiple times it’s error-prone and time consuming. Let’s automate this repeating work.

In this challenge, you will use Azure and ARM templates to provision PaaS services to Azure. This will involve logging into the Azure Portal, select an ARM template and execute the ARM template from a website. 

The walkthrough below should help you with the challenge, but you can also get in touch with Pascal Naber (Twitter: @pascalnaber) with questions – Pascal is at the conference and happy to help.

## Prerequisites ##
To get started with this mini-hack, you need workingAzure subscription.

## The Assignment ##
Find an ARM template to create a WebApp and a DocumentDB and deploy the template to Azure. The following steps can be taken:

### Step 1 - Goto Azure Quickstart Templates ###
Open the Azure Quickstart Templates from Microsoft by navigating to http://www.azure.com and choose Resources. *Click* in the menu on Templates.

### Step 2 - Search template ###
Search for the following template:  **DocumentDB Account with Web App**. Created by Thiago Almeida. The direct URL is: https://azure.microsoft.com/en-us/documentation/templates/201-documentdb-webapp/

### Step 3 - deploy ###
*Click* on the Deploy to Azure button

### Step 4 - Open portal / login Azure ###
The *Azure portal* is opened. Login if needed.

### Step 5 - Fill parameters ###
Create or use a ResourceGroup and *fill in the parameters*. *Click on OK* to execute the ARM template.

## Finished! ##
Navigate in the Azure Portal to the ResourceGroup to see which resources are created