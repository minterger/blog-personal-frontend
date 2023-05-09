import { defineConfig } from "astro/config";
import styles from "./styles/index.css";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});