'use client';

import { Grid, Text, Paper, Group, Stack, rem } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { IconUsers, IconFlag2, IconClipboardCheck, IconClock } from '@tabler/icons-react';
import { StatsCard } from './StatsCard';

const mockData = {
  username: 'damesck',
  userGroup: '草级版主',
  sections: [
    '综合分区', '游戏资讯', '闲聊讨论', '视频专区', '软件资源',
    '悬赏问答', '人才市场', '灵感交流', '周边创作', '教程中心',
    '创意港湾', '软件资源回收站', '下载求助'
  ],
  pendingReports: 1582,
  pendingReviews: 12,
  lastLoginTime: '2025-01-26 01:27:20',
  lastLoginIP: '123.116.217.177'
};

export function DashboardStats() {
  return (
    <Grid gutter="xl">
      <Grid.Col span={12}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Paper p="xl" withBorder style={{ overflow: 'hidden', position: 'relative' }}>
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Group mb="lg" align="center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <IconUsers size={rem(48)} style={{ color: 'var(--mantine-color-blue-6)' }} />
                </motion.div>
                <Stack gap={0}>
                  <Text size="xl" fw={800} style={{ letterSpacing: '-0.5px' }}>你好，{mockData.username}</Text>
                  <Text size="sm" c="dimmed">用户组：{mockData.userGroup}</Text>
                </Stack>
              </Group>
              <Text size="sm" fw={500} mb="xs">所属板块</Text>
              <Group gap="xs" mb="xl" style={{ flexWrap: 'wrap' }}>
                {mockData.sections.map((section, index) => (
                  <motion.div
                    key={section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Paper
                      p="xs"
                      withBorder
                      style={{ background: 'var(--mantine-color-blue-0)' }}
                    >
                      <Text size="sm" c="blue.9">{section}</Text>
                    </Paper>
                  </motion.div>
                ))}
              </Group>
            </motion.div>
          </Paper>
        </motion.div>
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
        <StatsCard
          icon={<IconFlag2 size={rem(32)} />}
          title="待处理举报"
          value={mockData.pendingReports}
          color="red"
          delay={0.2}
        />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
        <StatsCard
          icon={<IconClipboardCheck size={rem(32)} />}
          title="待审核帖子"
          value={mockData.pendingReviews}
          color="green"
          delay={0.4}
        />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
        <StatsCard
          icon={<IconClock size={rem(32)} />}
          title="上次登录时间"
          value={mockData.lastLoginTime}
          color="blue"
          delay={0.6}
        />
      </Grid.Col>
    </Grid>
  );
}