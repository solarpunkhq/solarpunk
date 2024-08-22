function Hero() {
  return (
    <section className="hero py-32 px-safe">
      <div className="container sm:px-4">
        <div className="mx-auto flex max-w-[680px] flex-col gap-y-5">
          <h1 className="fs-40 font-semibold">Getting Started 🚀</h1>
          <p className="text-18 leading-snug tracking-tight sm:text-16">
            Getting started with this project is as simple as cloning the repository and installing
            the dependencies:
          </p>
          <pre className="scrollbar-hidden overflow-x-auto rounded-md bg-[#000] p-4 text-[#fff]">
            <code className="text-16">
              git clone https://github.com/pixel-point/nextjs-typescript-tailwind-starter.git
              <br />
              cd nextjs-typescript-tailwind-starter
              <br />
              npm install
              <br />
              npm run dev
            </code>
          </pre>
          <p className="text-18 leading-snug tracking-tight sm:text-16">
            We hope you find this starter useful, and we are always open to feedback and
            contributions!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
