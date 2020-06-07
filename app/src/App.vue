<template>
  <v-app>
    <!-- メイン -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  private get message(): string {
    return this.$store.getters.getMessage()
  }
}
</script>
