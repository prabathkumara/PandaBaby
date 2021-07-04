exports.wait = () => {
	return`*WAITING...*`
}

exports.succes = () => {
	return`*SUCCESS*`
}

exports.lvlon = () => {
	return`*LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*YOUR LEVELS STILL EMPTY*`
}

exports.lvlnoon = () => {
	return`*GROUP LEVELS HAVE NOT BEEN ACTIVATED*`
}

exports.nsfwoff = () => {
	return`*NSFW NOT ACTIVATED*`
}

exports.noregis = () => {
	return`*NOT VERIFICATION (Panda)*\n\ntype : @verify`
}

exports.baned = () => {
	return`*SORRY YOU'VE BANNED ME YAHAHAHA HAYUUU:V*`
}

exports.premium = (prefix) => {
	return`This feature is only for premium users!
Upgrade to premium first my boss
If interested contact my owner
Type : ${prefix}owner`
}

exports.rediregis = () => {
	return`*You have verified :)*`
}

exports.stikga = () => {
	return`*「FAILED」Try replying / re-tag sis*`
}

exports.linkga = () => {
	return`*Sorry! The link is not valid*`
}

exports.groupo = () => {
	return`*FOR GROUPS ONLY*`
}

exports.ownerb = () => {
	return`*FOR OWNER ONLY*`
}

exports.ownerg = () => {
	return`*Owner-owned group only*`
}

exports.admin = () => {
	return`*ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*BOTS MUST BE ADMIN*`
}

exports.bug = () => {
	return`*The problem has been reported to the BOT owner, fake reports will not be responded to*`
}

exports.wrongf = () => {
	return`*Where's the text?*`
}

exports.clears = () => {
	return`*Success boss*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 Congratulations 」*
\`\`\`➸ Name : ${pushname}\`\`\`
\`\`\`➸ Number : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*Sorry ${pushname} Today's limit is over*
*Limit is reset every 24:00 hours*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 20K: 1 Month\`\`\`
\`\`\`If interested, please contact the owner\`\`\`
\`\`\`Send orders : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
remaining your limit : ${isPrem ? '9999' : `${limitCounts}`}

Upgrade premium my boss, let's be free to use bots`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAME : ${pushname}
┃│➸ NOUMBER : ${sender.split("@")[0]}
┃│➸ MONEY : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONATE*
Panda : Wa.me/+94701224462
Website : https://panda-scr.blogspot.com

Donate to keep the bot updated & Active`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return` 「 *ADVERTISEMENT ${botName}* 」
──────────────────────────────
◯ *RENT LIST & CREATE BOTS :*
◯ *RENT : 25K/GROUP (MONTH)*
◯ *CREATE: 100K (CAN BE OWNER)*
◯ *PAYMENT CAN THROUGH:*
──────────────────────────────
*BENEFITS OF RENTING BOTS :*

*1. CAN ADD BOTS TO GROUP*
*2. CAN USE PREMIUM FEATURES*
──────────────────────────────
*ADVANTAGES FOR BOTS :*

*1. CAN BECOME YOUR OWN BOT OWNER*
*2. CAN CHANGE YOUR OWN BOT NAME*
*3. CAN BRING BOT TO GROUP*
*4. CAN USE THE COMMAND OWNER*
*5. CAN RENT BOTS BACK*
──────────────────────────────
──────────────────────────────
◯ *Wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}
