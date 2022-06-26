import React from "react";

const MobileSearch = () => {
  return (
    <>
      <div className="mobile-search">
        <form className="search-form">
          <span data-feather="search" />
          <input
            className="form-control mr-sm-2 box-shadow-none"
            type="text"
            placeholder="Search..."
          />
        </form>
      </div>
      <div className="mobile-author-actions" />
    </>
  );
};

export default MobileSearch;
