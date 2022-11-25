import axios from "axios"

export default async (req, res) => {
    if (req.method === 'GET') {
      const id = req.query
      try {
        const StatusResponse = await axios.get(`http://localhost:3030/auction/isListed/${id}`)
        if (StatusResponse && StatusResponse.data) {
          res.statusCode = 200
          res.json({ ...StatusResponse.data })
        } else {
          res.statusCode = 500
          res.json({ error: 'Something went wrong' })
        }
      } catch (error) {
        res.statusCode = 500
        res.json({ error })
      }
    }
  }
  