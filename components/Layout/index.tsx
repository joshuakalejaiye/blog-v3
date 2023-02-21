import styles from "./Layout.module.scss";
import Head from "next/head";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  flex?: boolean;
}

const Layout = ({ children, title, flex }: LayoutProps) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Joshua Kalejaiye</title>
      </Head>
      <noscript>
        <style type="text/css">
          {`
            .pagecontainer {
              display: none;
            }

            html { 
              background-color: #1E1E1E;
            }
            .turnOnJsContainer { 
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              cursor: pointer;
            }
            .turnOnJs {
              color: white;
              font-family: Verdana;
              text-decoration: none;
              font-style: italic;
              margin: auto;
              font-size: 1.5rem;
              padding: 0 1rem;
            }
            .author {
              font-size: 1rem;
              font-style: normal;
              margin-top: 1rem;
              text-align: right;
              color: lightgrey;
            }
          `}
        </style>
        <div className="turnOnJsContainer">
          <a
            className="turnOnJs"
            href="https://stackoverflow.com/questions/121203/how-to-detect-if-javascript-is-disabled#comment14518676_121241"
          >
            &rdquo;Life&apos;s too short. It&apos;s 2012 - Enable javascript or
            go home&rdquo;
            <p className="author">- Yarin from StackOverflow</p>
          </a>
        </div>
      </noscript>
      <div className="pagecontainer">
        <Header />
        <div className={styles.content}>{children}</div>
        {/* <div className={styles.footer}></div> */}
      </div>
    </main>
  );
};

export default Layout;
