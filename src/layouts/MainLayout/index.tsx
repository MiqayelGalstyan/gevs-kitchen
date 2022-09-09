import React from "react";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps): JSX.Element => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default MainLayout;
