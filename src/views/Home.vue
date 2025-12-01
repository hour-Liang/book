<template>
    <div class="container">
        <el-container class="container-content">
            <el-aside class="aside">
                <div class="logo-contaniner">
                    <img src="../assets/logo.png" alt="logo" class="logo-img">
                </div>
                <el-menu :default-active="activeMenu" @select="handleSelect">
                    <el-menu-item index="BookList">
                        <span>书籍列表</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container class="container-content">
                <el-main class="main">
                    <router-view></router-view>
                </el-main>
            </el-container>
            
        </el-container>
    </div>
</template>
    
<script setup lang="ts">
import { ref } from 'vue'

const activeMenu = ref('BookList')

const handleSelect = (index: string) => {
    activeMenu.value = index
}
</script>

<style scoped>
.container {
    height: 100vh;
}
.container-content {
    height: 100vh;
}
.aside {
    height: 100%;
    width: 100px;
    background-color: #fff;
}
.main {
    height: 100%;
    background-color: #f8f9fa;
}
.el-menu {
    border-right: none;
}
.el-menu-item {
    display: flex;
    justify-content: center;
}
.logo-contaniner {
    display: flex;
    justify-content: center;
    padding: 10px 20px;
}
.logo-img {
    height: 50px;
}
.header {
    height: 60px;
    background-color: #fff;    
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>