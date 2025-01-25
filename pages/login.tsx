'use client';

import { TextInput, PasswordInput, Button, Paper, Title, Container } from '@mantine/core';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // 临时测试账户验证
      if (username === 'admin' && password === 'admin') {
        notifications.show({
          title: '登录成功',
          message: '欢迎回来',
          color: 'green'
        });
        router.push('/dashboard');
      } else {
        notifications.show({
          title: '登录失败',
          message: '用户名或密码错误',
          color: 'red'
        });
      }
    } catch (error) {
      notifications.show({
        title: '登录失败',
        message: '发生未知错误',
        color: 'red'
      });
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" mb={30}>欢迎登录管理系统</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="用户名"
            placeholder="请输入用户名"
            required
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <PasswordInput
            label="密码"
            placeholder="请输入密码"
            required
            mt="md"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <Button fullWidth mt="xl" type="submit">
            登录
          </Button>
        </form>
      </Paper>
    </Container>
  );
}