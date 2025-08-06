import { Request,Response } from "express";
import Agent from "../models/agent";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const agent = await Agent.findOne({ email });
        if (!agent) {       
            return res.status(404).json({ message: 'Agent not found' });
        }
        const isMatch = await bcrypt.compare(password, agent.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: agent._id, email: agent.email }, process.env.JWT_SECRET || 'defaultsecret',{expiresIn: '1h'});
        res.status(200).json({ token});
    } catch (error) {       
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    } 
};
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, password } = req.body;
    const existingAgent = await Agent.findOne({ email });
    if (existingAgent) {
      return res.status(400).json({ message: 'Agent already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const agent = await Agent.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: agent._id }, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });

    res.status(201).json({
      message: 'Agent registered successfully',
      token,
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};