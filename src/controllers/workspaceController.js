import { StatusCodes } from 'http-status-codes';

import { createWorkspaceService } from '../services/workspaceService.js';
import { successResponse } from '../utils/common/responseObjects.js';
import { handleCallback } from '../utils/common/tryCatchWrapper.js';

export const createWorkspace = handleCallback(async (req, res) => {
  const { name, description } = req.body;
  const user = req.user;
  console.log(user);

  const workspace = await createWorkspaceService({
    name: name,
    description: description,
    user: user
  });
  return res
    .status(StatusCodes.CREATED)
    .json(successResponse(workspace, 'Workspace created successfully'));
});
