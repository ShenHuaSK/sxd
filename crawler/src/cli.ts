import { program } from "commander";

import { runCrawler, Options } from "./index";

program
  .name(process.env.npm_package_name as string)
  .version(process.env.npm_package_version as string)
  .description(process.env.npm_package_description as string)
  .requiredOption("--spider [spider]", "web/api")
  .option("--debug", "debugging")
  .parse(process.argv);

const options = program.opts() as Options;

runCrawler(options);
