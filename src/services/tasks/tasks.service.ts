import { Task } from "../../entities/task.entity";

export async function taskServiceGetAll(path: string | undefined, token: string | undefined): Promise<Response> {
      const baseUrl = process.env.REACT_APP_BASE_PATH;

      try {
            const response = await fetch(`${baseUrl}/${path}`, {
                  method: "GET",
                  headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                  },
            });

            return response;
      } catch (err) {}

      return new Response(null, { status: 400 });
}

export async function taskServiceCreate(task: Task, path: string | undefined, token: string | undefined): Promise<Response> {
      const baseUrl = process.env.REACT_APP_BASE_PATH;

      try {
            const response = await fetch(`${baseUrl}/${path}`, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({
                        title: task.title,
                        description: task.description,
                  }),
            });

            return response;
      } catch (err) {}

      return new Response(null, { status: 400 });
}

export async function taskServiceUpdate(task: Task, path: string | undefined, token: string | undefined): Promise<Response> {
      const baseUrl = process.env.REACT_APP_BASE_PATH;

      try {
            const response = await fetch(`${baseUrl}/${path}`, {
                  method: "PUT",
                  headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({
                        title: task.title,
                        description: task.description,
                        completed: task.completed,
                  }),
            });

            return response;
      } catch (err) {}

      return new Response(null, { status: 400 });
}

export async function taskServiceDelete(path: string | undefined, token: string | undefined): Promise<Response> {
      const baseUrl = process.env.REACT_APP_BASE_PATH;

      try {
            const response = await fetch(`${baseUrl}/${path}`, {
                  method: "DELETE",
                  headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                  },
            });

            return response;
      } catch (err) {}

      return new Response(null, { status: 400 });
}
