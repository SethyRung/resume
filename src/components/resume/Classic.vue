<script setup lang="ts">
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
};

const languages = [
  { name: "Khmer", level: "Native", proficiency: 100 },
  { name: "English", level: "Intermediate", proficiency: 70 },
];

const strengths = [
  "TypeScript end-to-end",
  "Composable design",
  "Schema-first APIs",
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

const focusAreas = ["Nuxt design systems", "Full-stack TypeScript", "AI integration"];

const summary = `
Software developer based in Phnom Penh, building across web, mobile, and desktop. Currently shipping **Vue 3** + **Nuxt** frontends at Innoblock Technology on the **TTGreen** sustainability platform. Comfortable across the full vertical — Vue 3, Nuxt, Tailwind, and TypeScript on the frontend; Spring Boot (Java) and FastAPI (Python) on the backend; PostgreSQL for data. Prefers type-safe APIs, semantic UI primitives, and platform defaults.
`;

const work = [
  {
    date: "03.2025 – Present",
    title: "Junior Frontend Developer",
    company: "Innoblock Technology",
    location: "Phnom Penh",
    description: `
- Ship features on the **TTGreen** sustainability & carbon platform
- Build reusable components and composables on **Nuxt** + **Vue 3**
- Pair with design and backend for end-to-end delivery
- Maintain production Nuxt app on **Tailwind CSS v4** with \`@nuxt/ui\`
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
`,
    tags: ["Nuxt", "Vue 3", "Spring Boot", "FastAPI", "PostgreSQL"],
  },
  {
    date: "01.2024 – Present",
    title: "Full Stack Developer (self-employed)",
    company: "Personal Projects",
    location: "Phnom Penh",
    description: `
- Shipped 14+ projects across Nuxt, Next.js, NestJS, Spring Boot, Directus
- Highlights: Chongkran, The Angkor Times, Movies
- Side projects to learn and validate new stacks
`,
    tags: ["Nuxt", "Next.js", "NestJS", "Spring Boot", "Directus"],
  },
];

const training = [
  { name: "Young Credit Bureau Program", org: "Credit Bureau Cambodia", date: "Dec 2024" },
  { name: "Software Engineering", org: "Royal University of Phnom Penh", date: "Jun 2023" },
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
  <DefineResumeSection v-slot="{ heading, $slots }">
    <section class="flex break-inside-avoid flex-col gap-2">
      <h2 class="font-editorial text-[13pt] font-bold tracking-[-0.2px]">{{ heading }}</h2>
      <USeparator class="-mt-1 mb-0.5" :ui="{ border: 'border-inverted' }" />
      <component :is="$slots.default" />
    </section>
  </DefineResumeSection>

  <Suspense>
    <div class="text-[10pt] leading-[1.45]">
      <Page>
        <header class="flex items-center justify-between gap-6">
          <div>
            <p class="font-mono text-[8pt] leading-normal tracking-[1.1px] text-muted">
              {{ role }} <span class="text-primary">/</span> {{ experienceYears }}
            </p>
            <h1 class="mt-1.75 font-editorial text-[36pt] leading-[1.2] tracking-[-1.5px]">
              Sethy Rung
            </h1>
          </div>
          <img
            src="/profile.png"
            alt="Illustrated portrait of Sethy Rung"
            class="h-21 w-18 object-cover"
          />
        </header>
        <ul
          class="mt-5 mb-6 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-t-2 border-default border-t-primary py-3.75 text-[9pt]"
        >
          <li v-for="item in contact" :key="item.value" class="flex min-w-0 items-center gap-2">
            <UIcon
              class="size-3.5 shrink-0 text-muted"
              :name="item.icon === 'i-simple-icons:github' ? 'i-lucide-github' : item.icon"
            />
            <span v-if="item.icon === 'i-lucide:map-pin'">{{ item.value }}</span>
            <a
              class="wrap-anywhere hover:text-primary hover:underline"
              v-else
              :href="item.value.includes('@') ? `mailto:${item.value}` : `https://${item.value}`"
            >
              {{ item.value }}
            </a>
          </li>
        </ul>
        <ReuseResumeSection heading="Profile">
          <ResumeMarkdown :value="summary" />
        </ReuseResumeSection>
        <div class="mt-6 grid grid-cols-[65fr_35fr] gap-7">
          <section class="flex min-w-0 flex-col gap-6">
            <ReuseResumeSection heading="Work Experience">
              <div v-for="entry in work" :key="entry.company" class="[&+div]:mt-2">
                <p class="mb-0.75 font-mono text-[8pt] leading-[1.6] text-muted">
                  {{ entry.date }}
                </p>
                <h3 class="text-[10.5pt] leading-[1.4] font-bold">{{ entry.title }}</h3>
                <p class="mt-0.75 mb-2 text-[10pt] text-muted">
                  {{ entry.company }} · {{ entry.location }}
                </p>
                <ResumeMarkdown :value="entry.description" />
                <p class="mt-2 text-[8pt] leading-normal text-muted">{{ entry.tags.join(" · ") }}</p>
              </div>
            </ReuseResumeSection>
          </section>
          <aside class="flex min-w-0 flex-col gap-6 border-l border-default pl-5.5">
            <ReuseResumeSection heading="Technical Skills">
              <div v-for="(items, category) in skills" :key="category">
                <h3 class="mb-0.75 text-[10.5pt] leading-[1.4] font-bold">{{ category }}</h3>
                <p class="text-muted">{{ items.join(", ") }}</p>
              </div>
            </ReuseResumeSection>
            <ReuseResumeSection heading="Education">
              <div v-for="item in education" :key="item.degree" class="[&_p]:mt-0.75 [&+div]:mt-2">
                <p class="mb-0.75 font-mono text-[8pt] leading-[1.6] text-muted">
                  {{ item.year }}
                </p>
                <h3 class="text-[10.5pt] leading-[1.4] font-bold">{{ item.degree }}</h3>
                <p class="text-muted">{{ item.school }}</p>
                <p v-if="item.detail" class="text-muted">{{ item.detail }}</p>
              </div>
            </ReuseResumeSection>
          </aside>
        </div>
      </Page>
      <Page>
        <header
          class="mb-8 flex items-baseline justify-between border-b-2 border-primary pb-5 [&>span:first-child]:text-[18pt] [&>span:first-child]:tracking-[-0.8px] [&>span:last-child]:text-[10pt] [&>span:last-child]:text-muted"
        >
          <span class="font-editorial">Sethy Rung</span>
          <span>Full Stack Developer</span>
        </header>
        <div class="mt-6 grid grid-cols-[65fr_35fr] gap-7">
          <section class="flex min-w-0 flex-col gap-6">
            <ReuseResumeSection heading="Training & Workshops">
              <div v-for="item in training" :key="item.name" class="[&+div]:mt-2">
                <p class="mb-0.75 font-mono text-[8pt] leading-[1.6] text-muted">
                  {{ item.date }}
                </p>
                <h3 class="text-[10.5pt] leading-[1.4] font-bold">{{ item.name }}</h3>
                <p class="text-muted">{{ item.org }}</p>
              </div>
            </ReuseResumeSection>
            <ReuseResumeSection heading="Achievements">
              <ul class="grid list-disc gap-2 pl-4">
                <li v-for="achievement in achievements" :key="achievement">{{ achievement }}</li>
              </ul>
            </ReuseResumeSection>
          </section>
          <aside class="flex min-w-0 flex-col gap-6 border-l border-default pl-5.5">
            <ReuseResumeSection heading="Core Strengths">
              <ul class="grid list-disc gap-2 pl-4">
                <li v-for="strength in strengths" :key="strength">{{ strength }}</li>
              </ul>
            </ReuseResumeSection>
            <ReuseResumeSection heading="Focus Areas">
              <ul class="grid list-disc gap-2 pl-4">
                <li v-for="focus in focusAreas" :key="focus">{{ focus }}</li>
              </ul>
            </ReuseResumeSection>
            <ReuseResumeSection heading="Languages">
              <p v-for="language in languages" :key="language.name">
                <strong>{{ language.name }}</strong> — {{ language.level }}
              </p>
            </ReuseResumeSection>
          </aside>
        </div>
      </Page>
    </div>
  </Suspense>
</template>
