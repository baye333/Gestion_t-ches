import { Task } from "./models";

export class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  // Ajouter une tâche
  addTask(title: string, description: string, dueDate: Date): void {
    const newTask: Task = {
      id: this.nextId++,
      title,
      description,
      dueDate,
      status: "en cours"
    };
    this.tasks.push(newTask);
  }

  // Supprimer une tâche par ID
  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // Marquer une tâche comme terminée
  markCompleted(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.status = "terminée";
  }

  // Filtrer les tâches par statut
  filterTasks(status: "en cours" | "terminée"): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  // Trier les tâches par date
  sortTasksByDate(): Task[] {
    return this.tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  }

  // Retourner toutes les tâches
  getAllTasks(): Task[] {
    return this.tasks;
  }
}
