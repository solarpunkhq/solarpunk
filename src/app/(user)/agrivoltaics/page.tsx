import { Blockquote } from '@/components/pages/agrivoltaics/block-quote';
import { ContactSection } from '@/components/pages/agrivoltaics/contact-section';
import { Container } from '@/components/pages/agrivoltaics/container';
import { FadeIn } from '@/components/pages/agrivoltaics/fade-in';
import { GridList, GridListItem } from '@/components/pages/agrivoltaics/grid-list';
import { GridPattern } from '@/components/pages/agrivoltaics/grid-pattern';
import { PageIntro } from '@/components/pages/agrivoltaics/page-intro';
import { SectionIntro } from '@/components/pages/agrivoltaics/section-intro';
import { StylizedImage } from '@/components/pages/agrivoltaics/stylized-image';

function Section({ title, image, children }: { title: string; image: any; children: any }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display before:text-neutral-300 after:text-neutral-950 text-base font-semibold before:content-['/_'] after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="font-display text-neutral-950 mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function History() {
  return (
    <Section
      title="The History"
      image={{
        src: '/images/pages/agrivoltaics/solarpunk-background.jpg',
        width: 1536,
        height: 1024,
      }}
    >
      <div className="text-neutral-600 space-y-6 text-base">
        <p>
          Agrivoltaics is combining land for agriculture and solar energy. It emerged in the 1980s
          after Dr. Goetzberger proposed it to optimize land use. Dr. Weber later emphasized its
          benefits.
        </p>
        <p>
          Pilot projects in the 2010s showed improved crop yield and energy efficiency. Countries
          like Japan and China embraced agrivoltaics for sustainability and resilience.
        </p>
        <p>
          Today, after many years of research and refinement, it continues to grow as a promising
          solution to environmental challenges, bridging agriculture and renewable energy.
        </p>
      </div>
    </Section>
  );
}

function Why() {
  return (
    <Section
      title="Why is Agrivoltaics important"
      image={{
        src: '/images/pages/agrivoltaics/solarpunk-hero.jpg',
        width: 1792,
        height: 1024,
        shape: 1,
      }}
    >
      <div className="text-neutral-600 space-y-6 text-base">
        <p>
          The world's needs for energy and food are increasing. We will soon be beyond the current
          capacity. We need to dramatically increase production without increasing costs. Just to
          sustain the population.
        </p>
        <p>
          Increasing food production with current methods means increased water usage. Because of
          the global temperatures rise, water is becoming more expensive and less efficient to use.
          <br /> Increasing energy production means greater consumption of fossil fuels, or large
          nuclear power plants that demand large investments and time to build and maintain.
        </p>
        <p>
          Agrivoltaics offer a unique solution by combining land usage for both food and energy
          production. It simultaneously reduces water consumption and increases crop yield. With the
          shade from the solar panels, plants focus energy on their growth rather than hydration
          management.
        </p>
        <Blockquote
          author={{
            name: 'Jennifer Bousselot',
            role: 'Colorado State University researcher',
          }}
          className="mt-12"
          hasImage={false}
        >
          When you think about our population into the future, having nine billion people by
          mid-century, we have to start looking at that to build resilience.
        </Blockquote>
        <p>
          For farmers and land owners agrivoltaics diversifies income. With a greater cashflow, you
          can reinvest in your land and equipment. For energy providers it offers a more stable and
          easier to implement energy production, without the headache of bureaucratic processes or
          time needed for planning and building.
        </p>
      </div>
    </Section>
  );
}

function How() {
  return (
    <Section
      title="How Agrivoltaics works"
      image={{
        src: '/images/pages/agrivoltaics/solarpunk-background.jpg',
        width: 1536,
        height: 1024,
        shape: 2,
      }}
    >
      <div className="text-neutral-600 space-y-6 text-base">
        <p>
          Solar panels are placed on in rows on elevated frames. The spacing between rows is
          carefully calculated to{' '}
          <strong className="text-neutral-950 font-semibold">
            maximize both crop yield and solar production
          </strong>
          .
        </p>
        <p>
          Each plant has a limit on how much sun they can actually use to grow, called a{' '}
          <strong className="text-neutral-950 font-semibold">"light saturation point"</strong>. Once
          they pass this point, the plant starts spending it's energy to replace evaporating water.
        </p>
        <p>
          Solar panels are positioned to give the crops{' '}
          <strong className="text-neutral-950 font-semibold">
            enough direct sunlight to reach the light saturation point
          </strong>
          . The crop can spend the remainder of the day focusing energy on growth as it receives
          indirect sunlight.
        </p>
        <p>
          The solar panels help provide the ideal humidity for the crops and since evaporation is
          reduced, less water is needed overall. All the excess energy is captured by the panels and
          converted into usable electricity.
        </p>
      </div>
    </Section>
  );
}

function Benefits() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="rounded-t-4xl from-neutral-50 absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden bg-gradient-to-b">
        <GridPattern
          className="fill-neutral-100 stroke-neutral-950/5 absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="The Agrivoltaic Benefits"
        title="The sustainable future for agriculture and energy"
      >
        <p>
          Agrivoltaics is still in its infancy. Every year new studies are released. Land owners,
          farmers and energy providers all receive measurable benefits.
        </p>
        <p>
          With time, we discover new things that make agrivoltaics an even more obvious choice for
          the sustainable future for agriculture and energy.
        </p>
        <p>Agrivoltaics makes sense.</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Use less water">
            Plants receive enough sun to focus on growth, and no longer need to waste energy
            fighting for water
          </GridListItem>
          <GridListItem title="Increased crop yield">
            Crops that are grown in Agrivoltaic fields produce more yield, anywhere from 5% to 200%
          </GridListItem>
          <GridListItem title="Extend seasons">
            Reducing crop evaporation helps maintain the right humidity levels helping the growth
            seasons last longer
          </GridListItem>
          <GridListItem title="Diversify income">
            Land owners receive an additional income from the same land improving cashflow
          </GridListItem>
          <GridListItem title="Capture wasted energy">
            Instead of the sun's energy dehydrating plants, its captured and turned into electricity
          </GridListItem>
          <GridListItem title="Faster implementation">
            Energy providers can start capturing energy sooner than spending years stuck in
            bureaucratic processes
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

export const metadata = {
  title: 'What is agrivoltaics?',
  description: 'The sustainable future for agriculture and energy',
};

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="An introduction" title="What is agrivoltaics?">
        <p>
          Agrivoltaics (also known as Agri PV) is the simultaneous use of land for both agriculture
          and solar energy generation.
        </p>
        <p>
          It creates many benefits for land owners, farmers and energy providers, accelerating our
          transition to more sustainable energy and food productions.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <History />
        <Why />
        <How />
      </div>

      <Benefits />

      <ContactSection />
    </>
  );
}
