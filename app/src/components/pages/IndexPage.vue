<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class IndexPage extends Vue {
  get msg() {
    return 'Welcome to vue-atomic-design-template'
  }
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
