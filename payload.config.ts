import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Media } from './src/collections/Media'
import { Projects } from './src/collections/Projects'
import { Users } from './src/collections/Users'
import { SiteSettings } from './src/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const databaseURL = (
  process.env.DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1:5432/aboutlogo'
).replace('sslmode=require', 'sslmode=verify-full')

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — aboutlogo.com CMS',
    },
  },
  collections: [Users, Media, Projects],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'local-development-secret-change-before-production',
  db: postgresAdapter({
    pool: {
      connectionString: databaseURL,
    },
  }),
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: true,
    }),
  ],
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
})
