//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923346690239";
global.owner = process.env.OWNER_NUMBER || "923346690239";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEUxYnpPTkJXREdvTTlKSkFSMnh6OHNqdUYwZEZnK1V1OUVKcFZsRFAzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHQ0RzZKbnBWTjNOTmRGaW8vZVYyVE8yWm1rczVLMzNaa1hBSkJXV0F6Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRFdQU2lZVHVQditUZzJGNjN3SE9FcUhwa1VjVm1hZHFzY0RrUm1WYVc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRWG9pMFhaYmsxTkl3MFBmSTd0bUkybFVCWFA4clBOS2FXekk5Zm5FdTM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVLOXRnVjdWZDFQcFFNY2ZmRGxkVkppNG12VThlMjQya1UveU15eFdHSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpXRzlLY3FkNDN6eUlJUFJaakhMQ3hpL0QzTmNCbWhrMHByVW42UGc0Q1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VMcng4NmdiaXhwenB3emFEUExwY3NQb01Jbk82Z0hJcWNFSUtZdlZVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN014bmZhc3R0QnhZQ1VTblNjZmszUE5sWVpiMjZzdVppc3hXRmxiZDhWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNnS0NyQXoyVi9EeXlIWUFCcU5HaHlXczllemlpekFkMXRidnlsWi9sazI3UEpESGhVTktDclVsVUlqbTNKREUvQWtnRXljWTArbFgzVFVxUWNxUmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6InRtdXVmRDl0ZVFVVjVRazg4UmZ2UTdWY2RPMUg4K25CUXd3a0JKZHN2MTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxkWHJCTWE4VHFLUTMydVpLMlFTa1EiLCJwaG9uZUlkIjoiOWM4MGZlYjItZjM1Yi00YzkyLTg2ZjgtYWYzYjgwNjZlYjI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZrM0psb2Z1Wnh3aE5LMktweUFPK05WQ2N6ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJicFpHeHQwSmhSbXFhV2NITEYyYzRyS01idVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUNGWVRNR0UiLCJtZSI6eyJpZCI6IjkyMzM0NjY5MDIzOTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik11c2thbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTU8vcVpJQ0VKYnd1TFVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWHllQ2ZNekM2L0hZTVZDTmhwVnJPQWJnYlFWcFFVbVREYnJ2ZmFGcTZVQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRHorL3RIaW1KcjFOWnNINjNJNjhkVldIU2xWa3IzbDgwaHNJc0c1SmlDMUVObXRzTnZlK2IwWW9va3lpMmdjaWxLbHR0dTZiUjJFb3ZWZWJEMmNUQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImRZYkE3cUNiTWFMRWhGeWg5Qm5QOGxRbFozMC9nREUydUlVQlFycG1weERxNnJqeG5XQU9ETlQwNzJXdEphSVNaU0VDNVRneDFWQ3pWbTFuY1BvYmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzQ2NjkwMjM5OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjhuZ256TXd1dngyREZRallhVmF6Z0c0RzBGYVVGSmt3MjY3MzJoYXVsQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjY5MzY2OH0=
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEUxYnpPTkJXREdvTTlKSkFSMnh6OHNqdUYwZEZnK1V1OUVKcFZsRFAzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHQ0RzZKbnBWTjNOTmRGaW8vZVYyVE8yWm1rczVLMzNaa1hBSkJXV0F6Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRFdQU2lZVHVQditUZzJGNjN3SE9FcUhwa1VjVm1hZHFzY0RrUm1WYVc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRWG9pMFhaYmsxTkl3MFBmSTd0bUkybFVCWFA4clBOS2FXekk5Zm5FdTM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVLOXRnVjdWZDFQcFFNY2ZmRGxkVkppNG12VThlMjQya1UveU15eFdHSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpXRzlLY3FkNDN6eUlJUFJaakhMQ3hpL0QzTmNCbWhrMHByVW42UGc0Q1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VMcng4NmdiaXhwenB3emFEUExwY3NQb01Jbk82Z0hJcWNFSUtZdlZVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN014bmZhc3R0QnhZQ1VTblNjZmszUE5sWVpiMjZzdVppc3hXRmxiZDhWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNnS0NyQXoyVi9EeXlIWUFCcU5HaHlXczllemlpekFkMXRidnlsWi9sazI3UEpESGhVTktDclVsVUlqbTNKREUvQWtnRXljWTArbFgzVFVxUWNxUmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6InRtdXVmRDl0ZVFVVjVRazg4UmZ2UTdWY2RPMUg4K25CUXd3a0JKZHN2MTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxkWHJCTWE4VHFLUTMydVpLMlFTa1EiLCJwaG9uZUlkIjoiOWM4MGZlYjItZjM1Yi00YzkyLTg2ZjgtYWYzYjgwNjZlYjI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZrM0psb2Z1Wnh3aE5LMktweUFPK05WQ2N6ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJicFpHeHQwSmhSbXFhV2NITEYyYzRyS01idVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUNGWVRNR0UiLCJtZSI6eyJpZCI6IjkyMzM0NjY5MDIzOTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik11c2thbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTU8vcVpJQ0VKYnd1TFVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWHllQ2ZNekM2L0hZTVZDTmhwVnJPQWJnYlFWcFFVbVREYnJ2ZmFGcTZVQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRHorL3RIaW1KcjFOWnNINjNJNjhkVldIU2xWa3IzbDgwaHNJc0c1SmlDMUVObXRzTnZlK2IwWW9va3lpMmdjaWxLbHR0dTZiUjJFb3ZWZWJEMmNUQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImRZYkE3cUNiTWFMRWhGeWg5Qm5QOGxRbFozMC9nREUydUlVQlFycG1weERxNnJqeG5XQU9ETlQwNzJXdEphSVNaU0VDNVRneDFWQ3pWbTFuY1BvYmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzQ2NjkwMjM5OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjhuZ256TXd1dngyREZRallhVmF6Z0c0RzBGYVVGSmt3MjY3MzJoYXVsQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjY5MzY2OH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "malik",
  packname: process.env.PACK_NAME || "malik",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "malik",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
