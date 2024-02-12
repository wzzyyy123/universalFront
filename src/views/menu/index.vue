<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <!-- router属性为el-menu打开菜单属性 -->
        <!--  default-active表示默认打开的页面-->
        <el-menu default-active="home" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
          <div class="title">通用后台管理系统</div>
          <!-- index是配合router的索引 -->
          <el-menu-item index="home">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="overview">
            <el-icon>
              <Document />
            </el-icon>
            <span>系统概览</span>
          </el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <User />
              </el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item-group title="管理员管理">
              <el-menu-item index="product_manage">产品管理员</el-menu-item>
              <el-menu-item index="users_manage">用户管理员</el-menu-item>
              <el-menu-item index="message_manage">消息管理员</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="员工管理">
              <el-menu-item index="user_list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <TakeawayBox />
              </el-icon>
              <span>产品管理</span>
            </template>
            <el-menu-item-group title="入库管理">
              <el-menu-item index="product_manage_list">产品列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="出库管理">
              <el-menu-item index="out_product_manage_list">出库列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon>
                <ChatSquare />
              </el-icon>
              <span>消息管理</span>
            </template>
            <el-menu-item-group title="消息管理">
              <el-menu-item index="message_list">消息列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="回收站">
              <el-menu-item index="recycle">回收站</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="file">
            <el-icon><icon-menu /></el-icon>
            <span>合同管理</span>
          </el-menu-item>
          <el-menu-item index="operation_log">
            <el-icon><icon-menu /></el-icon>
            <span>操作日志</span>
          </el-menu-item>
          <el-menu-item index="login_log">
            <el-icon><icon-menu /></el-icon>
            <span>登录日志</span>
          </el-menu-item>
          <el-menu-item index="set">
            <el-icon>
              <Tools />
            </el-icon>
            <span>系统设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶行 -->
        <el-header>
          <span class="header-left-content">尊敬的 吕布 欢迎您登录本系统</span>
          <div class="header-right-content">
            <!-- <el-badge :is-dot="msgStore.read_list.length > 0" class="item" @click="openDepartmentMessage"> -->
            <el-icon :size="20" class="message">
              <Message />
            </el-icon>
            <!-- </el-badge> -->
            <!-- 头像 -->
            <el-avatar :size="24" :src="circleUrl" />
            <!-- 下拉菜单 -->
            <el-dropdown>
              <span class="el-dropdown-link">设置</span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>设置账号</el-dropdown-item>
                  <el-dropdown-item>更改头像</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { Menu as IconMenu } from '@element-plus/icons-vue'

const state = reactive({
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const { circleUrl } = toRefs(state)

//菜单打开和关闭的函数
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
//侧边栏
.el-aside {
  height: 100vh;
  background: #2b303b;
  width: 210px;
  // 隐藏水平滚动条
  overflow-x: hidden;
  .el-menu {
    background: #2b303b;
    width: 210px;
    height: 100vh;
    border-right: 0;
  }
  .title {
    padding: 20px;
    display: flex;
    justify-content: center;
    color: #fff;
    background: #2b303b;
  }
  .el-menu-item {
    color: #fff;
  }
}
//设置menu-item的样式
// 无子菜单的
.el-menu-item:hover {
  background: #006eff;
}

// 有子菜单的 需要额外设置样式穿透
:deep(.el-sub-menu__title:hover) {
  background: #006eff;
}

:deep(.el-sub-menu__title) {
  color: #fff;
}
// 子菜单的menu-item
:deep(.el-menu--inline) {
  background: #2b303b;
}
.el-header {
  display: flex;
  height: 55px;
  background: #262f3e;
  color: #c1c6c8;
  align-items: center;
  justify-content: space-between;
  // 欢迎语
  .header-left-content {
    font-size: 14px;
  }
  .header-right-content {
    width: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

