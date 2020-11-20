<template>
  <form>

    用户名：<el-input type="text" v-model="registerForm.username" placeholder="请输入用户名"></el-input>
    <br><br>
    密&nbsp&nbsp&nbsp码：<el-input v-model="registerForm.password" placeholder="请输入密码" show-password></el-input>
    <br><br>
    性&nbsp&nbsp&nbsp别：
    <el-radio-group v-model="registerForm.gender">
      <el-radio-button type="radio" label="0">男</el-radio-button>
      <el-radio-button type="radio" label="1">女</el-radio-button>
    </el-radio-group>
    <br><br>
    年龄：<el-input type="text" v-model="registerForm.age" placeholder="请输入年龄"></el-input>
    <br><br>
    身份：
    <el-select v-model="registerForm.identity">
      <el-option disabled value="">请选择</el-option>
      <el-option value="学生">学生</el-option>
      <el-option value="前端开发">前端开发</el-option>
      <el-option value="后端开发">后端开发</el-option>
    </el-select>
    <br><br>
    邮箱：<el-input type="email" v-model="registerForm.email" placeholder="请输入电子邮箱"></el-input>
    <br><br>
    <el-button type="primary" v-on:click="register">注册</el-button>

  </form>
</template>

<script>
import Index from "./Index";

export default {
  name: "Register",
  components: {Index},
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        gender: '0',
        age: '',
        identity: ''
      },
      result: [],
    }
  },
  methods: {
    register() {
      this.$axios.post('/api/register', {
        username: this.registerForm.username,
        password: this.registerForm.password,
        // sex: this.getSex().value
        gender: this.registerForm.gender,
        age: this.registerForm.age,
        identity: this.registerForm.identity
      })
        .then(res => {
          if (res.data.code === 20001) {
            this.$message({
              message: '注册成功！',
              type: 'success'
            })
            this.$router.replace({path: '/login'})
          } else {
            this.$message.error('注册失败，请重试！')
          }
        })
    }
  }
}

</script>

<style scoped>

</style>


