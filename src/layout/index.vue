<template>
  <div class="layout">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar route>
      <template v-for="(item, index) in asyncRoutes">
        <van-tabbar-item
          v-if="!item.hidden"
          :key="index"
          :to="item.redirect"
        >
          <span v-if="item.children">
            {{ item.children[0].meta.label }}
          </span>
          <template
            v-if="item.children"
            #icon="props"
          >
            <ch-svg
              :icon-class="item.children[0].meta.icon"
              :size="20"
              :color="props.active ? '#1989fa' : '#646566'"
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<script>
import asyncRoutes from '@/libraries/router/asyncRoutes'
export default {
  name: 'Layout',
  data () {
    return {
      asyncRoutes
    }
  }
}
</script>
<style lang="less">
.layout {
  padding-bottom: @tabbar-height;
  .van-tabbar {
    height: @tabbar-height;
  }
}
</style>
