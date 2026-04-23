import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmListCompaniesTool = {
  name: "okocrm_list_companies",
  description: "Get companies list.",
  inputSchema: {
    page: z.number().int().positive().optional()
  },
  cb: async ({ page }: { page?: number }) => {
    const data = await okocrmRequest("GET", "/companies/", {
      query: { page }
    });
    return mcpResponse(data);
  }
};
