import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE_URL,
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"], //  需要自动导入的 API
        dts: "./auto-imports.d.ts", // 生成的类型声明文件路径
        dirs: [
          // 扫描自定义目录下的导出
          "./src/composables/**",
          "./src/utils/**",
        ],
        eslintrc: {
          // 生成 .eslintrc-auto-import.json
          enabled: true, // 默认false  // 设为 true 可以让 ESLint 识别自动导入
          filepath: "./.eslintrc-auto-import.json", // 生成的配置文件路径，默认是：./.eslintrc-auto-import.json
          globalsPropValue: true, // 默认true
        },
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
