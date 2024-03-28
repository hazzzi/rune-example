import { LayoutHelper } from 'rune-ts';
import { HelloWorldRouter } from './ui/HelloWorld';

export type ClientRouter = HelloWorldRouter;

export const ClientRouter: HelloWorldRouter = LayoutHelper.createRouter<ClientRouter>({
  ...HelloWorldRouter,
});