import "../styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <title>Divina Terra Atibaia</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
