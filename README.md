# Talwar Interiors & Construction Website

<p align="center">
  <a href="https://www.talwarinteriors.in" target="_blank">
    <img src="./public/assets/talwarinteriors_og.png" alt="Talwar Interiors Website Preview" width="800"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
</p>

A modern, elegant, and responsive website for **Talwar Interiors** — a luxury interior design and construction firm in India.  
Built with the latest web technologies, this project reflects the brand’s premium identity through a refined UI/UX, custom animations, and an SEO-friendly architecture.

**Visit the Live Site →**

---

## 🚀 Core Features

- **Modern Frontend Stack**: Built with the **Next.js 14 App Router** for optimal performance and structure.
- **Fully Responsive Design**: A seamless experience on all devices, crafted with **Tailwind CSS**.
- **Dynamic SEO**: Programmatically generated metadata with full **Open Graph & Twitter card** support for excellent shareability.
- **Interactive UI/UX**:
  - Sticky **WhatsApp & Call buttons** with subtle ripple animations for easy contact.
  - Smooth, custom animations to enhance user engagement.
- **Reusable Component Architecture**: Modular components for the header, footer, testimonials, and more.
- **Backend Integration**: A fully functional **appointment booking system** powered by **Supabase**.
- **Optimized Assets**: High-quality, optimized images and brand assets served from the `/public` directory.
- **Dedicated Pages**: Comprehensive pages for Home, Services, Gallery, Booking, Privacy Policy, and Terms & Conditions.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend & DB**: Supabase (for appointment booking)
- **Deployment**: Vercel

---

## 📂 Project Structure

The project follows the standard Next.js App Router structure, keeping server and client logic cleanly separated.

```
.
├── app/                      # Main application routes & logic
│   ├── (pages)/              # Grouped routes for main pages
│   │   ├── book/             # Booking page components
│   │   ├── gallery/          # Gallery page
│   │   ├── privacy-policy/   # Privacy Policy page
│   │   └── ...
│   ├── api/                  # (Optional) API routes
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
│
├── components/               # Reusable React components
│   ├── footer/               # Footer component
│   ├── header/               # Header/Navigation component
│   ├── sections/             # Page-specific sections (e.g., Testimonials)
│   └── contactbuttons.tsx    # Sticky contact buttons
│
├── public/                   # Static assets
│   └── assets/               # Images, logos, and favicons
│
├── lib/                      # Helper functions, Supabase client, etc.
│
├── .env.local                # Environment variables
├── next.config.mjs           # Next.js configuration
└── package.json              # Project dependencies
```

_(Note: The structure has been simplified for clarity and some folders like `lib/` might need to be created.)_

---

## 🏁 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

- Node.js >= 18
- npm / yarn / pnpm

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/talwar-interiors.git
cd talwar-interiors
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of the project and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## 🔒 Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## 📸 Preview

![Talwar Interiors Preview](./public/assets/talwarinteriors_og.png)

---

## 📄 License

This project is licensed for **Talwar Interiors** and is not intended for redistribution or resale.

---

## 👨‍💻 Author

Developed by **Mohammed Osman**
[www.talwarinteriors.in](https://www.talwarinteriors.in)
