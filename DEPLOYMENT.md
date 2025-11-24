# Deployment Guide

Since your code is already pushed to GitHub, deploying your site is very easy! We recommend using **Vercel** as it is free, fast, and works perfectly with React/Vite apps.

## Option 1: Deploy with Vercel (Recommended)

1.  **Create an Account:** Go to [vercel.com](https://vercel.com) and sign up (you can log in with your GitHub account).
2.  **Import Project:**
    *   Click **"Add New..."** -> **"Project"**.
    *   Select **"Import"** next to your GitHub repository `Https-github.com-bjamn-twin`.
3.  **Configure Project:**
    *   **Framework Preset:** It should automatically detect `Vite`. If not, select it.
    *   **Root Directory:** Leave as `./`.
4.  **Environment Variables (CRITICAL):**
    *   Expand the **"Environment Variables"** section.
    *   Add the following variable:
        *   **Name:** `VITE_GEMINI_API_KEY`
        *   **Value:** (Paste your actual Gemini API Key here - the one starting with `AIza...`)
5.  **Deploy:**
    *   Click **"Deploy"**.
    *   Wait a minute or two. Vercel will build your site and give you a live URL (e.g., `https://with-love-twin.vercel.app`).

## Option 2: Deploy with Netlify

1.  Go to [netlify.com](https://netlify.com) and sign up.
2.  Click **"Add new site"** -> **"Import an existing project"**.
3.  Connect to **GitHub** and select your repo.
4.  **Build Settings:**
    *   **Build command:** `npm run build`
    *   **Publish directory:** `dist`
5.  **Environment Variables:**
    *   Click **"Show advanced"** or go to "Site settings" -> "Environment variables" after creation.
    *   Add `VITE_GEMINI_API_KEY` with your key.
6.  Click **"Deploy site"**.

## Post-Deployment Checks

1.  **Test the Chat:** Ensure the voice bot works (this confirms the API key is set correctly).
2.  **Test the Contact Form:** Send a test message. You will receive an email from `formsubmit.co` to confirm your email address. Once confirmed, the form will work for everyone.
