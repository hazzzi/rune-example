import { createRouter } from '@rune-ts/server';
import { HelloWorldRouter } from './ui/HelloWorld';

export type ClientRouter = typeof HelloWorldRouter;

export const ClientRouter = createRouter<ClientRouter>({
  ...HelloWorldRouter,
});