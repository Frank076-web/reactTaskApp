export class Task {
      id: number | null;
      title: string;
      description: string | null;
      completed: string;

      constructor(id: number | null = null, title: string = "", description: string | null = null, completed: string = "IN_PROGRESS") {
            this.id = id;
            this.title = title;
            this.description = description;
            this.completed = completed;
      }
}
