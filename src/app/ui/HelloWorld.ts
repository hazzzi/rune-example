import { html, Page } from 'rune-ts';

export type HelloWorld = Record<string, string>;

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

export const HelloWorldRouter = {
  ['/hello-world']: HelloWorldPage,
};
