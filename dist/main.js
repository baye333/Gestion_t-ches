import { TaskManager } from "./taskManager.js"; // Vérifie bien le .js ici
const manager = new TaskManager();
// Sélection des éléments avec typage strict
const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
function renderTasks() {
    // On vide la liste avant de la reconstruire
    taskList.innerHTML = "";
    manager.getAllTasks().forEach(task => {
        const li = document.createElement("li");
        // Structure HTML propre avec classes pour le CSS
        li.innerHTML = `
      <div class="task-content">
        <span class="task-title" style="${task.status === 'terminée' ? 'text-decoration: line-through; color: gray;' : ''}">
          ${task.title}
        </span>
        <span class="task-details">
          📅 ${task.dueDate.toLocaleDateString('fr-FR')} - <strong>${task.status}</strong>
        </span>
      </div>
      <div class="actions"></div>
    `;
        const actionsContainer = li.querySelector(".actions");
        // Bouton Terminer
        const btnComplete = document.createElement("button");
        btnComplete.textContent = "Terminer";
        btnComplete.addEventListener("click", () => {
            manager.markCompleted(task.id);
            renderTasks();
        });
        // Bouton Supprimer
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Supprimer";
        btnDelete.addEventListener("click", () => {
            console.log(`Suppression de la tâche ${task.id}`); // Debug console
            manager.removeTask(task.id);
            renderTasks();
        });
        actionsContainer.appendChild(btnComplete);
        actionsContainer.appendChild(btnDelete);
        taskList.appendChild(li);
    });
}
// Gestion de la soumission du formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("description");
    const dateInput = document.getElementById("dueDate");
    if (titleInput.value && dateInput.value) {
        manager.addTask(titleInput.value, descInput.value, new Date(dateInput.value));
        renderTasks();
        form.reset();
    }
});
// Premier rendu au chargement
renderTasks();
