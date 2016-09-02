using System;
using System.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace AzureTableStorage
{
	class Program
	{
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

		private static Session CreateSession()
		{
			var startsAt = new DateTime(2016, 10, 4, 12, 0, 0);
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

		private static void InsertSession(CloudTable table)
		{
			//Create some data to store
			var session = CreateSession();

			// Create the TableOperation object that inserts the session entity.
			var insertOperation = TableOperation.Insert(session);

			// Execute the insert operation.
			table.Execute(insertOperation);
		}

		private static void RetrieveSessions(CloudTable table)
		{
			var startsAt = new DateTime(2016, 10, 4, 12, 0, 0);
			// Construct the query operation for all sessions for the first day of the TechDays event.
			TableQuery<Session> query = new TableQuery<Session>()
				.Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, startsAt.Date.ToString("s")));

			// Print the fields for each session.
			foreach (Session entity in table.ExecuteQuery(query))
			{
				Console.WriteLine($"Day: {entity.PartitionKey}, ID:{entity.RowKey}\tName:{entity.Name}\tDescription{entity.Description}");
			}
		}
	}
}
