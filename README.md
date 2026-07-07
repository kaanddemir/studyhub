# StudyHub

<div align="center">
  <img src="public/logo.png" alt="StudyHub Logo" width="120" />
</div>

<div align="center">

**A personal study dashboard for tracking habits, managing courses, calculating grades, and staying focused.**

</div>

---

> **Status:** **Prototype Phase**. This project is currently in active development. Some features may be experimental or in progress.

## Overview

StudyHub is a local-first student dashboard built with Vite, Tailwind CSS, and vanilla JavaScript modules. It brings study planning, course tracking, exams, notes, habits, widgets, and focus tools into one lightweight browser app.

The app is designed for personal use. Study data, preferences, widget layouts, notes, and other settings are stored in browser `localStorage`.

## Core Features

### Study Dashboard
- **Customizable Widgets**: Reorder and resize dashboard widgets.
- **Focus Tools**: Use Pomodoro, stopwatch, quick notes, scratchpad, and bookmarks.
- **Habit Tracking**: Track daily habits and study streaks.
- **Schedule Widgets**: Manage calendar items, todos, and weekly schedule entries.

### Courses & Exams
- **Course Management**: Add courses, instructor details, schedules, notes, and resources.
- **Exam Tracking**: Store exam dates, times, locations, and logistics.
- **Grade Calculator**: Calculate current averages and required scores.
- **Cheatsheets & Notebook**: Keep structured study notes, formulas, and attachments.

### Privacy & UX
- **Local-First Storage**: Data is saved in browser `localStorage`.
- **No Backend Required**: The app runs as a static Vite frontend.
- **Responsive App Shell**: Designed for desktop, tablet, and mobile layouts.
- **Localization**: Includes English and Turkish UI text.

## Current Limitations
- **Single-Device Storage**: Data does not sync across devices.
- **Browser Storage**: Clearing browser storage clears StudyHub data.
- **Prototype AI Areas**: StudyAI-related UI is currently demo/prototype behavior.
- **Static Deployment**: Production output is generated into `docs/` for GitHub Pages-style hosting.

## Tech Stack
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Storage**: Browser LocalStorage API

## Getting Started

### Setup

Requires Node.js 18+.

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview the production build**
   ```bash
   npm run preview
   ```

## Project Structure

```text
StudyHub/
├── docs/                 # GitHub Pages / production build output
├── public/               # Runtime static assets, logo only for now
├── src/
│   ├── components/       # UI modules
│   ├── data.js           # Default data and localStorage persistence
│   ├── main.js           # App shell, routing, and bootstrapping
│   ├── security.js       # HTML sanitization and escaping helpers
│   ├── style.css         # Tailwind entry and global styles
│   └── translations.js   # English and Turkish UI strings
├── index.html            # HTML entry point
├── package.json          # npm scripts and dependencies
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── LICENSE
└── README.md
```

## Data Storage

StudyHub is local-first:
- **Local Storage**: Courses, exams, notebook content, cheatsheets, profile settings, widget layouts, habits, notes, and preferences are stored in browser `localStorage`.
- **No Backend Database**: The project does not include a backend or server-side persistence.
- **Manual Control**: Use the in-app export/import tools where available when you want to back up or move data.

## Basic Workflow
1. Run the app locally with `npm run dev`.
2. Complete onboarding with your name, school, department, and theme preference.
3. Add courses, exams, notes, habits, and schedule items.
4. Customize dashboard widgets to match your study workflow.
5. Build with `npm run build` when updating the static `docs/` output.

## License
This project is open source and available under the **MIT License**.

## Footer
<div align="center">
  <p>Built by <a href="https://heykaan.dev">heykaan.dev</a></p>
</div>
