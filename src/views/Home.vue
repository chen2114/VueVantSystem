<template>
  <div class="home">
    <van-button
      type="default"
      disabled
    >
      默认按钮
    </van-button>
    <van-button
      loading
      type="primary"
      loading-type="spinner"
      loading-text="加载中..."
    >
      主要按钮
    </van-button>
    <van-button
      round
      icon="star-o"
      type="info"
    >
      信息按钮
    </van-button>
    <van-button type="warning">
      警告按钮
    </van-button>
    <van-button type="danger">
      危险按钮
    </van-button>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  background-color: #f2f4f7;
}
</style>
