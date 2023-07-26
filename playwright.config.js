const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./src",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
