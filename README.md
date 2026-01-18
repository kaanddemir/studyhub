# StudyHub

A personal study dashboard designed to help students track habits, manage courses, calculate grades, and boost productivity.

## Features

- **Dashboard** - Customizable widget-based layout with drag-and-drop support
- **Habit Tracker** - Daily habit tracking with progress visualization
- **Grade Calculator** - Calculate weighted averages and predict final grades
- **Pomodoro Timer** - Focus timer with customizable work/break intervals
- **Course Management** - Organize courses, notes, and materials
- **Weekly Schedule** - Plan your study sessions
- **Quick Notes** - Fast note-taking for ideas and reminders
- **Cheatsheets** - Store and organize study cheatsheets
- **Notebook** - Rich text note editor
- **Calculator** - Quick calculations without leaving the app

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

StudyHub Team
