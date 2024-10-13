'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import Container from '@/components/shared/container';

export default function Terms() {
  const t = useTranslations('TermsPage');

  return (
    <Container>
      <article className="prose my-14 max-w-screen-lg">
        <h1>{t('title')}</h1>
        <p>{t('intro')}</p>

        <h2>{t('acceptance_of_terms_title')}</h2>
        <p>{t('acceptance_of_terms_content')}</p>

        <h2>{t('services_provided_title')}</h2>
        <p>{t('services_provided_intro')}</p>
        <ul>
          <li>{t('services_provided_data_point_1')}</li>
          <li>{t('services_provided_data_point_2')}</li>
          <li>{t('services_provided_data_point_3')}</li>
          <li>{t('services_provided_data_point_4')}</li>
          <li>{t('services_provided_data_point_5')}</li>
        </ul>
        <p>{t('services_provided_purpose')}</p>

        <h2>{t('user_responsibilities_title')}</h2>
        <p>{t('user_responsibilities_content')}</p>

        <h2>{t('privacy_data_collection_title')}</h2>
        <p>
          {t('privacy_data_collection_content')}{' '}
          <a href={t('privacy_policy_link')}>{t('privacy_policy_link')}</a>.
        </p>

        <h2>{t('data_security_title')}</h2>
        <p>{t('data_security_content')}</p>

        <h2>{t('user_content_title')}</h2>
        <p>{t('user_content_content')}</p>

        <h2>{t('disclaimer_of_warranties_title')}</h2>
        <p>{t('disclaimer_of_warranties_content')}</p>

        <h2>{t('limitation_of_liability_title')}</h2>
        <p>{t('limitation_of_liability_content')}</p>

        <h2>{t('termination_title')}</h2>
        <p>{t('termination_content')}</p>

        <h2>{t('changes_to_terms_title')}</h2>
        <p>{t('changes_to_terms_content')}</p>

        <h2>{t('governing_law_title')}</h2>
        <p>{t('governing_law_content')}</p>

        <h2>{t('contact_information_title')}</h2>
        <p>
          {t('contact_information_content')}{' '}
          <a href={`mailto:${t('contact_information_email')}`}>{t('contact_information_email')}</a>.
        </p>
        <p>{t('last_updated')}</p>
      </article>
    </Container>
  );
}
