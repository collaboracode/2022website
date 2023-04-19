export default function handler(req, res) {
    const { pid } = req.query
    res.status(200).json( {id: 1, author: 'collabadmin', title: 'First Post', channel: 'main', content: 'I am not sure I have anything to say.'})
  }
