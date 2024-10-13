'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import Container from '@/components/shared/container';

export default function AI() {
  const t = useTranslations('AIPage');
  return (
    <Container>
      <article className="prose my-14 max-w-screen-lg">
        <h1>{t('title')}</h1>

        <p>
          {t('introduction_part1')} <strong>{t('solar_compute_subnet')}</strong>{' '}
          {t('introduction_part2')} <strong>{t('bittensor')}</strong> {t('introduction_part3')}
        </p>

        <h2>{t('why_sustainable_ai_title')}</h2>
        <p>{t('why_sustainable_ai_content')}</p>

        <h2>{t('follow_the_sun_title')}</h2>
        <p>
          {t('follow_the_sun_part1')} <strong>{t('solar_compute_subnet')}</strong>{' '}
          {t('follow_the_sun_part2')}
        </p>

        <p>
          {t('follow_the_sun_benefits_part1')} <strong>{t('follow_the_sun')}</strong>{' '}
          {t('follow_the_sun_benefits_part2')}
        </p>

        <h2>{t('bittensor_title')}</h2>
        <p>
          {t('bittensor_content_part1')} <strong>{t('bittensor')}</strong>{' '}
          {t('bittensor_content_part2')}
        </p>

        <h2>{t('earning_tao_title')}</h2>
        <p>
          {t('earning_tao_part1')} <strong>{t('solar_compute_subnet')}</strong>{' '}
          {t('earning_tao_part2')}
        </p>

        <h2>{t('benefits_title')}</h2>
        <ul>
          <li>
            <strong>{t('benefit_cost_efficiency_title')}</strong>:{' '}
            {t('benefit_cost_efficiency_content')}
          </li>
          <li>
            <strong>{t('benefit_energy_independence_title')}</strong>:{' '}
            {t('benefit_energy_independence_content')}
          </li>
          <li>
            <strong>{t('benefit_environmental_sustainability_title')}</strong>:{' '}
            {t('benefit_environmental_sustainability_content')}
          </li>
          <li>
            <strong>{t('benefit_decentralized_ai_training_title')}</strong>:{' '}
            {t('benefit_decentralized_ai_training_content')}
          </li>
        </ul>

        <h2>{t('future_vision_title')}</h2>
        <p>{t('future_vision_content')}</p>

        <p>{t('contribute_message')}</p>
      </article>
    </Container>
  );
}
