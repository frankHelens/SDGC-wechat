<template>
  <div id="app">
    <router-view/>
    <van-tabbar
      v-model="active">
      <van-tabbar-item
        v-for="(tabBar, index) in tabBarList"
        :key="index"
        :icon="tabBar.icon"
        :url="tabBar.url">
        {{tabBar.label}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabBarList: [{
        icon: 'home-o',
        name: 'home',
        label: '首页',
        url: '/#/'
      }, {
        icon: 'search',
        name: 'carChange',
        label: '选车比价',
        url: '#/carChange'
      }],
      active: '0'
    }
  }
}
</script>

<style lang="sass">
</style>
