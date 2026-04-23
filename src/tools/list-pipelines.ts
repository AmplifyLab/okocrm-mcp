import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest } from "../okocrm-request.js";

export const okocrmListPipelinesTool = {
  name: "okocrm_list_pipelines",
  description: "Get pipelines list.",
  inputSchema: {},
  cb: async () => {
    const data = await okocrmRequest("GET", "/pipelines/");
    return mcpResponse(data);
  }
};
