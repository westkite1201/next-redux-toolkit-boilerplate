import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  try {
    console.log('frogs API QUERY ', query);
    // const response = await axios.get('http://localhost:3001/frogs', {
    //   headers,
    // })
    const response = {
      data: {
        hits: [`hello - test ${query.id}`]
      }
    };
    res.status(200).json(response.data);
  } catch ({ response: { status, data } }) {
    res.status(status).json(data);
  }
};
