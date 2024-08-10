import axios from 'axios';
import nuxtConfig from '~/nuxt.config.js';
// console.log('🚀 ~ nuxtConfig:', nuxtConfig);

const baseDonmain = 'https://api.amirunsritycricketacademy.com';
// const baseDonmain = 'http://127.0.0.1:8000';
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
