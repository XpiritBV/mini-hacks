![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Using Azure Mobile Services

## The Challenge ##

In this challenge, you will use Azure App Service and Xamarin.iOS or Xamarin.Android to build a scalable, native mobile app in C#.  This will involve logging into the Azure Portal and creating a new Azure Mobile App with SQL database.  You can then use one of the Xamarin starter projects to build your mobile client.

The walkthrough below should help you with the challenge, but you can also get in touch with one of the Mini Hacks folks. You will find them in the TechDays main hall.

## The Assignment ##

### Step 1 - Azure Portal ###
Log in to your Microsoft Azure account at https://portal.azure.com.  (If you don't have an Azure account, you can obtain a [free 30-day trial](https://azure.microsoft.com/nl-nl/free/) at https://azure.microsoft.com/nl-nl/free/. If you are an MSDN subscriber, you should activate your Azure benefit and get free credits each month.)

### Step 1 - Azure Portal ###
Download an appropriate IDE to your laptop. You can use [Visual Studio 2015 Community](http://visualstudio.com) or [Xamarin Studio](https://www.xamarin.com/download) for this mini-hack.

### Step 1 - Azure Portal ###
Click **+ New** -> **Web + Mobile** -> **Mobile App**.  Enter a name for your app (use your email address in the name to make it unique - for example: adrian-at-microsoft-azure-minihack; ensure the first letter is a letter).  Enter "techdaysnl-2016" in the resource group.  Check the "Pin to dashboard" checkbox (so you can easily find the resources later).   Click on **Create**.

### Step 1 - Azure Portal ###
Once your site has been created, it will open automatically.  Click on **Quick start**, then choose a QuickStart project - Xamarin.iOS or Xamarin.Android.

### Step 1 - Azure Portal ###
Click on the grey box in section 1, then click on **Add** to add a Data Connection.  Click on **SQL Database _Configure Required Settings_**, then **Create a new database**.  Enter _techdays2016_ in the Name box.

### Step 1 - Azure Portal ###
Click on **Server _Configure Required Settings_**, enter a unique name in the Server name (Tip: base the server name on your name to help it be unique, or use guidgenerator.com to create a GUID).  Enter a server username and password, then click on **OK**.  Click on **OK** on the New database blade as well.  Finally, click on **OK** on the Add data connection blade.

### Step 1 - Azure Portal ###
Creating a database takes some time.  Once complete, the Data Connections blade will show the data connection you just created.  At this point, you can close the Data Connections blade.  (Tip: Click on the Bell Icon at the top of the page to view the progress of your deployments)

### Step 1 - Azure Portal ###
Back on the Quickstart blade, move to Step 2 - select Node.js as the Backend language, check the box acknowledging that deploying overwrites the site contents, then click on **Create TodoItem table**

### Step 1 - Azure Portal ###
While the site is being deployed, move to Step 3 - Create a New App and download the personalized project.  

You should be able to unpack the downloaded ZIP file and open the project in Xamarin Studio or Visual Studio 2015.  You can then compile the project.

### Step 1 - Azure Portal ###
Run either the iOS or Android application and add some todo items

### Step 1 - Azure Portal ###
If you head back to the [Azure Portal](https://portal.azure.com), click on your App Service, then select **Easy tables**, followed by **TodoItem**.  Note that you can see the raw data for your todo items in the SQL table.

## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Show the docker history to validate you have run the correct instances

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>