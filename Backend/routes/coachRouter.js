import express from 'express';
import { createTeam } from '../controllers/coachController.js';

const router = express.Router();

router.post('/coach');
router.post('/teams', createTeam)

export default router