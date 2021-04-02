<template>
<div id="page3">
  {{ message }}
  <br>
  {{pageName}}
  <br>
  <!-- <p>参数id的值为：{{this.$route.params.id}}<p> -->
    <el-button type="primary" @click=jump1>跳转页面1</el-button>
    <el-button type="primary" @click=jump2>跳转页面2</el-button>
</div>
</template>
<script>
import api from "@/api/api";
export default{
  name: "page3",
  data() {
    return {
      message: "欢迎来到页面3!",
      pageName: "页面3"
    };
},
  created() {
  },
    methods: {
    jump1() {
      this.$router.push({name: 'page1'})
    },
    jump2() {
      var num = Math.floor(Math.random() * 2000 + 1)
     console.log(num)
      this.$router.push({name: 'page2',query:{num:num,name:'yuanjie3-2'}})
    }
  },
  watch: {},
  mounted() {}
  };
</script>
<style lang="scss" scoped>
</style>