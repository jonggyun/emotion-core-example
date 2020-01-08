/**@jsx jsx */
import { jsx, css } from "@emotion/core";
/** case 1 */
import { AnotherFileComponent } from "./App.style";

/** case 2 */
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

/** case 3 */
const propsTestStyle = ({ isChecked }) => css`
  color: ${isChecked ? "pink" : "purple"};
`;

/** casd 4 */
const Subtitle = ({ isTrue }) => {
  const cssStyle = isTrue ? blueFont : redFont;
  return (
    <div>
      <h2 css={cssStyle}>Subtitle</h2>
    </div>
  );
};

const App = () => {
  const isChecked = true;
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2 css={appStyle}>Start editing to see some magic happen!</h2>
      <h2 css={propsTestStyle({ isChecked })}>
        Start editing to see some magic happen!
      </h2>
      <Subtitle isTrue />
      <Subtitle />
      <AnotherFileComponent isTrue isUse />
      <AnotherFileComponent />
    </div>
  );
};

export default App;
