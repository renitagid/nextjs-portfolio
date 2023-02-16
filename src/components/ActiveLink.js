import { withRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

const ActiveLink = ({ router, href, isLeftSideBar = false, children }) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  (function prefetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();

  const settings = {
    theme: "light",
  };

  const theme =
    settings.theme === "light" && isLeftSideBar ? "#e65100" : "#ffeb3b";
  const color = isCurrentPath ? theme : "";

  return (
    <div className="m-3 flex justify-center">
    <Link
      className={` px-2 py-1 text-2xl ${
        isCurrentPath
          ? "rounded-full bg-white bg-opacity-50 shadow-md shadow-gray-700 dark:shadow-black dark:text-black"
          : ""
      } `}
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
    </div>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default withRouter(ActiveLink);
