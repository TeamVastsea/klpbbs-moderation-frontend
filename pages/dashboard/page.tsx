'use client';

import { Container, Title, SimpleGrid, Card, Text } from '@mantine/core';

export default function DashboardPage() {
  return (
    <Container>
      <Title order={2} mb="xl">仪表盘</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        <Card shadow="sm" padding="lg">
          <Text fw={500}>今日待处理举报</Text>
          <Text size="xl" fw={700}>12</Text>
        </Card>
        <Card shadow="sm" padding="lg">
          <Text fw={500}>今日待审核帖子</Text>
          <Text size="xl" fw={700}>8</Text>
        </Card>
        <Card shadow="sm" padding="lg">
          <Text fw={500}>今日处理工单</Text>
          <Text size="xl" fw={700}>5</Text>
        </Card>
        <Card shadow="sm" padding="lg">
          <Text fw={500}>本月处理总量</Text>
          <Text size="xl" fw={700}>156</Text>
        </Card>
      </SimpleGrid>
    </Container>
  );
}