import client from './client';

const url = {
  login: '/auth/'
};

function login(data) {
  return client.post(url.login, data);
}

export default { login };
