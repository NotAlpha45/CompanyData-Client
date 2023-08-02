import React, { useEffect, useState } from "react";
import { TNavLink } from "./Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

type Props = {
  links: TNavLink[];
  activeRoute: string;
  userStatus: string;
};

const NavLinks = (props: Props) => {
  const { links, activeRoute, userStatus } = props;

  return (
    <ul className="navbar-nav ps-3">
      {links.map((x: any, index: number) => {
        if (x.text === "Calculators" && userStatus === "Emplus") {
          return <NavLinkItem key={index} link={x} activeRoute={activeRoute} />;
        } else if (x.text !== "Calculators") {
          return <NavLinkItem key={index} link={x} activeRoute={activeRoute} />;
        }
        return <></>;
      })}
    </ul>
  );
};

export default NavLinks;

const NavLinkItem = (props: any) => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const { link, activeRoute } = props;
  const nastedLink = link.children.map((x: any, index: number) => {
    return <NavLinkItem key={index} link={x} activeRoute={activeRoute} />;
  });

  const [dropdownShow, setDropdownShow] = useState(false);

  useEffect(() => {
    const handleClick = (ev: MouseEvent) => {
      ev.stopPropagation();
      if (
        (ev.target as HTMLParagraphElement)?.id ===
        "navbarDropdown-" + link.text.replace(" ", "")
      )
        setDropdownShow(!dropdownShow);
      else setDropdownShow(false);
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <React.Fragment>
      {link.children.length > 0 ? (
        <li
          className={
            "nav-item dropdown" +
            (link.children.some((x: TNavLink) => x.url === activeRoute)
              ? " active"
              : "")
          }
        >
          <Link
            className={
              "nav-link svg-icon" + (link.hasSvg ? "" : " dropdown-toggle")
            }
            to="#"
            id={"navbarDropdown-" + link.text.replace(" ", "")}
          >
            {link.hasSvg ? <></> : <>{link.text}</>}
          </Link>
          <ul className={"dropdown-menu hide " + (dropdownShow ? "show" : "")}>
            {nastedLink}
          </ul>
        </li>
      ) : (
        <>
          {link.hasSvg ? (
            <></>
          ) : (
            <>
              <li
                className={
                  "nav-item" + (link.url === activeRoute ? " active" : "")
                }
              >
                <Link className="nav-link" to={link.url}>
                  {link.text}
                </Link>
              </li>
            </>
          )}
        </>
      )}
    </React.Fragment>
  );
};
