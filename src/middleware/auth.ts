import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401).json({ message: 'Access token is missing' });
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'defaultsecret');
        (req as any).user = decoded;
        next();
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.sendStatus(403).json({ message: 'Invalid token' });
    }

    
}