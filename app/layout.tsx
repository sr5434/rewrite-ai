import { Metadata } from 'next';
import '../styles/globals.css';

const title = 'Rewrite AI';
const description = 'Rewrite your text quickly';

export const metadata: Metadata = {
  metadataBase: new URL('http://rewrite-ai.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
