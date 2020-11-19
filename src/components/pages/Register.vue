<template>
  <div>
    用户名：<input type="text" v-model="registerForm.username" placeholder="请输入用户名"/>
    <br><br>
    密&nbsp&nbsp&nbsp码：<input type="password" v-model="registerForm.password" placeholder="请输入密码"/>
    <br><br>
    性&nbsp&nbsp&nbsp别：
      <input v-model="registerForm.gender" type="radio" value="0" />男  <!-- @change="getSex"-->
      <input v-model="registerForm.gender" type="radio" value="1" @change="getSex"/>女
      <br><br>
    年龄：<input type="text" v-model="registerForm.age" placeholder="请输入年龄"/>
    <br><br>
    身份：
    <select v-model="registerForm.identity">
      <option disabled value="">请选择</option>
      <option>学生</option>
      <option>前端开发</option>
      <option>后端开发</option>
    </select>
    <br><br>
    邮箱：<input type="email" v-model="registerForm.email" placeholder="请输入电子邮箱"/>

    <button v-on:click="register">注册</button>

  </div>
</template>

<script>
import Index from "./Index";
export default {
  name: "Register",
  components: {Index},
  data(){
    return{
      registerForm:{
        username: '',
        password: '',
        gender: '0',
        age: '',
        identity: ''
      },
      result: [],
    }
  },
  methods:{
    getSex(){
      this.gender
    },
    register(){
      this.$axios.post('/api/register',{
        username: this.registerForm.username,
        password: this.registerForm.password,
        // sex: this.getSex().value
        gender: this.registerForm.gender,
        age: this.registerForm.age,
        identity: this.registerForm.identity
      })
      .then(res =>{
        if (res.data.code === 20001){
          this.$router.replace({path:'/login'})
        }
        else {
          window.alert("注册失败，请重试！")
        }
      })
    }
  }
}

</script>

<style scoped>

</style>


