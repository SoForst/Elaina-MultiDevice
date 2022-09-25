import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import moment from 'moment-timezone'

/*Oᴡɴᴇʀ number*/
global.owner = [
  ['6285932251730', '️One', true],
  ['6285932251730', '️Two', true],
  ['6285932251730', '️Three', true],
  ['6285932251730', '️Four', true],
  ['6285932251730', '️Five', true],
  ['6285932251730', '️Six', true],
  ['6285932251730', '️Seven', true],
  ['6285932251730', '️Eight', true],
  ['6285932251730', '️Nine', true],
  ['6285932251730', '️Teen', true]
]
global.mods = []
global.prems = []
global.girlfren = []

/*Website*/
global.APIs = {
 amel : 'https://melcanz.com',
 bg : 'http://bochil.ddns.net',
 bsbt : 'https://rest-beni.herokuapp.com',
 bx : 'https://bx-hunter.herokuapp.com',
 dhnjing : 'https://dhnjing.xyz',
 dzx : 'https://api.dhamzxploit.my.id',
 erdwepe : 'https://erdwpe-api.herokuapp.com',
 fdci : 'https://api.fdci.se',
 hardianto : 'https://hardianto.xyz',
 jonaz : 'https://jonaz-api-v2.herokuapp.com',
 LeysCoder : 'https://leyscoders-api.herokuapp.com',
 lolhuman : 'https://api.lolhuman.xyz',
 neoxr : 'https://api.neoxr.my.id',
 nrtm : 'https://nurutomo.herokuapp.com',
 nzcha : 'http://nzcha-apii.herokuapp.com',
 pencarikode : 'https://pencarikode.xyz',
 violetics : 'https://violetics.pw',
 xteam : 'https://api.xteam.xyz',
 zahir : 'https://zahirr-web.herokuapp.com',
 zekais : 'http://zekais-api.herokuapp.com',
