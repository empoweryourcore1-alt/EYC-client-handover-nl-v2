import type { Metadata } from 'next';
import FramerIframe from '../../components/FramerIframe';

const allowedSlugs = new Set([
  'about-us',
  'our-method',
  'personal-training',
  'teacher-training',
  'lisa-pilates-injury-recovery-story',
  'rolf-pilates-transformation',
  'chris-pilates-story',
  'pain-free-stride-pilates',
  'gym-burnout-pilates-story',
  'golfer-back-pain-pilates',
]);

const SHARE_IMAGE = 'https://framerusercontent.com/assets/vHRkazprqjlKNPYIGqCjNq0SBnE.jpg';

const pageMeta: Record<string, { title: string; description: string }> = {
  'about-us': {
    title: 'Over Ons | Empower Your Core®',
    description:
      'Maak kennis met het team achter Empower Your Core®. Een boutique Pilates studio in Utrecht, gericht op precisie, alignment en duurzame transformatie.',
  },
  'our-method': {
    title: 'Onze Methode | Empower Your Core®',
    description:
      'Ontdek de Empower Your Core® methode. Wetenschappelijk onderbouwde Pilates die revalidatie, biomechanica en bewuste beweging samenbrengt.',
  },
  'personal-training': {
    title: 'Persoonlijke Training | Empower Your Core®',
    description:
      'Boutique persoonlijke training bij Empower Your Core® in Utrecht. Privésessies gericht op precisie, alignment en functionele kracht.',
  },
  'teacher-training': {
    title: 'Opleiding voor Pilatesdocenten | Empower Your Core®',
    description:
      'Word expert in beweging met de opleiding van Empower Your Core® Academy. Professionele training, geworteld in wetenschap en praktijk.',
  },
  'lisa-pilates-injury-recovery-story': {
    title: 'Hoe Lisa na 50 jaar eindelijk weer pijnvrij is dankzij Empower Your Core®',
    description:
      'Ontdek hoe persoonlijke Pilatesbegeleiding Lisa hielp om na tientallen jaren weer kracht, flexibiliteit en vertrouwen in haar lichaam terug te krijgen.',
  },
  'rolf-pilates-transformation': {
    title: 'Van Pilates-scepticus naar pijnvrije atleet in drie jaar | Empower Your Core®',
    description:
      'Lees hoe precieze, persoonlijke Pilates Rolf hielp om chronische pijn achter zich te laten en weer krachtig en actief te bewegen.',
  },
  'chris-pilates-story': {
    title: 'Van een 30 jaar oude rugblessure naar een totaal nieuw lichaam | Empower Your Core®',
    description:
      'Zie hoe deskundige Pilatesbegeleiding Chris hielp om een decennia-oude rugblessure om te zetten in een sterker en belastbaarder lichaam.',
  },
  'golfer-back-pain-pilates': {
    title: 'Van terugkerende rugpijn naar een krachtigere swing | Empower Your Core®',
    description:
      'Ontdek hoe een persoonlijk Pilatesprogramma Harry hielp om rugpijn te verminderen, minder vaak naar de chiropractor te hoeven en weer met vertrouwen te golfen.',
  },
  'gym-burnout-pilates-story': {
    title: 'Van sportmoeheid naar een fascinerende passie | Empower Your Core®',
    description:
      'Lees hoe onze persoonlijke aanpak sporten veranderde van uitputtende verplichting in een wekelijkse practice om naar uit te kijken.',
  },
  'pain-free-stride-pilates': {
    title: 'Weer stabiel en pijnvrij in beweging | Empower Your Core®',
    description:
      'Ontdek hoe een-op-een Pilatesbegeleiding hielp om rug- en beenpijn te verlichten en weer rechtop en met vertrouwen te bewegen.',
  },
};

function resolveSlug(slug: string) {
  const normalizedSlug = slug.replace(/\.html$/i, '');
  return allowedSlugs.has(normalizedSlug)
    ? normalizedSlug
    : 'lisa-pilates-injury-recovery-story';
}

type PageProps = {
  // Next.js 15 app router types expose `params` as a Promise.
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const safeSlug = resolveSlug(slug);
  const meta = pageMeta[safeSlug];

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      siteName: 'Pilatesstudio Utrecht - Empower Your Core®',
      images: [
        {
          url: SHARE_IMAGE,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [SHARE_IMAGE],
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const safeSlug = resolveSlug(slug);
  return <FramerIframe src={`/works/${safeSlug}.html`} />;
}
