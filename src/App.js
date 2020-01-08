/**@jsx jsx */
import { jsx, css } from "@emotion/core";
import { AnotherFileComponent } from "./App.style";

const appStyle = css`
  font-size: 25px;
  color: red;
`;

const redFont = css`
  color: red;
`;

const blueFont = css`
  color: blue;
`;

const Subtitle = ({ isTrue }) => {
  const cssStyle = isTrue ? blueFont : redFont;
  return (
    <div>
      <h2 css={cssStyle}>Subtitle</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2 css={appStyle}>Start editing to see some magic happen!</h2>
      <Subtitle isTrue />
      <Subtitle />
      <AnotherFileComponent isTrue isUse />
      <AnotherFileComponent />
    </div>
  );
};

export default App;
