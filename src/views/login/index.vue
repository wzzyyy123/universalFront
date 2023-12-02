<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wrapped">
        <div class="header-content">
          <h3>通用后台管理系统</h3>
          <span class="welcome">欢迎您的登录</span>
        </div>
      </el-header>
      <el-main>
        <div class="login-wrapped">
          <el-card class="box-card">
            <!-- strench用于控制标签的宽度是否自动伸长 -->
            <el-tabs v-model="activeName" class="demo-tabs" :stretch="true">
              <el-tab-pane label="登录" name="first">
                <el-form class="login-form">
                  <el-form-item label="账号:">
                    <el-input v-model="loginData.account" placeholder="请输入账号"></el-input>
                  </el-form-item>
                  <el-form-item label="密码:">
                    <el-input v-model="loginData.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <div class="form-foot-wrapped">
                    <div class="forget-password">
                      <span class="forget-password-button">忘记密码</span>
                    </div>
                    <div class="login-button">
                      <el-button type="primary">登录</el-button>
                    </div>
                    <div class="go-register">
                      还没有账号？
                      <span class="go-register-button">马上注册</span>
                    </div>
                  </div>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="注册" name="second">
                <el-form class="login-form">
                  <el-form-item label="账号:">
                    <el-input v-model="registerData.account" placeholder="账号长度6-12位"></el-input>
                  </el-form-item>
                  <el-form-item label="密码:">
                    <el-input v-model="registerData.password" placeholder="密码长度6-12位含字母数字"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码:">
                    <el-input v-model="registerData.repassword" placeholder="请再次输入密码"></el-input>
                  </el-form-item>
                  <div class="login-button">
                    <el-button type="primary">注册</el-button>
                  </div>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-main>
      <el-footer class="footer-wrapped">
        <div class="footer-content">
          <div class="title">
            <span>wzzyyy</span>
            <span>滋头3</span>
            <span>codeing呆呆兽</span>
            <span>一枚如果</span>
            <span>beerman</span>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const activeName = ref('first') //和el-tab-pane匹配，用于确定默认的标签页

interface formData {
  account: number | null
  password: string
  repassword?: string
}
//登录表单数据
const loginData: formData = reactive({
  account: null,
  password: ''
})
//注册表单数据
const registerData: formData = reactive({
  account: null,
  password: '',
  repassword: ''
})
</script>

<style lang="scss" scoped>
.header-wrapped {
  .header-content {
    width: 1200px;
    margin: 0 auto; //居中
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .welcome {
    font-size: 13px;
  }
}
.el-main {
  height: 600px;
  background-image: url('@/assets/login-background.png');
  background-repeat: no-repeat; /*设置背景不重复*/
  background-attachment: fixed; /*背景图片不会随着页面的滚动而滚动。*/
  background-size: cover; /*	此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。*/
  --el-main-padding: 0;

  .login-wrapped {
    width: 1200px;
    height: 600px;
    margin: 0 auto;

    .box-card {
      width: 350px;
      height: 375px;
      float: right;
      position: relative;
      top: 14%;

      .login-form {
        .form-foot-wrapped {
          display: flex;
          flex-direction: column;
          .forget-password {
            display: flex;
            justify-content: flex-end;
            margin: 10px 0;
            .forget-password-button {
              font-size: 12px;
              color: #409eff;
              cursor: pointer;
            }
          }
          .go-register {
            font-size: 12px;
            margin: 12px 0;
            display: flex;
            justify-content: center;
            .go-register-button {
              font-size: 12px;
              color: #409eff;
              cursor: pointer;
            }
          }
        }
        .login-button {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
.footer-wrapped {
  margin: 8px; // 开发时最好按照4或8的倍数调整像素

  .footer-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .title span:not(:last-child)::after {
      // 选择title类后，且不是最后一个子元素的，所有的span标签，在其后添加‘ | ’
      content: ' | ';
    }

    span {
      color: #666;
      font-size: 12px;
    }
  }
}
//el表格，看似0references，实则已经起作用
.el-form {
  margin-top: 30px;
}
// 样式穿透放在最底下

:deep(.el-tabs__item) {
  font-size: 18px;
  color: #333;
}
//输入框高度
:deep(.el-input__inner) {
  height: 40px;
}
//输入框标签
:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px; //行内垂直居中
}
//登录按钮
:deep(.el-button) {
  height: 45px;
  width: 300px;
  font-size: 16px;
}
</style>

