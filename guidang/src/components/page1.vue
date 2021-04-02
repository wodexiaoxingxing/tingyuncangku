<template>
  <div class="page1">
     {{ message }}
  <br>
    {{pageName}}
    <el-button type="primary" @click=jump2>跳转到页面2</el-button>
      <el-button type="primary" @click=jump3>跳转到页面3</el-button>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  name: "page1",
  data() {
    return {
      message: "欢迎来到页面1!",
      pageName: "页面1"
    };
  },
  created() {
  },

  methods: {
    jump2() {
        var num = Math.floor(Math.random() * 1000 + 1)
     console.log(num)
      this.$router.push({name: 'page2',query:{num:num,name:'yuanjie1-2'}})
    },
    jump3() {
     var num = Math.floor(Math.random() * 10 + 1)
     console.log(num)
      this.$router.push({name: 'page3',params:{id:num}})
    }
  },
  watch: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
