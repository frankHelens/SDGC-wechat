<template>
  <div class="home">
    <Swiper
      :autoplay="3000"
      indicatorColor="white"
      :swipeList="swipeList"/>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'

export default {
  name: 'home',
  components: {
    Swiper
  },
  data () {
    return {
      swipeList: [{
        url: 'https://cxstatic.img16888.com/dist/images/mobile/busines/b1@3x.png'
      }, {
        url: 'https://cxstatic.img16888.com/dist/images/mobile/busines/b2@3x.png'
      }, {
        url: 'https://cxstatic.img16888.com/dist/images/mobile/busines/b3@3x.png'
      }]
    }
  }
}
</script>
