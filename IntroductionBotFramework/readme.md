![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Introduction to the Microsoft Bot Framework #

## Challenge ##
With current knowledge of ASP.NET Web API development it is very easy to develop a BOT. Let's go.

## The Assignment ##

### Step 1 - Install the Bot Application template ###
1. Download the file from the direct download [link](http://aka.ms/bf-bc-vstemplate)
2. Save the zip file to your Visual Studio 2015 templates directory which is traditionally in "%USERPROFILE%\Documents\Visual Studio 2015\Templates\ProjectTemplates\Visual C#\"
3. Open Visual Studio
4. Create a new C# project using the new Bot Application template.

### Step 2 - Modify the default bot response ###
1. Install the bot emulator from [link](https://aka.ms/bf-bc-emulator) for testing your bot
2. Modify the default response witt your own response and test your bot with the emulator

### Step 3 - Create a Bot Dialog ###
1. Add a new folder called `Dialogs`
2. Create a class called `TechDaysDialog`
3. Replace the class with

    ```CSharp
    [Serializable]
    public class TechDaysDialog : IDialog<object>
    {
        public async Task StartAsync(IDialogContext context)
        {
            context.Wait(MessageReceivedAsync);
        }
        public async Task MessageReceivedAsync(IDialogContext context, IAwaitable<IMessageActivity> argument)
        {
            var message = await argument;
            await context.PostAsync("You said: " + message.Text);
            context.Wait(MessageReceivedAsync);
        }
    }
    ```
4. Integrate the dialog in the MessagesController

    ```CSharp
    await Conversation.SendAsync(activity, () => new TechDaysDialog());
    ```
5. Test your new Dialog using the emulator

### Step 4 - Explore the project files ###
1. Open the `project.json` file in Visual Studio and explore its contents and try using the IntelliSense to change some project configuration values
1. Look at the files and directories created when the project is built

### Step 5 - Make it a web application ###
1. Add a reference to the ASP.NET Core web server "Kestrel" by adding it to the `"dependencies"` section of the `project.json` file:
   
   ```json
    "dependencies": {
      "Microsoft.AspNetCore.Server.Kestrel": "1.0.0"
    },   
   ```

1. At the command prompt, restore the new dependency by typing `dotnet restore`
1. Open the `Program.cs` file and add the following `using` statements to the top of the `Program.cs` file:

   ```CSharp
   using Microsoft.AspNetCore.Builder;
   using Microsoft.AspNetCore.Http;
   using Microsoft.AspNetCore.Hosting;
   ```
1. Change the `Main` method to:

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
1. At the command prompt, run the application using `dotnet run`
1. Open a web browser and browse to http://localhost:5000/ to see the greeting


## Finished! ##
You have succesfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- 

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>

### Acknowledgements ###
This mini-hack is based on the aspnetcore-workshop by Damian Edwards and Jon Galloway 

- [https://github.com/jongalloway/aspnetcore-workshop](https://github.com/jongalloway/aspnetcore-workshop)
- [https://github.com/DamianEdwards/aspnetcore-workshop](https://github.com/DamianEdwards/aspnetcore-workshop)