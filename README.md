# StudyHub

<div align="center">
  <img src="public/logo.png" alt="StudyHub Logo" width="120" />
</div>

<div align="center">

**A personal study dashboard designed to help students track habits, manage courses, calculate grades, and boost productivity.**

</div>

---

> **Status:** **Prototype Phase**. This project is currently in active development. Some features may be experimental or in progress.

## Overview

StudyHub is a comprehensive, widget-based dashboard tailored for students. It replaces scattered productivity tools with a single, cohesive interface. Built for performance and aesthetics, it offers a premium glassmorphism-inspired UI that adapts to your personal style.

Whether you are tracking exam dates, calculating your GPA, or focusing with a Pomodoro timer, StudyHub keeps everything in one beautiful place.

## Core Features

### Productivity Tools
- **Dashboard**: Customizable widget-based layout with drag-and-drop support.
- **Focus Timer**: Built-in Pomodoro timer with work/break intervals.
- **Stopwatch**: Track pure study time with precision.
- **Habit Tracker**: Daily habit monitoring with streak counters and progress bars.
- **Digital Notebook**: Rich text editor with multiple paper styles (lined, grid) and infinite scrolling.

### Personalization & UX
- **Theme Engine**: Choose from curated color presets nor customize your own accent color.
- **Visuals**: Modern Glassmorphism UI with smooth animations and transitions.
- **Responsive**: Fully optimized for Desktop, Tablet (iPad), and Mobile.
- **Dark/Light Mode**: Adapts to system preferences or user settings.

### Localization
StudyHub is built for a global audience with full localization support:
- **English** (en)
- **Turkish** (tr)

## Current Limitations
- **AI Tutor**: Currently a UI prototype; backend integration is pending.
- **Cloud Sync**: Data is stored locally on the device; no cross-device sync yet.
- **Mobile App**: Available as a web app; native iOS/Android apps are on the roadmap.

## Tech Stack
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Core**: Vanilla JavaScript (ES6+ Modules)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Heroicons / SVG
- **Storage**: Browser LocalStorage API

## Architecture Philosophy
StudyHub follows a **Zero-Overhead** architecture approach.
- **No Heavy Frameworks**: Built without React, Vue, or Angular to ensure maximum performance and learning value.
- **Component-Based**: Uses functional JavaScript components to render HTML dynamically.
- **Simple State Management**: A centralized data handling module (`data.js`) syncs state changes directly to `localStorage`.
- **Modular Router**: A lightweight, custom-built router handles navigation without page reloads.

## Getting Started

### Build
To run StudyHub locally on your machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/kaanddemir/studyhub.git
   cd studyhub
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

## Project Structure

```
studyhub/
├── public/             # Static assets (favicon, logos)
├── src/
│   ├── components/     # UI Components (Dashboard, Courses, etc.)
│   ├── data.js         # Data management & LocalStorage logic
│   ├── translations.js # Localization strings
│   ├── main.js         # App entry, router, and initialization
│   └── style.css       # Global styles & Tailwind imports
├── index.html          # HTML Entry point
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## Data Storage
Your privacy is paramount. StudyHub operates on a **Local-First** basis:
- **Local Storage**: All data (grades, notes, streaks) is saved directly in your browser's `localStorage`.
- **No Tracking**: No personal data is sent to external servers.
- **Backup**: You can manually export/import your data via the Settings panel.

## Roadmap
- [ ] **Cloud Sync**: Optional account creation to sync data across devices.
- [ ] **AI Integration**: Connect StudyAI to a real LLM endpoint.
- [ ] **Grade Calculator**: Support for complex GPA scales (4.0, 5.0, 100).
- [ ] **Native App**: Wrapper using Capacitor/Tauri for mobile stores.

## License
This project is open source and available under the **MIT License**.

## Footer
<div align="center">
  <p>Built by <a href="https://heykaan.dev">heykaan.dev</a></p>
</div>
