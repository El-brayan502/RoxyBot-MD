import { smsg } from './lib/simple.js'
import { format } from 'util' 
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fetch from 'node-fetch'


const ws = global.ws || { CLOSED: 3 }

const { proto } = (await import('@whiskeysockets/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))


const normalizeJid = jid => {
  if (!jid) return ''
  
  let base = jid.split('@')[0]
  
  base = base.split(':')[0]
  
  return base.replace(/[^0-9]/g, '')
}
const cleanJid = jid => jid?.split(':')[0] || ''

export async function handler(chatUpdate) {
this.msgqueque = this.msgqueque || []
this.uptime = this.uptime || Date.now()

if (this.user && !this.user.lid) this.user.lid = this.user.id
if (!chatUpdate)
return
    if (typeof this.pushMessage === 'function') {
      this.pushMessage(chatUpdate.messages).catch(console.error)
    } else {
      
      
    }
let m = chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m)
return

if (m.isGroup && global.conns && global.conns.length > 1) {
    let botsEnGrupo = global.conns.filter(c => c.user && c.user.jid && c.ws && c.ws.socket && c.ws.socket.readyState !== 3)
    let elegido = botsEnGrupo[Math.floor(Math.random() * botsEnGrupo.length)]
    if (this.user.jid !== elegido.user.jid) return
}

if (global.db.data == null)
await global.loadDatabase()       
try {
m = smsg(this, m) || m
if (!m)
return
m.exp = 0
m.coin = false
try {
let user = global.db.data.users[m.sender]
if (typeof user !== 'object')

global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.exp))
user.exp = 0
if (!isNumber(user.coin))
user.coin = 10
if (!isNumber(user.joincount))
user.joincount = 1
if (!isNumber(user.diamond))
user.diamond = 3
if (!isNumber(user.lastadventure))
user.lastadventure = 0
if (!isNumber(user.lastclaim))
user.lastclaim = 0
if (!isNumber(user.health))
user.health = 100
if (!isNumber(user.crime))
user.crime = 0
if (!isNumber(user.lastcofre))
user.lastcofre = 0
if (!isNumber(user.lastdiamantes))
user.lastdiamantes = 0
if (!isNumber(user.lastpago))
user.lastpago = 0
if (!isNumber(user.lastcode))
user.lastcode = 0
if (!isNumber(user.lastcodereg))
user.lastcodereg = 0
if (!isNumber(user.lastduel))
user.lastduel = 0
if (!isNumber(user.lastmining))
user.lastmining = 0
if (!('muto' in user))
user.muto = false
if (!('premium' in user))
user.premium = false
if (!user.premium)
user.premiumTime = 0
if (!('registered' in user))
user.registered = false
if (!('genre' in user))
user.genre = ''
if (!('birth' in user))
user.birth = ''
if (!('marry' in user))
user.marry = ''
if (!('description' in user))
user.description = ''
if (!('packstickers' in user))
user.packstickers = null
if (!user.registered) {
if (!('name' in user))
user.name = m.name
if (!isNumber(user.age))
user.age = -1
if (!isNumber(user.regTime))
user.regTime = -1
}
if (!isNumber(user.afk))
user.afk = -1
if (!('afkReason' in user))
user.afkReason = ''
if (!('role' in user))
user.role = 'Nuv'
if (!('banned' in user))
user.banned = false
if (!('useDocument' in user))
user.useDocument = false
if (!isNumber(user.level))
user.level = 0
if (!isNumber(user.bank))
user.bank = 0
if (!isNumber(user.warn))
user.warn = 0
} else
                global.db.data.users[m.sender] = {
exp: 0,
coin: 10,
joincount: 1,
diamond: 3,
lastadventure: 0,
health: 100,
lastclaim: 0,
lastcofre: 0,
lastdiamantes: 0,
lastcode: 0,
lastduel: 0,
lastpago: 0,
lastmining: 0,
lastcodereg: 0,
muto: false,
registered: false,
genre: '',
birth: '',
marry: '',
description: '',
packstickers: null,
name: m.name,
age: -1,
regTime: -1,
afk: -1,
afkReason: '',
banned: false,
useDocument: false,
bank: 0,
level: 0,
role: 'Nuv',
premium: false,
premiumTime: 0,                 
}
let chat = global.db.data.chats[m.chat]
if (typeof chat !== 'object')
global.db.data.chats[m.chat] = {}
if (chat) {
if (!('isBanned' in chat))
chat.isBanned = false
if (!('sAutoresponder' in chat))
chat.sAutoresponder = ''
if (!('welcome' in chat))
chat.welcome = true
if (!('autolevelup' in chat))
chat.autolevelup = false
if (!('autoAceptar' in chat))
chat.autoAceptar = false
if (!('autosticker' in chat))
chat.autosticker = false
if (!('autoRechazar' in chat))
chat.autoRechazar = false
if (!('autoresponder' in chat))
chat.autoresponder = false    
if (!('detect' in chat))
chat.detect = true
if (!('antiBot' in chat))
chat.antiBot = false
if (!('antiBot2' in chat))
chat.antiBot2 = false
if (!('modoadmin' in chat))                     
chat.modoadmin = false   
if (!('antiLink' in chat))
chat.antiLink = true
if (!('antiImg' in chat))
chat.antiImg = false
if (!('reaction' in chat))
chat.reaction = false
if (!('nsfw' in chat))
chat.nsfw = false
if (!('antifake' in chat))
chat.antifake = false
if (!('delete' in chat))
chat.delete = false
if (!isNumber(chat.expired))
chat.expired = 0
if (!('antiLag' in chat))
chat.antiLag = false
if (!('per' in chat))
chat.per = []
} else
global.db.data.chats[m.chat] = {
sAutoresponder: '',
welcome: true,
isBanned: false,
autolevelup: false,
autoresponder: false,
delete: false,
autoAceptar: false,
autoRechazar: false,
detect: true,
antiBot: false,
antiBot2: false,
modoadmin: false,
antiLink: true,
antifake: false,
reaction: false,
nsfw: false,
expired: 0, 
antiLag: false,
per: [],
}
var settings = global.db.data.settings[this.user.jid]
if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!('self' in settings)) settings.self = false
if (!('restrict' in settings)) settings.restrict = true
if (!('jadibotmd' in settings)) settings.jadibotmd = true
if (!('antiPrivate' in settings)) settings.antiPrivate = false
if (!('autoread' in settings)) settings.autoread = false
} else global.db.data.settings[this.user.jid] = {
self: false,
restrict: true,
jadibotmd: true,
antiPrivate: false,
autoread: false,
status: 0
}
} catch (e) {
console.error(e)
}
const mainBot = global.conn.user.jid
const chat = global.db.data.chats[m.chat] || {}
const isSubbs = chat.antiLag === true
const allowedBots = chat.per || []
if (!allowedBots.includes(mainBot)) allowedBots.push(mainBot)
const isAllowed = allowedBots.includes(this.user.jid)
if (isSubbs && !isAllowed) 
return

if (opts['nyimak'])  return
if (!m.fromMe && opts['self'])  return
if (opts['swonly'] && m.chat !== 'status@broadcast')  return
if (typeof m.text !== 'string')
m.text = ''

let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]


this._groupCache = this._groupCache || {}
let groupMetadata = {}
if (m.isGroup) {
  const now = Date.now()
  const maxAge = 30_000 // 30s de vida para la metadata
  const cached = this._groupCache[m.chat]
  if (!cached || (now - cached.ts) > maxAge || !cached.data || !cached.data.participants) {
    groupMetadata = await this.groupMetadata(m.chat).catch(_ => (cached?.data || {})) || {}
    this._groupCache[m.chat] = { data: groupMetadata, ts: now }
  } else {
    groupMetadata = cached.data
  }
}
const participants = (m.isGroup ? groupMetadata.participants : []) || []


const participantsNormalized = participants.map(participant => {
  const rawId = participant.id || ''
  const wid = participant.jid || rawId
  return {
    id: rawId,
    wid,
    widNum: normalizeJid(wid),
    admin: participant.admin ? 'admin' : null,
    isAdmin: !!participant.admin
  }
})


if (Array.isArray(m.mentionedJid) && m.isGroup && m.mentionedJid.some(j => /@lid$/i.test(j))) {
  try {
    
    this._lidResolveCache = this._lidResolveCache || new Map()
    async function resolveLid(lidJid, ctx) {
      if (!lidJid) return lidJid
      if (!/@lid$/i.test(lidJid)) return lidJid
      const num = normalizeJid(lidJid)
      if (ctx._lidResolveCache.has(num)) return ctx._lidResolveCache.get(num)
      
      const quick = participantsNormalized.find(p => p.widNum === num)
      if (quick && /@s\.whatsapp\.net$/.test(quick.wid)) {
        ctx._lidResolveCache.set(num, quick.wid)
        return quick.wid
      }
      
      for (const p of participantsNormalized) {
        const real = p.wid || p.id
        if (!real) continue
        try {
          const waInfo = await ctx.onWhatsApp(real)
          const lidField = waInfo?.[0]?.lid
          if (lidField && normalizeJid(lidField) === num) {
            ctx._lidResolveCache.set(num, real)
            return real
          }
        } catch {}
      }
      
      const fallback = num ? `${num}@s.whatsapp.net` : lidJid
      ctx._lidResolveCache.set(num, fallback)
      return fallback
    }
    const resolved = []
    for (const jid of m.mentionedJid) {
      resolved.push(await resolveLid(jid, this))
    }
    
    try { m.mentionedJid = resolved } catch {}
    
    if (m.message) {
      for (const k of Object.keys(m.message)) {
        const msgObj = m.message[k]
        if (msgObj && typeof msgObj === 'object' && msgObj.contextInfo) {
          msgObj.contextInfo.mentionedJid = resolved
        }
      }
    }
    
    m._mentionedJidResolved = resolved
  } catch (e) {
    console.error('Error normalizando menciones @lid:', e)
  }
}


const senderNum = normalizeJid(m.sender)
const senderRaw = m.sender
const botNumsRaw = [this.user.jid, this.user.lid].filter(Boolean)
const botNums = botNumsRaw.map(j => normalizeJid(j))
let participantUser = m.isGroup ? participantsNormalized.find(p => p.widNum === senderNum || p.wid === senderRaw) : null
let botParticipant = m.isGroup ? participantsNormalized.find(p => botNums.includes(p.widNum)) : null



let isAdmin = !!participantUser?.admin
let isBotAdmin = !!botParticipant?.admin
let isRAdmin = participantUser?.admin === 'superadmin' || false  // Mantener para compatibilidad


m.isAdmin = isAdmin
m.isSuperAdmin = isRAdmin
m.isBotAdmin = isBotAdmin
m.adminRole = isRAdmin ? 'superadmin' : (isAdmin ? 'admin' : null)


let user = participantUser || {}
let bot = botParticipant || {}

const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)]
  .map(v => v.replace(/[^0-9]/g, ''))
  .includes(senderNum)
const isOwner = isROwner || m.fromMe
const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '')).includes(senderNum)
const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '')).includes(senderNum) || _user.premium == true

if (opts['queque'] && m.text && !(isMods || isPrems)) {
let queque = this.msgqueque, time = 1000 * 5
const previousID = queque[queque.length - 1]
queque.push(m.id || m.key.id)
setInterval(async function () {
if (queque.indexOf(previousID) === -1) clearInterval(this)
await delay(time)
}, time)
}

if (m.isBaileys) {
return
}
m.exp += Math.ceil(Math.random() * 10)

let usedPrefix

    if (m.isGroup && global.db.data.chats[m.chat]?.antitoxic) {
      const toxicWords = ['g0re', 'gore', 'g0r3', 'g.o.r.e', 'sap0', 'sap4', 'malparido', 'malparida', 'malparidos', 'malparidas', 
    'm4lp4rid0', 'm4lp4rido', 'm4lparido', 'malp4rido', 'm4lparid0', 'malp4rid0', 'chocha', 'chup4la', 
    'chup4l4', 'chupalo', 'chup4lo', 'chup4l0', 'chupal0', 'chupon', 'chupameesta', 'sabandija', 
    'hijodelagranputa', 'hijodeputa', 'hijadeputa', 'hijadelagranputa', 'kbron', 'kbrona', 'cajetuda', 
    'laconchadedios', 'putita', 'putito', 'put1t4', 'putit4', 'putit0', 'put1to', 'put1ta', 'pr0stitut4s', 
    'pr0stitutas', 'pr05titutas', 'pr0stitut45', 'prostitut45', 'prostituta5', 'pr0stitut45', 'fanax', 
    'f4nax', 'drogas', 'droga', 'dr0g4', 'nepe', 'p3ne', 'p3n3', 'pen3', 'p.e.n.e', 'pvt0', 'pvto', 
    'put0', 'hijodelagransetentamilparesdeputa', 'Chingadamadre', 'coño', 'c0ño', 'coñ0', 'c0ñ0', 
    'afeminado', 'drog4', 'cocaína', 'marihuana', 'chocho', 'chocha', 'cagon', 'pedorro', 'agrandado', 
    'agrandada', 'pedorra', 'cagona', 'pinga', 'joto', 'sape', 'mamar', 'chigadamadre', 'hijueputa', 
    'chupa', 'caca', 'bobo', 'boba', 'loco', 'loca', 'chupapolla', 'estupido', 'estupida', 'estupidos', 
    'polla', 'pollas', 'idiota', 'maricon', 'chucha', 'verga', 'vrga', 'naco', 'zorra', 'zorro', 
    'zorras', 'zorros', 'pito', 'huevon', 'huevona', 'huevones', 'rctmre', 'mrd', 'ctm', 'csm', 'cepe', 
    'sepe', 'sepesito', 'cepecito', 'cepesito', 'hldv', 'ptm', 'baboso', 'babosa', 'babosos', 'babosas', 
    'feo', 'fea', 'feos', 'feas', 'mamawebos', 'chupame', 'bolas', 'qliao', 'imbecil', 'embeciles', 
    'kbrones', 'cabron', 'capullo', 'carajo', 'gore', 'gorre', 'gorreo', 'gordo', 'gorda', 'gordos', 
    'gordas', 'sapo', 'sapa', 'mierda', 'cerdo', 'cerda', 'puerco', 'puerca', 'perra', 'perro', 'dumb', 
    'fuck', 'shit', 'bullshit', 'cunt', 'semen', 'bitch', 'motherfucker', 'foker', 'fucking', 'puta', 
    'puto', 'mierda', 'malparido', 'pendejo', 'culiao', 'imbécil', 'estúpido', 'marica', 'perra'] 
      
      
      let regex = new RegExp(`\\b(${toxicWords.join('|')})\\b`, 'i')
      const isToxic = regex.test(m.text)
      if (isToxic) {
        console.log('[!] Detectado lenguaje tóxico:', m.text)
        let userWarns = global.db.data.users[m.sender].warns || 0
        userWarns++
        global.db.data.users[m.sender].warns = userWarns
        await this.reply(m.chat, `🍭 *Advertencia por toxico ${userWarns}/4*\nEvita usar lenguaje ofensivo.`, m, rcanal)
    
        if (userWarns >= 4) {
          global.db.data.users[m.sender].warns = 0
          try {
            await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            await this.reply(m.chat, `❌ Usuario expulsado por comportamiento tóxico reiterado.`, m, rcanal)
          } catch (e) {
            await this.reply(m.chat, `⚠️ No se pudo expulsar al usuario. Verifica si el bot es admin.`, m, rcanal)
          }
        }
      }
    }

const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin)
continue
if (plugin.disabled)
continue
const __filename = join(___dirname, name)
if (typeof plugin.all === 'function') {
try {
await plugin.all.call(this, m, {
chatUpdate,
__dirname: ___dirname,
__filename
})
} catch (e) {
console.error(e)
}}
if (!opts['restrict'])
if (plugin.tags && plugin.tags.includes('admin')) {
continue
}
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
let match = (_prefix instanceof RegExp ? 
[[_prefix.exec(m.text), _prefix]] :
Array.isArray(_prefix) ?
_prefix.map(p => {
let re = p instanceof RegExp ?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof _prefix === 'string' ?
[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (typeof plugin.before === 'function') {
if (await plugin.before.call(this, m, {
match,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
}))
continue
}
if (typeof plugin !== 'function')
continue
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
args = args || []
let _args = noPrefix.trim().split` `.slice(1)
let text = _args.join` `
command = (command || '').toLowerCase()
let fail = plugin.fail || global.dfail
let isAccept = plugin.command instanceof RegExp ? 
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ?
                        plugin.command.some(cmd => cmd instanceof RegExp ? 
                            cmd.test(command) :
cmd === command) :
typeof plugin.command === 'string' ? 
plugin.command === command :
false



if ((m.id.startsWith('NJX-') || (m.id.startsWith('BAE5') && m.id.length === 16) || (m.id.startsWith('B24E') && m.id.length === 20))) return

if (!isAccept) {
continue
}
m.plugin = name
if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (!['grupo-unbanchat.js'].includes(name) && chat && chat.isBanned && !isROwner) return
if (name != 'grupo-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'grupo-delete.js' && chat?.isBanned && !isROwner) return 
if (user.antispam > 2) return
if (m.text && user.banned && !isROwner) {
m.reply(`《✦》Estas baneado/a, no puedes usar comandos en este bot!\n\n${user.bannedReason ? `✰ *Motivo:* ${user.bannedReason}` : '✰ *Motivo:* Sin Especificar'}\n\n> ✧ Si este Bot es cuenta oficial y tiene evidencia que respalde que este mensaje es un error, puedes exponer tu caso con un moderador.`)
user.antispam++
return
}

if (user.antispam2 && isROwner) return
let time = global.db.data.users[m.sender].spam + 3000
if (new Date - global.db.data.users[m.sender].spam < 3000) return console.log(`[ SPAM ]`) 
global.db.data.users[m.sender].spam = new Date * 1

if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let setting = global.db.data.settings[this.user.jid]
if (name != 'grupo-unbanchat.js' && chat?.isBanned)
return 
if (name != 'owner-unbanuser.js' && user?.banned)
return
}}

if (plugin?.warn && !isOwner && !isROwner) {
          let warns = global.db.data.users[m.sender].warns || 0
          warns++
          global.db.data.users[m.sender].warns = warns
          await this.reply(m.chat, `⚠️ Advertencia ${warns}/3.`, m, rcanal)
  
          if (warns >= 3) {
            global.db.data.users[m.sender].warns = 0
            try {
              await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
              await this.reply(m.chat, `🪴 Has sido expulsado por acumulación de advertencias.`, m, rcanal)
            } catch (err) {
              await this.reply(m.chat, `⚠️ No se pudo expulsar al usuario. Revisa permisos del bot.`, m, rcanal)
            }
            return
          }
        }

let hl = _prefix 
let adminMode = global.db.data.chats[m.chat].modoadmin
let mini = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && mini) return   
if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { 
fail('owner', m, this)
continue
}
if (plugin.rowner && !isROwner) { 
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) { 
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) { 
fail('mods', m, this)
continue
}
if (plugin.premium && !isPrems) { 
fail('premium', m, this)
continue
}
 if (plugin.admin && !isAdmin) { 
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) {
fail('private', m, this)
continue
}
if (plugin.group && !m.isGroup) { 
fail('group', m, this)
continue
}
if (plugin.register == true && _user.registered == false) { 
fail('unreg', m, this)
continue
}
m.isCommand = true
let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 
if (xp > 200)
m.reply('chirrido -_-')
else
m.exp += xp
if (!isPrems && plugin.coin && global.db.data.users[m.sender].coin < plugin.coin * 1) {
conn.reply(m.chat, `❮✦❯ Se agotaron tus ${moneda}`, m)
continue
}
if (plugin.level > _user.level) {
conn.reply(m.chat, `❮✦❯ Se requiere el nivel: *${plugin.level}*\n\n• Tu nivel actual es: *${_user.level}*\n\n• Usa este comando para subir de nivel:\n*${usedPrefix}levelup*`, m)       
continue
}
let extra = {
match,
usedPrefix,
noPrefix,
_args,
args,
command,
text,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
}
try {
await plugin.call(this, m, extra)
if (!isPrems)
m.coin = m.coin || plugin.coin || false
} catch (e) {
m.error = e
console.error(e)
if (e) {
let text = format(e)
for (let key of Object.values(global.APIKeys))
text = text.replace(new RegExp(key, 'g'), 'Administrador')
m.reply(text)
}
} finally {
if (typeof plugin.after === 'function') {
try {
await plugin.after.call(this, m, extra)
} catch (e) {
console.error(e)
}}
if (m.coin)
conn.reply(m.chat, `❮✦❯ Utilizaste ${+m.coin} ${moneda}`, m)
}
break
}}
} catch (e) {
console.error(e)
} finally {
if (opts['queque'] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
}
let user, stats = global.db.data.stats
if (m) { let utente = global.db.data.users[m.sender]
if (utente.muto == true) {
let bang = m.key.id
let cancellazzione = m.key.participant
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: cancellazzione }})
}
if (m.sender && (user = global.db.data.users[m.sender])) {
user.exp += m.exp
user.coin -= m.coin * 1
}

let stat
if (m.plugin) {
let now = +new Date
if (m.plugin in stats) {
stat = stats[m.plugin]
if (!isNumber(stat.total))
stat.total = 1
if (!isNumber(stat.success))
stat.success = m.error != null ? 0 : 1
if (!isNumber(stat.last))
stat.last = now
if (!isNumber(stat.lastSuccess))
stat.lastSuccess = m.error != null ? 0 : now
} else
stat = stats[m.plugin] = {
total: 1,
success: m.error != null ? 0 : 1,
last: now,
lastSuccess: m.error != null ? 0 : now
}
stat.total += 1
stat.last = now
if (m.error == null) {
stat.success += 1
stat.lastSuccess = now
}}}

try {
if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
} catch (e) { 
console.log(m, m.quoted, e)}
let settingsREAD = global.db.data.settings[this.user.jid] || {}  
if (opts['autoread']) await this.readMessages([m.key])

if (db.data.chats[m.chat].reaction && m.text.match(/(ción|dad|aje|oso|izar|mente|pero|tion|age|ous|ate|and|but|ify|ai|Roxy|a|s)/gi)) {
let emot = pickRandom(["🍟", "😃", "😄", "😁", "😆", "🍓", "😅", "😂", "🤣", "🥲", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "🌺", "🌸", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🌟", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "💫", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😶‍🌫️", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🫣", "🤭", "🤖", "🍭", "🤫", "🫠", "🤥", "😶", "📇", "😐", "💧", "😑", "🫨", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😮‍💨", "😵", "😵‍💫", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👺", "🧿", "🌩", "👻", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🫶", "👍", "✌️", "🙏", "🫵", "🤏", "🤌", "☝️", "🖕", "🙏", "🫵", "🫂", "🐱", "🤹‍♀️", "🤹‍♂️", "🗿", "✨", "⚡", "🔥", "🌈", "🩷", "❤️", "🧡", "💛", "💚", "🩵", "💙", "💜", "🖤", "🩶", "🤍", "🤎", "💔", "❤️‍🔥", "❤️‍🩹", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "🚩", "👊", "⚡️", "💋", "🫰", "💅", "👑", "🐣", "🐤", "🐈"])
if (!m.fromMe) return this.sendMessage(m.chat, { react: { text: emot, key: m.key }})
}
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
}}

global.dfail = (type, m, conn, comando = '') => {
  let mensajes = getMensajeSistema(comando)

  const msg = {
    rowner: mensajes.smsrowner,
    owner: mensajes.smsowner,
    mods: mensajes.smsmods,
    premium: mensajes.smspremium,
    group: mensajes.smsgroup,
    private: mensajes.smsprivate,
    admin: mensajes.smsadmin,
    botAdmin: mensajes.smsbotAdmin,
    unreg: mensajes.smsunreg,
    restrict: mensajes.smsrestrict
  }[type]

  if (msg) return conn.reply(m.chat, msg, m, rcanal).then(_ => m.react('✖️'))
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.magenta("Se actualizo 'handler.js'"))

if (global.conns && global.conns.length > 0 ) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
for (const userr of users) {
userr.subreloadHandler(false)
}}});