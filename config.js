import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['16362439088', 'kinfux digital', true],
  ['254110377776', 'kinflux digital', true], 
  ['556199740980'] 
  ['2349067458490'] 'kinflux digital', true], 
] //Number of owners

global.mods = ['16362439088','254110377776','556199740980','2349067458490']
global.prems = ['22589747147', '254110377776', '556199740980','2349067458490']
global.allowed = ['556199740980', '254110377776', '13374230362','2349067458490']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'kinflux bot god'
global.premium = 'true'
global.packname = 'kinflux ┃ᴮᴼᵀ' 
global.author = 'kinflux digital' 
global.igfg = '▢ Follow on Instagram\nhttps://chat.whatsapp.com/BLjStbNJvG2H7Z3hlDmv28\n' 
global.dygp = 'https://chat.whatsapp.com/BLjStbNJvG2H7Z3hlDmv28'
global.fgsc = 'https://github.com/diggilly/kinflux-bot' 
global.fgyt = 'https://chat.whatsapp.com/BLjStbNJvG2H7Z3hlDmv28'
global.fgpyp = ''
global.fglog = 'https://raw.githubusercontent.com/diggilly/kinflux-bot/main/Guru.jpg' 


global.wait = '*⌛ _kinflux bot loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '4' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
