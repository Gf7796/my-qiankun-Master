import { defineConfig } from "umi";
import routes from './src/routes/index'

export default defineConfig({
  title: "qianKunMaster",
  routes,
  npmClient: 'yarn',
  mfsu: {},
});
