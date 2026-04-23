import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmDeleteCompanyTool = {
  name: "okocrm_delete_company",
  description: "Delete company by id.",
  inputSchema: {
    company_id: z.number().int().positive()
  },
  cb: async ({ company_id }: { company_id: number }) => {
    const data = await okocrmRequest("DELETE", `/companies/${company_id}/`);
    return mcpResponse(data);
  }
};
