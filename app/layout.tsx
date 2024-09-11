import { FC, memo, PropsWithChildren } from 'react';

import { inter } from './ui/fonts';

import '@/app/ui/global.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default memo(RootLayout);
