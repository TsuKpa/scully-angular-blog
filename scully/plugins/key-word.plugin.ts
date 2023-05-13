import { HandledRoute, registerPlugin } from "@scullyio/scully"

function keywordPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/tags/CI%2FCD' },
    { route: '/tags/Angular' },
    { route: '/tags/tutorial' },
  ]);
}

const validator = async (conf) => [];
registerPlugin('router', 'keywords', keywordPlugin, validator);