'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import Container from '@/components/shared/container';

export default function Terms() {
  const t = useTranslations('translations');

  return (
    <Container>
      <article className="prose my-14 max-w-screen-lg">
        <h1>{t('terms_title')}</h1>
        <p>{t('terms_intro')}</p>

        <h2>{t('terms_acceptance_of_terms_title')}</h2>
        <p>{t('terms_acceptance_of_terms_content')}</p>

        <h2>{t('terms_services_provided_title')}</h2>
        <p>{t('terms_services_provided_intro')}</p>
        <ul>
          <li>{t('terms_services_provided_data_point_1')}</li>
          <li>{t('terms_services_provided_data_point_2')}</li>
          <li>{t('terms_services_provided_data_point_3')}</li>
          <li>{t('terms_services_provided_data_point_4')}</li>
          <li>{t('terms_services_provided_data_point_5')}</li>
        </ul>
        <p>{t('terms_services_provided_purpose')}</p>

        <h2>{t('terms_user_responsibilities_title')}</h2>
        <p>{t('terms_user_responsibilities_content')}</p>

        <h2>{t('terms_privacy_data_collection_title')}</h2>
        <p>
          {t('terms_privacy_data_collection_content')}{' '}
          <a href={t('terms_privacy_policy_link')}>{t('terms_privacy_policy_link')}</a>.
        </p>

        <h2>{t('terms_data_security_title')}</h2>
        <p>{t('terms_data_security_content')}</p>

        <h2>{t('terms_user_content_title')}</h2>
        <p>{t('terms_user_content_content')}</p>

        <h2>{t('terms_disclaimer_of_warranties_title')}</h2>
        <p>{t('terms_disclaimer_of_warranties_content')}</p>

        <h2>{t('terms_limitation_of_liability_title')}</h2>
        <p>{t('terms_limitation_of_liability_content')}</p>

        <h2>{t('terms_termination_title')}</h2>
        <p>{t('terms_termination_content')}</p>

        <h2>{t('terms_changes_to_terms_title')}</h2>
        <p>{t('terms_changes_to_terms_content')}</p>

        <h2>{t('terms_governing_law_title')}</h2>
        <p>{t('terms_governing_law_content')}</p>

        <h2>{t('terms_contact_information_title')}</h2>
        <p>
          {t('terms_contact_information_content')}{' '}
          <a href={`mailto:${t('terms_contact_information_email')}`}>
            {t('terms_contact_information_email')}
          </a>
          .
        </p>
        <p>{t('terms_last_updated')}</p>
      </article>
    </Container>
  );
}
