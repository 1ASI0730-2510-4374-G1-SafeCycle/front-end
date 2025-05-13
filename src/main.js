import App from './App.vue'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Lara from '@primevue/themes/lara'
import { definePreset } from '@primeuix/themes';
import './assets/main.css'
import 'primeicons/primeicons.css';


import {
    Avatar,
    Toolbar,
    Menu,
    Image,
    RadioButton,
    RadioButtonGroup,
    InputText,
    Password,
    Card,
    DatePicker, Select
} from "primevue";
import { Form,FormField} from '@primevue/forms';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import Message from 'primevue/message';

import router from "@/router/index.js";

import ToastService from 'primevue/toastservice';

const SafeCyclePreset = definePreset(Lara, {
    semantic: {
        primary: {
            50:  '#CCEFF5',
            100: '#99DFEB',
            200: '#66CFE1',
            300: '#33BFD7',
            400: '#00AFCD',
            500: '#0091AD',
            600: '#007B91',
            700: '#006475',
            800: '#004D59',
            900: '#00363D',
            950: '#001F21'
        },
        colorScheme: {
            light: {
                contrast: {
                    50: '#C8FAFF',
                    100: '#00829B',
                    200: '#007389',
                    300: '#006477',
                    400: '#005565',
                    500: '#004653',
                    600: '#003741',
                    700: '#00282F',
                    800: '#00191D',
                    900: '#000A0B',
                    950: '#000507'

                },

                surface: {
                    50: '#FFFFFF',
                    100: '#F0FDFF',
                    200: '#C8FAFF',
                    300: '#A0F5FA',
                    400: '#7BE9ED',
                    500: '#57DBE0',
                    600: '#39CAD1',
                    700: '#1BA8AE',
                    800: '#007983',
                    900: '#005861',
                    950: '#00383F'

                },
                highlight: {
                    background: '{teal.900}'
                }
            }}}});

const app = createApp(App)
app
    .use(PrimeVue, {ripple:true,  theme: {
            preset: SafeCyclePreset
        }})


    .component('pv-avatar',Avatar)
    .component('pv-menu',Menu)
    .component('pv-toolbar',Toolbar)
    .component('pv-image',Image)
    .component('pv-button',Button)
    .component('pv-radio-button',RadioButton)
    .component('pv-form',Form)
    .component('pv-date-picker',DatePicker)
    .component('pv-select',Select)
    .component('pv-form-field',FormField)
    .component('pv-radio-button-group',RadioButtonGroup)
    .component('pv-input-text',InputText)
    .component('pv-message', Message)
    .component('pv-password', Password)
    .component('pv-card', Card)
    .component('pv-toast', Toast);

app.use(router);
app.use(ToastService);

app.mount('#app');