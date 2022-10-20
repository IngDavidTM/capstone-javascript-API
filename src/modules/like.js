import { projectID, baseLink } from './getComments.js';

const likesLink = `${baseLink}${projectID}/likes/`;

export const addLikeToItem = async (itemId) => {
  const request = new Request(likesLink);
  const response = await fetch(request, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    body: JSON.stringify({ item_id: `${itemId}` }),
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getLikesToItems = async () => {
  const response = await fetch(likesLink);
  const data = await response.json();
  return data;
};