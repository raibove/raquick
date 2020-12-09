import React from 'react';
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader"
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
const Loading = (props)=>{

        return (
          <div className="sweet-loading">
            <FadeLoader
              css={override}
              size={150}
              color={"#4a41f3"}
            />
          </div>
        );
};
export default Loading;