import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmDeleteLeadTool = {
  name: "okocrm_delete_lead",
  description: "Delete lead by id.",
  inputSchema: {
    lead_id: z.number().int().positive()
  },
  cb: async ({ lead_id }: { lead_id: number }) => {
    const data = await okocrmRequest("DELETE", `/leads/${lead_id}/`);
    return mcpResponse(data);
  }
};
