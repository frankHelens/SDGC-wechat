<template>
  <van-swipe>
    <van-swipe-item
      v-for="(swipe, i) in curSwipeList"
      :indicator-color="indicatorColor"
      :height="swipeHeight"
      :key="i">
      <img :src="swipe.url" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    autoplay: {
      type: Number,
      default: 3000
    },
    swipeList: {
      type: Array,
      default: () => []
    },
    indicatorColor: {
      type: String,
      default: 'white'
    },
    swipeHeight: {
      type: Number,
      default: 200
    }
  },
  computed: {
    curSwipeList () {
      return this.swipeList
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
  img
    width: 100%
</style>
