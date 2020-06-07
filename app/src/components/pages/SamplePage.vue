<template>
  <v-container>
    <BaseHeader />
    <v-col cols="12">
      <v-img
        :src="require('@/assets/logo.svg')"
        class="my-3"
        contain
        height="200"
        @click="increment"
      />
    </v-col>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ counter }}
        </h1>

        <p class="subheading font-weight-regular">
          ヘルプと他のVuetify開発者とのコラボレーションについては、オンラインに参加してください
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >
            Discord Community
          </a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          次は何使う？
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          重要な参照先
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          エコシステム
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseHeader from '@/components/organisms/BaseHeader.vue'
@Component({
  components: {
    BaseHeader
  }
})
export default class SamplePage extends Vue {
  private get counter(): number {
    return this.$store.getters.getCounter()
  }

  private increment(): void {
    this.$store.dispatch('incrementAction')
    this.$store.dispatch('getMessageAction')
  }

  get whatsNext() {
    return [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  }

  get importantLinks() {
    return [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ]
  }

  get ecosystem() {
    return [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ]
  }
}
</script>
