// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '@/backend/mongoose';
import Item from '@/backend/models/Item';

const handler = async (req, res) => {
  const {
    body,
    method,
    query: { itemId },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const item = await Item.findById(itemId);
        res.status(200).json(item);
      } catch (error) {
        res.status(500).json(error.message);
      }
      break;

    case 'PATCH':
      try {
        const updatedItem = await Item.findByIdAndUpdate(itemId, body, { new: true });
        res.status(200).json(updatedItem);
      } catch (error) {
        res.status(500).json(error.message);
      }
      break;

    case 'DELETE':
      try {
        await Item.findByIdAndDelete(itemId);
        res.status(204).json();
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
