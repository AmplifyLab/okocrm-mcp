import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmListUsersTool = {
  name: "okocrm_list_users",
  description: "Get OkoCRM users list.",
  inputSchema: {
    page: z.number().int().positive().optional()
  },
  cb: async ({ page }: { page?: number }) => {
    const data = await okocrmRequest("GET", "/users/", {
      query: { page }
    });
    return mcpResponse(data);
  }
};
