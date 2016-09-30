![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Using Table Storage#

## Challenge ##
In this challenge you will create a new Azure Storage Account. You will use the Storage SDK to access Table Storage in that Account and learn how to read and write data. 

## Prerequisites ##
To get started with this mini-hack, you will need the following 

- An Azure Subscription
- See options here <https://azure.microsoft.com/en-us/pricing/purchase-options/>

## The Assignment ##

### Step 1 - Create the storage account ###
First navigate to the Azure Portal and log in. 

- Select 'New' (top left corner) 'Data + Storage' and 'Storage Account'. 
- On the new window, provide a unique name for your storage account, add or reuse a Resource Group, select 'West Europe' as the location, and click 'Create'.
- Wait until the Storage Account creation process completes. 
- Navigate to the new Storage Account window, in 'Settings', select 'Access Keys'
- Keep this window open for Step 2.
### Step 2 - Prepare a solution ###
- Open Visual Studio
- Create a new Solution, name it 'Azure Table Storage'.
- Right click on the Project's 'References' node in the Solution Explorer. Select 'Manage Nuget Packages'. This opens the 'Nuget Package Manager'. 
- Click on 'Browse' and enter the search term 'WindowsAzure.Storage'. 
- Click 'Install' and accept the license agreements.
- Right click on 'References' again, and add a framework reference to 'System.Configuration'.
### Step 3 - Configure the connection to the storage account ###
- Open the file 'App.config' and add this configuration section:

``` xml
<appSettings>
	<add key="Azure.Storage.ConnectionString" value="DefaultEndpointsProtocol=https;AccountName={account};AccountKey={key}" />
</appSettings>
```

*Replace the values for '{account}' and '{key}' with the values from the 'Access Keys' Window in the Azure Portal you opened in Step 2.
It should look like this:*

``` xml
<appSettings>
	<add key="Azure.Storage.ConnectionString" value="DefaultEndpointsProtocol=https;AccountName=MyBrandNewAccount;AccountKey=DgpLX/UfatDR5I18C8Qn/2qFg34h4Hedh40aLOoOAbCf$ghSgDhas/NQ==" />
</appSettings>
```

### Step 4 - Store Data ###
- Create a new class that will define the structure of the data we will persist. In this example, we'll store some information about Tech Days sessions.
  - Name the class 'Session'. The properties in this class will later become columns in the Table Storage table.
  - Objects of this type will be stored as rows in the Table.
  
``` csharp
using System;
using Microsoft.WindowsAzure.Storage.Table; 

namespace AzureTableStorage
{
	public class Session : TableEntity
	{
		public Guid SessionID { get; set; }
		public string Presenter {get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public DateTime StartsAt { get; set; }
		public DateTime StopsAt { get; set; }
	}
}
```

- In 'Program.cs' add the following code to import the right namespaces:

``` csharp
using System;
using System.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
```

- Add code that creates a new Session instance:

``` csharp
private static Session CreateSession()
{
	var startsAt = new DateTime(2016, 10, 4, 12, 0, 0); //first day of TechDays event, at noon
	var stoptsAt = new DateTime(2016, 10, 4, 13, 0, 0);
	var id = Guid.NewGuid();

	var session = new Session
	{
		Description = "Session about Azure Table Storage",
		Name = "Getting started with Azure Table Storage",
		PartitionKey = startsAt.Date.ToString("s"),
		RowKey = id.ToString("n"),
		Presenter = "John Doe",
		StartsAt = startsAt,
		StopsAt = stoptsAt
	};
	return session;
}
```

- Add code that creates the Table and calls Insert and Retrieve operations (we'll add those later on):

``` csharp
static void Main()
{
	try
	{
		// Retrieve the storage account from the connection string.
		var storageAccount = CloudStorageAccount.Parse(ConfigurationManager.AppSettings["Azure.Storage.ConnectionString"]);

		// Create the table client.
		var tableClient = storageAccount.CreateCloudTableClient();

		// Retrieve a reference to the table.
		var table = tableClient.GetTableReference("sessions");

		// Create the table if it doesn't exist.
		table.CreateIfNotExists();

		InsertSession(table);

		RetrieveSessions(table);
	}
	catch (Exception ex)
	{
		Console.Error.WriteLine(ex.ToString());
	}
	Console.WriteLine("Hit any key to exit...");
	Console.ReadKey(true);
}
```

- Add code that inserts a new Session instance into the Table:

``` csharp
private static void InsertSession(CloudTable table)
{
	var session = CreateSession();
	var insertOperation = TableOperation.Insert(session);
	table.Execute(insertOperation);
}
```

- Add code that queries all Session instances from the Table:

``` csharp
private static void RetrieveSessions(CloudTable table)
{
	var startsAt = new DateTime(2016, 10, 4, 12, 0, 0);
	TableQuery<Session> query = new TableQuery<Session>()
		.Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, startsAt.Date.ToString("s")));

	foreach (Session entity in table.ExecuteQuery(query))
	{
		Console.WriteLine($"Day: {entity.PartitionKey}, ID:{entity.RowKey}\tName:{entity.Name}\tDescription{entity.Description}");
	}
}
```

### Step 5 - Try it out ###
- Run the project
You should see output similar to this:
![alt text](out.png "Console output")

At this point you have created an Azure Storage Account, added a Table Storage Table, and used that table to store data about a TechDays session!

## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Console output similar to the screenshot.

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>