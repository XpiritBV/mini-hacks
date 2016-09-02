# Using Azure Functions #

## Challenge ##
TODO

## Prerequisites
To get started with this mini-hack, you need to be logged in to your Microsoft Azure account.

- Open the [Microsoft Azure Portal](https://potral.azure.com)
- Log in to your Azure Account

## The Assignment ##

### Create an empty Azure Function App ###
Let's start by creating a new Azure Function. Azure Functions are called "**Function App**" in the Azure portal.
- Click the New Button on the left hand side.
- Search for `Function App` and select this resource.
- Click Create.
- Give the Function a globally unique name, e.g. `TechDaysFunction[YourName]`
- Add the Function to a new Resource Group. This will allow you to easily delete the functions and its resources 
afterwards.
- Choose the Classic plan and accept the default suggested plan, location and storage account.

### Implement an Add calculation ###
You should now have a 

```CSharp
using System.Net;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{
    log.Info($"C# HTTP trigger function processed a request. RequestUri={req.RequestUri}");

    // Get request body
    dynamic data = await req.Content.ReadAsAsync<object>();

    if (data == null) return req.CreateResponse(HttpStatusCode.BadRequest, "Please pass in x and y in the request body.");
    
    // Set name to query string or body data
    double x = data?.x;
    double y = data?.y;
    
    double result = x + y;

    return req.CreateResponse(HttpStatusCode.OK, $"{x} + {y} = {result}");
}
```
