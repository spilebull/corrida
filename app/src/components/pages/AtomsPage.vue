<template>
  <div>
    <h1>{{ msg }}</h1>

    <h2>AppButton</h2>

    <h3>Square</h3>
    <AppButton
      label="Button"
      shape="square"
    />

    <h3>Round</h3>
    <AppButton
      label="Round Button"
      shape="round"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppButton from '@/components/atoms/AppButton.vue'
@Component({
  components: {
    AppButton,
  },
})
export default class AtomsPage extends Vue {
  msg = 'Atoms'
}
</script>
