//untuk membaca file
const fs = require("fs");
const readline = require("node:readline");

//Cek Folder
const dirpath = "./Data";
if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath);
}

//Cek file
const dataPath = "./Data/ListData.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

//dapat Mengakses Data
function loadTasks() {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
}

//Menulis ulang menjadi bentuk json
function saveTasks(isiData) {
  fs.writeFileSync(dataPath, JSON.stringify(isiData, null, 2));
}

//menghapus 2 data awal
const args = process.argv.slice(2);
const command = args[0];

//commoond menambahkan list
if (command === "add") {
  const isi = args[1];
  const status = "todo";
  const tasks = loadTasks();

  const newTasks = {
    id: tasks.length + 1,
    description: isi,
    status: status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTasks);
  saveTasks(tasks);
  console.log(`Task aaded Succecssfully (ID: ${newTasks.id})`);
}
//command untuk melihat semua list dan mencari sesusati status
else if (command === "list") {
  const tasks = loadTasks();
  const fillterStatus = args[1];
  const result = fillterStatus
    ? tasks.filter((task) => task.status === fillterStatus)
    : tasks;

  if (result.length === 0) {
    console.log("No task found");
  }

  result.forEach((allTasks) => {
    console.log(
      `[${allTasks.id}] ${allTasks.description} [${allTasks.status}] - ${allTasks.updatedAt}`,
    );
  });
}
//menghapus satu list
else if (command === "delete") {
  const id = Number(args[1]);
  const tasks = loadTasks();

  const tasksCek = tasks.find((mencari) => mencari.id === id);

  if (!tasksCek) {
    console.log("Task not found");
  } else {
    const newTasks = tasks.filter((task) => task.id !== id);
    saveTasks(newTasks);
    console.log("Task deleted successfully");
  }
}
//
else if (command === "update") {
  const id = Number(args[1]);
  const newDescription = args[2];
  const tasks = loadTasks();

  const task = tasks.find((mencari) => mencari.id === id);

  if (!task) {
    console.log("Task not found");
  } else {
    task.description = newDescription;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log("Task update successfully");
  }
}
//mengupdate status list
else if (command === "mark-in-progress" || command === "mark-done") {
  const id = Number(args[1]);
  const tasks = loadTasks();
  const task = tasks.find((cari) => cari.id === id);
  const Update = args[0].split("-");
  if (Update == 2) {
    Update.at(-1);
  } else {
    Update.shift();
  }
  const statusUpdate = Update.join("-");

  if (!task) {
    console.log("Task not found");
  } else {
    task.status = statusUpdate;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log("Task marked as in-progress");
  }
}



