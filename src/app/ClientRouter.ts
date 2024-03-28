import { LayoutHelper, Page, html } from 'rune-ts';

export class Empty extends Page<Record<string, string>>{
  template() {
    return html`<div>Empty</div>`
  }
}

export interface ExampleRouter {
  ['/example']: () => Empty;
}

export const ExampleRouter: ExampleRouter = {
  ['/example']() {
    return new Empty();
  },
};

export type ClientRouter = ExampleRouter;

export const ClientRouter: ExampleRouter = LayoutHelper.createRouter<ClientRouter>({
  ...ExampleRouter,
});