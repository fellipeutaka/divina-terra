import "../styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A Divina Terra é referência em alimentação saudável. Em nossa loja você encontra uma ampla linha de produtos naturais e suplementos, além de novidades cuidadosamente selecionadas."
        />
        <title>Divina Terra Atibaia</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
