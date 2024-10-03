import React from 'react';

import Container from '@/components/shared/container';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_DATA } from '@/constants/seo-data';

export default function Terms() {
  return (
    <Container>
      <article className=" prose my-14 max-w-screen-lg">
        <h1>Terms of Service</h1>
        <p>
          Welcome to Solarpunkhq.com! These Terms of Service ("Terms") govern your use of the
          Solarpunkhq.com platform ("Platform"). By accessing or using the Platform, you agree to be
          bound by these Terms. Please read them carefully before using our services.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Solarpunkhq.com, you agree to comply with and be legally bound by
          the terms outlined in this agreement. If you do not agree to these terms, you must refrain
          from using our services.
        </p>

        <h2>2. Services Provided</h2>
        <p>
          Solarpunkhq.com is a software platform designed to connect farmers with photovoltaic (PV)
          installers. We collect certain personal information from farmers, including but not
          limited to:
        </p>
        <ul>
          <li>Full Name</li>
          <li>Home Address</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>Farm Location and Details</li>
        </ul>
        <p>
          This data is used solely for the purpose of facilitating connections between farmers and
          photovoltaic installers to provide solar energy solutions.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          As a user of Solarpunkhq.com, you agree to provide accurate and up-to-date personal
          information. You are responsible for maintaining the confidentiality of your login
          credentials and for all activities that occur under your account. You agree not to use the
          Platform for any unlawful or fraudulent purposes.
        </p>

        <h2>4. Privacy and Data Collection</h2>
        <p>
          We respect your privacy. By using the Platform, you consent to the collection, use, and
          disclosure of your personal information as described in our{' '}
          <a href="/privacy">Privacy Policy</a>. Your data, including your home address and other
          personal information, will be used to connect you with photovoltaic installers in your
          region.
        </p>

        <h2>5. Data Security</h2>
        <p>
          Solarpunkhq.com takes reasonable measures to protect your personal information. However,
          no method of data transmission or storage is completely secure, and we cannot guarantee
          the absolute security of your information. You agree to use the Platform at your own risk.
        </p>

        <h2>6. User Content</h2>
        <p>
          You retain all rights to any content you submit or post through the Platform. However, by
          submitting content, you grant Solarpunkhq.com a non-exclusive, royalty-free, worldwide
          license to use, reproduce, and distribute the content for the purpose of providing
          services.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          The Platform is provided on an "as-is" basis without any warranties of any kind, whether
          express or implied. Solarpunkhq.com makes no guarantees regarding the accuracy,
          reliability, or completeness of the services provided through the Platform.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Solarpunkhq.com shall not be liable for any
          direct, indirect, incidental, or consequential damages arising out of your use of the
          Platform or any services provided by photovoltaic installers.
        </p>

        <h2>9. Termination</h2>
        <p>
          Solarpunkhq.com reserves the right to terminate or suspend your account at our sole
          discretion for any reason, including but not limited to a violation of these Terms.
        </p>

        <h2>10. Changes to the Terms</h2>
        <p>
          Solarpunkhq.com may update these Terms from time to time. We will notify you of any
          significant changes by posting the new Terms on the Platform. Your continued use of the
          Platform after such changes will constitute your acceptance of the new Terms.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of [Your
          Jurisdiction], without regard to its conflict of law principles. Any legal action or
          dispute arising under these Terms shall be resolved in the courts of [Your Jurisdiction].
        </p>

        <h2>12. Contact Information</h2>
        <p>
          If you have any questions about these Terms or the services provided by Solarpunkhq.com,
          please contact us at <a href="mailto:support@solarpunkhq.com">support@solarpunkhq.com</a>.
        </p>
        <p>Last updated: 3rd October 2024</p>
      </article>
    </Container>
  );
}
export const metadata = getMetadata(SEO_DATA.index);
