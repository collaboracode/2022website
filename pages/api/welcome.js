export default function newPersonFormSubmit(req, res) {
  console.log(JSON.stringify(req.body))
  console.log(req.body.name)
  let message = "\n---\n"

  message += `**Name**: ${req.body.name}\n`
  message += `**Discord**: ${req.body.discord}\n`
  message += `**Email**: ${req.body.email}\n`
  message += `**HTML**: ${req.body.html}\n`
  message += `**JavaScript**: ${req.body.javascript}\n`
  message += `**React**: ${req.body.react}\n`
  message += `**Other**:\n${req.body.other}\n`

  const params = {
    method: "POST",
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({content: message})
  }
  
  fetch(process.env.DISCORD_URL, params)
  res.status(200).json({message: "hello, world", request: req.body})
}