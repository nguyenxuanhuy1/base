import { CommonIcons } from "components/CommonIcons";
import BaseUrl from "constants/baseUrl";
import React, { Fragment, lazy } from "react";

// Bash importHere
const DefaultLayout = lazy(() => import("layouts/DefaultLayout"));
const DefaultLayoutUsers = lazy(() => import("layouts/DefaultLayoutUsers"));

const Login = lazy(() => import("pages/Login"));
const Homepage = lazy(() => import("pages/Homepage"));
const QuanLyTaiKhoanNguoiDung = lazy(() => import("pages/QuanLyTaiKhoanNguoiDung"));
const AccClone = lazy(() => import("pages/AccClone"));
const AccRandom = lazy(() => import("pages/AccRandom"));
const AccReg = lazy(() => import("pages/AccReg"));
const AccTongHop = lazy(() => import("pages/AccTongHop"));
const PageUsers = lazy(() => import("PageUsers/Home"));

export interface IRoute {
  name: string;
  key: string;
  path: string;
  isPrivateRoute?: boolean;
  layout:
  | React.LazyExoticComponent<React.MemoExoticComponent<any>>
  | React.ExoticComponent<any>
  | typeof React.Component;
  component: typeof React.Component | React.FC | null;
  icon?: React.ReactNode;
  routeChild: {
    name: string;
    path: string;
    layout:
    | React.LazyExoticComponent<React.MemoExoticComponent<any>>
    | React.ExoticComponent<any>
    | typeof React.Component;
    component: typeof React.Component | React.FC;
    isPrivateRoute?: boolean;
    key: string;
    routeChild: any;
    icon?: React.ReactNode;
  }[];
}

const routes: IRoute[] = [
  {
    name: "User",
    key: "user",
    path: BaseUrl.users,
    layout: DefaultLayoutUsers,
    component: PageUsers,
    routeChild: [],
  },
  {
    name: "Login",
    key: "login",
    path: BaseUrl.Login,
    layout: Fragment,
    component: Login,
    routeChild: [],
  },
  {
    name: "HomePage",
    key: "home",
    path: BaseUrl.Homepage,
    layout: DefaultLayout,
    isPrivateRoute: true,
    component: Homepage,
    icon: <CommonIcons.AppstoreOutlined />,
    routeChild: [],
  },
  {
    name: "Quản lý loại tài khoản",
    key: "QuanLyDanhMuc",
    path: BaseUrl.Settings,
    layout: DefaultLayout,
    isPrivateRoute: true,
    component: null,
    icon: <CommonIcons.BarsOutlined />,
    routeChild: [
      {
        name: "Nick clone",
        key: "Accclone",
        path: BaseUrl.AccClone,
        layout: DefaultLayout,
        component: AccClone,
        isPrivateRoute: true,
        routeChild: [],
      },
      {
        name: "Nick Rabdom",
        key: "AccRandom",
        path: BaseUrl.AccRandom,
        layout: DefaultLayout,
        component: AccRandom,
        isPrivateRoute: true,
        routeChild: [],
      },
      {
        name: "Nick tổng hợp",
        key: "AccTongHop",
        path: BaseUrl.AccTongHop,
        layout: DefaultLayout,
        component: AccTongHop,
        isPrivateRoute: true,
        routeChild: [],
      },
      {
        name: "Nick Reg",
        key: "AccReg",
        path: BaseUrl.AccReg,
        layout: DefaultLayout,
        component: AccReg,
        isPrivateRoute: true,
        routeChild: [],
      },
    ],
  },
  {
    name: "Quản lý tài khoản người dùng",
    key: "AccCountUsser",
    path: BaseUrl.QuanLyTaiKhoanNguoiDung,
    layout: DefaultLayout,
    isPrivateRoute: true,
    component: QuanLyTaiKhoanNguoiDung,
    icon: <CommonIcons.UserSwitchOutlined />,
    routeChild: [],
  },
];

export default routes;
