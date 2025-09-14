import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import getMensajeSistema from '../lib/msmwarning.js';
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

// IᖴᑎᖴOᖇᗰᗩᑕIOᑎ ᗪᗴ ᒪᗩ ᗷOT
global.creador = 'Wa.me/573001533523'
global.ofcbot = `Wa.me/${conn.user.jid.split('@')[0]}?text=✨️hl`
global.asistencia = 'Wa.me/50231458537'
global.namechannel = '🌸◌*̥₊ Rᴏxʏ-Mᴅ ◌❐🎋༉'
global.namechannel2 = '🌸◌*̥₊ Rᴏxʏ-Mᴅ ◌❐🎋༉'
global.namegrupo = '𝐑𝐎𝐗𝐘 𝐆𝐑𝐔𝐏𝐎'
global.namecomu = '𝐓𝐇𝐄 𝐑𝐎𝐗𝐘 𝐂𝐎𝐌𝐔𝐍𝐈𝐓𝐘'
global.listo = '𝑨𝑸𝑼𝑰 𝑻𝑰𝑬𝑵𝑬 𝑮𝑹𝑨𝑪𝑰𝑨𝑺 𝑿 𝑬𝑺𝑷𝑬𝑹𝑨𝑹 ˃ 𖥦 ˂'
global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => catalogo,)

// ᑕᗩᑎᗩᒪ ᗪᗴ ᒪᗩ ᗷOT
global.idchannel = '120363417186717632@newsletter'
global.canalIdM = ["120363417186717632@newsletter"]
global.canalNombreM = ["𝖱𝗈𝗑𝗒 𝖡𝗈𝗍 𝖠𝖨 : 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 𝖮𝖿𝗂𝖼𝗂𝖺𝗅", "𝗧𝗢𝗖𝗔 𝗔𝗤𝗨𝗜 ✨️"]
global.channelRD = await getRandomChannel()


global.mensajes = getMensajeSistema();

// ᖴᗴᑕᕼᗩՏ
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

// ᖇᗴᗩᑕIOᑎᗴՏ ᘜᒪOᗷᗩᒪ
global.rwait = '✨️'
global.done = '✅'
global.error = '✖️'
global.msm = '⚠️'

global.emoji0 = '૮₍ ˶•⤙•˶ ₎ა ✨️'
global.emoji1 = '૮₍ ˶•⤙•˶ ₎ა ✨️'
global.emoji2 = '૮₍ ˶•⤙•˶ ₎ა ✨️'
global.emoji3 = '૮₍ ˶•⤙•˶ ₎ა ✨️'
global.emoji4 = '૮₍ ˶•⤙•˶ ₎ა ✨️'
global.emoji5 = '૮₍ ˶•⤙•˶ ₎ა ✨️'
global.emojis = [emoji0, emoji2, emoji3, emoji4, emoji5].getRandom()
global.emoji = [emoji0, emoji2, emoji3, emoji4, emoji5].getRandom()

global.wait = '🌸 𝗧𝗘 𝗣𝗜𝗗𝗢 𝗤𝗨𝗘 𝗠𝗘 𝗘𝗦𝗣𝗘𝗥𝗘𝗦 ʕ•ᴥ•ʔ'
global.waitt = global.wait
global.waittt = global.wait
global.waitttt = global.wait

global.edadaleatoria = ['10', '28', '20', '40', '18', '21', '15', '11', '9', '17', '25'].getRandom();
global.user2 = m.pushName || 'Anónimo';
global.verifyaleatorio = ['registrar', 'reg', 'verificar', 'verify', 'register'].getRandom();

// ᗴᑎᒪᗩᑕᗴՏ ᘜᒪOᗷᗩᒪ
var canal = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W'  
let canal2 = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W'
var git = 'https://github.com/El-brayan502'
var github = 'https://github.com/El-brayan502/RoxyBot-MD' 

global.redes = [canal, canal2, git, github].getRandom()

// Iᗰᗩᘜᗴᑎ
let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.arrayBuffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = m.pushName || 'Anónimo'
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
let pp = null; try { pp = await conn.profilePictureUrl('50231458537@s.whatsapp.net', 'image') } catch (e) { pp = null } global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363402481697721@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `DevBrayan owner ✨`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;DevBrayan owner✨,;;;\nFN:DevBrayan creador\nitem1.TEL;waid=50231458537:50231458537\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp ? await (await fetch(pp)).buffer() : null, thumbnail: null, sendEphemeral: true }}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }
}}, { quoted: m }

global.icono = [ 
'https://files.cloudkuimages.guru/images/z4rwLoXF.jpg',
'https://files.cloudkuimages.guru/images/z4rwLoXF.jpg',
'https://files.cloudkuimages.guru/images/FoRfISXZ.jpg',
'https://files.cloudkuimages.guru/images/fJSweUYE.jpg',
'https://files.cloudkuimages.guru/images/UJ4byDZm.jpg'
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { /*newsletterJid: channelRD.id,*/ serverMessageId: 100, /*newsletterName: channelRD.name,*/ }, externalAdReply: { showAdAttribution: true, title: textbot, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}