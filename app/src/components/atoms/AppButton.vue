<template>
  <button :class="shape">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class AppButton extends Vue {
  @Prop({ type: String })
  label?: string

  @Prop({ type: String, default: 'square' })
  shape?: string
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style lang="scss" scoped>
.square {
  color: #4fc08d;
  border-color: #4fc08d;
  padding: 0.5em;
  box-shadow: 0.5px 0.5px;
}
.square:hover {
  color: #fff;
  background-color: #4fc08d;
}
.round {
  -webkit-appearance: none;
  color: #fff;
  background-color: #4fc08d;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 6px 10px 6px 10px;
  border-radius: 20px;
  border-color: #4fc08d;
}
</style>
