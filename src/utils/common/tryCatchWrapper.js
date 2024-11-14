import { StatusCodes } from 'http-status-codes';

import {
  customErrorResponse,
  internalErrorResponse
} from './responseObjects.js';

export const handleCallback = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      console.log('Error in tryCatchWrapper', error);

      if (error.statusCode) {
        return res.status(error.statusCode).json(customErrorResponse(error));
      }
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
  };
};
