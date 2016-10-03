![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Using DocumentDB  #

## Challenge ##
In this challenge you will create a new DocumentDB. 
You will use the SDK to access DocumentDB and learn how to read and write data.

## Prerequisites ##
To get started with this mini-hack, you will need the following 

- An Azure Subscription
- See options here <https://azure.microsoft.com/en-us/pricing/purchase-options/>

## The Assignment ##

### Step 1 - Create the storage account ###
First navigate to the Azure Portal and log in. 

- Select 'New' (top left corner), select 'Data + Storage' and 'DocumentDB (NoSQL)'. 
- On the new window, provide a unique name for your DocumentDB, add or reuse a Resource Group, select 'West Europe' as the location, and click 'Create'.
- Wait until the DocumentDB creation process completes. 
- Navigate to the new DocumentDB window, in 'Settings', select 'Keys'
- Keep this window open for Step 2.
### Step 2 - Prepare a solution ###
- Open Visual Studio
- Create a new Solution, name it 'DocumentDB'.
- Right click on the Project's 'References' node in the Solution Explorer. Select 'Manage Nuget Packages'. This opens the 'Nuget Package Manager'. 
- Click on 'Browse' and enter the search term 'Microsoft.Azure.DocumentDB'. 
- Click 'Install' and accept the license agreements.
- Right click on 'References' again, and add a framework reference to 'System.Configuration'.
### Step 3 - Configure the connection to the storage account ###
- Open the file 'App.config' and add this configuration section:
``` xml
<appSettings>
	<add key="Azure.DocumentDB.Url" value="https://{mydocdb}.documents.azure.com:443/" />
	<add key="Azure.DocumentDB.Key" value="{key}" />
</appSettings>
```
*Replace the values for '{mydocdb}' and '{key}' with the values from the 'Access Keys' Window in the Azure Portal you opened in Step 2.
It should look like this:*
``` xml
<appSettings>
	<add key="Azure.DocumentDB.Url" value="AccountEndpoint=https://mydocbc.documents.azure.com:443" />
	<add key="Azure.DocumentDB.Key" value="XYyUUxsLWtJM18dmPhObJxbdfsgswegRT7eITLf8x1fPNWk9gBrEdzig==;" />
</appSettings>
```

### Step 4 - Store Data ###
- Create a new class that will define the structure of the data we will persist. In this example, we'll store some information about Tech Days sessions.
  - Name the class 'Session'. The properties in this class will later become columns in the Table Storage table.
  - Objects of this type will be stored as rows in the Table.
  
``` csharp
using System;
using Newtonsoft.Json;

namespace DocumentDB
{
	public class Session
	{
		[JsonProperty(PropertyName = "id")]
		public Guid SessionID { get; set; } //primary key
		public string Name { get; set; }
		public string Description { get; set; }
		public SessionPresenter Presenter { get; set; } = new SessionPresenter();
		public string StartsAt { get; set; }
		public string StopsAt { get; set; }
	}

	public class SessionPresenter	//nested type
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
	}
}
```

- In 'Program.cs' add the following code to import the right namespaces

``` csharp
using System;
using System.Configuration;
using System.Linq;
using System.Net;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
```

- Add code that creates a new Session instance:

``` csharp
private static Session CreateSession()
{
	var startsAt = new DateTime(2016, 10, 4, 12, 0, 0);
	var stoptsAt = new DateTime(2016, 10, 4, 13, 0, 0);
	var id = Guid.NewGuid();

	var session = new Session
	{
		Description = "Session about DocumentDB",
		Name = "Getting started with DocumentDB",
		SessionID = id,
		Presenter =
		{
			FirstName = "John",
			LastName = " Doe"
		},
		StartsAt = startsAt.ToString("s"),
		StopsAt = stoptsAt.ToString("s")
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
		// Create the client.
		var documentClient = new DocumentClient(new Uri(ConfigurationManager.AppSettings["Azure.DocumentDB.Url"]), ConfigurationManager.AppSettings["Azure.DocumentDB.Key"]);
		CreateDatabase(documentClient);
		CreateDocumentCollection(documentClient);
		InsertSession(documentClient);
		RetrieveSessions(documentClient);
	}
	catch (Exception ex)
	{
		Console.Error.WriteLine(ex.ToString());
	}
	Console.WriteLine("Hit any key to exit...");
	Console.ReadKey(true);
}

```

- Add code that creates the database and document collection if it does not exist yet.

``` csharp
private static void CreateDatabase(DocumentClient documentClient)
{
	try
	{
		documentClient.ReadDatabaseAsync(UriFactory.CreateDatabaseUri(DatabaseName)).GetAwaiter().GetResult();
	}
	catch (DocumentClientException de)
	{
		if (de.StatusCode == HttpStatusCode.NotFound)
		{
			documentClient.CreateDatabaseAsync(new Database { Id = DatabaseName }).GetAwaiter().GetResult();
		}
		else
		{
			throw;
		}
	}
}

private static void CreateDocumentCollection(DocumentClient documentClient)
{
	try
	{
		documentClient.ReadDocumentCollectionAsync(UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName))
			.GetAwaiter()
			.GetResult();
	}
	catch (DocumentClientException de)
	{
		if (de.StatusCode == HttpStatusCode.NotFound)
		{
			var collectionInfo = new DocumentCollection
			{
				Id = CollectionName,
				IndexingPolicy = new IndexingPolicy(new RangeIndex(DataType.String) { Precision = -1 })
			};

			documentClient.CreateDocumentCollectionAsync(
				UriFactory.CreateDatabaseUri(DatabaseName),
				collectionInfo,
				new RequestOptions { OfferThroughput = 400 }).GetAwaiter().GetResult();
		}
		else
		{
			throw;
		}
	}
}
```

- Add code that inserts a new Session instance into the Table:

``` csharp
private static void InsertSession(IDocumentClient client)
{
	var session = CreateSession();
	client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName), session).GetAwaiter().GetResult();
}
```

- Add code that queries Session instances from the Table:

``` csharp
private static void RetrieveSessions(DocumentClient client)
{
	var startsAt = new DateTime(2016, 10, 4, 12, 0, 0).ToString("s");
	var query =
		from s in client.CreateDocumentQuery<Session>(UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName))
		where s.StartsAt == startsAt
		select s;

	foreach (Session entity in query)
	{
		Console.WriteLine($"Day: {entity.StartsAt}, ID:{entity.SessionID}\tName:{entity.Name}\tPresenter:{entity.Presenter.FirstName} {entity.Presenter.LastName}");
	}
}
```

### Step 5 - Try it out ###
Run the project
You should see output similar to this:
![alt text](https://github.com/XpiritBV/mini-hacks/raw/master/Using-DocumentDB/Out.png "Console output")

At this point you have created an Azure DocumentDB, added a database and documentcollection, and used that collection to store data about a TechDays session!

## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Console output similar to the screenshot.

After validation by the host you can use the TechDays 16 app to unlock the Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>