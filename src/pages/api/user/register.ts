import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "@/lib/firebase/service";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    await signUp(req.body, (status: boolean) => {
      if (status) {
        res.status(200).json({
          status: true,
          message: 'users ok!'
        })
      } else {
        res.status(500).json({
          status: false,
          message: 'Failed'
        })
      }
    })
  } else {
    res.status(405).json({
      status: false,
      message: 'Method not allowed'
    })
  }
}