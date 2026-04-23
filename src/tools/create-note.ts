import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmCreateNoteTool = {
  name: "okocrm_create_note",
  description: "Add text note to lead, contact, or company.",
  inputSchema: {
    text: z.string(),
    lead_id: z.number().int().positive().optional(),
    contact_id: z.number().int().positive().optional(),
    company_id: z.number().int().positive().optional()
  },
  cb: async ({
    text,
    lead_id,
    contact_id,
    company_id
  }: {
    text: string;
    lead_id?: number;
    contact_id?: number;
    company_id?: number;
  }) => {
    const idsCount = [lead_id, contact_id, company_id].filter(
      (value) => value !== undefined
    ).length;
    if (idsCount !== 1) {
      throw new Error("Exactly one of lead_id, contact_id, or company_id is required.");
    }

    const data = await okocrmRequest("POST", "/notes/note", {
      body: { text, lead_id, contact_id, company_id }
    });
    return mcpResponse(data);
  }
};
