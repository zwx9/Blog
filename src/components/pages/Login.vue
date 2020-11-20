
<!--<script src="https://unpkg.com/element-ui/lib/index.js"></script>-->
<template>
  <!-- 引入样式 -->
<!--  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">-->
  <!-- 引入组件库 -->

  <div>
    用户名:<el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" ></el-input>
    <br><br>
    密&nbsp&nbsp&nbsp码:<el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
    <br><br>
    <el-button type="primary" v-on:click="login">登录</el-button>
    <br><br>
    <el-link href="http://localhost:8080/#/register">还没有账户？去注册</el-link>
    <br><br>
    <el-link href="http://localhost:8080/#/forgetPassword">忘记密码？</el-link>

  </div>


</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      loginForm:{
        username: '',
        password: ''
      },
      result: []
    }
  },
  methods: {
    login() {
      this.$axios
        .post('api/login',{
        username: this.loginForm.username,
        password: this.loginForm.password
      })
        .then(res => {
          if (res.data.code === 20000){
            this.$message({
              message: '登录成功，即将跳转...',
              type: 'success'
            })
            this.$router.replace({path:'/index'})
          }
          else {
            if (res.data.code === 40001){
              /*弹窗提示，页面刷新*/
              // window.alert(res.data.message)
              this.$message.error('用户名或密码错误！')
            }
          }
        })
        .catch(failResponse => {
        })
    }
  }

}
</script>

<style scoped>

</style>
