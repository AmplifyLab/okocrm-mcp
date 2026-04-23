import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmUpdateContactTool = {
  name: "okocrm_update_contact",
  description: "Update contact by id.",
  inputSchema: {
    contact_id: z.number().int().positive(),
    payload: z.record(z.unknown())
  },
  cb: async ({ contact_id, payload }: { contact_id: number; payload: Record<string, unknown> }) => {
    const data = await okocrmRequest("PUT", `/contacts/${contact_id}/`, {
      body: payload
    });
    return mcpResponse(data);
  }
};
