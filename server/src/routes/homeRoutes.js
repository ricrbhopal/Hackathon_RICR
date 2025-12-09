import express from 'express';
import { getAllThemes,ContactUS } from '../controller/homeController.js';

const router = express.Router();
router.get('/', getAllThemes);
router.post('/contact',ContactUS)

export default router;