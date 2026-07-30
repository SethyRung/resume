<script setup lang="ts">
import { Comark } from "@comark/vue";
import { createReusableTemplate } from "@vueuse/core";
import type { TimelineItem } from "@nuxt/ui";

const [DefineResumeSection, ReuseResumeSection] = createReusableTemplate<{ heading: string }>();

const role = "FULL STACK DEVELOPER";
const experienceYears = "3+ years";

const contact = [
  { icon: "i-lucide:mail", value: "rungsethyhk@gmail.com" },
  { icon: "i-simple-icons:github", value: "github.com/sethyrung" },
  { icon: "i-lucide:globe", value: "sethyrung.com" },
  { icon: "i-lucide:map-pin", value: "Phnom Penh, Cambodia" },
];

const skills = {
  Frontend: ["Vue 3", "Nuxt", "TypeScript", "Tailwind v4", "@nuxt/ui"],
  Backend: ["Spring Boot (Java)", "FastAPI (Python)", "NestJS"],
  Database: ["PostgreSQL", "Drizzle ORM", "MongoDB"],
  "DevOps & Cloud": ["Bun", "Docker", "Git"],
  Tools: ["oxlint", "oxfmt", "Vitest", "Zod", "GSAP"],
};

const languages = [
  { name: "Khmer", level: "Native", proficiency: 100 },
  { name: "English", level: "Intermediate", proficiency: 70 },
];

const strengths = [
  "TypeScript end-to-end",
  "Composable design",
  "Schema-first APIs",
  "Pragmatic defaults",
  "Cross-stack comfort",
  "Mentoring & code review",
];

const education = [
  {
    degree: "BSc Computer Science and Engineering",
    school: "Royal University of Phnom Penh",
    year: "2019 – 2023",
    detail: "Cumulative GPA 3.52 / 4.0",
  },
  { degree: "High School Certificate", school: "Svay Antor High School", year: "2016 – 2019" },
  { degree: "Lower Secondary School", school: "Mebon Secondary School", year: "2013 – 2016" },
];

const focusAreas = [
  "Nuxt design systems",
  "Full-stack TypeScript",
  "AI integration",
  "Mobile (Flutter / Kotlin)",
  "Backend depth",
];

const summary = `
Software developer based in Phnom Penh, building across web, mobile, and desktop. Currently shipping **Vue 3** + **Nuxt** frontends at Innoblock Technology on the **TTGreen** sustainability platform. Comfortable across the full vertical — Vue 3, Nuxt, Tailwind, and TypeScript on the frontend; Spring Boot (Java) and FastAPI (Python) on the backend; PostgreSQL for data. Prefers type-safe APIs, semantic UI primitives, and platform defaults.
`;

const work: TimelineItem[] = [
  {
    date: "03.2025 – Present",
    title: "Junior Frontend Developer",
    company: "Innoblock Technology",
    location: "Phnom Penh",
    description: `
- Ship features on the **TTGreen** sustainability & carbon management platform
- Build reusable components, pages, layouts, and composables on **Nuxt** + **Vue 3**
- Pair with design and backend teams for smooth end-to-end integration
- Maintain a production Nuxt app on **Tailwind CSS v4** with \`@nuxt/ui\` primitives
`,
    tags: ["Nuxt", "Vue 3", "TypeScript", "Tailwind v4", "@nuxt/ui"],
  },
  {
    date: "11.2023 – 12.2024",
    title: "Young Credit Bureau Program Intern",
    company: "Credit Bureau Cambodia",
    location: "Phnom Penh",
    description: `
- Contributed to PE Agent migration on **Nuxt** + **Spring Boot**
- Built the Cross-Border Platform for Cambodia ↔ Korea credit reports
- Worked on the **CBC Mini App** and the **AMK Mobile App**
- Production exposure to **Vue 3**, **Nuxt**, **Spring Boot**, and **FastAPI** in a regulated-data team
`,
    tags: ["Nuxt", "Vue 3", "Spring Boot", "FastAPI", "PostgreSQL"],
  },
  {
    date: "01.2024 – Present",
    title: "Full Stack Developer (self-employed)",
    company: "Personal Projects",
    location: "Phnom Penh",
    description: `
- Shipped 14+ projects across **Nuxt**, **Next.js**, **NestJS**, **Spring Boot**, and **Directus**
- Highlights: Chongkran recipe app, The Angkor Times news site, Movies discovery
- Use projects as the fastest way to learn a new stack or validate an idea
`,
    tags: ["Nuxt", "Next.js", "NestJS", "Spring Boot", "Directus"],
  },
];

const training = [
  { name: "Young Credit Bureau Program", org: "Credit Bureau Cambodia", date: "Dec 2024" },
  { name: "Software Engineering", org: "Royal University of Phnom Penh", date: "Jun 2023" },
  {
    name: "Object-Oriented Analysis & Design",
    org: "Royal University of Phnom Penh",
    date: "Jun 2023",
  },
  { name: "Web Application Development", org: "Royal University of Phnom Penh", date: "Jun 2023" },
];

const achievements = [
  "BSc CSE 3.52 GPA",
  "24+ A grades",
  "YCB Program Certified",
  "14+ Shipped Projects",
  "TypeScript Native",
  "Vue 3 + Nuxt",
  "Full Stack",
  "Open Source",
];
</script>

<template>
  <Suspense>
    <article class="grid grid-cols-[30fr_70fr] text-[11px] leading-[1.45] text-default bg-default">
      <DefineResumeSection v-slot="{ heading, $slots }">
        <section class="flex flex-col print:break-inside-avoid">
          <h2
            class="text-xs font-bold tracking-[0.15em] uppercase border-b border-zinc-900 pb-1.5 mb-3"
          >
            {{ heading }}
          </h2>
          <component :is="$slots.default" />
        </section>
      </DefineResumeSection>

      <aside class="flex flex-col">
        <header class="bg-primary-950 text-white pt-8 pb-6 flex flex-col items-center">
          <img
            src="/profile.png"
            alt=""
            class="size-32 rounded-full object-cover border-4 border-white/15"
          />
        </header>

        <div class="bg-[#eef2f7] px-5 py-6 space-y-6 flex-1">
          <ReuseResumeSection heading="Contact">
            <ul class="space-y-2">
              <li v-for="c in contact" :key="c.icon" class="flex items-center gap-3">
                <div
                  class="size-7 bg-primary-950 text-white flex items-center justify-center rounded shrink-0"
                >
                  <UIcon :name="c.icon" class="size-3.5" />
                </div>
                <span>{{ c.value }}</span>
              </li>
            </ul>
          </ReuseResumeSection>

          <ReuseResumeSection heading="Technical Skills">
            <div class="space-y-3">
              <div v-for="(items, category) in skills" :key="category">
                <div class="font-semibold mb-1">{{ category }}</div>
                <div v-if="category === 'Tools'" class="flex flex-wrap gap-1">
                  <UBadge v-for="t in items" :key="t" color="neutral" variant="subtle" size="sm">
                    {{ t }}
                  </UBadge>
                </div>
                <div v-else class="text-muted leading-snug">{{ items.join(", ") }}</div>
              </div>
            </div>
          </ReuseResumeSection>

          <ReuseResumeSection heading="Languages">
            <div v-for="lang in languages" :key="lang.name" class="mb-3 last:mb-0">
              <div class="flex items-baseline justify-between">
                <span class="font-semibold">{{ lang.name }}</span>
                <span class="text-muted text-[10px]">{{ lang.level }}</span>
              </div>

              <UProgress :model-value="lang.proficiency" color="neutral" size="sm" />
            </div>
          </ReuseResumeSection>

          <ReuseResumeSection heading="Core Strengths">
            <ul class="list-disc pl-4 space-y-1 marker:text-default">
              <li v-for="s in strengths" :key="s">{{ s }}</li>
            </ul>
          </ReuseResumeSection>

          <ReuseResumeSection heading="Education">
            <div v-for="e in education" :key="e.degree" class="mb-3 last:mb-0">
              <div class="font-semibold">{{ e.degree }}</div>
              <div class="text-muted">{{ e.school }} — {{ e.year }}</div>
              <div v-if="e.detail" class="text-muted text-[10px]">{{ e.detail }}</div>
            </div>
          </ReuseResumeSection>

          <ReuseResumeSection heading="Focus Areas">
            <ul class="list-disc pl-4 space-y-1 marker:text-default">
              <li v-for="f in focusAreas" :key="f">{{ f }}</li>
            </ul>
          </ReuseResumeSection>
        </div>
      </aside>

      <section class="px-8 py-8 space-y-5">
        <header>
          <h1 class="text-[44px] font-extrabold leading-none tracking-tight">SETHY RUNG</h1>
          <div class="flex items-center justify-between mt-3 gap-3 border-b-2 pb-3">
            <div class="text-base font-semibold">Full Stack Developer</div>
            <div
              class="bg-primary-950 text-white px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
            >
              {{ experienceYears }}
            </div>
          </div>
        </header>

        <ReuseResumeSection heading="Profile">
          <Comark :markdown="summary" class="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0" />
        </ReuseResumeSection>

        <ReuseResumeSection heading="Work Experience">
          <UTimeline
            :items="work"
            :default-value="3"
            color="neutral"
            size="xs"
            :ui="{
              indicator: 'size-3 my-3',
              wrapper: 'pb-3',
            }"
          >
            <template #wrapper="{ item }">
              <div class="flex items-baseline justify-between gap-4 mb-1">
                <h3 class="font-bold text-sm text-default">{{ item.title }}</h3>
                <span
                  class="bg-muted px-3 py-0.5 rounded-full text-[10px] text-muted whitespace-nowrap"
                >
                  {{ item.date }}
                </span>
              </div>
              <div class="text-default font-medium mb-2">
                {{ item.company }} · {{ item.location }}
              </div>
              <Comark
                :markdown="item.description"
                class="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
              />
              <div class="flex flex-wrap gap-1 mt-2">
                <UBadge
                  v-for="t in item.tags as string[]"
                  :key="t"
                  color="neutral"
                  variant="subtle"
                  size="sm"
                >
                  {{ t }}
                </UBadge>
              </div>
            </template>
          </UTimeline>
        </ReuseResumeSection>

        <ReuseResumeSection heading="Training & Workshops">
          <div class="grid grid-cols-2 gap-x-6 gap-y-3">
            <div v-for="t in training" :key="t.name" class="flex gap-2">
              <div>
                <div class="font-semibold">{{ t.name }}</div>
                <div class="text-muted text-[10px]">{{ t.org }} — {{ t.date }}</div>
              </div>
            </div>
          </div>
        </ReuseResumeSection>

        <ReuseResumeSection heading="Achievements">
          <div class="flex flex-wrap gap-1.5">
            <UBadge v-for="a in achievements" :key="a" color="neutral" variant="subtle" size="sm">
              {{ a }}
            </UBadge>
          </div>
        </ReuseResumeSection>
      </section>
    </article>
  </Suspense>
</template>

<style>
@page {
  size: A4;
  margin: 0;
}
</style>
