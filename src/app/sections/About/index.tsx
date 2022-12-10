import Image from "next/image";

export function AboutSection() {
  return (
    <section
      className="flex lg:flex-row flex-col justify-center gap-16 mt-16 mx-12"
      id="quem-somos"
    >
      <Image
        src="https://lh5.googleusercontent.com/p/AF1QipMvJ_Gv6Ka0aiCo_GFFHVtalmK1Q5YeBvaEBSBX=w1410-h1010-n-k-no-nu"
        width={1410}
        height={1010}
        alt="Divina Terra loja"
        quality={100}
        className="w-full h-auto max-w-3xl"
      />
      <div className="flex flex-col gap-2 text-zinc-600 max-w-3xl">
        <h1 className="uppercase text-5xl font-bold mb-4 text-secondary">
          <span className="text-primary block">Conheça a</span> Divina Terra
        </h1>
        <p>A Divina Terra é referência em alimentação saudável.</p>
        <p>
          Em nossa loja você encontra uma ampla linha de produtos naturais e
          suplementos, além de novidades cuidadosamente selecionadas.
        </p>
        <p>Qualidade e bom atendimento são a nossa missão!</p>
        <p>
          <span className="block text-zinc-900">Produtos naturais</span>
          Sempre prezando pela qualidade impecável dos produtos oferecidos, a
          linha de produtos naturais a granel da Divina Terra é a mais completa
          do mercado.
        </p>
        <p>
          <span className="block text-zinc-900">Suplementos</span>
          Trabalhando apenas com as melhores marcas, a Divina Terra oferece uma
          linha completa de suplementos nacionais e importados, perfeitos para
          dar um “UP” nos seus treinos.
        </p>
        <p>
          Acreditamos que um dos pilares do equilíbrio saudável entre corpo,
          mente e espírito está naquilo que comemos. Por isso, buscamos oferecer
          alimentos que estejam mais próximos do seu estado encontrado na
          natureza, na sua forma integral.
        </p>
        <p>
          Nossos produtos são minimamente processados para garantir sua energia
          vital. Conheça nossas linhas de produtos naturais e suplementos e seja
          você também mais forte e saudável!
        </p>
      </div>
    </section>
  );
}
