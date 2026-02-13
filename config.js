const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VUzZKiSBB+lYk67YbGCCIiRHTEAKKCgoitLW7MoYQCS/mTKgSc8DovMMd+gt136XeZR9jAnu6ew+xELwciSaoyv8zvy/wCkhQTNEU1kL6ALMdnSFFj0jpDQAJKEQQoB23gQwqBBI66sQjLvbWXq1QewzKIhaQjux28WM6sHjfsEzocqCE7PB7vwLUNsmIXYe83AeOWgXmeU6yysPZb47K5T2iX7S0P6kzRFK/q701GnfCBMGwCNhEhznESatkexSiH0RTVNsT5++C3bGczdrGKUjZxOrutsU0uqRmVRV1sHFazu6jWatrNZNZ9H/zNdDC3+nGpOvkowS13x5ZlvEw9quljXUWtmpXH7L0wSxfmM3yCwwT5uo8Simn97r7H1nowXyTeZiZYlucdVq2DQ425vWDseSkqyWWwYhKEJ0FM3ge8dIaoEmfp0ZidufVMD5f2arEdy6PNHuoVqZ0Cw4wzUe64PwO38xetHP9P372RPa6rI8fTCNpUdYXtuhzr/MIY9s3FYZsE7nGBjACONfN98LfCfjkd4f5IzJhsNzAZ1T/NcnnqZMJDB6EL6pk9qixPsOu9wYe0yH+HcleT9YEtB97pHGXBIT+WB3PnVX25VSuj3UN0UOdnHh+zILpMZxqE5sLeOeIEovQwqBaGoD+Ia5NexsG9PNuN8pYwO7Hq4u5W0RHVug8k9toGOQoxoTmkOE1uvp7YBtA/L5GXI3prL0C7fai0ArZTMfTYDSbKeEpTN9KOWbFZm8pDtF/23NXwoozLO9AGWZ56iBDkTzChaV6biBAYIgKkvz63QYIq+kxck27Acm0Q4JzQVVJkUQr9F1pf/0LPS4uELuvEUxsD5UBi3tyIUpyEpOlkkcDc2+MzUveQEiAFMCLotUaUIx9INC/Q69yqqd+0nn/gHW4qWqAN4hsl2AcSELscw/TEXpcXeYn7RD6WTVSYZR8TREEbJLA5DL5/+/q3/PS4fHqUnx6HT48fnJtl3N7O0+P3b1//+fCHIqvTDyv7T9AG0S06yzF9psuw4oDvchwjcZ8a//W1rgaGjyjEEQESUGdqerZCRTMm5ZmU47GshbIayuCtDy+SeqZM43oOwbhwsX2oTnWZnFbm2rnMXN9lzWXp9oSL4rGdY4cld78I0oj60FsVRVnUAQODkjiGrU9C0VJJa08r9sxOoGjBno87dRRgtyMMbeY4V/lZhUfaxK2SwDMExS/Z0OzGVWWOrMGDIZd3TTYfnbGHfk5mtUxGKM9bW/Ug67IT7aiexE00cqHlqNtln7folhWmK83xTlRfJ6jLxgY79RTN9dVBHJmhaAYlkxrV2d6dkQfn1VmWn8V+G7box5LDNxk2DDefAUa3nfGDyl9z8oK3ESRzbf909cfy+Y8BVhyrpe30NI/1Q28ACTH60XC08uru5MG618h4Ph+UGyvgbXEHrtfPbZBFkAZpHgMJkHgHQRvkadGoW0+C9DeZVEXXlUWoN9VGkFD5bWLucYwIhXEGJFYQWKbb7/Hc8yk7T7MJJHsgAc4Rt5zYyL+Ws2xJIX2ZQCA3z2ixBdd/AQnAGa+eBwAA",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY RAJAR-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/q9ywg1.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "RAJAR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "RAJAR-MD",
// type sticker pack name
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
