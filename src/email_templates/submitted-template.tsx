import * as React from 'react';

interface EmailTemplateProps {
  name: string;
}

export const SubmittedTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name }) => (
  <div>
    <h1>New Acres Submitted</h1>
    <p>{name} has submitted their acres</p>
  </div>
);
