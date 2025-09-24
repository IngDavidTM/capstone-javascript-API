import { getLikes, postLike } from '../api/involvementApi.js';

export const fetchLikesSnapshot = async () => {
  try {
    return await getLikes();
  } catch (error) {
    return [];
  }
};

export const registerLike = async (itemId) => {
  await postLike(itemId);
};
