const menus = {
  main: `
    hm-cli [command] <options>

    today ················ show weather for today
    forecast ············· show 10-day weather forecast
    version ·············· show package version
    help ················· show help menu for a command
  `,

  today: `
    hm-cli today <options>

    --location "fuzhou fujian zh" ..... the location to use
  `,

  forecast: `
    hm-cli forecast <options>

    --location "fuzhou fujian zh" ..... the location to use
  `
}

module.exports = (args) => {
  const cmd = args._.slice(2)

  const subCmd = cmd[0] === 'help' ? cmd[1] : cmd[0]
  
  console.log(menus[subCmd] || menus.main)
}