import { memo } from "react";

const PageUnavailable = () => {
  return (
    <div className="app__unavailable">
      <h2 className="app__unavailable--title">Page unavailable</h2>
    </div>
  );
};
export default memo(PageUnavailable);
