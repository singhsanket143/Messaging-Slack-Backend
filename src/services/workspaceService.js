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
