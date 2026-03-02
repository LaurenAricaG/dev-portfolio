import { IconType } from "react-icons";

export interface MenuItem {
  id: string;
  icon: IconType;
  label: string;
  path: string;
}

export interface SocialItem {
  id: string;
  icon: IconType;
  label: string;
  link: string;
}
