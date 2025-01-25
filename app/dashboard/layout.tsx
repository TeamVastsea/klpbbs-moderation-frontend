'use client';

import { AppShell, Text, Group, Burger, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDashboard, IconUsers, IconFlag, IconClipboardCheck, IconTicket, IconTrophy } from '@tabler/icons-react';
import { useState } from 'react';
import { NavLink } from './components/NavLink';

const navItems = [
  { icon: <IconDashboard size={16} />, label: '仪表盘', id: 'dashboard' },
  { icon: <IconUsers size={16} />, label: '用户信息', id: 'user_info' },
  { icon: <IconFlag size={16} />, label: '举报处理', id: 'reports' },
  { icon: <IconClipboardCheck size={16} />, label: '帖子审核', id: 'reviews' },
  { icon: <IconTicket size={16} />, label: '工作人员工单', id: 'ticket' },
  { icon: <IconTrophy size={16} />, label: '管理量排行榜', id: 'leadership' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const [activeComponent, setActiveComponent] = useState('dashboard');

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened }
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text size="lg" fw={700}>论坛管理系统</Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section component={ScrollArea}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeComponent === item.id}
              onClick={() => setActiveComponent(item.id)}
            />
          ))}
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}