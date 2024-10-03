import React from 'react';

import Container from '@/components/shared/container';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_DATA } from '@/constants/seo-data';

export default function Terms() {
  return (
    <Container>
      <article className="prose my-14 max-w-screen-lg">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This Privacy Policy explains how Solarpunkhq.com ("we",
          "our", "us") collects, uses, and discloses personal information when you use our platform
          to connect with photovoltaic installers.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect certain personal data from you when you use Solarpunkhq.com, including:</p>
        <ul>
          <li>Full Name</li>
          <li>Home Address</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>Farm Location and Details</li>
          <li>Payment and Billing Information (if applicable)</li>
          <li>Technical Data (e.g., IP address, browser type, operating system)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            To connect you with photovoltaic installers that match your location and energy needs.
          </li>
          <li>To communicate with you regarding our services and any updates or changes.</li>
          <li>To improve our platform and provide a better user experience.</li>
          <li>To process transactions and manage your account.</li>
          <li>To comply with legal obligations and enforce our Terms of Service.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We may share your personal information with the following third parties:</p>
        <ul>
          <li>
            <strong>Photovoltaic Installers:</strong> We share relevant information such as your
            name, farm location, and contact details with photovoltaic installers to facilitate your
            solar installation.
          </li>
          <li>
            <strong>Service Providers:</strong> We may share your information with trusted service
            providers who assist us in operating our platform, processing payments, or performing
            analytics.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your information to comply with legal
            obligations or in response to lawful requests by public authorities, including to meet
            national security or law enforcement requirements.
          </li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We take reasonable steps to protect your personal information from unauthorized access,
          alteration, disclosure, or destruction. However, no method of transmission over the
          internet or method of electronic storage is 100% secure, and we cannot guarantee the
          absolute security of your information.
        </p>

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on
          Solarpunkhq.com. Cookies are small text files stored on your device that help us
          understand how you use our platform. You can control the use of cookies at the browser
          level, but if you disable cookies, some features of the platform may not function
          properly.
        </p>

        <h2>6. Your Rights and Choices</h2>
        <p>
          You have certain rights regarding the personal data we collect about you. Depending on
          your location, these rights may include:
        </p>
        <ul>
          <li>The right to access and receive a copy of your personal data.</li>
          <li>The right to rectify any inaccuracies in your personal data.</li>
          <li>
            The right to request the deletion of your personal data (subject to certain legal
            limitations).
          </li>
          <li>
            The right to object to or restrict the processing of your data in certain circumstances.
          </li>
          <li>
            The right to withdraw your consent at any time (if consent is the legal basis for
            processing).
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <a href="mailto:privacy@solarpunkhq.com">privacy@solarpunkhq.com</a>.
        </p>

        <h2>7. Retention of Your Information</h2>
        <p>
          We will retain your personal information for as long as necessary to fulfill the purposes
          for which it was collected, comply with legal obligations, resolve disputes, and enforce
          agreements. When we no longer need your personal data, we will securely delete or
          anonymize it.
        </p>

        <h2>8. International Data Transfers</h2>
        <p>
          If you are located outside of the jurisdiction where our servers are based, your
          information may be transferred across international borders. We take appropriate measures
          to ensure that these transfers comply with applicable data protection laws.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or
          legal obligations. We will notify you of any material changes by posting the updated
          policy on our website. Your continued use of Solarpunkhq.com after such changes
          constitutes your acceptance of the updated Privacy Policy.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal data,
          please contact us at:
        </p>
        <p>
          Email: <a href="mailto:privacy@solarpunkhq.com">privacy@solarpunkhq.com</a>
        </p>

        <p>Last updated: 3rd October 2024</p>
      </article>
    </Container>
  );
}
export const metadata = getMetadata(SEO_DATA.index);
