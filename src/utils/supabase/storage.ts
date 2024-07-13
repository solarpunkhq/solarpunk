import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { createClient } from './server'

export async function addScreenshot(screenshot: File, email: string) {
  const buffer = await screenshot.arrayBuffer()

  const client = new S3Client({
    forcePathStyle: true,
    region: 'us-east-1',
    endpoint: 'https://perwgaywwbywnuugyyoi.supabase.co/storage/v1/s3',
    credentials: {
      accessKeyId: process.env.SUPABASE_STORAGE_KEY_ID,
      secretAccessKey: process.env.SUPABASE_STORAGE_KEY,
    },
  })
  const command = new PutObjectCommand({
    Bucket: 'map_screenshots',
    Key: email.split('@')[0] + '/screenshot.png',
    Body: Buffer.from(buffer),
  })
  try {
    const response = await client.send(command)
  } catch (err) {
    console.error(err)
  }

  const { data } = createClient()
    .storage.from('map_screenshots')
    .getPublicUrl(email.split('@')[0] + '/screenshot.png')

  return data
}
