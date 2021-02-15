import { request } from 'umi';

export const getRemoteList = async () => {
  return request('/api/users', {
    method: 'get',
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const postRemoteList = async ({ values, id }) => {
  // call那部分是传入的对象，所以使用的时候按照对象的使用来
  request(`/api/users/${id}`, {
    method: 'put',
    data: values,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
