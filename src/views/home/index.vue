<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item
        v-for="(item, index) in images"
        :key="index"
      >
        <van-image
          style="width: 100%; height: 200px;"
          lazy-load
          :src="item"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg'
      ]
    }
  }
}
</script>
