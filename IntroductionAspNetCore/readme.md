![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Introduction to ASP.NET Core #

## Challenge ##
With the new .NET Core you need to get used to the tooling again. Command line is an important part of this. So time to explore!

## The Assignment ##

### Step 1 - Install .NET Core SDK
1. Go to https://dot.net and follow the instructions to download and install the .NET Core SDK for your OS

### Step 2 - Create skeleton application ###
1. Open a command prompt
1. Make a new directory to put your application in and change to it

   ```
   mkdir ASPNETCoreDemo
   cd ASPNETCoreDemo
   ```
1. Create a new application by typing `dotnet new`
1. Restore the application's dependencies by typing `dotnet restore`
1. Verify that the application works by typing `dotnet run`

### Step 3 - Change application to ASP.NET Core ###
You will add additional dependencies to change the command-line
application to an ASP.NET application.

1. Open your directory in [Visual Studio Code](https://code.visualstudio.com). If you do not have Visual Studio Code
installed you can install it within a minute.
1. Add two dependencies to the project.json file under the `dependencies` section.
```json
"Microsoft.AspNetCore.Server.IISIntegration": "1.0.0",
"Microsoft.AspNetCore.Server.Kestrel": "1.0.0"
```
1. Restore the dependencies using `Ctrl+Shift+P` and type `dotnet` and pick the Run Build Task.
1. Change the implementation of the static entrypoint to bootstrap the ASP.NET hosting.
```CSharp
var host = new WebHostBuilder()
    .UseKestrel()
    .UseUrls("http://localhost:8081")
    .UseContentRoot(Directory.GetCurrentDirectory())
    .UseIISIntegration()
    .UseStartup<Startup>()
    .Build();
host.Run();
```
### Step 4 - Fix the code ###
Fix the code by adding the relevant `using` statements. You can use IntelliSense to help with this, just like in Visual Studio 2015. 

1. Add a new class called `Startup` and implement the Configure method
```CSharp
public void Configure(IApplicationBuilder app)
{
    app.Run(async (context) =>
    {
        await context.Response.WriteAsync("Hello World!");
    });
}
```
Save all files.

### Step 5 - Run the application ###
1. Start your application by running `dotnet run` from the command-line again.
sasad

1. Verify that your application works correctly by browsing to [http://localhost:8081](http://localhost:8081)