import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmDeleteContactTool = {
  name: "okocrm_delete_contact",
  description: "Delete contact by id.",
  inputSchema: {
    contact_id: z.number().int().positive()
  },
  cb: async ({ contact_id }: { contact_id: number }) => {
    const data = await okocrmRequest("DELETE", `/contacts/${contact_id}/`);
    return mcpResponse(data);
  }
};
