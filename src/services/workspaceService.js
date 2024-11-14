import workspaceRepository from '../repositories/workspaceRepository.js';
import { joinCodeGenerator } from '../utils/common/joinCode.js';

export const createWorkspaceService = async (data) => {
  const joinCode = joinCodeGenerator();
  const workspace = await workspaceRepository.create({
    name: data.name,
    description: data.description,
    joinCode: joinCode,
    channels: [],
    members: [{ user: data.user, role: 'admin' }]
  });
  return workspace;
};

export const addChannelToWorkspaceService = async (
  workspaceId,
  channelName
) => {
  const workspace = await workspaceRepository.addChannelToWorkspace(
    workspaceId,
    channelName
  );
  return workspace;
};

export const addMemberToWorkspace = async (workspaceId, username) => {
  const workspace = await workspaceRepository.addMemberToWorkspace(
    workspaceId,
    username
  );
  return workspace;
};
