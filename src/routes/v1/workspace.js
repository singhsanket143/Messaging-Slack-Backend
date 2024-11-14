import express from 'express';

import { createWorkspace } from '../../controllers/WorkspaceController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';

const app = express.Router();

app.post('/create', isAuthenticated, createWorkspace);

export default app;
