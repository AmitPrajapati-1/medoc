import { Request,Response } from "express";
import Sample  from "../models/sample";
export const createSample = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    try {
        const newSample = new Sample({ name, description });
        await newSample.save();
        res.status(201).json(newSample);
    } catch (error) {
        console.error('Error creating sample:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const markcollected= async (req: Request, res: Response) => {
    const sample=await Sample.findByIdAndUpdate(req.params.id,{
        collectionAt: new Date(),
        status: 'completed'
    },{new: true});
    res.json(sample);
}
export const getsample =async (req: Request, res: Response) => {
    const {agentId}= req.params;
    const filters: any = { agentId };
    if(req.query.status) {
        filters.status = req.query.status;
    }
    if(req.query.date) {
    const date = new Date(req.query.date as string);
    filters.scheduledAt = { $gte: date, $lt: new Date(date.getTime() + 86400000) };
  }
  const samples = await Sample.find(filters).populate('hospitalId').populate('agentId');
    res.json(samples);
}
export const delayedSample = async (req: Request, res: Response) => {
    const sample=await Sample.findByIdAndUpdate(req.params.id, {
        status: 'Delayed',
        notes: req.body.notes || 'Sample collection delayed'
    },{new: true});
    res.json(sample);
}
