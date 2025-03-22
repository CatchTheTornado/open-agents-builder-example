## Getting Started

This example demonstrates how to use the [open-agents-builder-client](https://github.com/CatchTheTornado/open-agents-builder-client) to connect to the [Open Agents Builder API](https://github.com/CatchTheTornado/open-agents-builder). The API documentation can be found [here](https://docs.openagentsbuilder.com/).

### Step 1: Create an API Key

To create an API key, follow the instructions [here](https://docs.openagentsbuilder.com/api/0-creating-api-key/).

### Step 2: Install the npm Packages

Install the required npm packages:

```sh
npm install open-agents-builder-client zod
```

### Step 3: Set the Required Environment Variables

Set the following environment variables in your project:

- `DATABASE_ID_HASH`: Your database ID hash (optional).
- `OPEN_AGENTS_BUILDER_API_KEY`: Your API key (required).

You can set these variables in a `.env` file at the root of your project:

```env
DATABASE_ID_HASH=your_database_id_hash
OPEN_AGENTS_BUILDER_API_KEY=your_api_key
```

### Example Usage

Check the `src/index.ts` showing how properly use the client.

To run the example execute:

```sh
npm run build
npm run start
```

Here is an example of how to use the client:


```ts
import { OpenAgentsBuilderClient } from "open-agents-builder-client";

const client = new OpenAgentsBuilderClient({
    baseUrl: "https://app.openagentsbuilder.com",  // optional, defaults to this if omitted
    databaseIdHash: process.env.DATABASE_ID_HASH ?? '',  // optional, defaults to this if omitted
    apiKey: process.env.OPEN_AGENTS_BUILDER_API_KEY ?? ''  // required
});

client.agent.listAgents().then((response) => {
    console.log(response);
});
```