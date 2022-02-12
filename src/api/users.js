import client from './client';

const url = {
  create: '/users/'
};

function createUser(data) {
  return client.post(url.create, data);
}

export default { createUser };
