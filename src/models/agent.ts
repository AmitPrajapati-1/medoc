import { Schema, model }  from 'mongoose';
const AgentSchema = new Schema({
    name: { type: String, required: true },
    phone: String,
    email:{type: String, required: true, unique: true},
    password: { type: String, required: true },
})
export default model('Agent', AgentSchema);
