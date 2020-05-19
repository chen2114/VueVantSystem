<template>
  <div class="form">
    <van-nav-bar
      left-text="返回"
      left-arrow
      :title="$route.meta.label"
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="昵称"
        label="昵称"
        placeholder="请输入昵称"
      />
      <van-field
        name="uploader"
        label="头像上传"
      >
        <template #input>
          <van-uploader
            v-model="uploader"
            multiple
            :max-count="1"
            :max-size="10 * 1024 * 1024"
            accept="image/jpeg,image/png,image/jpg"
            @oversize="onOversize"
          />
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="所在城市"
        placeholder="点击选择城市"
        @click="showPicker = true"
      />
      <van-popup
        v-model="showPicker"
        position="bottom"
      >
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  name: 'Form',
  data () {
    return {
      username: '',
      uploader: [],
      value: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push({ name: 'user' })
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    onOversize (file) {
      this.$toast('请选择小于10M图片')
    },
    onSubmit () {
      console.log('aa')
    }
  }
}
</script>
