import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmListLeadsTool = {
  name: "okocrm_list_leads",
  description: "Get leads list.",
  inputSchema: {
    page: z.number().int().positive().optional()
  },
  cb: async ({ page }: { page?: number }) => {
    const data = await okocrmRequest("GET", "/leads/", {
      query: { page }
    });
    return mcpResponse(data);
  }
};
