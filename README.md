# OkoCRM MCP Server

MCP server that exposes OkoCRM REST API (`https://api.okocrm.com/v2`) as MCP tools.

## What You Need

- Docker
- OkoCRM API token (from OkoCRM profile settings)

## Docker Usage (Build Locally)

1. Build image:
```bash
docker build -t okocrm-mcp:latest .
```

2. Run the MCP server (for Claude/Desktop clients):

```bash
docker run --rm -i \
  -e OKOCRM_API_TOKEN="your_token" \
  okocrm-mcp:latest
```

## Claude Desktop Config (Local Image)

Use explicit `-e KEY=value` arguments:

```json
{
  "mcpServers": {
    "okocrm": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "OKOCRM_API_TOKEN=your_token_here",
        "okocrm-mcp:latest"
      ]
    }
  }
}
```

## Claude Desktop Config (Prebuilt GHCR Image)

```json
{
  "mcpServers": {
    "okocrm": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "OKOCRM_API_TOKEN=your_token_here",
        "ghcr.io/amplifylab/okocrm-mcp:latest"
      ]
    }
  }
}
```

## Available Tool Groups

- Users
- Contacts (list/get/create/update/delete)
- Companies (list/get/create/update/delete)
- Leads (list/get/create/update/delete)
- Pipelines and stages
- Tasks (list/create/done)
- Notes (create)
- Raw OkoCRM request for unsupported endpoints

## Tools

- `okocrm_raw_request`
- `okocrm_list_users`
- `okocrm_list_contacts`
- `okocrm_get_contact`
- `okocrm_create_contact`
- `okocrm_update_contact`
- `okocrm_delete_contact`
- `okocrm_list_companies`
- `okocrm_get_company`
- `okocrm_create_company`
- `okocrm_update_company`
- `okocrm_delete_company`
- `okocrm_list_leads`
- `okocrm_get_lead`
- `okocrm_create_lead`
- `okocrm_update_lead`
- `okocrm_delete_lead`
- `okocrm_list_pipelines`
- `okocrm_list_pipeline_stages`
- `okocrm_list_tasks`
- `okocrm_create_task`
- `okocrm_mark_task_done`
- `okocrm_create_note`

## API Reference

- OkoCRM API docs: https://okocrm.com/api/
