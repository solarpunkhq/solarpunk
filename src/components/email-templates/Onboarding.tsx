import * as React from 'react';

interface OnboardingEmailTemplateProps {
  name: string;
}

export const OnboardingEmailTemplate: React.FC<Readonly<OnboardingEmailTemplateProps>> = ({
  name,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>Thank you for submitting your acres.</p>
    <p>We will be in touch with you within the next 24 hours</p>
  </div>
);