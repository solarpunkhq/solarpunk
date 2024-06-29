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
import clsx from 'clsx'

export const ThankYouTemplate = () => (
  <Html>
    <Head />
    <Preview>Thank you for submitting your acres</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://i.imgur.com/ieNnAcN.png`}
          width="335"
          height="87"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hello!</Text>
        <Text style={paragraph}>
          Welcome to Solarpunk, thank you for submitting your acres. We will get
          back to you shortly. In the meantime, you can submit additional
          details about your land or check the status of your application using
          the link below.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://solarpunk.sh/login">
            Login
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Solarpunk team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
)

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
