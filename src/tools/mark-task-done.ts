import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmMarkTaskDoneTool = {
  name: "okocrm_mark_task_done",
  description: "Mark task as done and optionally add comment text.",
  inputSchema: {
    task_id: z.number().int().positive(),
    text: z.string().optional()
  },
  cb: async ({ task_id, text }: { task_id: number; text?: string }) => {
    const data = await okocrmRequest("POST", `/tasks/done/${task_id}`, {
      body: text ? { text } : {}
    });
    return mcpResponse(data);
  }
};
