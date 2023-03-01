import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { XMLParser } from "fast-xml-parser";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // antd cssinjs cache
    const antdCssCache = createCache();

    // Styled Components
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Fetch stylesheets for rendered components
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <StyleProvider cache={antdCssCache}>
                {/* Styleprovider is for ant cssinjs cache */}
                <App {...props} />
              </StyleProvider>
            )
        });

      const initialProps = await Document.getInitialProps(ctx);

      // convert style string to style nodes
      const antdSsrStylesString = extractStyle(antdCssCache);
      const antdSsrStyles = new XMLParser({
        ignoreAttributes: false,
        attributesGroupName: "@_"
      }).parse(antdSsrStylesString);
      const antdSsrStyleNodes =
        antdSsrStyles.style?.map((s: any, i: number) => {
          const attrs = Object.fromEntries(
            Object.entries(s["@_"]).map((e) => [e[0].replace("@_", ""), e[1]])
          );
          return (
            <style
              key={`antdcssinjs_${i}`}
              {...attrs}
              dangerouslySetInnerHTML={{ __html: s["#text"] }}
            ></style>
          );
        }) || [];

      // Inject styles in document
      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          ...sheet.getStyleElement(),
          ...antdSsrStyleNodes
        ]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/**
 * https://github.com/ant-design/create-next-app-antd/blob/main/pages/_document.tsx
 * https://styled-components.com/docs/advanced#with-swc
 * https://github.com/ant-design/ant-design/issues/39418
 * https://github.com/sagemathinc/cocalc/issues/6320
 *
 *
 */
