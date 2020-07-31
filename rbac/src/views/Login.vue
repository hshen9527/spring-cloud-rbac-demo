<template>
    <div class="translateCenter">
        <el-form class="login-container" v-model="loginForm">
            <h1 class="title">用户登录</h1>
            <el-form-item label="">
                <el-input type="text" v-model="loginForm.username" placeholder="你的账号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input type="password" v-model="loginForm.password" placeholder="你的密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-divider></el-divider>
            <el-form-item>
                <el-button type="primary" style="width: 100%;" @click="onSubmit()">提交</el-button>
            </el-form-item>
            <el-row style="text-align: center; margin-top: -10px;;">
                <el-link type="primary" @click="onChange()">忘记密码</el-link>
                <el-link type="primary" @click="onRegister()">用户注册</el-link>
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
            loginForm: {
                username: "",
                password: ""
            }
        }
    },
    // 方法区
    methods: {
        onSubmit: function(){
            // 请求参数
            var params = {
                username: this.loginForm.username,
                password: this.loginForm.password
            }
            // 访问登录的Post请求
            this.$ajax.post('http://localhost:8080/login', params)
            .then(function(res){
                if(res.data == true){
                    // 登录成功，暂时进入Hello World界面
                    this.$router.push({path:'/'})
                }
                alert(res.data)
            })
            .catch(err=>console.log("请求失败"))
        },
        onChange:function(){
            alert("忘记密码还没做")
        },
        onRegister: function(){
            this.$router.push({path:'/register'})
        }
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
    margin: 20 auto;
    padding: 0 20px;
}
.title{
    text-align: center;
}
</style>