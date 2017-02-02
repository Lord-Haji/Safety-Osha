Safety Osha
====================

Installation
------------

Pokémon Showdown Bot requires [node.js](http://nodejs.org/) to run. Install the last stable version if you do not have it.

The first step is cloning this repo, install [Git](https://git-scm.com/) if you have not it and use the following command on shell console:
```
$ git clone --branch=master git://github.com/supersoniko/Safety-Osha.git Safety Osha
```
You can also download a Zip of this repo and decompress it.

Then open a shell console, use `cd` to reach the directory of the bot and install dependencies:
```
$ npm install --production
```
If you want to use `npm test` for developement, install all dependencies with `npm install`

To configure your bot, copy `config-example.js` to `config.js` and edit that file. You can specify bot login credentials among other things. If you don't specify credentials, the bot will log in a random username started by 'Bot'. Read the [Configuration Guide](https://github.com/supersoniko/Safety-Osha/blob/master/CONFIGGUIDE.md) for more information

Now, to start the bot use:
```
$ node bot
```

if you have an old version of `Safety Osha` and you want to update it, you can use: 
```
git pull https://github.com/supersoniko/Safety-Osha.git
```
Don't forget to use `npm install --production` after each update to re-install the outdated dependencies.

Configuration
------------

Check the [configuration guide](https://github.com/supersoniko/Safety-Osha/blob/master/CONFIGGUIDE.md) for more information.

**Connection Details**
 - `Config.server`: Server url, for example main server url is `sim.smogon.com`
 - `Config.port`: Connection port, Pokemon Showdown default port is `8000`
 - `Config.serverid`: Server id, main server id is `showdown` for example
 - `Config.autoReconnectDelay`: If connection gets closed, how much time it is waiting before reconnect
 - `Config.connectionTimeout`: If connection hang up, the time to check for reconnect

**Crashguard**
 - `Config.crashguard`: If true, write errors to console instead of crashing

**Watchconfig**
 - `Config.watchconfig`: If true, config.js is automatically reloaded when it is changed

**Login Details**
 - `Config.nick`: Bot Nickname, if you don't specify a nickname, it will log in a random nickname
 - `Config.pass`: Password, if needed
 - `Config.autoReloginDelay`: If it can't login because of server issues, how much time it is waiting before relogin

**Rooms**
 - `Config.rooms`: Array of rooms to join after login. You can specify a string value: `all` for joining all rooms, `official` for official rooms and `public` for not official rooms 
 - `Config.privateRooms`: Specify which rooms are private
 - `Config.initCmds`: Array of commands to send after login

**Auth Config**
 - `Config.exceptions`: Specify rank exceptions. Use `userid: true` for full permissions
 - `Config.ranks`: Array of user groups ordered from lowest to highest auth
 - `Config.globalPermissions`: Global permissions that cannot be changed with `set`

**Commands Config**
 - `Config.commandTokens`: Array of valid command characters. A command character, for example, `.` means `.command` usage
 - `Config.defaultPermission`: Default permision set for `this.can` in commands permissions
 - `Config.permissionExceptions`: Exceptions for commands permissions
 - `Config.botguide`: Bot commands guide link
 - `Config.pmhelp`: Help message said when users pm the bot with no commands
 - `Config.ignoreRooms:` Room that will be ignored by CommandParser you you can use commands on those rooms. For example if you want to log the room without interfering with other bots commands. 

**Language Config**
 - `Config.language`: Set default language

**Console Config**
 - `Config.debug`: Specify which console messages are shown

Credits
-----------

 - [supersoniko](https://github.com/supersoniko) (Owner)	
 - [Ecuacion](https://github.com/Ecuacion/) developer of [Pokemon-Showdown-Node-Bot](https://github.com/TalkTakesTime/Pokemon-Showdown-Bot)
