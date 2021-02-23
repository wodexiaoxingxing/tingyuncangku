<template>
  <div class="page1">
    {{pageName}}
    <el-button type="primary" @click=jump>跳转页面2</el-button>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  name: "page1",
  data() {
    return {
      pageName: "页面1"
    };
  },
  created() {
  },

  methods: {
    jump() {
      this.$router.push({name: 'page2'})
    }
  },
  watch: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
