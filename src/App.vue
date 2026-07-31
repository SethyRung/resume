<script setup lang="ts">
import { useVueToPrint } from "vue-to-print";

const sheetRef = useTemplateRef<HTMLElement>("sheet");

const templates = [
  { id: "modern", name: "Modern", component: resolveComponent("Modern") },
  { id: "classic", name: "Classic", component: resolveComponent("Classic") },
] as const;

type TemplateId = (typeof templates)[number]["id"];

const selectedId = ref<TemplateId>(templates[0].id);

const activeTemplate = computed(
  () => templates.find((t) => t.id === selectedId.value) ?? templates[0],
);

const items = computed(() => templates.map((t) => ({ label: t.name, value: t.id })));

const { handlePrint } = useVueToPrint({
  content: sheetRef as any,
});
</script>

<template>
  <UApp>
    <div class="min-h-screen pb-8 bg-elevated space-y-6">
      <div class="px-8 py-6 flex bg-default">
        <div class="w-[210mm] mx-auto flex items-center justify-between gap-4">
          <USelect v-model="selectedId" :items="items" class="min-w-48" />
          <UButton label="Download PDF" color="neutral" @click="handlePrint" />
        </div>
      </div>

      <div ref="sheet" class="print-area">
        <component :is="activeTemplate.component" />
      </div>
    </div>
  </UApp>
</template>

<style>
@media print {
  .print-area {
    margin: 0;
    padding: 0;
  }
  body {
    background: white;
  }
}
</style>
