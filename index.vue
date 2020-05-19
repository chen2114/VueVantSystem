<template>
  <div class="login">
    <el-form
      ref="ruleForm"
      class="demo-ruleForm"
      status-icon
      label-width="50px"
      hide-required-asterisk
      :model="ruleForm"
      :rules="rules"
      @keyup.enter.native="submitForm('ruleForm')"
    >
      <el-form-item
        label="账号"
        prop="account"
      >
        <el-input
          v-model="ruleForm.account"
          autofocus
        />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="pass"
      >
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click.native.prevent="submitForm('ruleForm')"
        >
          登录
        </el-button>
      </el-form-item>
      <el-form-item>
        <aside>
          账号：admin   密码：随便填<br>
          账号：editor  密码：随便填
        </aside>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        account: '',
        pass: ''
      },
      rules: {
        account: {
          required: true,
          message: '请输入账号',
          trigger: ['blur', 'change']
        },
        pass: {
          required: true,
          message: '请填写密码',
          trigger: ['blur', 'change']
        }
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const url = '/login'
          const payload = {
            account: this.ruleForm.account,
            password: this.ruleForm.pass
          }
          this.login({ url, payload })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="less">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  .demo-ruleForm {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 500px;
    height: 200px;
    margin: auto;
  }
}
</style>
