<template>
  <div class="user">
    <van-cell
      is-link
      to="/form"
    >
      <template #title>
        <div class="user-info">
          <div class="user-avatar">
            <van-image
              round
              width="80"
              height="80"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              fit="cover"
            />
          </div>
          <div class="user-content">
            <h3>{{ userInfo.role }}</h3>
            <p>账号：{{ userInfo.role }}</p>
          </div>
        </div>
      </template>
    </van-cell>
    <van-button
      type="default"
      block
      @click="handleLogout"
    >
      退出
    </van-button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'User',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.logout()
    }
  }
}
</script>
<style lang="less">
.user {
  .van-cell {
    align-items: flex-end;
  }
  .user-info {
    display: flex;
    align-items: center;
    .user-content {
      flex: 1;
      margin-left: 20px;
    }
  }
}
</style>
