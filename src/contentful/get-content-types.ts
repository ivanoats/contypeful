import { config } from "dotenv";
config();

import { createClient } from "contentful-management";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});
