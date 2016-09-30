![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Introduction to the .NET Core SDK #

## Challenge ##
With the new .NET Core you need to get used to the tooling again. Command line is an important part of this. So time to explore!

## The Assignment ##

### Step 1 - Install the .NET Core SDK ###
- Go to https://dot.net and follow the instructions to download and install the .NET Core SDK for your OS

### Step 2 - Create and run your first application ###
- Open a command prompt
- Make a new directory to put your application in and change to it

   ```
   mkdir MyNewApp
   cd MyNewApp
   ```
- Create a new application by typing `dotnet new`
- Restore the application's dependencies by typing `dotnet restore`
- Run the application by typing `dotnet run`
- Open the `Program.cs` file and change the greeting message
- Run the application again using `dotnet run` and note the message about the application being re-built

### Step 3 - Run the project output directly ###
- `dotnet run` checks the project source every time to determine if a re-build is necessary and as such is intended for active development scenarios.
- Run the project output directly by typing `dotnet ./bin/Debug/netcoreapp-0/MyNewApp.dll`
- Change the greeting in `Program.cs` again and run the application output directly once more, note that the greeting doesn't change as you didn't re-build the project.
- Build the project by typing `dotnet build`
- Run the project output directly again and see the greeting has now changed 

### Step 4 - Explore the project files ###
- Open the `project.json` file in Visual Studio and explore its contents and try using the IntelliSense to change some project configuration values
- Look at the files and directories created when the project is built

### Step 5 - Make it a web application ###
- Add a reference to the ASP.NET Core web server "Kestrel" by adding it to the `"dependencies"` section of the `project.json` file:
   
   ```json
    "dependencies": {
      "Microsoft.AspNetCore.Server.Kestrel": "-0.0"
    },   
   ```

- At the command prompt, restore the new dependency by typing `dotnet restore`
- Open the `Program.cs` file and add the following `using` statements to the top of the `Program.cs` file:

   ```CSharp
   using Microsoft.AspNetCore.Builder;
   using Microsoft.AspNetCore.Http;
   using Microsoft.AspNetCore.Hosting;
   ```
- Change the `Main` method to:

   ```CSharp
   public static void Main(string[] args)
   {
       var host = new WebHostBuilder()
           .UseKestrel()
           .Configure(app => app.Run(context => context.Response.WriteAsync("Hello World!")))
           .Build();

       host.Run();
   }
   ```
- At the command prompt, run the application using `dotnet run`
- Open a web browser and browse to http://localhost:5000/ to see the greeting


## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Show us the running ASP.NET application

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>

### Acknowledgements ###
This mini-hack is based on the aspnetcore-workshop by Damian Edwards and Jon Galloway 

- [https://github.com/jongalloway/aspnetcore-workshop](https://github.com/jongalloway/aspnetcore-workshop)
- [https://github.com/DamianEdwards/aspnetcore-workshop](https://github.com/DamianEdwards/aspnetcore-workshop)