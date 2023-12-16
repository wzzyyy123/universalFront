<template>
  <!-- 忘记密码 -->
  <el-dialog v-model="state.forgetPasswordDialog" title="忘记密码" width="400px">
    <el-form class="login-form" :label-position="labelPosition" :rules="rules">
      <el-form-item label="输入您的注册账号" prop="account">
        <!-- prop搭配上一行的rules开启el-form的校验功能 -->
        <el-input v-model="forgetData.account" placeholder="输入您的注册账号" />
      </el-form-item>
      <el-form-item label="输入您的个人邮箱" prop="email">
        <el-input v-model="forgetData.email" placeholder="输入您的个人邮箱" />
      </el-form-item>
    </el-form>
    <!-- 底部内容 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.forgetPasswordDialog = false">取消</el-button>
        <el-button type="primary" @click="openChangePassword">下一步</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 修改密码 -->
  <el-dialog v-model="state.changePasswordDialog" title="修改密码" width="400px">
    <el-form class="login-form" :label-position="labelPosition" :rules="rules">
      <el-form-item label="输入您的新密码" prop="password">
        <el-input v-model="forgetData.password" placeholder="输入您的新密码" show-password />
      </el-form-item>
      <el-form-item label="再次确认您的新密码" prop="nextPassword">
        <el-input v-model="forgetData.nextPassword" placeholder="再次确认您的新密码" show-password />
      </el-form-item>
    </el-form>
    <!-- 底部内容 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.changePasswordDialog = false">取消</el-button>
        <el-button type="primary" @click="state.changePasswordDialog = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

//控制表单label的对齐方式
const labelPosition = ref('top')

// 表单对象接口
interface Forget {
  account: number | null
  email: string
  password: string
  nextPassword: string
}
// 表单对象
const forgetData: Forget = reactive({
  account: null,
  email: '',
  password: '',
  nextPassword: ''
})
// el表单规则
const rules = reactive({
  account: [{ required: true, message: '请输入您的注册账号', trigger: 'blur' }],
  email: [{ required: true, message: '请输入您的注册邮箱', trigger: 'blur' }],
  password: [{ required: true, message: '请输入您想修改的密码', trigger: 'blur' }],
  nextPassword: [{ required: true, message: '请再次确认您的新密码', trigger: 'blur' }]
})
// 控制弹窗为忘记密码或更改密码 默认关闭
const state = reactive({
  forgetPasswordDialog: false,
  changePasswordDialog: false
})
const openChangePassword = () => {
  state.forgetPasswordDialog = false
  state.changePasswordDialog = true
}
// 打开弹窗的方法  在页面文件中import该组件后，调用open方法即可打开弹框
const open = () => {
  state.forgetPasswordDialog = true
}
defineExpose({
  open
})
</script>

