'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import Container from '@/components/shared/container';

export default function AI() {
  const t = useTranslations('translations');
  return (
    <Container>
      <article className="prose my-14 max-w-screen-lg">
        <h1>{t('ai_title')}</h1>

        <p>
          {t('ai_introduction_part1')} <strong>{t('ai_solar_compute_subnet')}</strong>{' '}
          {t('ai_introduction_part2')} <strong>{t('ai_bittensor')}</strong>{' '}
          {t('ai_introduction_part3')}
        </p>

        <h2>{t('ai_why_sustainable_ai_title')}</h2>
        <p>{t('ai_why_sustainable_ai_content')}</p>

        <h2>{t('ai_follow_the_sun_title')}</h2>
        <p>
          {t('ai_follow_the_sun_part1')} <strong>{t('ai_solar_compute_subnet')}</strong>{' '}
          {t('ai_follow_the_sun_part2')}
        </p>

        <p>
          {t('ai_follow_the_sun_benefits_part1')} <strong>{t('ai_follow_the_sun')}</strong>{' '}
          {t('ai_follow_the_sun_benefits_part2')}
        </p>

        <h2>{t('ai_bittensor_title')}</h2>
        <p>
          {t('ai_bittensor_content_part1')} <strong>{t('ai_bittensor')}</strong>{' '}
          {t('ai_bittensor_content_part2')}
        </p>

        <h2>{t('ai_earning_tao_title')}</h2>
        <p>
          {t('ai_earning_tao_part1')} <strong>{t('ai_solar_compute_subnet')}</strong>{' '}
          {t('ai_earning_tao_part2')}
        </p>

        <h2>{t('ai_benefits_title')}</h2>
        <ul>
          <li>
            <strong>{t('ai_benefit_cost_efficiency_title')}</strong>:{' '}
            {t('ai_benefit_cost_efficiency_content')}
          </li>
          <li>
            <strong>{t('ai_benefit_energy_independence_title')}</strong>:{' '}
            {t('ai_benefit_energy_independence_content')}
          </li>
          <li>
            <strong>{t('ai_benefit_environmental_sustainability_title')}</strong>:{' '}
            {t('ai_benefit_environmental_sustainability_content')}
          </li>
          <li>
            <strong>{t('ai_benefit_decentralized_ai_training_title')}</strong>:{' '}
            {t('ai_benefit_decentralized_ai_training_content')}
          </li>
        </ul>

        <h2>{t('ai_future_vision_title')}</h2>
        <p>{t('ai_future_vision_content')}</p>

        <p>{t('ai_contribute_message')}</p>
      </article>
    </Container>
  );
}
