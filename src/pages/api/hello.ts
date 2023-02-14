import type { NextApiRequest, NextApiResponse } from 'next';

interface Name {
  name: string;
}

const handler = (_req: NextApiRequest, res: NextApiResponse<Name>) => {
  res.status(200).json({ name: 'John Doe' });
};

export type { Name };
export default handler;
