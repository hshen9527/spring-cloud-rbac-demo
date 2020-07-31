<template>
    <div class="translateCenter">
        <!-- 首页导航栏 -->
        <el-menu default-active="/"
            router
            class="el-menu-demo tab-page"
            mode="horizontal"
            @select="handleSelect"
            active-text-color="#409EFF">
            <el-menu-item index="/">首页</el-menu-item>
        </el-menu>

        <!-- 侧边栏 -->
        <el-row class="tac">
        <!-- 侧边栏宽度 -->
        <el-col :span="4"> 
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                unique-opened 
                router>
                <!-- tag -->
                <el-submenu v-for="tag in tags" :key="tag">
                    <template slot="title" class="tag">
                        <i class="el-icon-message"></i>
                        <span>{{tag.name}}</span>
                    </template>
                    <!-- item -->
                    <el-menu-item-group v-for="item in tag.value" :key="item">
                        <template slot="title"></template>
                        <el-menu-item >{{item.name}}</el-menu-item>
                     </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
        </el-row>

        <!-- 右侧显示 -->
        <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </el-col>
    </div>
</template>

<script>
export default {
    
    data() {
        return{
            tags:[
                {
                    name: "tag1",
                    value: [
                        {name: "item1"},
                        {name: "item2"},
                        {name: "item3"}
                    ]
                },
                {
                    name: "tag1",
                    value: [
                        {name: "item1"},
                        {name: "item2"},
                        {name: "item3"}
                    ]
                },
                {
                    name: "tag1",
                    value: [
                        {name: "item1"},
                        {name: "item2"},
                        {name: "item3"}
                    ]
                },
            ]}
    }
}
</script>

<style>
.tag{
    color: lightBlue;
}
</style>