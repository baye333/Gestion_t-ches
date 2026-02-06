// export = permet d’utiliser cette interface dans d’autres fichiers TypeScript
export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: "en cours" | "terminée";
}
