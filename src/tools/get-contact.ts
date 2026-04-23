import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmGetContactTool = {
  name: "okocrm_get_contact",
  description: "Get contact by id.",
  inputSchema: {
    contact_id: z.number().int().positive()
  },
  cb: async ({ contact_id }: { contact_id: number }) => {
    const data = await okocrmRequest("GET", `/contacts/${contact_id}/`);
    return mcpResponse(data);
  }
};
