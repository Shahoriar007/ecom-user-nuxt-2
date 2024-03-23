import axios from 'axios';
import nuxtConfig from '~/nuxt.config.js';
// console.log('🚀 ~ nuxtConfig:', nuxtConfig);

// const baseDonmain = 'http://project-ecom-laravel-api.test';
const baseDonmain = 'https://api.flarebranded.com';
// 'https://d-themes.com/vue/porto/server'
export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const baseUrl = `${baseDonmain}`;
export const currentDemo = 36;

export default axios.create({
    baseUrl,
    headers: customHeader,
});
