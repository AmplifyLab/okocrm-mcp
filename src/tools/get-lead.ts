import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmGetLeadTool = {
  name: "okocrm_get_lead",
  description: "Get lead by id.",
  inputSchema: {
    lead_id: z.number().int().positive()
  },
  cb: async ({ lead_id }: { lead_id: number }) => {
    const data = await okocrmRequest("GET", `/leads/${lead_id}/`);
    return mcpResponse(data);
  }
};
