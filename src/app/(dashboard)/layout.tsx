import '../globals.css';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Dash Layout</h1>
        {children}
      </body>
    </html>
  );
}
