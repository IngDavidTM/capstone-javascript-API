import { involvementCommentsEndpoint, involvementLikesEndpoint } from '../constants/api.js';

const likesEndpoint = involvementLikesEndpoint();
const commentsEndpoint = involvementCommentsEndpoint();

export const getLikes = async () => {
  const response = await fetch(likesEndpoint);
  if (!response.ok) {
    throw new Error('Unable to fetch likes');
  }
  const data = await response.json();
  return Array.isArray(data) ? data : [];
};

export const postLike = async (itemId) => {
  const response = await fetch(likesEndpoint, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${itemId}` }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Unable to register like');
  }
  return response;
};

export const getComments = async (itemId) => {
  const response = await fetch(`${commentsEndpoint}?item_id=${itemId}`);
  if (!response.ok) {
    throw new Error('Unable to fetch comments');
  }
  const data = await response.json();
  return Array.isArray(data) ? data : [];
};

export const postComment = async (itemId, username, comment) => {
  const response = await fetch(commentsEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error('Unable to add comment');
  }
  return response;
};
