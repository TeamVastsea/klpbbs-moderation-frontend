'use client';

import { AppShell, Text, UnstyledButton, Group, rem, Burger, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDashboard, IconUsers, IconFlag, IconClipboardCheck, IconTicket, IconTrophy } from '@tabler/icons-react';
import { useState } from 'react';
import UserInfoPage from '@/pages/dashboard/user_info';
import ReportsPage from '@/pages/dashboard/reports';
import LeadershipPage from '@/pages/dashboard/leadership';
import DashboardPage from '@/pages/dashboard/page';
import ReviewsPage from '@/pages/dashboard/reviews';
import TicketPage from '@/pages/dashboard/ticket';

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavLink({ icon, label, active, onClick }: NavLinkProps) {
  return (
    <UnstyledButton
      onClick={onClick}
      style={{
        display: 'block',
        width: '100%',
        padding: rem(8),
        borderRadius: rem(4),
        backgroundColor: active ? 'var(--mantine-color-blue-0)' : 'transparent',
        color: active ? 'var(--mantine-color-blue-7)' : 'inherit',
      }}
    >
      <Group>
        {icon}
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

export default function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const navItems = [
    { icon: <IconDashboard size={16} />, label: '仪表盘', id: 'dashboard' },
    { icon: <IconUsers size={16} />, label: '用户信息', id: 'user_info' },
    { icon: <IconFlag size={16} />, label: '举报处理', id: 'reports' },
    { icon: <IconClipboardCheck size={16} />, label: '帖子审核', id: 'reviews' },
    { icon: <IconTicket size={16} />, label: '工作人员工单', id: 'ticket' },
    { icon: <IconTrophy size={16} />, label: '管理量排行榜', id: 'leadership' },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <DashboardPage />;
      case 'user_info':
        return <UserInfoPage />;
      case 'reports':
        return <ReportsPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'ticket':
        return <TicketPage />;
      case 'leadership':
        return <LeadershipPage />;
      default:
        return <DashboardPage />;
    }
  };

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
        {renderComponent()}
      </AppShell.Main>
    </AppShell>
  );
}