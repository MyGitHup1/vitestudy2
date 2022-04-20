import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import * as path from "path";

console.log(11111111111111111,__dirname)
// https://vitejs.dev/config/
export default defineConfig({
    css: undefined,
    plugins: [vue(), vueJsx(), Components({
        resolvers: [
            IconsResolver({prefix: false, enabledCollections: ["mdi", "ph", "carbon"]}),
        ]
    }), Icons({scale: 2, defaultClass: "icon"})],
    build: {
        // assetsDir: "aasd"
        outDir:"docs",
        assetsInlineLimit: 1024 * 10,
        rollupOptions: {
            input: {
                main:path.resolve(__dirname,"index.html"),
                sb: path.resolve(__dirname, "sb/index.html")
            }
        }
    },
    define: {age: 10086},
    resolve: {
        alias: {"@": "/src", "#": "/src/assets"},
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    // base: "/demo/",
    server:{
    }
})
