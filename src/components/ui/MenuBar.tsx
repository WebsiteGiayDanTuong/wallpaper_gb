"use client"
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { MENU_LABELS } from '@/utils/contants/text';
import { useRouter } from 'next/navigation';

type MenuLabelKey = keyof typeof MENU_LABELS;
type MenuItem = Required<MenuProps>['items'][number] & {
  key: MenuLabelKey;
};

const items: MenuItem[] = [
  {
    label: MENU_LABELS.wallpaper,
    key: 'wallpaper',
    disabled: false,
  },
  {
    label: 'Navigation Two',
    key: 'app',
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

const MenuBar: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const router = useRouter()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    router.push(`/${e.key}`)
  };

  return <Menu className="w-auto justify-center" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MenuBar;