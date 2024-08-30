import { z, defineCollection } from 'astro:content';

const episodeSchema = z.object({
  audio_preview_url: z.string(),
  description: z.string(),
  html_description: z.string(),
  duration_ms: z.number(),
  explicit: z.boolean(),
  external_urls: z.object({
    spotify: z.string(),
  }),
  href: z.string(),
  id: z.string(),
  images: z.array(z.object({
    url: z.string(),
    height: z.number(),
    width: z.number(),
  })),
  is_externally_hosted: z.boolean(),
  is_playable: z.boolean(),
  language: z.string(),
  languages: z.array(z.string()),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.string(),
  resume_point: z.object({
    fully_played: z.boolean(),
    resume_position_ms: z.number(),
  }),
  type: z.string(),
  uri: z.string(),
  restrictions: z.object({
    reason: z.string(),
  }),
  show: z.object({
    available_markets: z.array(z.string()),
    copyrights: z.array(z.object({
      text: z.string(),
      type: z.string(),
    })),
    description: z.string(),
    html_description: z.string(),
    explicit: z.boolean(),
    external_urls: z.object({
      spotify: z.string(),
    }),
    href: z.string(),
    id: z.string(),
    images: z.array(z.object({
      url: z.string(),
      height: z.number(),
      width: z.number(),
    })),
    is_externally_hosted: z.boolean(),
    languages: z.array(z.string()),
    media_type: z.string(),
    name: z.string(),
    publisher: z.string(),
    type: z.string(),
    uri: z.string(),
    total_episodes: z.number(),
  }),
});

const episodeCollection = defineCollection({
  type: 'content',
  schema: episodeSchema,
});

export const collections = {
  'blog': episodeCollection,
};

// todo delete 