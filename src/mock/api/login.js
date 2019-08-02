import users from './../data/users'
let login = (config) => {
    console.log('**********')
    console.log(config.data)
    let {
        username,
        password
    } = JSON.parse(config.data);
    return new Promise((resolve, reject) => {
        // 先创建一个用户为空对象
        try {
            let token = null;
            // 判断模拟的假数据中是否有和传过来的数据匹配的
            let hasUser = users.some(person => {
                // 如果存在这样的数据
                if (person.username === username && person.password === password) {
                    token = person.token;
                    return true;
                } else {
                    return false
                }
            });
            if (hasUser) {
                resolve([200, {
                    code: 1,
                    msg: '登录成功',
                    token: token
                }]);
            } else {
                resolve([200, {
                    code: -1,
                    msg: '账号错误'
                }])
            }
        } catch (err) {
            console.log(err)
            reject()
        }
    })
}
export default login