<template>
  <main class="flex w-100 flex-col min-h-screen">
    <PageNavbar />

    <article class="flex-1 mt-16 md:mt-10">
      <div class="px-4 py-6 md:py-16">
        <div class="max-w-5xl mx-auto">
          <slot></slot>
        </div>
      </div>
    </article>

    <PageFooter />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageFooter from '@/components/PageFooter.vue';
import PageNavbar from '@/components/PageNavbar.vue';

@Component({
    components: {
        PageFooter,
        PageNavbar,
    },
})
export default class Layout extends Vue {}
</script>
