import { OpenAgentsBuilderClient } from "open-agents-builder-client";

const client = new OpenAgentsBuilderClient({
  baseUrl: "https://app.openagentsbuilder.com",  // optional, defaults to this if omitted
  databaseIdHash: process.env.DATABASE_ID_HASH ?? '',  // optional, defaults to this if omitted
  apiKey: process.env.OPEN_AGENTS_BUILDER_API_KEY ?? ''  // required
});

client.agent.listAgents().then((response) => {
  console.log(response);
});