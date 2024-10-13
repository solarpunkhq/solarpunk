'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import Container from '@/components/shared/container';

export default function Privacy() {
  const t = useTranslations('PrivacyPage');

  return (
    <Container>
      <article className="prose my-14 max-w-screen-lg">
        <h1>{t('title')}</h1>
        <p>{t('introduction')}</p>

        <h2>{t('information_we_collect_title')}</h2>
        <p>{t('information_we_collect_description')}</p>
        <ul>
          <li>{t('full_name')}</li>
          <li>{t('home_address')}</li>
          <li>{t('phone_number')}</li>
          <li>{t('email_address')}</li>
          <li>{t('farm_location_and_details')}</li>
          <li>{t('payment_and_billing_information')}</li>
          <li>{t('technical_data')}</li>
        </ul>

        <h2>{t('how_we_use_your_information_title')}</h2>
        <p>{t('how_we_use_your_information_description')}</p>
        <ul>
          <li>{t('use_connect_installers')}</li>
          <li>{t('use_communicate_services')}</li>
          <li>{t('use_improve_platform')}</li>
          <li>{t('use_process_transactions')}</li>
          <li>{t('use_legal_compliance')}</li>
        </ul>

        <h2>{t('how_we_share_your_information_title')}</h2>
        <p>{t('how_we_share_your_information_description')}</p>
        <ul>
          <li>
            <strong>{t('share_installers_title')}:</strong> {t('share_installers')}
          </li>
          <li>
            <strong>{t('share_service_providers_title')}:</strong> {t('share_service_providers')}
          </li>
          <li>
            <strong>{t('share_legal_compliance_title')}:</strong> {t('share_legal_compliance')}
          </li>
        </ul>

        <h2>{t('data_security_title')}</h2>
        <p>{t('data_security_description')}</p>

        <h2>{t('cookies_and_tracking_title')}</h2>
        <p>{t('cookies_and_tracking_description')}</p>

        <h2>{t('your_rights_and_choices_title')}</h2>
        <p>{t('your_rights_and_choices_description')}</p>
        <ul>
          <li>{t('right_access_data')}</li>
          <li>{t('right_rectify_data')}</li>
          <li>{t('right_delete_data')}</li>
          <li>{t('right_object_processing')}</li>
          <li>{t('right_withdraw_consent')}</li>
        </ul>
        <p>
          {t('contact_to_exercise_rights')}{' '}
          <a href="mailto:privacy@solarpunkhq.com">privacy@solarpunkhq.com</a>.
        </p>

        <h2>{t('retention_of_information_title')}</h2>
        <p>{t('retention_of_information_description')}</p>

        <h2>{t('international_data_transfers_title')}</h2>
        <p>{t('international_data_transfers_description')}</p>

        <h2>{t('changes_to_policy_title')}</h2>
        <p>{t('changes_to_policy_description')}</p>

        <h2>{t('contact_us_title')}</h2>
        <p>{t('contact_us_description')}</p>
        <p>
          {t('contact_email')} <a href="mailto:privacy@solarpunkhq.com">privacy@solarpunkhq.com</a>.
        </p>

        <p>{t('last_updated')}</p>
      </article>
    </Container>
  );
}
