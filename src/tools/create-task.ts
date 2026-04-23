import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmCreateTaskTool = {
  name: "okocrm_create_task",
  description: "Create task.",
  inputSchema: {
    text: z.string(),
    user_id: z.number().int().positive(),
    date: z.string().describe("Date/time in the format expected by OkoCRM."),
    lead_id: z.number().int().positive().optional(),
    contact_id: z.number().int().positive().optional(),
    company_id: z.number().int().positive().optional(),
    type_id: z.number().int().positive().optional(),
    extra: z.record(z.unknown()).optional()
  },
  cb: async ({
    text,
    user_id,
    date,
    lead_id,
    contact_id,
    company_id,
    type_id,
    extra
  }: {
    text: string;
    user_id: number;
    date: string;
    lead_id?: number;
    contact_id?: number;
    company_id?: number;
    type_id?: number;
    extra?: Record<string, unknown>;
  }) => {
    const data = await okocrmRequest("POST", "/tasks/", {
      body: {
        text,
        user_id,
        date,
        lead_id,
        contact_id,
        company_id,
        type_id,
        ...(extra || {})
      }
    });
    return mcpResponse(data);
  }
};
