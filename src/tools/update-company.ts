import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmUpdateCompanyTool = {
  name: "okocrm_update_company",
  description: "Update company by id.",
  inputSchema: {
    company_id: z.number().int().positive(),
    payload: z.record(z.unknown())
  },
  cb: async ({ company_id, payload }: { company_id: number; payload: Record<string, unknown> }) => {
    const data = await okocrmRequest("PUT", `/companies/${company_id}/`, {
      body: payload
    });
    return mcpResponse(data);
  }
};
