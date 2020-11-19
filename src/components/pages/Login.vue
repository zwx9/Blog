<template>
  <div>
    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    <br><br>
    密&nbsp&nbsp&nbsp码:<input type="password" v-model="loginForm.password" placeholder="请输入密码" />
    <br><br>
    <button v-on:click="login">登录</button>
    <br><br>
    <a href="http://localhost:8080/#/register">还没有账户？去注册</a>
    <br><br>
    <a href="http://localhost:8080/#/forgetPassword">忘记密码？</a>

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
            this.$router.replace({path:'/index'})
          }
          else {
            if (res.data.code === 40001){
              /*弹窗提示，页面刷新*/
              window.alert(res.data.message)
              // 强制刷新
              location.reload()
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
