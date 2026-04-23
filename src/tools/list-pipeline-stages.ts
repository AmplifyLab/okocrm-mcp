import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmListPipelineStagesTool = {
  name: "okocrm_list_pipeline_stages",
  description: "Get pipeline stages by pipeline id.",
  inputSchema: {
    pipeline_id: z.number().int().positive()
  },
  cb: async ({ pipeline_id }: { pipeline_id: number }) => {
    const data = await okocrmRequest("GET", `/pipelines/stages/${pipeline_id}`);
    return mcpResponse(data);
  }
};
