'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config' // Adjust path if sanity.config.ts is in your root folder

export default function StudioPage() {
  return <NextStudio config={config} />
}