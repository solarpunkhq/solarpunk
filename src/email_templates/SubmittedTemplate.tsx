import * as React from 'react'

interface EmailTemplateProps {
  name: string
  screenshot_url: string
}

export const SubmittedTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  screenshot_url,
}) => (
  <div>
    <h1>New Acres Submitted</h1>
    <p>{name} has submitted their acres</p>
    <img src={screenshot_url} alt="Submitted url" />
  </div>
)
