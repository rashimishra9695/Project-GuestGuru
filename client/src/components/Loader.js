import React from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

function Loader({ color = '#256395', size = 80, loading = true, marginTop = '150px' }) {
  return (
    <div className="sweet-loading text-center" style={{ marginTop }}>
      <HashLoader color={color} loading={loading} css={css``} size={size} />
    </div>
  );
}

export default Loader;




