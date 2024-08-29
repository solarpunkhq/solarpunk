import Button from '@/components/shared/button';

function Potential() {
  return (
    <section className="potential mt-[200px] px-safe xl:mt-[135px] md:mt-[125px] sm:mt-[116px]">
      <div className="container flex justify-between gap-x-8 xl:max-w-[1024px] md:max-w-lg md:flex-col md:items-center md:gap-y-11 sm:gap-y-10">
        <div className="flex max-w-[640px] flex-col pb-12 pt-6 xl:pb-5 xl:pt-0 md:pb-0">
          <h2 className="max-w-[540px] font-title text-56 leading-[1.1] tracking-tight text-gray-20 xl:max-w-[420px] xl:text-48 md:text-40 sm:max-w-[289px] sm:text-32">
            Discover your farm&apos;s full potential
          </h2>
          <p className="mt-[19px] max-w-[540px] text-25 leading-snug tracking-tighter text-gray-40 xl:text-20 md:mt-[18px] md:text-18 sm:mt-4 sm:text-16">
            Transform your fields with solar technology, fostering a thriving environment that
            supports longer and healthier crop cycles.
          </p>
          <div className="relative mt-auto md:mt-11 sm:mt-9">
            <h3 className="fs-24 mt-8 font-title tracking-tight xl:mt-[29px] md:mt-0 sm:text-18">
              Exploration
            </h3>
            <p className="fs-20 mt-2 font-medium leading-snug tracking-tighter text-gray-40 xl:max-w-[419px] sm:text-16">
              We will help you understand what type of Agrivoltaic project is right for you and what
              type of regulatory hurdles you will face. While we primarily focus on agrivoltaics, we
              also offer solar deployments for any non-agricultural land except residential roofs.
            </p>
            <Button
              className="group mt-[26px] self-start md:mt-6 sm:mt-5"
              size="sm"
              theme="black"
              href="/"
              withArrow
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="mr-16 xl:mr-0 sm:w-full">
          <div className="aspect-square w-[736px] rounded-[10px] border border-[#6B8547] bg-sun-icon-bg xl:aspect-[480/535] xl:w-[480px] md:aspect-square md:w-[448px] sm:w-full">
            video\image
          </div>
          <ul className="mt-5 flex items-center justify-center gap-4 xl:mt-4">
            {[1, 1, 1, 1].map((_, index) => {
              return <li className="h-1 w-[72px] rounded-[10px] bg-gray-80" key={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Potential;
