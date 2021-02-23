<template>
<div id="app">
  {{ message }}
</div>
</template>
<script>
import api from "@/api/api";
export default{
  name: "#app",
  data() {
    return {
      message: "Hello Vue!"
    }
}
  }
</script>