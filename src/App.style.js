/**@jsx jsx */
import { jsx, css } from "@emotion/core";

export const AnotherFileComponent = ({ isTrue, isUse }) => {
  const cssStyle = css`
    font-size: 30px;
    color: ${isTrue ? "green" : "black"};
  `;
  return (
    <div css={cssStyle}>
      <h1>Components from another file.</h1>
      {isUse && <span>isUse span Component</span>}
    </div>
  );
};
