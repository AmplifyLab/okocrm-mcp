import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmGetCompanyTool = {
  name: "okocrm_get_company",
  description: "Get company by id.",
  inputSchema: {
    company_id: z.number().int().positive()
  },
  cb: async ({ company_id }: { company_id: number }) => {
    const data = await okocrmRequest("GET", `/companies/${company_id}/`);
    return mcpResponse(data);
  }
};
