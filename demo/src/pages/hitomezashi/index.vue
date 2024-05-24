<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Hitomezashi } from '@visgen/hitomezashi';

const container = ref<HTMLDivElement | null>();

onMounted(() => {
  const config = {
    size: { width: 800, height: 400 },
    offset: {
      row: Array.from({ length: 20 }, () => Math.round(Math.random())),
      column: Array.from({ length: 40 }, () => Math.round(Math.random()))
    },
    style: {
      padding: 10,
      thickness: 10,
      palette: ['hsl(4, 83%, 46%)', 'hsl(276, 72%, 52%)']
    }
  };

  const hitozemashi = new Hitomezashi(config);
  hitozemashi.render({ context: 'svg', element: container.value as HTMLElement });
});
</script>

<template>
  <h1>Hitozemashi</h1>
  <div ref="container" style="color: red"></div>
</template>

<style scoped>
h1 {
  font-family: 'Source Sans Pro';
  color: rgb(146, 14, 14);
}
</style>
