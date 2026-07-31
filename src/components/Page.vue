<script lang="ts">
export interface PageProps {
  class?: any;
}

export interface ContainerSlots {
  default(props?: {}): any;
}
</script>

<script setup lang="ts">
import { tv } from "tailwind-variants";

const props = defineProps<PageProps>();
defineSlots<ContainerSlots>();

const ui = computed(() =>
  tv({
    base: "w-[210mm] h-[297mm] mx-auto mb-8 last:mb-0 p-8 bg-default shadow-sm print:m-0 print:shadow-none flex",
  }),
);
</script>

<template>
  <div :class="ui({ class: props.class })">
    <div class="flex-1 overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
@page {
  size: A4;
  margin: 0;
}
</style>
