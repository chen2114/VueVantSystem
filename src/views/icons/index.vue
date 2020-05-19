<template>
  <div class="icons">
    <van-grid
      :gutter="10"
      :column-num="3"
    >
      <van-grid-item
        v-for="(item, index) in iconsMap"
        :key="index"
      >
        <ch-svg
          :icon-class="item"
          :size="20"
          color="#000"
        />
        <span class="m-t10">
          {{ item }}
        </span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Icons',
  computed: {
    ...mapGetters(['iconsMap'])
  }
}
</script>
<style lang="less">

</style>
