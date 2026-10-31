<script setup lang="ts">
import { Markdown } from "@comark/vue";

defineProps<{ value: string }>();
</script>

<template>
  <Markdown
    :value="value"
    class="text-[length:inherit] leading-[inherit] [&_a]:text-inherit [&_a]:underline [&_code]:bg-transparent [&_code]:p-0 [&_code]:font-[inherit] [&_code]:text-[length:inherit] [&_code]:text-inherit [&_code::after]:content-none [&_code::before]:content-none [&_li]:mt-0 [&_li]:mb-1 [&_li]:p-0 [&_li]:text-[length:inherit] [&_li]:leading-[inherit] [&_li:last-child]:mb-0 [&_p]:m-0 [&_p]:text-[length:inherit] [&_p]:leading-[inherit] [&_strong]:font-[650] [&_strong]:text-inherit [&_ul]:m-0 [&_ul]:list-disc [&_ul]:pl-4 *:first:mt-0 *:last:mb-0"
  />
</template>
