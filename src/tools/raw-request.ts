import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { okocrmRequest, type HttpMethod } from "../okocrm-request.js";

export const okocrmRawRequestTool = {
  name: "okocrm_raw_request",
  description:
    "Send a raw request to OkoCRM API v2. Use this for endpoints not covered by dedicated tools.",
  inputSchema: {
    method: z.enum(["GET", "POST", "PUT", "DELETE"]),
    path: z.string().describe("Path like /users/ or /contacts/123/"),
    query: z.record(z.union([z.string(), z.number(), z.boolean()])).optional(),
    body: z.unknown().optional()
  },
  cb: async ({
    method,
    path,
    query,
    body
  }: {
    method: HttpMethod;
    path: string;
    query?: Record<string, string | number | boolean>;
    body?: unknown;
  }) => {
    const data = await okocrmRequest(method, path, { query, body });
    return mcpResponse(data);
  }
};
