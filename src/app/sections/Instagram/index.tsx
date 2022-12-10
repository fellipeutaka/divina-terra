import { Post } from "./components/Post";

export function InstagramSection() {
  return (
    <section className="mt-8">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-6">
        <strong className="uppercase text-secondary lg:text-5xl text-4xl">
          Instagram
        </strong>
        <small className="text-base max-w-sm">
          Siga o perfil{" "}
          <a
            className="text-primary"
            href="https://www.instagram.com/divinaterraatibaia"
            rel="noreferrer noopener"
            target="_blank"
          >
            @divinaterraatibaia
          </a>{" "}
          para ficar por dentro de novidades, promoções exclusivas e muito mais!
        </small>
      </div>
      <div className="grid grid-cols-6 overflow-x-hidden mt-8"></div>
    </section>
  );
}
