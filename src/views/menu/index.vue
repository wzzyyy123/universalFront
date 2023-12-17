<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <!-- router属性为el-menu打开菜单属性 -->
        <el-menu default-active="home" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
          <el-menu-item index="home">
            <el-icon><icon-menu /></el-icon>
            <span>首页</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Menu as IconMenu } from '@element-plus/icons-vue'

//菜单打开和关闭的函数
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped></style>

