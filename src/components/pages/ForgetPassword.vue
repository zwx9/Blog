<template>
  <div>
    <!--邮箱默认显示在输入框中，置灰不可修改-->
    发送验证的邮箱：<label>
    <input type="text" v-model="forgetForm.email" />

    <br><br>
    验证码：<el-input type="text" maxlength="4" v-model="forgetForm.checkCode" placeholder="请输入验证码" show-word-limit></el-input>
    <br><br>
  </label>
    <!--验证码在此处输入（倒计时后续再做）-->
    <button v-on:click="sendMail">发送验证码</button>
  </div>
</template>

<script>
export default {
  name: "ForgetPassword",
  data(){
    return{
      forgetForm:{
        checkCode: '',
        email: ''
      },
      result: []
    }
  },
  methods:{
    sendMail(){
      this.$axios
        .post('api/forgetPassword',{
        email: this.forgetForm.email
      })
        .then(res => {
        if (res.data.code === 20002){
          this.$router.replace({path:'/login'})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
