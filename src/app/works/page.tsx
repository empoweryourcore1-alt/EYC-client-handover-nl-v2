import type { Metadata } from 'next';
import FramerIframe from '../components/FramerIframe';

export const metadata: Metadata = {
  title: 'Ervaringen | Empower Your Core®',
  description:
    'Ontdek verhalen van cliënten van Empower Your Core® en zie hoe persoonlijke Pilates helpt bij kracht, mobiliteit, herstel en vertrouwen.',
  openGraph: {
    title: 'Ervaringen | Empower Your Core®',
    description:
      'Ontdek verhalen van cliënten van Empower Your Core® en zie hoe persoonlijke Pilates helpt bij kracht, mobiliteit, herstel en vertrouwen.',
    type: 'website',
    siteName: 'Pilatesstudio Utrecht - Empower Your Core®',
    images: [
      {
        url: 'https://framerusercontent.com/assets/vHRkazprqjlKNPYIGqCjNq0SBnE.jpg',
        alt: 'Ervaringen | Empower Your Core®',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ervaringen | Empower Your Core®',
    description:
      'Ontdek verhalen van cliënten van Empower Your Core® en zie hoe persoonlijke Pilates helpt bij kracht, mobiliteit, herstel en vertrouwen.',
    images: ['https://framerusercontent.com/assets/vHRkazprqjlKNPYIGqCjNq0SBnE.jpg'],
  },
};

export default function WorksPage() {
  // There's no dedicated /works index export from Framer; default to a safe story.
  return <FramerIframe src="/works/lisa-pilates-injury-recovery-story.html" />;
}
