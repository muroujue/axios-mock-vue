<template>
  <div class="login">
    <el-form class="login-container" ref="AccountForm" :model="account" :rules="loginRules" label-position="left">
      <h1>Login</h1>
      <el-form-item prop="username">
        <el-input v-model="account.username" type="text" placeholder="账号">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="account.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked>记住密码</el-checkbox>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="handleLogin" :loading="logining">login</el-button>
        <el-button type="info" @click.native.prevent="reset">reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      checked: true,
      logining: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.AccountForm.validate(async valid => {
        if (valid) {
          this.logining = true
          let loginParams = {
            username: this.account.username,
            password: this.account.password
          }
          let config = {
            method: 'post',
            url: '/user/login',
            data: loginParams
          }
          let { data: loginData } = await this.$axios(config)
          if (loginData.code === 1) {
            this.$cookies.set('token', loginData.token)
            this.$router.push('/admin')
          } else {
            this.$message.error('登录失败')
          }
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    reset() {
      this.$refs.AccountForm.resetFields()
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 15px 0 20px;
  font-size: 22px;
}
.login {
  height: 70vh;
  display: flex;
  align-items: center;
}
.login-container {
  width: 350px;
  margin: 0 auto;
  background: #f5faff;
  box-sizing: border-box;
  padding: 10px 30px;
  border-radius: 5px;
}
.el-form-item {
  margin-top: 20px;
}
.el-button {
  width: 45%;
  box-sizing: border-box;
}
</style>
