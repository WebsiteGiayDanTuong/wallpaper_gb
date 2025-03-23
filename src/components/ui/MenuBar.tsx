"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { MENU_LABELS } from "@/utils/contants/text";
import { useRouter } from "next/navigation";

type MenuLabelKey = keyof typeof MENU_LABELS;
type MenuItem = Required<MenuProps>["items"][number] & {
  key: MenuLabelKey;
};

const items: MenuItem[] = [
  {
    label: MENU_LABELS.wallpaper,
    key: "wallpaper",
    disabled: false,
  },
  {
    label: MENU_LABELS.wall_murals,
    key: "wall_murals",
  },
  {
    label: MENU_LABELS.others,
    key: "others",
  },
  {
    label: MENU_LABELS.sales,
    key: "sales",
  },
  {
    label: MENU_LABELS.news,
    key: "news",
  },
];

const MenuBar: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    router.push(`/${e.key}`);
  };

  return (
    <Menu
      className="w-auto justify-center"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MenuBar;
