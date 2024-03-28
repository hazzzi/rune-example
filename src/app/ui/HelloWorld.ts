import { html, Page } from 'rune-ts';
import { ClientLayout, type ClientLayoutData } from '../ClientLayout';

export type HelloWorld = Record<string, string>;

export interface HelloWorldRouter {
  ['/hello-world']: (data: HelloWorld, locals: ClientLayoutData) => ClientLayout; 
}

export const HelloWorldRouter: HelloWorldRouter = {
  ['/hello-world'](data: HelloWorld, locals: ClientLayoutData): ClientLayout {
    return new ClientLayout(new HelloWorldPage(data), locals);
  },
};

export class HelloWorldPage extends Page<HelloWorld> {
  override template() {
    return html`
      <div>
        <h1>Hello, Rune World!</h1>
      </div>
    `
  }

  override onMount() {
    console.log('Hello, World!');
  }
}