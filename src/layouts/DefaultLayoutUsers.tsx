import {
  Avatar,
  Dropdown,
  Layout,
  MenuProps,
} from "antd";
import { CommonIcons } from "components/CommonIcons";
import { CustomTypography } from "components/CustomTypography";
import { useAuth } from "providers/AuthenticationProvider";
import React, { useState } from "react";

const DefaultLayoutUsers = ({ children }: { children: React.ReactNode }) => {
  //! state
  const { Header, Content } = Layout;

  const auth = useAuth();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          <CommonIcons.LogoutOutlined />
          <CustomTypography.Text title=" Đăng Xuất" />
        </div>
      ),
      onClick: () => auth.logout(),
    },
  ];

  //! useEffect

  //! render
  return (
    <Layout className="h-screen">
      <Layout>
        <Header className="p-4 bg-[#dfd6d6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CustomTypography.Text
              strong
              title="ShopLq"
            // onClick={}
            />

          </div>
          <div className="flex items-center gap-2">



            <CustomTypography.Text
              title="Coin"
              strong />

            <CustomTypography.Text title="Nguyễn xuân huy" />
            <Dropdown
              placement="bottomRight"
              menu={{ items }}
              trigger={["click"]}
              className="cursor-pointer "
            >
              <Avatar />
            </Dropdown>
          </div>
        </Header>
        <Content className="p- min-h-[280px] bg-[#fff] rounded-[8px]">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayoutUsers;
