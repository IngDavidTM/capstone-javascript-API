import { getComments, postComment } from '../api/involvementApi.js';

export const fetchCommentsForItem = async (itemId) => {
  try {
    return await getComments(itemId);
  } catch (error) {
    return [];
  }
};

export const submitCommentForItem = async (itemId, username, comment) => {
  await postComment(itemId, username, comment);
};
