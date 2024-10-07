import React from 'react';

import Container from '@/components/shared/container';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_DATA } from '@/constants/seo-data';

export default function AI() {
  return (
    <Container>
      <article className="prose my-14 max-w-screen-lg">
        <h1>
          Solarpunk and Bittensor: Building the Future of Sustainable AI with Solar-Powered Compute
        </h1>

        <p>
          Solarpunk is pioneering the creation of the first <strong>Solar Compute Subnet</strong>, a
          decentralized, always-on AI training network where participants can earn $TAO for
          contributing their solar-powered compute clusters. Leveraging the decentralized framework
          of <strong>Bittensor</strong>, Solarpunk enables AI training to occur in a sustainable and
          eco-friendly manner by utilizing solar energy and coordinating AI workloads across the
          globe.
        </p>

        <h2>Why We Need a Sustainable AI Future</h2>
        <p>
          The demand for artificial intelligence is growing rapidly, with increasingly powerful
          machine learning models requiring immense computational resources to operate. These
          computations consume large amounts of electricity, contributing to environmental
          degradation if sourced from traditional, fossil-fuel-based power grids. As the world
          becomes more aware of the need for sustainable solutions, Solarpunk and Bittensor are
          stepping in with a unique approach to powering AI networks: using the sun.
        </p>

        <h2>The Solar Compute Subnet: A "Follow-the-Sun" Approach to AI Training</h2>
        <p>
          Solarpunk’s vision is to create a global, decentralized AI training network that operates
          24/7 by following the natural rhythm of the Earth’s sunlight. The{' '}
          <strong>Solar Compute Subnet</strong> uses solar energy as its primary power source.
          Machine learning models run computationally intensive tasks in regions where the sun is
          shining, and as the day progresses, the AI workloads are passed seamlessly from one time
          zone to another. This system creates an <strong>always-on</strong> AI network powered
          entirely by solar energy.
        </p>

        <p>
          This method, known as the <strong>"follow-the-sun" compute system</strong>, ensures that
          computational resources are maximized during daylight hours. When the sun sets in one
          region, the workload shifts to another region where solar-powered peers can continue the
          AI training. This not only minimizes downtime but also reduces reliance on expensive,
          non-renewable energy sources.
        </p>

        <h2>Bittensor: Coordinating AI Across a Decentralized Global Network</h2>
        <p>
          The Solarpunk network is built on top of Bittensor’s decentralized infrastructure.{' '}
          <strong>Bittensor</strong> is a peer-to-peer intelligence market where AI models (called
          peers) communicate, train, and rank each other based on the knowledge they provide. Peers
          contribute to the network by running AI models and are rewarded in the form of $TAO
          tokens, a digital currency used within the Bittensor ecosystem.
        </p>

        <p>
          Bittensor's decentralized structure is key to managing the global Solar Compute Subnet.
          Because the network is peer-to-peer, there is no single point of control. Peers
          autonomously coordinate which regions handle computational tasks based on the availability
          of sunlight and solar power. As solar-powered clusters in one part of the world complete
          their tasks, others in different time zones are ready to take over, ensuring a continuous
          cycle of AI training.
        </p>

        <h2>How Participants Earn $TAO by Providing Solar-Powered Compute Clusters</h2>
        <p>
          One of the most exciting aspects of Solarpunk’s Solar Compute Subnet is that it allows
          anyone with access to solar power and computing hardware to participate. Participants set
          up solar-powered compute clusters that contribute to the network’s AI training efforts. In
          return, they earn $TAO tokens as compensation for the compute power they provide.
        </p>

        <p>
          By decentralizing both the energy source and the AI training infrastructure, Solarpunk and
          Bittensor ensure that the future of AI is open to anyone, not just large corporations.
          This also helps distribute the environmental benefits of solar energy while promoting a
          sustainable, eco-friendly AI economy.
        </p>

        <h2>The Benefits of Solar-Powered AI</h2>
        <p>
          There are several key benefits to using solar power as the primary energy source for AI
          training:
        </p>

        <ul>
          <li>
            <strong>Cost Efficiency:</strong> Solar energy is one of the cheapest renewable energy
            sources, and as technology improves, it continues to become more affordable. This means
            participants can set up and run their AI compute clusters with minimal ongoing costs.
          </li>
          <li>
            <strong>Energy Independence:</strong> Participants in the Solar Compute Subnet are not
            reliant on grid power or centralized energy providers. Solar panels can be installed in
            a variety of locations, allowing anyone with access to sunlight to join the network.
          </li>
          <li>
            <strong>Environmental Sustainability:</strong> By using solar power, the network
            dramatically reduces its carbon footprint compared to traditional data centers that rely
            on fossil fuels. This is a crucial step toward reducing the environmental impact of
            growing AI demands.
          </li>
          <li>
            <strong>Decentralized AI Training:</strong> Bittensor’s decentralized infrastructure
            ensures that no single entity controls the network. This makes the system more resilient
            to failures, censorship, or external pressures while maintaining transparency and
            fairness.
          </li>
        </ul>

        <h2>A Vision for the Future: Solar-Powered, Always-On AI</h2>
        <p>
          The combination of Solarpunk’s Solar Compute Subnet and Bittensor’s decentralized AI
          network offers a glimpse into the future of artificial intelligence. By decentralizing
          both compute and energy resources, this system provides a scalable, sustainable, and
          democratized AI training network that benefits both the environment and participants.
        </p>

        <p>
          Imagine a world where AI systems run continuously, powered entirely by the sun. As the
          Earth rotates, computational workloads are seamlessly handed off from one region to
          another, ensuring that AI training never stops. With Solarpunk and Bittensor, this vision
          is becoming a reality—creating a future where AI innovation and sustainability go hand in
          hand.
        </p>

        <p>
          If you're interested in contributing to the Solar Compute Subnet and earning $TAO, now is
          the perfect time to get involved. Join the movement and be part of the sustainable AI
          revolution.
        </p>
      </article>
    </Container>
  );
}
export const metadata = getMetadata(SEO_DATA.index);
