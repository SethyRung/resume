import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "resume",
    compatibilityDate: "2026-10-30",
    workersDev: true,
    domains: ["resume.sethyrung.com"],
    assets: {
      notFoundHandling: "single-page-application",
    },
    observability: {
      enabled: true,
      traces: {
        enabled: true,
      },
    },
  },
});
