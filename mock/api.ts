export default {
  // 支持值为 Object 和 Array
  'GET /api/users': {
    "data": [
      {
        "id": 1,
        "name": "Vera",
        "email": "zhang2@yahoo.com",
        "create_time": "2020-04-13T14:17:47Z",
        "update_time": "2020-04-13T14:17:47Z",
        "status": "beforeExit"
      },
      {
        "id": 2,
        "name": "Mar",
        "email": "zhang1@test.com",
        "create_time": "2020-04-13T13:58:08Z",
        "update_time": "2020-04-13T13:58:08Z",
        "status": "safe"
      },
      {
        "id": 3,
        "name": "Test",
        "email": "zhang1@test.com",
        "create_time": "2020-04-13T13:58:08Z",
        "update_time": "2020-04-13T13:58:08Z",
        "status": "unsafe"
      }
    ],
    "meta": {
      "total": 2,
      "per_page": 10,
      "page": 1
    }
  },
  // GET 可忽略
  '/api/users/1': { id: 1 },
  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
}
