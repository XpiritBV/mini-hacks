![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Using Azure Mobile Services

## The Challenge ##

In this challenge, you will use Azure App Service and Xamarin.iOS or Xamarin.Android to build a scalable, native mobile app in C#.  This will involve logging into the Azure Portal and creating a new Azure Mobile App with SQL database.  You can then use one of the Xamarin starter projects to build your mobile client.

The walkthrough below should help you with the challenge, but you can also get in touch with one of the Mini Hacks folks. You will find them in the TechDays main hall.

## Prerequisites ##
Please make sure you finished the Mini-Hack **Using-Azure-Mobile-Services** first!

## The Assignment ##
Convert your site to use ASP.NET, In the prerequisites mini-hack, you deployed a node.js site to get started with Azure without writing any code.
Azure Mobile Apps also provides an ASP.NET codebase and you can deploy this instead using a Windows PC and Visual Studio 2015.

### Step 1 - Azure Portal ###
Log in to your Microsoft Azure account at <https://portal.azure.com>

### Step 2 - App Services ###
Click on **All Resources** then select the app service site that you created earlier.

### Step 3 - New Project ###
Click on **All settings**, then **Quick start**, then choose a Xamarin Quick start project.  (It doesn't matter which one as you will not be downloading a client project this time).

### Step 4 - Language Selection ###
Under Step 2, select **C#** as the Backend language.  Click on **Download** to download a server project.

### Step 5 - Download Package ###
Unzip the downloaded package and open the solution in Visual Studio 2015.  (Sorry - this step can only be done on Windows in Visual Studio 2015)

### Step 6 - Extensions ###
If you have not already done so, install the Azure SDK using **Tools** -> **Extensions and Updates**

### Step 7 - Restore ###
Build the solution - this will restore the packages.

### Step 8 - Publish ###
Right-click on the project and select **Publish...**

### Step 9 - Azure App Service ###
In the dialog, select **Microsoft Azure App Service** as the publish target.  (Don't have that as an option?  Ensure you are running Azure SDK v2.8.2 or later)

### Step 10 - Select Subscription ###
Select your Azure Subscription.  (If you need to, enter your credentials)

### Step 11 - Select App ###
Select your App Service from the tree, then click on OK

### Step 12 - Fill in information ###
The information should be filled in for you and all you have to do is click on **Publish** to publish your site.

### Step 13 - Reload Mobile Client ###
Once published, you can now reload your iOS or Android mobile client - it will be using the ASP.NET backend.

Using the ASP.NET backend gives you access to all the power of ASP.NET, OWIN, Entity Framework and more.  However, you lose the ability to view the data on the server.  
Use Visual Studio or SQL Server Management Studio for this purpose instead.

## Finished! ##
You have succesfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- 

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>