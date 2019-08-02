# axios-mock-vue
#### 安装包
- npm i axios --save
- npm i mockjs --save-dev
- npm i axios-mock-adapter --save-dev

#### 关键代码
##### mock/api/index.js
```
// 通过axios-mock-adapter生成代理api地址
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import login from './login'

export default {
    init() {
        let mock = new MockAdapter(axios);
        // mock success request  模拟成功请求
        mock.onGet('/success').reply(200, {
            msg: 'success'
        });
        // mock error request  模拟失败请求
        mock.onGet('/error').reply(500, {
            msg: 'fail'
        })
        // login 模拟登录接口
        mock.onPost('/user/login').reply(login);
    }
}
```
##### main.js
```
import Mock from './mock/api'
Mock.init()
```

