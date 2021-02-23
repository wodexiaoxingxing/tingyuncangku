<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
    <div v-if="ifshowback" class="prepage" @click="goprepage">上一页</div>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {
                firstshowpageurl: '',
                ifshowback: false
            }
        },
        created () {
            this.firstshowpageurl = location.pathname.slice(6)
        },
        methods: {
            goprepage () {
                this.$router.go(-1)
            }
        },
        watch:{
            $route(to,from){
                if (this.firstshowpageurl == to.path) {
                    this.ifshowback = false
                } else {
                    this.ifshowback = true
                }
            }
        },
    }
</script>

<style>
  .mint-indicator,.mint-toast{
    position: relative;
    z-index: 9999;
  }
  .prepage{
    position: fixed;
    bottom: 100px;
    right: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background-color: rgba(0,0,0,.35);
    border-radius: 50%;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
</style>
