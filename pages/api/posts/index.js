export default function handler(req, res) {
  

    res.status(200).json([
                    { id: 1, author: 'collabadmin', title: 'First Post', channel: 'main', content: 'I am not sure I have anything to say.'}, 
                    { id: 2, author: 'guest', title: 'Second Post', channel: 'main',  content: 'This is a great second article. I think you all will love this very much.'}
                ]);
  }