import * as React from 'react';

interface NewSubmissionEmailTemplateProps {
  name: string;
  area: string;
}

export const NewSubmissionEmailTemplate : React.FC<Readonly<NewSubmissionEmailTemplateProps>> = ({
  name,
  area
}) => (
  <div>
    <h1>New Acres submitted</h1>
    <p>Name: {name}</p>
    <p>Area: {area} acres</p>
  </div>
);