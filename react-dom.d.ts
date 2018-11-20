declare module 'react-dom/server' {
  import { ReactElement } from 'react';

  // tslint:disable-next-line:no-any
  export function renderToStaticMarkup(element: ReactElement<any>): string;
}
