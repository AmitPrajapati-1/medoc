import { Router } from "express";
import { createSample,markcollected,getsample,delayedSample } from "../controllers/sample";
import {authenticateToken} from "../middleware/auth";
const router = Router();
router.post('/create', authenticateToken, createSample);
router.put('/markcollected/:id', authenticateToken, markcollected);
router.get('/getsample/:agentId', authenticateToken, getsample);
router.put('/delayed/:id', authenticateToken, delayedSample);
export default router;