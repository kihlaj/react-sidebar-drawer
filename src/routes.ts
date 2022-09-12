import React from "react";
import { MdHome, MdNotifications, MdEmail, MdSettings, MdLogout, MdOutlineCreate, MdDeleteForever } from 'react-icons/md';

export enum RoutePath {
  LOG_IN = '/login',
  FORGOT_PASSWORD = '/forgot_password',
  HOME = '/',
  MESSAGES = '/messages',
  INBOX = '/inbox',
  NOTIFICATIONS = '/notifications',
  SETTINGS = 'settings',
  CREATE_MESSAGE = 'create_message',
  REMOVE_MESSAGES = 'remove_messages',
  LOG_OUT = '/logout'
}

export const defaultSidebarNavItems: SidebarNavItem[] = [
  {
    name: 'home',
    path: RoutePath.HOME,
    icon: MdHome,
  },
  {
    name: 'notifications',
    path: RoutePath.NOTIFICATIONS,
    icon: MdNotifications,
  },
  {
    name: 'inbox',
    path: RoutePath.INBOX,
    icon: MdEmail,
  },
  {
    name: 'settings',
    path: RoutePath.SETTINGS,
    icon: MdSettings,
  },
  {
    name: 'logout',
    path: RoutePath.LOG_OUT,
    icon: MdLogout,
  }
]

export const messagesSidebarNavItems: SidebarNavItem[] = [
  {
    name: "Create Message",
    path: RoutePath.CREATE_MESSAGE,
    icon: MdOutlineCreate
  },
  {
    name: 'Check Messages',
    path: RoutePath.MESSAGES,
    icon: MdEmail,
  },
  {
    name: 'Remove Messages',
    path: RoutePath.REMOVE_MESSAGES,
    icon: MdDeleteForever
  }
]

export interface SidebarNavItem {
  name: string;
  path: string;
  icon: React.ComponentType;
}

export interface Route {
  name: string;
  path: RoutePath;
  SidebarNavItems?: SidebarNavItem[];
  component: React.ComponentType;
}