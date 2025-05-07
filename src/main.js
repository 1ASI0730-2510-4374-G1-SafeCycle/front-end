import App from './App.vue'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Lara from '@primevue/themes/lara'
import { definePreset } from '@primeuix/themes';
import './assets/main.css'

import router from "./router/index.js";

import {Avatar,Toolbar,Menu, Button} from "primevue";

const SafeCyclePreset = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{cyan.50}',
            100: '{cyan.100}',
            200: '{cyan.200}',
            300: '{cyan.300}',
            400: '{cyan.400}',
            500: '{cyan.500}',
            600: '{cyan.600}',
            700: '{cyan.700}',
            800: '{cyan.800}',
            900: '{cyan.900}',
            950: '{cyan.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{teal.200}'
                },
                highlight: {
                    background: '{teal.900}'
                }
            },
            dark: {
                primary: {
                    color: '{teal.900}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)'}}}}});

const app = createApp(App)
app
    .use(PrimeVue, {ripple:true,  theme: {
            preset: SafeCyclePreset
        }})
    .component('pv-avatar',Avatar)
    .component('pv-menu',Menu)
    .component('pv-toolbar',Toolbar)
    .component('pv-image',Image)
    .component('pv-button',Button);

    app.use(router);

    app.mount('#app');


