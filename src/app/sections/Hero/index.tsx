export function HeroSection() {
  return (
    <section className="relative h-[96vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center gap-4 text-white shadow-sm">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-wide">
          Mercado especializado em alimentação saudável
        </h1>
        <h2 className="text-lg">
          A Divina Terra é referência em alimentação saudável. Em nossa loja
          você encontra uma ampla linha de produtos naturais e suplementos, além
          de novidades cuidadosamente selecionadas.
        </h2>
        <a
          className="outline-none border border-zinc-100 font-semibold flex justify-center items-center h-10 px-6 rounded-full transition-colors hover:bg-primary hover:border-primary focus-visible:bg-primary focus-visible:border-primary"
          href="#quem-somos"
        >
          Conheça mais
        </a>
      </div>
      <div className="absolute inset-0 -z-10 w-full">
        <video
          className="w-full h-full object-fill brightness-50"
          src="/bgVideo.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  );
}
