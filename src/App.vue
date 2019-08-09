<template>
  <div id="app">
    <!-- <Buy/> -->
    <!-- <Footer/> -->
    <!-- <div id="app">
    <a-button type="primary">Button></a-button>
    </div> -->
    <router-view></router-view>
    
  </div>

</template>
<script>
// import Buy from './components/text/buy';

// import '../public/fonticon/iconfont.css';
// import Router from './router.js'
export default {
    name:'App',
    components:{
      // Buy,
      // Footer
    }
    ,data() {
    return {
      value: 2,
    }
  },
}
</script>

<style lang="scss">
  // #app{
  //   height:100rem;
  //   width:100rem;
  // }
</style>
