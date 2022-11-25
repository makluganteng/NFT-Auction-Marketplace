import axios from 'axios'


export default async (req, res) => {
    if(req.method === 'POST'){
        const tokenId = req.body.tokenId
        const startingPrice = req.body.startingPrice
        const hours = req.body.hours
        try{
            const createResponse = await axios.post(`http://localhost:3030/auction/list`,{
                token_id: tokenId,
                startingPrice: startingPrice,
                hours: hours
            })
        }catch(error){

        }
    }
    if (req.method === 'GET') {
      try {
        const createResponse = await axios.get(
          `http://localhost:3030/auction/isListed`,
        )
  
        if (createResponse && createResponse.data) {
          res.statusCode = 200
          res.json({ ...createResponse.data })
        } else {
          res.statusCode = 500
          res.json({ error: 'Something went wrong' })
        }
      } catch (error) {
        res.statusCode = 500
  
        if (error.response.status === 403) {
          res.statusCode = 403
        }
        res.json({ error })
      }
    }
  }