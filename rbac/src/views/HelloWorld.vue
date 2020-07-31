<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <ul>
      <li><router-link to="/">Home 主界面</router-link></li>
      <li><router-link to="/login">Login 登录界面</router-link></li>
      <li><router-link to="/register">Register 注册界面</router-link></li>
      <li><router-link to="/RoleManage">Role Manager 角色管理界面</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是导航栏'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background: #222;
    padding: 6px;
    text-align: center;
}
</style>
