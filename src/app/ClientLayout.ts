import { manifest } from '@rune-ts/server';
import { Layout, Page, UnsafeHtml, html } from 'rune-ts';

export interface ClientLayoutData {
  __host_name: string;
  __bundle_port: number;
  title: string;
  description: string;
}

const ESCAPE_LOOKUP: Record<string, string> = {
  '&': '\\u0026',
  '>': '\\u003e',
  '<': '\\u003c',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

export const ESCAPE_REGEX = /[&><\u2028\u2029]/g;

export function htmlEscapeJsonString(str: string): string {
  return str.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}

export class ClientLayout extends Layout<ClientLayoutData> {
  dataScript: () => UnsafeHtml;

  constructor(page: Page<any>, data:ClientLayoutData) {
    super(page, data);

    this.dataScript = () =>
      html.preventEscape(`
        <script 
          id="__RUNE_DATA__"
          type="application/json"
        >
          ${htmlEscapeJsonString(
            JSON.stringify({
              data: page.data,
              layoutData: data,
              path: this.path,
              manifest,
            }),
          )}
        </script>`);
  }

  override template(data: ClientLayoutData) {
    return html`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${data.title}</title>
          <meta name="description" content="${data.description}" />
        </head>
        <body>
          <div id="body">${this.page}</div>
          <div>${this.dataScript()}</div>
        </body>
      </html>
    `
  }
}