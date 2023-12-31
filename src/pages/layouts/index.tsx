import { Menu, MenuProps} from "antd"
import {useEffect, useState} from 'react'
import { Outlet, history } from 'umi'
import styles from "./index.scss"
import SystemName from '@/pages/layouts/components/systemName'
export default function Layout() {
  const [current, setCurrent] = useState('home');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  useEffect(() => {
    history.push(`/${current}`)
  }, [current]);
  const items: MenuProps['items'] = [
    {
      label: '子应用1',
      key: 'app1',
    },
    {
      label: '子应用2',
      key: 'app2',
    },
    {
      label: '子应用3',
      key: 'app3',
    },
  ];
  return (
    <div className={styles.pageMain}>
      <div className={styles.headerLine}>
        <div className={styles.systemName} onClick={() => {setCurrent("home")}}>
          <SystemName name="QIANKUNMASTER"/>
        </div>
        <div className={styles.systemMenu}>
          <Menu
            theme="dark"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
        <div className={styles.systemBtn}>

        </div>
      </div>
      <div><Outlet /></div>
    </div>
  );
}
