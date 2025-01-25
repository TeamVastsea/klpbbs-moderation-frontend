'use client';

import { UnstyledButton, Group, Text, rem } from '@mantine/core';
import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?(): void;
}

export function NavLink({ icon, label, active, onClick }: NavLinkProps) {
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