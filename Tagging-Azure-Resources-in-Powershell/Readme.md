![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Tagging Azure Resources in Powershell #

## Challenge ##
Getting your Azure Resource Manager resources organized by tagging helps you to create order in chaos. This minihack shows the basics of resource tagging with Powershell.

## Prerequisites ##
- You will need an Azure Account
- Azure Powershell 3.0.1 or later

```
(Get-Module -ListAvailable | Where-Object{ $_.Name -eq 'AzureRm.Resources' }) | Select Version, Name | Format-List
```

## The Assignment ##
Tag an Azure RM resource in the Powershell. 

### Step 1 - login ###
Login to Azure:

```
Login-AzureRmAccount
```
### Step 2 - Add resource group ###
Add a resource group to your subscription for test tagging:

```
New-AzureRmResourceGroup -Name TestTaggingResources -Location "West Europe"
```

### Step 3 - Add tag ###
Add a tag to your new resource group

```
New-AzureRmResourceGroup -Tag @{ testtag = "testval" } -Name TestTaggingResources -Location "West Europe"
```

### Step 4 - See tags ###
You see a summary of the tags when you query the resourcegroup.

```
Get-AzureRmResourceGroup -Name TestTaggingResources
```

### Step 5 - Query tags ###
Query the tags on tag values.

```
(Find-AzureRmResourceGroup -Tag @{ testtag="testval" }).Name
```

## Finished! ##
You have succesfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Show the tags queries 

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>

## Background information ##
Read more: <https://azure.microsoft.com/en-us/documentation/articles/resource-group-using-tags/#portal>
