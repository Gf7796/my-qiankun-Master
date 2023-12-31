import { Outlet } from "umi"
import { ConfigProvider } from "antd"
export default function Layout() {

  return (
    <ConfigProvider>
      <Outlet />
    </ConfigProvider>
  );
}
