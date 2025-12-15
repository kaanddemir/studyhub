const defaultData = {
    user: {
        name: "", // Dynamic
        role: "Student",
        university: "", // Dynamic
        department: "", // Dynamic
        avatar: "", // No default avatar
        isSetup: false,
        isPremium: false
    },
    stats: {
        courses: { total: 0, new: 0 },
        completed: { total: 0, label: "No courses completed", count: 0 },
        challenges: { total: 0, label: "No active challenges" },
        streak: { total: 0, label: "No streak yet" }
    },
    chartData: [
        { day: 'Mon', study: 0, exam: 0 },
        { day: 'Tue', study: 0, exam: 0 },
        { day: 'Wed', study: 0, exam: 0 },
        { day: 'Thu', study: 0, exam: 0 },
        { day: 'Fri', study: 0, exam: 0 },
        { day: 'Sat', study: 0, exam: 0 },
        { day: 'Sun', study: 0, exam: 0 },
    ],
    examSchedule: [
        { date: 15, day: 'W' },
        { date: 16, day: 'T' },
        { date: 17, day: 'F' }, // Removed active: true
        { date: 18, day: 'S' },
        { date: 19, day: 'S' },
        { date: 20, day: 'M' },
        { date: 21, day: 'T' },
    ],
    courses: [],
    notebook: {
        notes: [
            { id: 1, title: 'My First Note', content: '<h3>Welcome to your Digital Notebook!</h3><p>This looks just like a spiral notebook, but acts like a Word doc.</p><ul><li><b>Bold</b> text</li><li><i>Italic</i> text</li></ul>', date: new Date().toISOString(), category: 'General' }
        ]
    },
    todos: [],
    weeklySchedule: {
        events: {} // key: "dayIndex-periodIndex", value: "Main Content"
    },
    exams: [],
    cheatsheets: []
};

// Load from local storage or use default
// Load from local storage or use default
const storedData = localStorage.getItem('studentDashboardData_v2');
let loadedData = defaultData;

if (storedData) {
    try {
        const parsed = JSON.parse(storedData);
        loadedData = { ...defaultData, ...parsed };

        // Ensure new fields are populated if missing in stored data
        if (!loadedData.exams) loadedData.exams = defaultData.exams;
        if (!loadedData.cheatsheets) loadedData.cheatsheets = defaultData.cheatsheets;
    } catch (e) {
        console.error("Failed to parse stored data", e);
    }
}

export const data = loadedData;

export function saveData() {
    localStorage.setItem('studentDashboardData_v2', JSON.stringify(data));
}
