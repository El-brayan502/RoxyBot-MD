import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᑕOᒪᗩᗷOᖇᗩᗪOᖇᗴՏ Y ᑕᖇᗴáᗪOᖇ 🌸
global.owner = [
['573001533523', '🐔 Creador Batman', true],
['15614809253', 'David RyZe', true],
['573133374132', 'Yᴏ Sᴏʏ Yᴏ', true],
];

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᑎᑌᗰᗴᖇO ᗪᗴ OᗯᑎᗴᖇՏ ✨️
global.mods = ['573001533523', '573133374132'];
global.suittag = ['573001533523', '573133374132'];
global.prems = ['573001533523'];

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// IᑎᖴOᖇᗰᗩᑕIOᑎ ՏOᗷᖇᗴ ᒪᗩ ᗷOT 🍁
global.libreria = 'Baileys';
global.nameqr = 'RoxyBot';
global.namebot = 'RoxyBot';
global.sessions = 'Sessions';
global.jadi = 'JadiBots';
global.roxyJadibts = true;

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᗰᗩᖇᑕᗩ ᗪᗴ ᗩᘜᑌᗩ 🗞️
global.packname = '𝗥𝗼𝘅𝘆-𝗠𝗗 (𝗠𝘂𝗹𝘁𝗶-𝗗𝗲𝘃𝗶𝗰𝗲)';
global.botname = '🌸◌*̥₊ Rᴏxʏ-Mᴅ ◌❐🎋༉';
global.wm = '🌸◌*̥₊ Tʜᴇ Rᴏxʏ-Bᴏᴛ ◌❐🎋༉';
global.dev = '❁ཻུ۪۪ ⎧ ୧ㅤ 𝘉𝘳𝘢𝘺𝘢𝘯ㅤ🎋⋅ ..⃗.';
global.textbot = 'Rᴏxʏ-Mᴅ Bʏ BʀᴀʏᴀɴXᴅ';
global.etiqueta = 'Rᴏxʏ-Mᴅ Wʜᴀᴛsᴀᴀᴘ Bᴏᴛ';

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᗰOᑎᗴᗪᗩՏ 💸
global.moneda = 'dolares';

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.namabot = '⫹⫺  ᴍᴅ'
global.v = '-'   
global.eror = "_ubo un error _"
global.lopr = "🅟"
global.lolm = "Ⓛ"
global.dmenut = "✦ ───『"
global.dmenub = "│➭" 
global.dmenub2 = "│乂"
global.dmenuf = "╰━━━━━━━━┈─◂"
global.cmenut = "⫹⫺ ───『"
global.cmenuh = "』─── ⬟"
global.cmenub = "│〆"
global.cmenuf = "╰━━━━━━━━┈─◂"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
global.dashmenu = "✧────···[ *Dashboard* ]···────✧"
global.htki = '––––––『'
global.htka = '』––––––'
global.htjava = "⫹⫺"
global.comienzo = "• • ◕◕════"
global.fin = " • •"

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// Iᗰᗩᘜ3ᑎᗴՏ ᑎO TOᑕᗩᖇ 📥
global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.photoSity = [catalogo]

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᘜᖇᑌᑭOՏ ᗪᗴ ᒪᗩ ᗷOT 🗂️
global.gp1 = 'https://chat.whatsapp.com/F8KwM3rVqkS9HhR5msoRqQ'
global.channel2 = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W'
global.md = 'https://github.com/El-brayan502/RoxyBot-MD'
global.correo = 'brayanfree881@gmail.com'
global.cn ='https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m';

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363312092804854@newsletter',
}

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.MyApiRestBaseUrl = 'https://api.cafirexos.com';
global.MyApiRestApikey = 'BrunoSobrino';
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['kurumi']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
