<template>
  <div class="page2">
    {{pageName}}
    <el-button type="primary" @click=jump>跳转页面1</el-button>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  name: "page2",
  data() {
    return {
      pageName: "页面2"
    };
  },
  created() {
  },

  methods: {
    jump() {
      this.$router.push({name: 'page1'})
    }
  },
  watch: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>