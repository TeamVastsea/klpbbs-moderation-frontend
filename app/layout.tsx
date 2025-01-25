import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head>
        <title>论坛管理系统</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}