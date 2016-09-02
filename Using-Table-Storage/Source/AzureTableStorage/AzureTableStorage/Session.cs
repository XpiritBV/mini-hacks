using System;
using Microsoft.WindowsAzure.Storage.Table; 

namespace AzureTableStorage
{
	public class Session : TableEntity
	{
		public Guid SessionID => Guid.Parse(RowKey);

		public string Name { get; set; }

		public string Description { get; set; }

		public string Presenter { get; set; }

		public DateTime StartsAt { get; set; }

		public DateTime StopsAt { get; set; }

	}
}