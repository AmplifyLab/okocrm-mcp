import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createRegisterTool } from "./tools/register-tool.js";
import { okocrmCreateCompanyTool } from "./tools/create-company.js";
import { okocrmCreateContactTool } from "./tools/create-contact.js";
import { okocrmCreateLeadTool } from "./tools/create-lead.js";
import { okocrmCreateNoteTool } from "./tools/create-note.js";
import { okocrmCreateTaskTool } from "./tools/create-task.js";
import { okocrmDeleteCompanyTool } from "./tools/delete-company.js";
import { okocrmDeleteContactTool } from "./tools/delete-contact.js";
import { okocrmDeleteLeadTool } from "./tools/delete-lead.js";
import { okocrmGetCompanyTool } from "./tools/get-company.js";
import { okocrmGetContactTool } from "./tools/get-contact.js";
import { okocrmGetLeadTool } from "./tools/get-lead.js";
import { okocrmListCompaniesTool } from "./tools/list-companies.js";
import { okocrmListContactsTool } from "./tools/list-contacts.js";
import { okocrmListLeadsTool } from "./tools/list-leads.js";
import { okocrmListPipelineStagesTool } from "./tools/list-pipeline-stages.js";
import { okocrmListPipelinesTool } from "./tools/list-pipelines.js";
import { okocrmListTasksTool } from "./tools/list-tasks.js";
import { okocrmListUsersTool } from "./tools/list-users.js";
import { okocrmMarkTaskDoneTool } from "./tools/mark-task-done.js";
import { okocrmRawRequestTool } from "./tools/raw-request.js";
import { okocrmUpdateCompanyTool } from "./tools/update-company.js";
import { okocrmUpdateContactTool } from "./tools/update-contact.js";
import { okocrmUpdateLeadTool } from "./tools/update-lead.js";

const server = new McpServer({
  name: "okocrm-mcp-server",
  version: "0.1.0"
});

const registerTool = createRegisterTool(server);

const tools = [
  okocrmRawRequestTool,
  okocrmListUsersTool,
  okocrmListContactsTool,
  okocrmGetContactTool,
  okocrmCreateContactTool,
  okocrmUpdateContactTool,
  okocrmDeleteContactTool,
  okocrmListCompaniesTool,
  okocrmGetCompanyTool,
  okocrmCreateCompanyTool,
  okocrmUpdateCompanyTool,
  okocrmDeleteCompanyTool,
  okocrmListLeadsTool,
  okocrmGetLeadTool,
  okocrmCreateLeadTool,
  okocrmUpdateLeadTool,
  okocrmDeleteLeadTool,
  okocrmListPipelinesTool,
  okocrmListPipelineStagesTool,
  okocrmListTasksTool,
  okocrmCreateTaskTool,
  okocrmMarkTaskDoneTool,
  okocrmCreateNoteTool
];

for (const tool of tools) {
  registerTool(tool.name, tool.description, tool.inputSchema, tool.cb);
}

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

await main();
