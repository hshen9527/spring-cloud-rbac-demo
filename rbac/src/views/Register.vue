<template>
    <div class="translateCenter">
        <el-form class="login-container" v-model="registerForm">
            <h1 class="title">用户注册</h1>
            <el-form-item label="">
                <el-input type="text" v-model="registerForm.username" placeholder="你的账号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input type="password" v-model="registerForm.password" placeholder="你的密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-select v-model="registerForm.position" placeholder="请选择你的职位" style="width: 100%"> 
              <el-option v-for="item in position" :key="item.value"
               :label="item.label"
               :value="item.value">
              </el-option>
            </el-select>
            <el-divider></el-divider>
            <el-form-item>
                <el-button type="primary" style="width: 100%;" @click="onSubmit()">提交</el-button>
            </el-form-item>
            <el-row style="text-align: center; margin-top: -10px;;">
                <el-link type="primary" @click="onLogin()">已有账号?前去登录</el-link>
            </el-row>
        </el-form>
        <div>
            <router-link to="/">Home 主界面</router-link>
        </div>
    </div>
</template>

<script>
export default {
 // 数据区
    data()  {
        return {
            registerForm: {
                username: "",
                password: "",
                position: ""
            },
           // position 可以通过钩子方法获得
            position: []
            // position: [{
            //     value: 'employee',
            //     label: '员工'
            //   },
            //   {
            //     value: 'manager',
            //     label: '经理'
            //   },
            //   {
            //      value: 'boss',
            //     label: '老板'
            //   }
            // ]
        }
    },
    // 方法区
    methods: {
        onSubmit: function(){
            // 请求参数
            var params = {
                "username": this.registerForm.username,
                "password": this.registerForm.password,
                "position": this.registerForm.position
              }
            // 发送请求
            this.$ajax.post('http://localhost:8080/register', params)
            .then(function(res){
              alert("请求结果为:" + res.data)
            })
            .catch(err=>console.log("请求失败"))
        },
        onLogin: function(){
            this.$router.push({path:'/login'})
        }
    },
    
    // Vue生命周期--钩子函数
    created: function(){
      // 在ajax的success函数中，this的指向不再是vue的实例
      // 解决办法可以先把this保存起来
      var that = this
      this.$ajax.get('http://localhost:8080/RoleList')
      .then(function(res){
          that.position = res.data
      })
      .catch(err=>console.log("请求失败"))
    }
}
</script>

<style scoped>
.translateCenter{ 
    width: 23%; 
    height: 50%; 
    position: absolute;
    left:50%; 
    top:50%;
    transform:translate(-50%,-50%);            
}

.login-container{
    width: 100%;
    max-width: 300px;
    margin: 40 auto;
    padding: 0 20px;
}

.title{
    text-align: center;
}

</style>
</style>>
