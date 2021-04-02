<template>
  <div class="page2">
     {{ message }}
  <br>
    {{pageName}}
    <el-button type="primary" @click=jump1>跳转页面1</el-button>
    <el-button type="primary" @click=jump3>跳转页面3</el-button>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  name: "page2",
  data() {
    return {
      message: "欢迎来到页面2!",
      pageName: "页面2"
    };
  },
  created() {
  },

  methods: {
    jump1() {
      this.$router.push({name: 'page1'})
    },
    jump3() {
      var num = Math.floor(Math.random() * 20 + 1)
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