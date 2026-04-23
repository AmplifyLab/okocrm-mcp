import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmUpdateLeadTool = {
  name: "okocrm_update_lead",
  description: "Update lead by id.",
  inputSchema: {
    lead_id: z.number().int().positive(),
    payload: z.record(z.unknown())
  },
  cb: async ({ lead_id, payload }: { lead_id: number; payload: Record<string, unknown> }) => {
    const data = await okocrmRequest("PUT", `/leads/${lead_id}/`, {
      body: payload
    });
    return mcpResponse(data);
  }
};
