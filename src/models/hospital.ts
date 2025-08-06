import { Schema, model }  from 'mongoose';
const hospitalSchema = new Schema({
  name: { type: String, required: true },
  address: String,
  contact: String
})
export default model('Hospital', hospitalSchema);