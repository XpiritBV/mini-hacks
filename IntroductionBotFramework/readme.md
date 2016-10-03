![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Introduction to the Microsoft Bot Framework #

## Challenge ##
With current knowledge of ASP.NET Web API development it is very easy to develop a BOT. Let's go.

## The Assignment ##

### Step 1 - Install the Bot Application template ###
- Download the file from the direct download [link](http://aka.ms/bf-bc-vstemplate)
- Save the zip file to your Visual Studio 2015 templates directory which is traditionally in "%USERPROFILE%\Documents\Visual Studio 2015\Templates\ProjectTemplates\Visual C#\"
- Open Visual Studio
- Create a new C# project using the new Bot Application template.

### Step 2 - Modify the default bot response ###
- Install the bot emulator from [link](https://aka.ms/bf-bc-emulator) for testing your bot
- Modify the default response with your own response and test your bot with the emulator

### Step 3 - Create a Bot Dialog ###
- Add a new folder called `Dialogs`
- Create a class called `TechDaysDialog`
- Replace the class with

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
- Integrate the dialog in the MessagesController

    ```CSharp
    await Conversation.SendAsync(activity, () => new TechDaysDialog());
    ```
- Test your new Dialog using the emulator

### Step 4 - Create your own dialog ###
- Create your own dialog based on the sample in step 3.

## Finished! ##
You have successfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Show us the running Bot

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>