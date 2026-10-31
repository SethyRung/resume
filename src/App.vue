<script setup lang="ts">
import { useVueToPrint } from "vue-to-print";

const sheetRef = useTemplateRef<HTMLElement>("sheet");
const workspaceRef = useTemplateRef<HTMLElement>("workspace");
const { width } = useElementSize(workspaceRef);
const previewScale = computed(() => Math.min(1, Math.max(0.1, (width.value - 32) / 794)));

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Bold & contemporary",
    component: resolveComponent("Modern"),
  },
  {
    id: "classic",
    name: "Classic",
    description: "Editorial & professional",
    component: resolveComponent("Classic"),
  },
] as const;

type TemplateId = (typeof templates)[number]["id"];
const selectedId = ref<TemplateId>(templates[0].id);
const sidebarOpen = ref(false);
const templateItems = templates.map((template) => ({
  ...template,
  value: template.id,
  label: template.name,
}));
const activeTemplate = computed(
  () => templates.find((template) => template.id === selectedId.value) ?? templates[0],
);

const { handlePrint } = useVueToPrint({
  content: sheetRef as any,
  removeAfterPrint: true,
  documentTitle: computed(() => `Sethy Rung — ${activeTemplate.value.name} Resume`),
});
</script>

<template>
  <UApp>
    <UDashboardGroup
      unit="px"
      storage-key="resume-studio"
      :persistent="false"
      class="flex-col [--ui-header-height:72px] max-lg:[--ui-header-height:68px] print:static print:block print:overflow-visible"
    >
      <UDashboardNavbar
        as="header"
        class="bg-default print:hidden"
        :ui="{ root: 'px-4 sm:px-8', left: 'gap-3' }"
      >
        <template #left>
          <a
            href="#main"
            class="flex items-center gap-3 text-xl font-[750] tracking-[-0.7px] max-lg:gap-2 max-lg:text-[17px]"
            aria-label="Resume Studio, skip to preview"
          >
            <span
              class="grid size-8.5 place-items-center rounded-[7px] bg-inverted text-inverted max-lg:size-7"
            >
              <UIcon name="i-lucide-layers" class="size-5" />
            </span>
            <span class="max-lg:hidden">
              Resume<span class="font-normal"> Studio</span><span class="text-primary">.</span>
            </span>
          </a>
        </template>
        <template #right>
          <UButton
            icon="i-lucide-download"
            label="Download PDF"
            size="lg"
            class="max-lg:gap-0 max-lg:p-2"
            :ui="{ label: 'max-lg:sr-only' }"
            @click="handlePrint"
          />
        </template>
      </UDashboardNavbar>

      <div class="flex min-h-0 flex-1 print:block">
        <UDashboardSidebar
          v-model:open="sidebarOpen"
          :default-size="272"
          :min-size="272"
          :max-size="272"
          :menu="{ title: 'Resume templates', description: 'Choose a resume template.' }"
          class="min-h-0 bg-default print:hidden"
          :ui="{
            body: 'gap-6 px-6 py-8',
            footer: 'px-6 pb-8',
            content: 'print:hidden',
            overlay: 'print:hidden',
          }"
        >
          <div>
            <p class="mb-3 font-mono text-[10px] font-medium tracking-[1.6px] text-muted">
              THE COLLECTION
            </p>
            <h1 class="text-[25px] leading-[1.2] font-[650] tracking-[-1px]">
              Choose your view<span class="text-primary">.</span>
            </h1>
            <p class="mt-2.5 text-xs leading-[1.6] text-muted">
              Same story. A different perspective.
            </p>
          </div>

          <URadioGroup
            v-model="selectedId"
            :items="templateItems"
            variant="card"
            indicator="hidden"
            aria-label="Choose a resume template"
            :ui="{
              fieldset: 'grid grid-cols-2 gap-4 lg:grid-cols-1',
              item: 'p-2.5 has-data-[state=checked]:bg-primary-soft',
              wrapper: 'items-stretch gap-0 text-left',
              label: 'w-full',
              description: 'mt-0.75 text-[11px]',
            }"
            @update:model-value="sidebarOpen = false"
          >
            <template #label="{ item, modelValue }">
              <span
                class="flex h-25 justify-center overflow-hidden rounded-[3px] bg-elevated pt-2 lg:h-46.75 lg:pt-3"
                aria-hidden="true"
                inert
              >
                <span
                  class="pointer-events-none block w-198.5 flex-[0_0_794px] zoom-[0.11] lg:zoom-[0.155] [&_.resume-page]:shadow-thumbnail"
                >
                  <component :is="item.component" />
                </span>
              </span>
              <span class="mt-3 flex items-center justify-between text-[13px] font-semibold">
                <span>{{ item.label }}</span>
                <UIcon
                  :name="modelValue === item.value ? 'i-lucide-circle-check' : 'i-lucide-circle'"
                  class="size-5"
                  :class="{ 'text-primary': modelValue === item.value }"
                />
              </span>
            </template>
          </URadioGroup>

          <USeparator />
          <div class="flex items-start gap-2.5 text-xs leading-[1.6]">
            <UIcon name="i-lucide-file-check-2" class="size-5 text-primary" />
            <p>
              Made for paper.
              <br />
              <span class="text-[11px] text-muted">A4. Ready to share.</span>
            </p>
          </div>
          <template #footer>
            <UButton
              to="https://sethyrung.com"
              label="sethyrung.com"
              trailing-icon="i-lucide-arrow-up-right"
              color="neutral"
              variant="link"
              block
              class="justify-between p-0 font-mono text-[11px]"
            />
          </template>
        </UDashboardSidebar>

        <UDashboardPanel
          id="preview"
          role="main"
          aria-label="Resume preview"
          class="min-h-0 bg-elevated print:block"
          :ui="{ body: 'block p-0 sm:p-0 print:overflow-visible' }"
        >
          <template #header>
            <UDashboardToolbar class="py-4 print:hidden" :ui="{ root: 'px-4 sm:px-8' }">
              <template #left>
                <div>
                  <p class="mb-2 font-mono text-[10px] font-medium tracking-[1.6px] text-muted">
                    SETHY RUNG / RESUME
                  </p>
                  <h2 class="text-xl font-semibold tracking-[-0.7px] sm:text-[23px]">
                    {{ activeTemplate.name }}<span class="font-normal text-dimmed"> / Preview</span>
                  </h2>
                </div>
              </template>
              <template #right>
                <span class="font-mono text-[10px] tracking-[0.7px] whitespace-nowrap text-muted">
                  A4 <span class="mx-1.5">·</span> 2 PAGES
                </span>
              </template>
            </UDashboardToolbar>
          </template>
          <template #body>
            <div
              id="main"
              ref="workspace"
              tabindex="-1"
              class="px-4 pt-8 pb-6 min-[1600px]:pt-10 print:p-0"
            >
              <div
                class="m-auto w-fit print:m-0 print:w-auto"
                :style="{ '--preview-scale': previewScale }"
              >
                <div
                  ref="sheet"
                  class="print-area w-[210mm] zoom-(--preview-scale,1) print:zoom-[1]"
                >
                  <component :is="activeTemplate.component" />
                </div>
              </div>
              <footer
                class="mx-auto mt-7 flex max-w-198.5 flex-wrap justify-between gap-4 text-[11px] text-muted print:hidden"
              >
                <span>Thoughtfully built. Simply presented.</span>
                <span>© {{ new Date().getFullYear() }} Sethy Rung</span>
              </footer>
            </div>
          </template>
        </UDashboardPanel>
      </div>
    </UDashboardGroup>
  </UApp>
</template>
