require("./database/module")

//GLOBAL PAYMENT
global.storename = "✞𝖘𝖆𝖌𝖊✞Č_ķãý♡⚡⚡"
global.dana = "2348069016472"
global.qris = true 


// GLOBAL SETTING
global.owner = "2348069016472"
global.namabot = "*𝐁𝐋𝐔𝐄𝐃𝐄𝐌𝐎𝐍-𝐕𝟑*"
global.nomorbot = "2348069016472"
global.namacreator = "✞𝖘𝖆𝖌𝖊✞Č_ķãý♡⚡⚡"
global.linkyt = true 
global.autoJoin = false
global.antilink = true 
global.versisc = '3.1'

// DELAY JPM
global.delayjpm = 5500

//GLOBAL THUMB
global.codeInvite = ""
global.imageurl = 'https://l.top4top.io/p_32188bbq00.jpg'
global.isLink = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.packname = "𝕯𝖊𝖒𝖔𝖓 𝖐𝖎𝖓𝖌"
global.author = "ＢＬＵＥ ＤＥＭＯＮ"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
