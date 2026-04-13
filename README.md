# iCONNECT SUD

## Overview
iCONNECT SUD is a web platform dedicated to bridging the gap between research and community application for Substance Use Disorder (SUD) recovery. The project aims to empower communities with tools and resources to support sustainable recovery, leveraging technology and interdisciplinary collaboration.

## Features
*   **Home**: Latest news, milestones, and director's timeline.
*   **Vision**: Detailed mission statement and community impact goals.
*   **Team**: Meet our interdisciplinary team of founders, researchers, mentors, and interns.
*   **App Showcase**: Preview of the mobile application and its core features.
*   **Contact**: Get in touch with the team via email or visit the CASBBI center.

## Tech Stack
*   **Frontend**: React (v19)
*   **Build Tool**: Vite
*   **Styling**: Vanilla CSS (Custom properties, responsive design)
*   **Hosting**: Firebase Hosting
*   **CI/CD**: GitHub Actions

## Developer Setup & Deployment Guide

Follow these steps to set up the website locally and understand the deployment workflow.

### 1. Local Setup
1. Clone the repository.
2. Ensure you have Node.js installed (v18 or above is recommended).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory. You will need to add the following EmailJS environment variables for the contact form to work. Request these keys from your project lead or reference the existing configuration:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### 2. Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application. The app will automatically reload when you make code changes.

### 3. Build & Preview (Optional)
To build the application for production locally and preview it:
```bash
npm run build
npm run preview
```

### 4. Deployment Workflow (Continuous Deployment)
This project uses **Firebase Hosting** and is integrated with **GitHub Actions** for an automated Continuous Integration/Continuous Deployment (CI/CD) pipeline. 

As a developer, you do **not** need to manually deploy the application to Firebase. 

* **Pull Requests**: When you open a Pull Request against the `main` branch, a GitHub Action automatically builds the project and deploys it to a temporary **Firebase Preview Channel**. A comment will be posted on your PR with a preview URL to test your changes.
* **Production Deployment**: Once your Pull Request is merged into the `main` branch (or you push directly to `main`), the `Deploy to Firebase Hosting on merge` workflow runs. It automatically builds the application and deploys it to the live production site.

**Note on Secrets**: 
The deployment scripts require specific GitHub Secrets to execute properly (e.g., `FIREBASE_SERVICE_ACCOUNT_ICONNECT_SUD`, `VITE_EMAILJS_SERVICE_ID`, etc.). If you fork this repository or recreate the DevOps pipeline, ensure these secrets are configured in the repository's settings.

## Team
iCONNECT SUD is led by Principal Investigator **Siddhartha Sikdar, PhD**, and Co-Founders **Rebecca Leung** and **Dylan Scarton**. The project is supported by a dedicated team of technical leads, coordinators, faculty mentors, and social media interns.

---
Developed with ❤️ by the iCONNECT SUD Team.
