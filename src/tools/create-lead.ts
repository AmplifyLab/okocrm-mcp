import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmCreateLeadTool = {
  name: "okocrm_create_lead",
  description: "Create lead.",
  inputSchema: {
    name: z.string(),
    pipeline_id: z.number().int().positive(),
    stages_id: z.number().int().positive(),
    price: z.number().optional(),
    user_id: z.number().int().positive().optional(),
    extra: z.record(z.unknown()).optional()
  },
  cb: async ({
    name,
    pipeline_id,
    stages_id,
    price,
    user_id,
    extra
  }: {
    name: string;
    pipeline_id: number;
    stages_id: number;
    price?: number;
    user_id?: number;
    extra?: Record<string, unknown>;
  }) => {
    const data = await okocrmRequest("POST", "/leads/", {
      body: { name, pipeline_id, stages_id, price, user_id, ...(extra || {}) }
    });
    return mcpResponse(data);
  }
};
