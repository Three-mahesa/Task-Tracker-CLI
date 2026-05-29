## Project URL
https://github.com/Three-mahesa/Task-Tracker-CLI.git

# Task Tracker CLI 📝

A simple command-line interface (CLI) to track and manage your tasks. Built with pure Node.js — no external libraries.

## Requirements

- [Node.js](https://nodejs.org/) v14 or higher

## Installation

1. Clone or download this repository
2. Navigate to the project directory

```bash
cd task-tracker-cli
```

3. No need to install anything — just run it!

## Usage

### Add a new task
```bash
node app.js add "Your task description"
```
Example:
```bash
node app.js add "Beli susu"
# Output: Task added successfully (ID: 1)
```

### List all tasks
```bash
node app.js list
```

### List tasks by status
```bash
node app.js list todo
node app.js list in-progress
node app.js list done
```

### Update a task
```bash
node app.js update <id> "New description"
```
Example:
```bash
node app.js update 1 "Beli susu dan roti"
```

### Delete a task
```bash
node app.js delete <id>
```
Example:
```bash
node app.js delete 1
```

### Mark a task as in-progress
```bash
node app.js mark-in-progress <id>
```
Example:
```bash
node app.js mark-in-progress 1
```

### Mark a task as done
```bash
node app.js mark-done <id>
```
Example:
```bash
node app.js mark-done 1
```

## Task Properties

Each task has the following properties:

| Property | Description |
|---|---|
| `id` | Unique identifier |
| `description` | Task description |
| `status` | `todo`, `in-progress`, or `done` |
| `createdAt` | Date and time when task was created |
| `updatedAt` | Date and time when task was last updated |

## Data Storage

Tasks are stored in `./Data/ListData.json`. The file and folder are created automatically on first run.

Example:
```json
[
  {
    "id": 1,
    "description": "Beli susu",
    "status": "done",
    "createdAt": "2026-05-29T09:00:00.000Z",
    "updatedAt": "2026-05-29T09:30:00.000Z"
  }
]
```

## Project Structure

```
task-tracker-cli/
├── app.js            ← main application
├── README.md         ← this file
└── Data/
    └── ListData.json ← auto-generated task storage
```

## Author

**Three Mahesa Agsa Ramadhan**  
GitHub: [@Mahesa101](https://github.com/Mahesa101)
