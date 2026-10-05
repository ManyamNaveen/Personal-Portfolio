# Manyam Naveen — Java Backend Developer Portfolio

A modern, high-performance personal portfolio built with **Next.js 13**, **React 18**, **TypeScript**, and **Tailwind CSS**. Designed for showcasing enterprise distributed backend systems, microservices architecture, payment gateways, and batch rule engines.

---

## ⚡ Key Features

- **Production-Grade Next.js Architecture**: Optimized app router structure, zero layout shifts, and server-side static page generation.
- **Cinematic Hero + Scroll Animations**: Video hero with stroke-drawn name and parallax, plus scroll-triggered reveals (Motion) as each section lands.
- **Interactive Case Studies**: In-depth architecture breakdowns for Payments Bridge, Collections Platform, and Decision Engine with responsive modal dialogs.
- **Full Contact System**:
  - **Direct Email Delivery**: Form submissions delivered straight to your Gmail inbox via Nodemailer.
  - **Instant WhatsApp Integration**: Pre-filled one-click WhatsApp chat for rapid recruiter connections.
- **Modern Responsive Design**: Fluid layouts optimized across mobile, tablet, 1080p, and ultrawide displays.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling & Motion**: Tailwind CSS, Motion, Lucide icons
- **Mail & Communication**: Nodemailer, WhatsApp Click-to-Chat Protocol
- **Fonts**: Manrope, Inter & Space Grotesk, self-hosted via next/font/local

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/ManyamNaveen/Personal-Portfolio.git
cd Personal-Portfolio
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your email credentials:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
GMAIL_USER=naveenmanyam12@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
RECIPIENT_EMAIL=naveenmanyam12@gmail.com
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ☁️ Deployment (Vercel)

1. Import this repository into [Vercel](https://vercel.com).
2. Under **Project Settings → Environment Variables**, add:
   - `GMAIL_USER`: `naveenmanyam12@gmail.com`
   - `GMAIL_APP_PASSWORD`: `<your Google App Password>`
   - `RECIPIENT_EMAIL`: `naveenmanyam12@gmail.com`
3. Click **Deploy**.

---

## 👤 Author

**Manyam Naveen**
- **Role**: Java Backend Developer & Systems Engineer
- **Email**: [naveenmanyam12@gmail.com](mailto:naveenmanyam12@gmail.com)
- **LinkedIn**: [linkedin.com/in/naveenmanyam](https://linkedin.com/in/naveenmanyam)
- **Phone**: +91 9398365948
