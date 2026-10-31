<script setup lang="ts">
const [DefineResumeSection, ReuseResumeSection] = createReusableTemplate<{ heading: string }>();

const contacts = [
  { icon: "i-lucide:globe", url: "sethyrung.com" },
  { icon: "i-simple-icons:github", url: "github.com/sethyrung" },
  { icon: "i-lucide:mail", url: "rungsethyhk@gmail.com" },
];

const educations = [
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
    <section class="flex break-inside-avoid flex-col gap-2.5">
      <h2 class="text-[10pt] font-[750] tracking-[1.4px] text-primary uppercase">{{ heading }}</h2>
      <USeparator class="-mt-1 mb-0.5" :ui="{ border: 'border-inverted' }" />
      <component :is="$slots.default" />
    </section>
  </DefineResumeSection>

  <Suspense>
    <div class="text-[10pt] leading-[1.45]">
      <Page>
        <article class="grid grid-cols-[30fr_70fr] gap-7">
          <aside class="flex min-w-0 flex-col gap-6 pt-0.75">
            <img
              src="/profile.png"
              alt="Illustrated portrait of Sethy Rung"
              class="h-38.5 w-32.5 bg-muted object-cover"
            />
            <ul class="flex flex-col gap-2.5 text-[9pt]">
              <li
                v-for="contact in contacts"
                :key="contact.url"
                class="flex min-w-0 items-center gap-2"
              >
                <UIcon
                  class="size-3.5 shrink-0 text-muted"
                  :name="
                    contact.icon === 'i-simple-icons:github' ? 'i-lucide-github' : contact.icon
                  "
                />
                <a
                  class="wrap-anywhere hover:text-primary hover:underline"
                  :href="
                    contact.url.includes('@') ? `mailto:${contact.url}` : `https://${contact.url}`
                  "
                >
                  {{ contact.url }}
                </a>
              </li>
            </ul>
            <ReuseResumeSection heading="Education">
              <div
                v-for="education in educations"
                :key="education.title"
                class="[&_p]:mt-0.75 [&+div]:mt-2"
              >
                <p class="mb-0.75 font-mono text-[8pt] leading-[1.6] text-muted">
                  {{ education.date }}
                </p>
                <h3 class="text-[10.5pt] leading-[1.4] font-bold">{{ education.title }}</h3>
                <p v-if="education.description" class="text-muted">{{ education.description }}</p>
              </div>
            </ReuseResumeSection>
            <ReuseResumeSection heading="Core Skills">
              <ResumeMarkdown :value="skills" />
            </ReuseResumeSection>
          </aside>
          <section class="flex min-w-0 flex-col gap-6">
            <header class="mb-1.5">
              <p class="font-mono text-[8pt] leading-normal tracking-[1.1px] text-muted">
                WEB · MOBILE · DESKTOP
              </p>
              <h1 class="mt-3 text-[36pt] leading-[0.98] font-extrabold tracking-[-2.5px]">
                SETHY
                <br />
                RUNG
              </h1>
              <p class="mt-3.5 text-[14pt]">Full Stack Developer</p>
            </header>
            <ReuseResumeSection heading="Professional Summary">
              <ResumeMarkdown :value="summary" />
            </ReuseResumeSection>
            <ReuseResumeSection heading="Work Experience">
              <div v-for="entry in work" :key="entry.company" class="[&+div]:mt-2">
                <p class="mb-0.75 font-mono text-[8pt] leading-[1.6] text-muted">
                  {{ entry.period }}
                </p>
                <h3 class="text-[10.5pt] leading-[1.4] font-bold">{{ entry.title }}</h3>
                <p class="mt-0.75 mb-2 text-[10pt] text-muted">{{ entry.company }}</p>
                <ResumeMarkdown :value="entry.description" />
              </div>
            </ReuseResumeSection>
          </section>
        </article>
      </Page>
      <Page>
        <header
          class="mb-8 flex items-baseline justify-between border-b-2 border-primary pb-5 [&>span:first-child]:text-[18pt] [&>span:first-child]:tracking-[-0.8px] [&>span:last-child]:text-[10pt] [&>span:last-child]:text-muted"
        >
          <span class="font-bold">SETHY RUNG</span>
          <span>Full Stack Developer</span>
        </header>
        <article class="grid grid-cols-[30fr_70fr] gap-7">
          <aside class="flex min-w-0 flex-col gap-6">
            <ReuseResumeSection heading="Achievements">
              <ResumeMarkdown :value="achievements" />
            </ReuseResumeSection>
          </aside>
          <section class="flex min-w-0 flex-col gap-6">
            <ReuseResumeSection heading="Selected Projects">
              <div v-for="project in projects" :key="project.title" class="[&+div]:mt-2">
                <p class="mb-0.75 font-mono text-[8pt] leading-[1.6] text-muted">
                  {{ project.period }} / {{ project.company }}
                </p>
                <h3 class="text-[10.5pt] leading-[1.4] font-bold">{{ project.title }}</h3>
                <ResumeMarkdown :value="project.description" />
              </div>
            </ReuseResumeSection>
          </section>
        </article>
      </Page>
    </div>
  </Suspense>
</template>
