'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import Container from '@/components/shared/container';

export default function Privacy() {
  const t = useTranslations('translations');

  return (
    <Container>
      <article className="prose my-14 max-w-screen-lg">
        <h1>{t('privacy_title')}</h1>
        <p>{t('privacy_introduction')}</p>

        <h2>{t('privacy_information_we_collect_title')}</h2>
        <p>{t('privacy_information_we_collect_description')}</p>
        <ul>
          <li>{t('privacy_full_name')}</li>
          <li>{t('privacy_home_address')}</li>
          <li>{t('privacy_phone_number')}</li>
          <li>{t('privacy_email_address')}</li>
          <li>{t('privacy_farm_location_and_details')}</li>
          <li>{t('privacy_payment_and_billing_information')}</li>
          <li>{t('privacy_technical_data')}</li>
        </ul>

        <h2>{t('privacy_how_we_use_your_information_title')}</h2>
        <p>{t('privacy_how_we_use_your_information_description')}</p>
        <ul>
          <li>{t('privacy_use_connect_installers')}</li>
          <li>{t('privacy_use_communicate_services')}</li>
          <li>{t('privacy_use_improve_platform')}</li>
          <li>{t('privacy_use_process_transactions')}</li>
          <li>{t('privacy_use_legal_compliance')}</li>
        </ul>

        <h2>{t('privacy_how_we_share_your_information_title')}</h2>
        <p>{t('privacy_how_we_share_your_information_description')}</p>
        <ul>
          <li>
            <strong>{t('privacy_share_installers_title')}:</strong> {t('privacy_share_installers')}
          </li>
          <li>
            <strong>{t('privacy_share_service_providers_title')}:</strong>{' '}
            {t('privacy_share_service_providers')}
          </li>
          <li>
            <strong>{t('privacy_share_legal_compliance_title')}:</strong>{' '}
            {t('privacy_share_legal_compliance')}
          </li>
        </ul>

        <h2>{t('privacy_data_security_title')}</h2>
        <p>{t('privacy_data_security_description')}</p>

        <h2>{t('privacy_cookies_and_tracking_title')}</h2>
        <p>{t('privacy_cookies_and_tracking_description')}</p>

        <h2>{t('privacy_your_rights_and_choices_title')}</h2>
        <p>{t('privacy_your_rights_and_choices_description')}</p>
        <ul>
          <li>{t('privacy_right_access_data')}</li>
          <li>{t('privacy_right_rectify_data')}</li>
          <li>{t('privacy_right_delete_data')}</li>
          <li>{t('privacy_right_object_processing')}</li>
          <li>{t('privacy_right_withdraw_consent')}</li>
        </ul>
        <p>
          {t('privacy_contact_to_exercise_rights')}{' '}
          <a href="mailto:privacy@solarpunkhq.com">privacy@solarpunkhq.com</a>.
        </p>

        <h2>{t('privacy_retention_of_information_title')}</h2>
        <p>{t('privacy_retention_of_information_description')}</p>

        <h2>{t('privacy_international_data_transfers_title')}</h2>
        <p>{t('privacy_international_data_transfers_description')}</p>

        <h2>{t('privacy_changes_to_policy_title')}</h2>
        <p>{t('privacy_changes_to_policy_description')}</p>

        <h2>{t('privacy_contact_us_title')}</h2>
        <p>{t('privacy_contact_us_description')}</p>
        <p>
          {t('privacy_contact_email')}{' '}
          <a href="mailto:privacy@solarpunkhq.com">privacy@solarpunkhq.com</a>.
        </p>

        <p>{t('privacy_last_updated')}</p>
      </article>
    </Container>
  );
}
