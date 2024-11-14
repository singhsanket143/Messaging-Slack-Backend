import express from 'express';

import {
  addMemberToworkspace,
  createChannel,
  createWorkspace,
  getWorkspaceByJoinCode,
  getWorkspaceByMemberId
} from '../../controllers/WorkspaceController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';

const app = express.Router();

app.post('/create', isAuthenticated, createWorkspace);
app.post('/chennel/:workspaceId', createChannel);
app.get('/joincode/:joinCode', getWorkspaceByJoinCode);
app.get('/member/:memberId', getWorkspaceByMemberId);
app.post('/:workspaceId', addMemberToworkspace);

export default app;
