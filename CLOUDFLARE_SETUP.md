# 🤖 Islamic AI Chat — Cloudflare Worker Setup Guide

## ধাপ ১: Cloudflare Account তৈরি করুন
1. https://dash.cloudflare.com/sign-up যান
2. Free account তৈরি করুন (কোনো credit card লাগবে না)

## ধাপ ২: Anthropic API Key নিন
1. https://console.anthropic.com যান
2. Account তৈরি করুন
3. API Keys → Create Key
4. Key টা copy করে রাখুন (sk-ant-... দিয়ে শুরু)
5. ফ্রি tier এ $5 credit পাবেন

## ধাপ ৩: Cloudflare Worker তৈরি করুন
1. https://dash.cloudflare.com যান
2. **Workers & Pages** → **Create** → **Create Worker**
3. Worker এর একটা নাম দিন (যেমন: `islamic-ai`)
4. **Edit code** বাটনে ক্লিক করুন
5. `cloudflare-worker.js` ফাইলের সম্পূর্ণ code paste করুন
6. **Deploy** করুন

## ধাপ ৪: API Key যোগ করুন
1. Worker এর **Settings** → **Variables and Secrets**
2. **Add** → Secret → Name: `ANTHROPIC_API_KEY`
3. Value: আপনার API key (sk-ant-...)
4. **Save** করুন

## ধাপ ৫: Worker URL নিন
Worker এর overview page এ URL দেখাবে:
`https://islamic-ai.YOURNAME.workers.dev`

## ধাপ ৬: App এ URL বসান
`app.js` ফাইলে এই লাইন খুঁজুন:
```
const AI_PROXY_URL = 'https://islamic-ai.YOUR_WORKER_NAME.workers.dev';
```
এবং `YOUR_WORKER_NAME` এর জায়গায় আপনার actual Worker URL বসান।

## ✅ সম্পন্ন!
এখন AI Chat কাজ করবে। প্রতিদিন ১ লাখ request বিনামূল্যে।

---
**সমস্যা হলে:** zabirbinzahid@gmail.com এ যোগাযোগ করুন।
