const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const toMs = require('ms')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./F3/functions')
const { color } = require('./F3/color')
const _welkom = JSON.parse(fs.readFileSync('./F2/welcome.json'))

require('./zeroyt7.js')
nocache('./zeroyt7.js', module => console.log(`${module} telah di update!`))
require('./main.js')
nocache('./main.js', module => console.log(`${module} telah di update!`))

const starts = async (zeroyt7 = new WAConnection()) => {
    zeroyt7.logger.level = 'warn'
    zeroyt7.version = [2, 4143, 3]
    function _0x3ab7(_0x323e7b,_0xf98192){var _0x19281d=_0x1928();return _0x3ab7=function(_0x3ab720,_0x21b17e){_0x3ab720=_0x3ab720-0x1bc;var _0x34c2b2=_0x19281d[_0x3ab720];return _0x34c2b2;},_0x3ab7(_0x323e7b,_0xf98192);}var _0x3ccdec=_0x3ab7;function _0x1928(){var _0x3e76b1=['31092mOhVGa','60XhHTIy','9209120wvQyih','30KoevrD','4261710hEoKWp','33472oxxMwt','94rPJnNt','551642pNnrId','Opera','3102920jecioL','9197784MfyLqh','3.0','Zero\x20YT7','browserDescription'];_0x1928=function(){return _0x3e76b1;};return _0x1928();}(function(_0x2afb88,_0x3230a3){var _0x5142ea=_0x3ab7,_0x5104b1=_0x2afb88();while(!![]){try{var _0x45924c=parseInt(_0x5142ea(0x1bd))/0x1*(parseInt(_0x5142ea(0x1be))/0x2)+-parseInt(_0x5142ea(0x1bc))/0x3+parseInt(_0x5142ea(0x1c6))/0x4*(-parseInt(_0x5142ea(0x1c7))/0x5)+parseInt(_0x5142ea(0x1c9))/0x6*(parseInt(_0x5142ea(0x1bf))/0x7)+parseInt(_0x5142ea(0x1c1))/0x8+parseInt(_0x5142ea(0x1c2))/0x9+-parseInt(_0x5142ea(0x1c8))/0xa;if(_0x45924c===_0x3230a3)break;else _0x5104b1['push'](_0x5104b1['shift']());}catch(_0x4cf233){_0x5104b1['push'](_0x5104b1['shift']());}}}(_0x1928,0xe60d9),zeroyt7[_0x3ccdec(0x1c5)]=[_0x3ccdec(0x1c4),_0x3ccdec(0x1c0),_0x3ccdec(0x1c3)]);
    console.log(banner)
    zeroyt7.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya...!'))
    })
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await zeroyt7.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    zeroyt7.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./session.json') && zeroyt7.loadAuthInfo('./session.json')
    zeroyt7.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    zeroyt7.on('open', () => {
        success('2', 'Connect')
        teks = `https://chat.whatsapp.com/G64dsAUKQFx4QO8n9dBybj` 
 zeroyt7.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('✓', 'yellow'), color('Joined To Kunz Botz Group')) 
    })
    await zeroyt7.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(zeroyt7.base64EncodedAuthInfo(), null, '\t'))

    zeroyt7.on('chat-update', async (message) => {
        require('./zeroyt7.js')(zeroyt7, message, _welkom)
    })
zeroyt7.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await zeroyt7.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await zeroyt7.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_grup = await zeroyt7.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      if (anu.action == "add" && mem.includes(zeroyt7.user.jid)) {
        zeroyt7.sendMessage(anu.jid, "Hai Aku Bot Whatsapp, saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik !menu.", "conversation")
      }
      zeroyt7.on('message-delete', async (m) => {
if (!m.key.fromMe && !antidelete) {
if (!m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = zeroyt7.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = zeroyt7.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
zeroyt7.copyNForward(m.key.remoteJid, m.message)
zeroyt7.sendMessage(m.key.remoteJid, `\`\`\`Anti Delete\`\`\`

 \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
 \`\`\`Tipe : ${c3type}\`\`\`
 \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
      if (!isWelkom) return
      if (anu.action == "add" && mem.includes(zeroyt7.user.jid)) {
        zeroyt7.sendMessage(anu.jid, "Hai Aku Bot Whatsapp, saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik !menu.", "conversation")}
      if (anu.action == 'add' && !mem.includes(zeroyt7.user.jid)) {
             if (!isWelkom) return
                mdata = await zeroyt7.groupMetadata(anu.jid)
	num = anu.participants[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                groupName = mdata.subject
                memeg = mdata.participants.length
                let v = zeroyt7.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0] 
                teks = `Selamat Datang Kak @${mem.split('@')[0]}*\n*Welcome in group *${groupName}*\n*Semoga betah~~*`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${mem.split('@')[0]}&descriminator=${time_wel}&memcount=${memeg}&gcname=${groupName}&pp=${pp_user}&bg=https://i.ibb.co/NS0zKVq/2bfd5f168031.jpg`)
                zeroyt7.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `Jangan Lupa Baca Rules Group Ya`, buttons: [{buttonId: `#rulesgroup`,buttonText:{displayText: 'Rules Group'},type:1},{buttonId: `#menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
      if (anu.action == 'remove' && !mem.includes(zeroyt7.user.jid)) {
            if (!isWelkom) return                 
            mdata = await zeroyt7.groupMetadata(anu.jid)
	        num = anu.participants[0]
                groupName = mdata.subject
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                let w = zeroyt7.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `*Sepertinya beban grup berkurang satu*\n*Selamat Tinggal* *@${num.split('@')[0]}*\n*Semoga Tenang Di Alam Sana*`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${mem.split('@')[0]}&descriminator=${time_wel}&memcount=${memeg}&gcname=${groupName}&pp=${pp_user}&bg=https://i.ibb.co/NS0zKVq/2bfd5f168031.jpg`)
                zeroyt7.sendMessage(mdata.id, { contentText: `${out}`, footerText: `Mari Kita Doakan Bersama� Agar Jasadnya Tenang`, buttons: [{buttonId: `!bay`,buttonText:{displayText: 'BYE KAK'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Diawasi Oleh Kunz')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
