import React, { useEffect } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
// import AcceptCookie from "../../acceptCookies/AcceptCookies";
// import Modal from "react-bootstrap/esm/Modal";
import { Modal } from "react-bootstrap";
// import { loggedOut } from "../../core/redux/reducer/authReducer";
// import {
//   RegBreifAppDispatch,
//   useAppSelector,
// } from "../../core/redux/reduxStore";
// import { StorageConst } from "../../core/localStorage/StorageConst";
// import { StorageAuth } from "../../core/localStorage/StorageAuth";
// import * as singleSpa from "single-spa";
import { Dropdown } from "rsuite";
// import { StorageBreif } from "../../core/localStorage/StorageBreif";
// import EmailSent from "../../modals/RequestAccessModal/EmailSent";
// import { useSignInModalOpen } from "../../utils/useSignin";

// import { CustomFilterActions } from "../../core/redux/slices/CustomFIlterSlice";
// import { UserPreferenceActions } from "../../core/redux/slices/userPreference";
// import { CurrentUrl } from "../../core/localStorage/Url";

export const NavbarZIndex = 1049;

export type TNavLink = {
  text: string;
  url: string;
  isActive: boolean;
  children: TNavLink[];
  hasSvg: boolean;
};

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");
  const [title, settitle] = useState<string>("");
  const [bodyText, setbodyText] = useState<string>("");
  // const userInfo = useAppSelector((state) => state.userInfo);
  // const signIn = useSignInModalOpen();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const logoutHandle = () => {
  //   // dispatch({ type: loggedOut.type });
  //   StorageAuth.AccessToken = undefined;
  //   StorageBreif.Clear();
  //   window.localStorage.clear();

  //   singleSpa.navigateToUrl("/");
  //   window.location.reload();
  //   // signout();
  // };

  // const dispatch: RegBreifAppDispatch = useDispatch();
  const [collapsible, setCollapsible] = useState(false);
  const [fullName, setFullName] = useState<string>("");

  // useEffect(() => {
  //   if (userInfo.valid) {
  //     setFullName(StorageAuth.UserInfo?.FullName);
  //   }
  // }, [userInfo]);

  // let wtaUsertype = StorageAuth.UserInfo?.WtaUserType;

  // const setWtaPresentUrl = () => {
  //   var presentUrl = window.location.pathname;
  //   localStorage.setItem(
  //     StorageConst.WTA_PRESENT_URL,
  //     JSON.stringify(presentUrl)
  //   );
  // };

  // const getTpaPresentUrl = (): string => {
  //   let dataStr = localStorage.getItem(StorageConst.TPA_PRESENT_URL);
  //   let tpaPresentUrl = "";
  //   if (!dataStr) {
  //     tpaPresentUrl = "/tpa/Home";
  //   } else {
  //     tpaPresentUrl = JSON.parse(dataStr);
  //   }
  //   return tpaPresentUrl;
  // };

  // const getWtaPresentUrl = (): string => {
  //   let dataStr = localStorage.getItem(StorageConst.WTA_PRESENT_URL);
  //   let wtaPresentUrl = "";
  //   if (!dataStr) {
  //     wtaPresentUrl = "/wta/information";
  //   } else {
  //     wtaPresentUrl = JSON.parse(dataStr);
  //   }
  //   return wtaPresentUrl;
  // };

  // const LoginHandle = () => {
  //   signIn();
  // };
  // const reDirectTPA = () => {
  //   if (userInfo.valid) {
  //     const getUserInfo = StorageAuth.UserInfo;
  //     if (getUserInfo.TpaUserType.toLowerCase() !== "none") {
  //       singleSpa.navigateToUrl(getTpaPresentUrl());
  //     } else {
  //       setShowModal(true);
  //       setProjectName("Transfer Pricing Analyzer");
  //       settitle("Transfer Pricing Analyzer (TPA)");
  //       setbodyText("Increase productivity, manage risk and minimize cost with Transfer Pricing Analyzer (TPA). Comprehensive overview and comparison of TP regulations across 108 jurisdictions, as well as all relevant international guidelines. References to the laws, regulations, relevant treaty articles, commentary, current awareness news and tools for FAR analysis and BEPS. Try it today risk free with a free trial.");
  //       const path = window.location.pathname;
  //       CurrentUrl.setUrl = path;
  //     }
  //   } else {
  //     signIn();
  //   }
  // };

  // const reDirectWTA = () => {
  //   if (userInfo.valid) {
  //     const getUserInfo = StorageAuth.UserInfo;
  //     if (getUserInfo.WtaUserType.toLowerCase() != "none") {
  //       singleSpa.navigateToUrl(getWtaPresentUrl());
  //     } else {
  //       setShowModal(true);
  //       setProjectName("World Tax Analyzer");
  //       settitle("World Tax Analyzer (WTA)");
  //       setbodyText("Comprehensive set of rules, rates and other information of 100+ tax regimes. This combines treaty rules and withholding rates for over 3,000 bilateral scenarios, MLI positions and all BEPS and EU Anti-Tax Avoidance Directive (ATAD) measures, practice and modeling tools, global news coverage and much more. Try it today risk free with a free trial.");
  //       const path = window.location.pathname;
  //       CurrentUrl.setUrl = path;
  //     }
  //   } else {
  //     signIn();
  //   }
  // };

  return (
    <React.Fragment>
      <nav
        className="navbar-expand-xl site-nav-full bd-navbar w-100 d-flex flex-column"
        style={{ zIndex: NavbarZIndex }}
      >
        <div className="d-flex d-xxl-flex d-md-flex flex-xl-row flex-lg-column flex-sm-column flex-column logo-bar">
          <div className="col-xl-1 col-lg-12 col-md-12 col-sm-12 col-12 px-0">
            <div className="d-flex">
              <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarToggler"
                aria-expanded={collapsible}
                aria-label="Toggle navigation"
                onClick={() => {
                  setCollapsible(!collapsible);
                }}
              >
                <span className="navbar-toggler-icon mt-1">
                  {<FontAwesomeIcon className="icon-color" icon={faBars} />}
                </span>
              </button>
              {/* <div className="site-logo">
                <a href={UiRoutes.Information}>
                  {" "}
                  <img src={wtaLogo} alt="World Tax Analyzer" />
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 ms-auto my-auto">
            <div className="d-xl-flex d-lg-block d-sm-block d-block mx-auto">
              <div className="cookies-ctl mx-auto">
                {/* <AcceptCookie /> */}
              </div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-12 col-md-12 col-sm-12 col-12 px-0 d-xl-flex d-lg-none d-sm-none d-none"></div>
        </div>

        <div className="navbar main-nav py-0 w-100">
          <div
            className={`collapse navbar-collapse ${collapsible ? "show" : ""}`}
            id="navbarToggler"
          >
            <div className="d-flex flex-column flex-xl-row w-100">
              <div className="d-flex flex-column flex-md-row flex-wrap ms-xl-auto pe-3">
                <div>
                  <ul className="site-toggler-nav ps-3">
                    <li className="nav-item active">
                      <a className="nav-link active" >
                        Company Data
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" >
                        World Tax
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" >
                        Transfer Pricing
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a
                        className="nav-link "
                        onClick={(e) => e.preventDefault}
                      >
                        RegBriefing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-block d-sm-block d-md-flex d-lg-flex ps-3 ps-md-0">
                  <div className="d-flex align-items-center mx-1 profile-dropdown">
                    <Dropdown
                      placement="bottomEnd"
                      toggleAs={"span"}
                      title={
                        <p className="dropdown-btn text-center">
                          <span className="text-white">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 496 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                            </svg>
                          </span>
                        </p>
                      }
                    >
                      {fullName.length > 0 ? (
                        <>
                          <li className="p-2 ms-1 fw-bold fs-6 w-100">
                            {fullName}
                          </li>
                          <Dropdown.Item className="d-flex flex-column">
                            <p
                              className="fw-bold navLink"
                            // onClick={logoutHandle}
                            >
                              Sign Out
                            </p>
                          </Dropdown.Item>
                        </>
                      ) : (
                        <>
                          <li className="p-2 ms-1 fw-bold fs-6 w-100">
                            Anonymous User
                          </li>
                          <Dropdown.Item
                            className="d-flex flex-column"
                          // onClick={LoginHandle}
                          >
                            <p className="fw-bold navLink">Sign In</p>
                          </Dropdown.Item>
                        </>
                      )}
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        size="lg"
        keyboard={false}
        dialogClassName="auth-wrapper"
        animation={true}
        centered={true}
      >
        <EmailSent
          modalCloseHandle={handleCloseModal}
          projectName={projectName}
          title={title}
          bodyText={bodyText}
        />
      </Modal> */}
    </React.Fragment>
  );
};

export default Navbar;
