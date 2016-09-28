![Xpirit TechDays MiniHack Banner](../HackBanner-s.png)
# Controlling your Philips Hue

## The Challenge ##
In this Mini-Hack you will learn how to control a Hue lamp from a Xamarin.Forms app. 

> You'll want to ensure that you've restored the Nuget packages before trying to build the project. 
You may also need to configure Android deployment within the configuration manager in Visual Studio to deploy to a simulator or device (this isn't applicable for those of you using Xamarin Studio). 

## Prerequisites ##
Amazing Philip Hue: [Turn On Living video on YouTube] (https://www.youtube.com/watch?v=lCv4r3wgsPQ) 

Before you start, you'll want to signup to the [Philips Hue Developer](http://www.developers.meethue.com) program which unlocks detailed API information and wealth or resources for expanding your knowledge of Hue. 

> You'll find TODOs within the solution which numbers match this readme. You can find the Task pad in Xamarin Studio by clicking View > Pads > Tasks

## The Assignment ##
Whitelisting and permission to access the bridge

### Step 1 - Set your Apps name and Device name ###  
    You should create a unique name (Mini-Hack is probably already taken) along with either a unique DeviceName or match your AppName. 

### Step 2 - Locate the Hue Bridge #### 
   Locate the BridgeViewModel class and add the following starting at line 60.
  ```csharp
   IBridgeLocator locator = new HttpBridgeLocator();
   IEnumerable<string> bridgeIPs = await locator.LocateBridgesAsync(TimeSpan.FromSeconds(5));

   BridgeIps.Clear();
   foreach (var ip in bridgeIPs)
   {
       BridgeIps.Add(ip);
   }
   ```
### Step 3 - Register your app #### 
  Locate the BridgeRegisterViewModel class and add the following starting at line 30.
  
  ```csharp
   ILocalHueClient client = new LocalHueClient(SelectedBridgeIP);
   
   if(string.IsNullOrEmpty(Helpers.Settings.AppKey))
       Helpers.Settings.AppKey = await client.RegisterAsync(App.AppName, App.DeviceName);
       
   client.Initialize(Helpers.Settings.AppKey);
   ```   
### Step 4 - Create LocalHueClient #### 
  Locate the LightsViewModel class and add the following starting at line 63.
  
  ```csharp
   ILocalHueClient client = new LocalHueClient(Helpers.Settings.DefaultBridgeIP);
   client.Initialize(Helpers.Settings.AppKey);
   ```
### Step 5 - Discover all Hue lamps connected to bridge #### 
  Staying in the LightsViewModel class, add the following after the client.Initialize method.
  
  ```csharp
   IEnumerable<Light> lights = await client.GetLightsAsync();
   Lights.Clear();
   foreach (var light in lights)
   {
      Lights.Add(light);
   }
   ```   

### Step 6 - Turn a lamp on ####
  Locate the LightViewModel class and add the following starting at line 90.
  
  ```csharp
   var command = new LightCommand();
   command.TurnOn();

   var lights = new List<string> { SelectedLight.Id };
   await client.SendCommandAsync(command, lights);
   ```   
### Step 7 - Turn a lamp off ####   
  Staying in the LightViewModel class, add the following starting at line 121.
  
  ```csharp
   var command = new LightCommand();
   command.TurnOff();

   var lights = new List<string> { SelectedLight.Id };
   await client.SendCommandAsync(command, lights);
   ```   
### Step 8 - Set lamp to 'Alert' ####   
  Staying in the LightViewModel class, add the following starting at line 152.
  
  ```csharp
   var command = new LightCommand();
   command.Alert = Alert.Once;

   var lights = new List<string> { SelectedLight.Id };
   await client.SendCommandAsync(command, lights);
   ```  
### Step 8 - Start color effect on lamp #### 
  Staying in the LightViewModel class, add the following starting at line 184.
  
  ```csharp
   var command = new LightCommand();
   command.Effect = Q42.HueApi.Effect.ColorLoop;

   var lights = new List<string> { SelectedLight.Id };
   await client.SendCommandAsync(command, lights);
   ```  

## Finished! ##
You have succesfully finished this Mini-Hack! Please notify a Mini-Hack host show them the following result(s);

- Show the orange Philips Hue.

After validation by the host you can use the TechDays 16 app to unlock the a Mini-Hack specific badge!

If you do not have the TechDays 16 App yet be sure to download it;
- iOS <https://xpir.it/td16-ios>
- Android <https://xpir.it/td16-droid>
- Windows Phone <https://xpir.it/td16-win>