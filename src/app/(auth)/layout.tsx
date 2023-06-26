import NavBar from '@/components/NavBar';

import '../globals.css';
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Auth layout</h1>
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
