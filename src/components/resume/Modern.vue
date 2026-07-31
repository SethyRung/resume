<script setup lang="ts">
import { Comark } from "@comark/vue";
import type { TimelineItem } from "@nuxt/ui";

const [DefineResumeSection, ReuseResumeSection] = createReusableTemplate<{ heading: string }>();

const contacts = [
  { icon: "i-lucide:globe", url: "sethyrung.com" },
  { icon: "i-simple-icons:github", url: "github.com/sethyrung" },
  { icon: "i-lucide:mail", url: "rungsethyhk@gmail.com" },
];

const educations: TimelineItem[] = [
  {
    date: "2019 - 2023",
    title: "Royal University of Phnom Penh",
    description: "BSc Computer Science and Engineering",
  },
  {
    date: "2016 - 2019",
    title: "Svay Antor High School",
  },
  {
    date: "2013 - 2016",
    title: "Mebon Secondary School",
  },
];

const skills = `
- **Vue 3 / Nuxt** — primary frontend stack
- **TypeScript** end-to-end, Tailwind v4, @nuxt/ui
- **Spring Boot** (Java), **FastAPI** (Python)
- **PostgreSQL** + **Drizzle ORM**, **Zod** schemas
`;

const achievements = `
- BSc CSE from RUPP with **3.52 / 4.0** cumulative GPA
- Completed the year-long *Young Credit Bureau Program* at CBC (2024)
- Received A grades in 24+ subjects including Software Engineering, OOP, and Java II
- Shipped 14+ projects across web, mobile, and desktop on [github](https://github.com/sethyrung){.text-default}
`;

const summary =
  "Software developer based in Phnom Penh, building across web, mobile, and desktop. Currently shipping **Vue 3** + **Nuxt** frontends at Innoblock Technology on the **TTGreen** sustainability platform. Comfortable across the full vertical — **Vue 3**, **Nuxt**, **Tailwind**, and **TypeScript** on the frontend; **Spring Boot** (Java) and **FastAPI** (Python) on the backend; **PostgreSQL** for data. Prefers type-safe APIs, semantic UI primitives, and platform defaults.";

const work = [
  {
    period: "03.2025 - Present",
    company: "Innoblock Technology",
    title: "Junior Frontend Developer",
    description: `
- Ship features on the **TTGreen** sustainability & carbon platform
- Build reusable components and composables on **Nuxt** + **Vue 3**
- Pair with design and backend for end-to-end delivery
- Maintain production Nuxt app on **Tailwind CSS v4** with \`@nuxt/ui\`
`,
  },
  {
    period: "11.2023 - 12.2024",
    company: "Credit Bureau Cambodia",
    title: "Young Credit Bureau Program Intern",
    description: `
- Contributed to PE Agent migration on **Nuxt** + **Spring Boot**
- Built the Cross-Border Platform for Cambodia ↔ Korea credit reports
- Worked on the **CBC Mini App** and the **AMK Mobile App**
`,
  },
  {
    period: "01.2024 - Present",
    company: "Personal Projects",
    title: "Full Stack Developer (self-employed)",
    description: `
- Shipped 14+ projects across Nuxt, Next.js, NestJS, Spring Boot, Directus
- Highlights: Chongkran, The Angkor Times, Movies
- Side projects to learn and validate new stacks
`,
  },
];

const projects = [
  {
    period: "2026",
    company: "Personal",
    title: "Recall — RAG Chatbot",
    description: `
- **Nuxt 4** + **AI SDK v6** + **pgvector** + **Drizzle**
- Streaming chat UI with grounded retrieval from a vector store
`,
  },
  {
    period: "2025",
    company: "Personal",
    title: "Movies — Discovery Web App",
    description: `
- **Nuxt 4** + @nuxt/ui v4 + **NuxtHub** deployment
- **Drizzle ORM** with PGlite, Neon, and postgres-js backends
`,
  },
];
</script>

<template>
  <DefineResumeSection v-slot="{ heading, $slots }">
    <section class="flex flex-col gap-2">
      <h2 class="font-bold tracking-wide uppercase">{{ heading }}</h2>
      <USeparator :ui="{ border: 'border-inverted' }" />
      <component :is="$slots.default" />
    </section>
  </DefineResumeSection>

  <Suspense>
    <div>
      <Page>
        <article
          class="grid grid-cols-[38fr_62fr] gap-x-6 h-full text-sm text-default marker:text-default"
        >
          <aside class="flex flex-col gap-5">
            <img src="/profile.png" alt="" class="w-full aspect-4/5 object-cover bg-muted" />

            <ul class="flex flex-col gap-1.5">
              <li v-for="contact in contacts" :key="contact.url" class="flex items-center gap-2">
                <UIcon :name="contact.icon" />
                <span>{{ contact.url }}</span>
              </li>
            </ul>

            <ReuseResumeSection heading="Education">
              <UTimeline
                :items="educations"
                :default-value="3"
                color="neutral"
                size="xs"
                :ui="{
                  indicator: 'size-3 my-3',
                  wrapper: 'pb-3',
                }"
              />
            </ReuseResumeSection>

            <ReuseResumeSection heading="Core Skills">
              <Comark
                :markdown="skills"
                class="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0 marker:text-default"
              />
            </ReuseResumeSection>
          </aside>

          <section class="flex flex-col gap-5 pl-2">
            <header class="flex flex-col gap-2">
              <h1 class="text-[44px] font-extrabold leading-none tracking-tight">SETHY RUNG</h1>
              <div class="text-lg">Full Stack Developer</div>
            </header>

            <ReuseResumeSection heading="Professional Summary">
              <Comark :markdown="summary" class="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0" />
            </ReuseResumeSection>

            <ReuseResumeSection heading="Work Experience">
              <div v-for="w in work" :key="w.company" class="space-y-1">
                <div class="flex items-baseline gap-2">
                  <span>{{ w.period }}</span>
                  <span>|</span>
                  <span>{{ w.company }}</span>
                </div>

                <div class="font-semibold">{{ w.title }}</div>

                <Comark
                  :markdown="w.description"
                  class="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
                />
              </div>
            </ReuseResumeSection>
          </section>
        </article>
      </Page>

      <Page>
        <article
          class="grid grid-cols-[38fr_62fr] gap-x-6 h-full text-sm text-default marker:text-default"
        >
          <aside class="flex flex-col gap-5">
            <ReuseResumeSection heading="Achievements">
              <Comark
                :markdown="achievements"
                class="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
              />
            </ReuseResumeSection>
          </aside>

          <section class="flex flex-col gap-5 pl-2">
            <ReuseResumeSection heading="Projects">
              <div v-for="p in projects" :key="p.title" class="space-y-1">
                <div class="flex items-baseline gap-2 text-muted">
                  <span>{{ p.period }}</span>
                  <span>|</span>
                  <span>{{ p.company }}</span>
                </div>

                <div class="font-semibold">{{ p.title }}</div>

                <Comark
                  :markdown="p.description"
                  class="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
                />
              </div>
            </ReuseResumeSection>
          </section>
        </article>
      </Page>
    </div>
  </Suspense>
</template>
