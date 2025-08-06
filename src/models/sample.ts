import { Schema, model }  from 'mongoose';
import hospital from './hospital';
const sampleSchema = new Schema({
    hospitalID: { type: Schema.Types.ObjectId, ref: 'Hospital', required: true },
    agentID: { type: Schema.Types.ObjectId, ref: 'Agent', required: true },
    patientName: { type: String, required: true },
    scheduleAt: { type: Date, required: true },
    collectionAt: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
    notes: String,
},{
    timestamps: true
}
);
export default model('Sample', sampleSchema);
