<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-spacer />
    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">
        Latest Release
      </span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class BaseHeader extends Vue {}
</script>
