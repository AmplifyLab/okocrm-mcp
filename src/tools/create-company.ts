import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmCreateCompanyTool = {
  name: "okocrm_create_company",
  description: "Create a company in OkoCRM.",
  inputSchema: {
    name: z.string(),
    user_id: z.number().int().positive().optional(),
    source_id: z.number().int().positive().optional(),
    phones: z.array(z.object({ phone: z.string() })).optional(),
    emails: z.array(z.object({ email: z.string().email() })).optional(),
    extra: z.record(z.unknown()).optional()
  },
  cb: async ({
    name,
    user_id,
    source_id,
    phones,
    emails,
    extra
  }: {
    name: string;
    user_id?: number;
    source_id?: number;
    phones?: Array<{ phone: string }>;
    emails?: Array<{ email: string }>;
    extra?: Record<string, unknown>;
  }) => {
    const data = await okocrmRequest("POST", "/companies/", {
      body: { name, user_id, source_id, phones, emails, ...(extra || {}) }
    });
    return mcpResponse(data);
  }
};
