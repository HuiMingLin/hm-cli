const minimist = require('minimist')
const error = require('./utils/error');

module.exports = () => {
  const args = minimist(process.argv)
  let cmd = args._.slice(2)[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  } 

  console.log('Welcome to the hm cli!')
  // console.log(args)

  switch(cmd) {
    case 'today':
      require('./cmds/today')(args)
      break
    case 'version':
      require('./cmds/version')(args)
      break
    case 'help':
      require('./cmds/help')(args)
      break
    case 'forecast': 
      require('./cmds/forecast')(args)
      break
    default:
      error(`"${cmd}" is not a valid command!`, true)
      break
  }
}