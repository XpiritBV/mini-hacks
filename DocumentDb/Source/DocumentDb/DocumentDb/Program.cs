using System;
using System.Configuration;
using System.Linq;
using System.Net;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;

namespace DocumentDB
{
	class Program
	{
		const string DatabaseName = "sessions";
		const string CollectionName = "sessionsCollection";

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

		private static void CreateDatabase(DocumentClient documentClient)
		{
			//create a document collection if it doesn't exist.

			try
			{
				documentClient.ReadDatabaseAsync(UriFactory.CreateDatabaseUri(DatabaseName)).GetAwaiter().GetResult();
			}
			catch (DocumentClientException de)
			{
				// If the database does not exist, create it
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
			// Create the database if it doesn't exist.

			try
			{
				documentClient.ReadDocumentCollectionAsync(UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName))
					.GetAwaiter()
					.GetResult();
			}
			catch (DocumentClientException de)
			{
				// If the document collection does not exist, create it
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

		private static void InsertSession(IDocumentClient client)
		{
			//Create some data to store
			var session = CreateSession();
			client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName), session).GetAwaiter().GetResult();
		}

		private static void RetrieveSessions(DocumentClient client)
		{
			var startsAt = new DateTime(2016, 10, 4, 12, 0, 0).ToString("s");
			// Construct the query operation for all sessions for the first day of the TechDays event.

			var query =
				from s in client.CreateDocumentQuery<Session>(UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName))
				where s.StartsAt == startsAt
				select s;

			// Print the fields for each session.
			foreach (Session entity in query)
			{
				Console.WriteLine($"Day: {entity.StartsAt}, ID:{entity.SessionID}\tName:{entity.Name}\tPresenter:{entity.Presenter.FirstName} {entity.Presenter.LastName}");
			}
		}
	}
}
