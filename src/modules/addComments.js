import getComments from './getComments.js';
import numberOfComments from './counterFileComments.js';

const addComment = async (index, name, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JGerHk43c1Y5J5m1thia/comments', {
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
  numberOfComments();
};

export default addComment;