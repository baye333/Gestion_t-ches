export class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    // Ajouter une tâche
    addTask(title, description, dueDate) {
        const newTask = {
            id: this.nextId++,
            title,
            description,
            dueDate,
            status: "en cours"
        };
        this.tasks.push(newTask);
    }
    // Supprimer une tâche par ID
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    // Marquer une tâche comme terminée
    markCompleted(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task)
            task.status = "terminée";
    }
    // Filtrer les tâches par statut
    filterTasks(status) {
        return this.tasks.filter(task => task.status === status);
    }
    // Trier les tâches par date
    sortTasksByDate() {
        return this.tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    }
    // Retourner toutes les tâches
    getAllTasks() {
        return this.tasks;
    }
}
