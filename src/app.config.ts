import { registerAs } from "@nestjs/config";
import { readFileSync } from "node:fs";

const appConfig = registerAs("nestrack_db", () => ({
  user: readFileSync("config/.nestrack_db_user", "utf8").trim(),
  pass: readFileSync("config/.nestrack_db_pass", "utf8").trim(),
}));

export default appConfig;
