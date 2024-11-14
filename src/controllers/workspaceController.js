import { StatusCodes } from 'http-status-codes';

import {
  addChannelToWorkspaceService,
  addMemberToWorkspace,
  createWorkspaceService,
  fetchAllWorkspaceByMemberId,
  getWorkspaceByJoinCodeService
} from '../services/workspaceService.js';
import { successResponse } from '../utils/common/responseObjects.js';
import { handleCallback } from '../utils/common/tryCatchWrapper.js';

export const createWorkspace = handleCallback(async (req, res) => {
  const { name, description } = req.body;
  const user = req.user;
  const workspace = await createWorkspaceService({
    name: name,
    description: description,
    user: user
  });
  return res
    .status(StatusCodes.CREATED)
    .json(successResponse(workspace, 'Workspace created successfully'));
});

export const createChannel = handleCallback(async (req, res) => {
  const { workspaceId } = req.params;
  const { name } = req.body;
  const channel = await addChannelToWorkspaceService(workspaceId, name);
  return res
    .status(StatusCodes.CREATED)
    .json(successResponse(channel, 'Channel created successfully'));
});

export const addMemberToworkspace = handleCallback(async (req, res) => {
  const { workspaceId } = req.params;
  const { username } = req.body;
  const workspace = await addMemberToWorkspace(workspaceId, username);
  return res
    .status(StatusCodes.CREATED)
    .json(successResponse(workspace, 'Member added successfully'));
});

export const getWorkspaceByJoinCode = handleCallback(async (req, res) => {
  const { joinCode } = req.params;
  const workspace = await getWorkspaceByJoinCodeService(joinCode);
  return res
    .status(StatusCodes.CREATED)
    .json(successResponse(workspace, 'Workspace found successfully'));
});

export const getWorkspaceByMemberId = handleCallback(async (req, res) => {
  const { memberId } = req.params;
  const workspace = await fetchAllWorkspaceByMemberId(memberId);
  return res
    .status(StatusCodes.CREATED)
    .json(successResponse(workspace, 'Workspace found successfully'));
});
