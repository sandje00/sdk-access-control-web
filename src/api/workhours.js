import client from './client';

const url = {
  getAll: '/dates/'
};

function getAllWorkHours() {
  return client.get(url.getAll);
}

export default { getAllWorkHours }
