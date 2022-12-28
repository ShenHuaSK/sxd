import { runApiSpider } from "./spider/api_spider";
import { runWebSpider } from "./spider/web_spider";

export interface Options {
  spider: "web" | "api";
  debug: boolean;
}

export async function runCrawler(options: Options): Promise<void> {
  switch (options.spider) {
    case "web":
      await runWebSpider(options.debug);
      break;
    case "api":
      await runApiSpider(options.debug);
      break;
  }
}