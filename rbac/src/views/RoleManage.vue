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
        <el-menu :default-active="defaultActive"
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            :collapse="isCollapse">
            <template v-for="tag in tags">
                <template v-for="item in tag.item" >
                    <!-- 侧边栏 -->
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    
    data() {
        return{
            tags:[
                [{name:"tag1"},
                 {name:"tag2"},
                 {name:"tag3"}],
                [{name:"tag1"},
                 {name:"tag2"},
                 {name:"tag3"}],
                [{name:"tag1"},
                 {name:"tag2"},
                 {name:"tag3"}],
                [{name:"tag1"},
                 {name:"tag2"},
                 {name:"tag3"}],
                [{name:"tag1"},
                 {name:"tag2"},
                 {name:"tag3"}]
            ]}
    }
}
</script>

<style>

</style>