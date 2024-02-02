import { Task } from "../../entities/task.entity";
import { taskServiceCreate, taskServiceDelete, taskServiceGetAll, taskServiceUpdate } from "../../services/tasks/tasks.service";

export async function taskControllerGetAll(token: string): Promise<Response> {
      const path = process.env.REACT_APP_TASKS_PATH || "";

      return await taskServiceGetAll(path, token);
}

export async function taskControllerCreate(task: Task, token: string): Promise<Response> {
      const path = process.env.REACT_APP_TASKS_PATH || "";

      return await taskServiceCreate(task, path, token);
}

export async function taskControllerUpdate(task: Task, id: string, token: string): Promise<Response> {
      const path = process.env.REACT_APP_TASKS_PATH || "";

      return await taskServiceUpdate(task, `${path}/${id}`, token);
}

export async function taskControllerDelete(id: string, token: string): Promise<Response> {
      const path = process.env.REACT_APP_TASKS_PATH || "";

      return await taskServiceDelete(`${path}/${id}`, token);
}
