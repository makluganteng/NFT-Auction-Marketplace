import axios from 'axios'


// export default async (req, res) => {
//     if(req.method === 'POST'){
//         const tokenId = req.body.tokenid
//         const startingPrice = req.body.startingPrice
//         const hours = req.body.hours
//         try{
//             const createResponse = await axios.post(`http://34.126.88.235:3030/auction/list`,{
//                 token_id: tokenId,
//                 startingPrice: startingPrice,
//                 hours: hours
//             })
//     if (req.method === 'GET') {
//         const createResponse = await axios.get(
//           `http://34.126.88.235:3030/auction/isListed`,
//         )

//         if (createResponse && createResponse.data) {
//           res.statusCode = 200
//           res.json({ ...createResponse.data })
//         } else {
//           res.statusCode = 500
//           res.json({ error: 'Something went wrong' })
//         }
//       }
//      } catch (error) {
//         res.statusCode = 500

//         if (error.response.status === 403) {
//           res.statusCode = 403
//         }
//         res.json({ error })
//       }
//     }
//   }

export default async (req: any, res: any) => {
  if (req.method === 'POST') {
    const tokenId = req.body.tokenid
    const startingPrice = req.body.startingPrice
    const hours = req.body.hours
    try {
      const createResponse = await axios.post(`http://34.126.88.235:3030/auction/list`, {
        token_id: tokenId,
        startingPrice: startingPrice,
        hours: hours
      })

      if (createResponse && createResponse.data) {
        res.statusCode = 200
        res.json({ ...createResponse.data })
      } else {
        res.statusCode = 500
        res.json({ error: 'Something went wrong' })
      }
    } catch (error: any) {
      res.statusCode = 500

      if (error.response.status === 403) {
        res.statusCode = 403
      }
      res.json({ error })
    }
  }

  if (req.method === 'GET') {
    try {
      const createResponse = await axios.get(`http://34.126.88.235:3030/auction/isListed`)

      if (createResponse && createResponse.data) {
        res.statusCode = 200
        res.json({ ...createResponse.data })
      } else {
        res.statusCode = 500
        res.json({ error: 'Something went wrong' })
      }
    } catch (error: any) {
      res.statusCode = 500

      if (error.response.status === 403) {
        res.statusCode = 403
      }
      res.json({ error })
    }
  }


}