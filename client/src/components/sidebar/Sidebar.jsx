import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CategoryIcon from "@mui/icons-material/Category";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin board</span>
      </div>
      <div className="center">
        <ul className="list">
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Users</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Messages</span>
          </li>
          <li>
            <CategoryIcon className="icon" />
            <span>Products</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <CategoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <SubtitlesIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <SubtitlesIcon className="icon" />
            <span>Deliveries</span>
          </li>
          <p className="title">ACCOUNT</p>
          <li>
            <LogoutIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <span className="colorOption"></span>
        <span className="colorOption"></span>
      </div>
    </div>
  );
}
