<template>
  <div class="layout">
    <router-view />
    <van-tabbar
      v-model="active"
      @change="onChange"
    >
      <van-tabbar-item>
        <span>消息</span>
        <template #icon="props">
          <ch-svg
            icon-class="message"
            :size="25"
            :color="props.active ? '#1989fa' : '#646566'"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      active: ''
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
    }
  }
}
</script>
