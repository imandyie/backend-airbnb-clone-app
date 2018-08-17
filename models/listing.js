import mongoose from 'mongoose';

var listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

export default mongoose.model('Listing', listingSchema);
