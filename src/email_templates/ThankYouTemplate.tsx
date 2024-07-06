import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

export const ThankYouTemplate = ({
  translations,
}: {
  translations: string[]
}) => {
  return (
    <Html>
      <Head />
      <Preview>{translations['preview']}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://i.imgur.com/ieNnAcN.png`}
            width="335"
            height="87"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>{translations['greeting']}</Text>
          <Text style={paragraph}>{translations['content']}</Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://solarpunk.sh/login">
              {translations['button']}
            </Button>
          </Section>
          <Text style={paragraph}>
            {translations['signature']}
            <br />
            Solarpunk
          </Text>
          <Hr style={hr} />
          <Text style={footer}>2261 Market Street San Francisco, CA 94114</Text>
        </Container>
      </Body>
    </Html>
  )
}

export default ThankYouTemplate

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

const logo = {
  margin: '0 auto',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const btnContainer = {
  textAlign: 'center' as const,
}

const button = {
  backgroundColor: '#000000',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px',
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
}
