import { create } from "zustand";
import { Task } from "../entities/task.entity";
import { taskControllerCreate, taskControllerDelete, taskControllerGetAll, taskControllerUpdate } from "../controllers/tasks/tasks.controller";

interface TasksStore {
      tasks: Task[];
      getTasks: (token: string) => Promise<void>;
      addTask: (task: Task, token: string) => Promise<boolean>;
      updateTask: (task: Task, id: string, token: string) => Promise<boolean>;
      deleteTask: (id: string, token: string) => Promise<void>;
}

export const useTasksStore = create<TasksStore>()((set, get) => ({
      tasks: [],
      getTasks: async token => {
            const res = await taskControllerGetAll(token);
            if (res.ok) {
                  const data = (await res.json()) as Task[];

                  set(() => ({
                        tasks: data,
                  }));
            }
      },
      addTask: async (task, token) => {
            const res = await taskControllerCreate(task, token);
            return res.ok;
      },
      updateTask: async (task, id, token) => {
            const res = await taskControllerUpdate(task, id, token);
            return res.ok;
      },
      deleteTask: async (id, token) => {
            await taskControllerDelete(id, token);
            get().getTasks(token);
      },
}));
