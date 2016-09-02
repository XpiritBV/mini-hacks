using System;
using Newtonsoft.Json;

namespace DocumentDB
{
	public class Session
	{
		[JsonProperty(PropertyName = "id")]
		public Guid SessionID { get; set; }

		public string Name { get; set; }

		public string Description { get; set; }

		public SessionPresenter Presenter { get; set; } = new SessionPresenter();

		public string StartsAt { get; set; }

		public string StopsAt { get; set; }

	}

	public class SessionPresenter
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
	}
}