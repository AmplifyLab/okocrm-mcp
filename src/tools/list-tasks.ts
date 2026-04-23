import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmListTasksTool = {
  name: "okocrm_list_tasks",
  description: "Get tasks list.",
  inputSchema: {
    page: z.number().int().positive().optional()
  },
  cb: async ({ page }: { page?: number }) => {
    const data = await okocrmRequest("GET", "/tasks/", {
      query: { page }
    });
    return mcpResponse(data);
  }
};
