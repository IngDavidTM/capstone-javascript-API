import getComments, { projectID, baseLink } from './getComments.js';

const addComment = async (index, name, comment) => {
  await fetch(`${baseLink}${projectID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `item${index}`,
      username: name,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await getComments(index);
};

export default addComment;