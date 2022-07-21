import * as Prismic from '@prismicio/client';

export default function getPrismicClient(req?: unknown) {
  const prismic = Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
