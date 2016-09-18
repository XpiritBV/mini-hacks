![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Introduction to ASP.NET Core #

## Challenge ##
With the new .NET Core you need to get used to the tooling again. Command line is an important part of this. So time to explore!

## The Assignment ##

### Step 1 - Install .NET Core SDK
- Go to https://dot.net and follow the instructions to download and install the .NET Core SDK for your OS

### Step 2 - Create skeleton application ###
- Open a command prompt
- Make a new directory to put your application in and change to it

   ```
   mkdir ASPNETCoreDemo
   cd ASPNETCoreDemo
   ```
- Create a new application by typing `dotnet new`
- Restore the application's dependencies by typing `dotnet restore`
- Verify that the application works by typing `dotnet run`

### Step 3 - Change application to ASP.NET Core ###
You will add additional dependencies to change the command-line
application to an ASP.NET application.

- Open your directory in [Visual Studio Code](https://code.visualstudio.com). If you do not have Visual Studio Code
installed you can install it within a minute.
- Add two dependencies to the project.json file under the `dependencies` section.
```json
"Microsoft.AspNetCore.Server.IISIntegration": "1.0.0",
"Microsoft.AspNetCore.Server.Kestrel": "1.0.0"
```
- Restore the dependencies using `Ctrl+Shift+P` and type `dotnet` and pick the Run Build Task.
- Change the implementation of the static entrypoint to bootstrap the ASP.NET hosting.
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

- Add a new class called `Startup` and implement the Configure method
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
- Start your application by running `dotnet run` from the command-line again.

- Verify that your application works correctly by browsing to [http://localhost:8081](http://localhost:8081)


## Finished! ##
You have succesfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Show the working application on <http://localhost:8081>

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>