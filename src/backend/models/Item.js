import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bought: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

export default Item;
