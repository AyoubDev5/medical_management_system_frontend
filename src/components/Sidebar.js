import React, { Component } from "react";
import usericon from "adminbsb-materialdesign/images/user.png";
import Config from "./config/Config";
import { Link } from "react-router-dom";
import AuthHandler from "./config/AuthHandler";


export default class Sidebar extends Component {

  state = {
    defaultClass: "btn-group user-helper-dropdown",
  };
  constructor(props) {
    super(props);
    this.divref = React.createRef();
    this.divref2 = React.createRef();
    this.state={
      username:"",
      password:"",
    }
  }
  // componentDidMount(){
  //   AuthHandler.Login(this.state.username, this.state.password,this.handleAjaxResponse);
  // }

  // handleAjaxResponse(getdata){
  //   console.log(getdata);
  //   if (getdata.error) {
  //     console.log("error");
  //   } else {
  //     console.log("good");
  //   }
  // };

  componentWillMount() {
    document.addEventListener("mousedown", this.handleMouseClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMouseClick, false);
  }

  handleMouseClick = (event) => {
    if (
      event.target === this.divref.current ||
      event.target === this.divref2.current
    ) {
      // console.log("Click Element");
      return;
    } else {
      // console.log("Click Outside");
      this.setState({ defaultClass: "btn-group user-helper-dropdown" });
    }
  };


  showLogoutMenu = () => {
    if (this.state.defaultClass == "btn-group user-helper-dropdown") {
      this.setState({ defaultClass: "btn-group user-helper-dropdown open" });
    } else {
      this.setState({ defaultClass: "btn-group user-helper-dropdown" });
    }
  };
  render() {
    const {name} = this.state.username
    return (
      <section>
        <aside id="leftsidebar" className="sidebar">
          <div className="user-info">
            <div className="image">
              <img src={usericon} width="48" height="48" alt="User" />
            </div>
            <div className="info-container">
              <div
                className="name"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Ayoub
              </div>
              <div className="email">taqiayoub123@gmail.com</div>
              <div className={this.state.defaultClass}>
                <i
                  className="material-icons"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={this.showLogoutMenu}
                  ref={this.divref}
                >
                  keyboard_arrow_down
                </i>
                <ul className="dropdown-menu pull-right">
                  <li role="separator" className="divider"></li>
                  <li>
                    <Link
                      to={Config.logoutPageUrl}
                      className=" waves-effect waves-block"
                      ref={this.divref2}
                    >
                      <i className="material-icons">input</i>Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu">
            <div
              className="slimScrollDiv"
              style={{
                position: "relative",
                overflow: "hidden",
                width: "auto",
              }}
            >
              <ul
                className="list"
                style={{ overflow: "hidden", width: "auto"}}
              >
                {Config.sidebarItem.map((item) => (
                  <li
                    key={item.index}
                    className={
                      item.index == this.props.activepage ? "active" : ""
                    }
                  >
                    <Link
                      to={item.url}
                      className="toggled waves-effect waves-block"
                    >
                      <i className="material-icons">{item.icons}</i>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className="slimScrollBar"
                style={{
                  background: "gba(0, 0, 0, 0.5)",
                  width: "4px",
                  position: "absolute",
                  top: "0px",
                  opacity: "0.4",
                  display: "block",
                  borderRadius: "0px",
                  zIndex: "99",
                  right: "1px",
                  height: "30px",
                }}
              ></div>
              <div
                className="slimScrollRail"
                style={{
                  width: "4px",
                  height: "100%",
                  position: "absolute",
                  top: "0px",
                  display: "none",
                  borderRadius: "0px",
                  background: "rgb(51, 51, 51)",
                  opacity: "0.2",
                  zIndex: "90",
                  right: "1px",
                }}
              ></div>
            </div>
          </div>
          <div className="legal">
            <div className="copyright">
              © 2022 - 2023{" "}
              <a href="#">Medical Management</a>.
            </div>
            <div className="version">
              <b>Version: </b> 1.0
            </div>
          </div>
        </aside>
      </section>
    );
  }
}
