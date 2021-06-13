// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '@/backend/mongoose';
import Item from '@/backend/models/Item';

const handler = async (req, res) => {
  const { body, method } = req;

  switch (method) {
    case 'GET':
      try {
        const items = await Item.find({});
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json(error.message);
      }
      break;

    case 'POST':
      try {
        const newItem = await Item.create(body);
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json(error.message);
      }
      break;

    default:
      res.status(422).json('req_method_not_supported');
      break;
  }
};

export default dbConnect(handler);
