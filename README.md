# StudyHub

A personal study dashboard designed to help students track habits, manage courses, calculate grades, and boost productivity.

> **Note:** This is a prototype version. Some features are still in development and not fully functional.

## Current Limitations

- **AI Tutor** - Not functional (UI only, no backend integration)
- **Premium Features** - Not available (coming soon)
- **Cloud Sync** - Not available (data is stored locally only)
- **Mobile App** - Web only (no native app yet)

## Features

- **Dashboard** - Customizable widget-based layout with drag-and-drop support.
- **Responsive Design** - Fully optimized for Desktop, Tablet (iPad), and Mobile (iPhone) with adaptive layouts.
- **Habit Tracker** - Daily habit tracking with streak counters and progress bars.
- **Digital Notebook** - Rich text editor with multiple paper styles (lined, grid), infinite scrolling pages, and realistic spiral binding aesthetics.
- **Course Management** - Organize courses, syllabus content, and track assignment deadlines.
- **Grade Calculator** - Calculate weighted averages and project final grades.
- **Focus Tools** - Built-in Pomodoro Timer and Stopwatch.
- **Cheatsheets** - Create and organize Markdown-supported study notes and formula sheets.
- **Personalization** - Theme engine with multiple color presets, dark/light modes (system), and premium glassmorphism UI.
- **Localization** - Full Turkish and English language support.

## Tech Stack

- Vite
- Vanilla JavaScript (ES6+)
- Tailwind CSS
- localStorage for data persistence

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/studyhub.git

# Navigate to project directory
cd studyhub

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Project Structure

```
studyhub/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── CoursesPage.js
│   │   ├── NotebookPage.js
│   │   ├── HabitTracker.js
│   │   ├── Pomodoro.js
│   │   └── ...
│   ├── data.js
│   ├── translations.js
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Localization

StudyHub supports multiple languages:
- English (en)
- Turkish (tr)

Language can be changed from Settings.

## Data Storage

All data is stored locally in the browser using localStorage. No data is sent to external servers.

## License

MIT License

## Author

[HeyKaan.dev](https://heykaan.dev)
