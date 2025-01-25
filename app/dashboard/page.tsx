'use client';

import { Container, Title } from '@mantine/core';
import { DashboardStats } from './components/DashboardStats';

export default function DashboardPage() {
  return (
    <Container>
      <Title order={2} mb="xl">仪表盘</Title>
      <DashboardStats />
    </Container>
  );
}