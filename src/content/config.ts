import { defineCollection, z } from 'astro:content';

// Hinweis: Bilder werden von Decap CMS nach /public/images/uploads/ hochgeladen
// und als String-Pfad gespeichert (z.B. "/images/uploads/einsatz-01.jpg").
// Deshalb werden hier bewusst z.string()-Felder statt image() verwendet -
// das ist die robusteste Loesung im Zusammenspiel mit Decap CMS.

const einsaetze = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    datum: z.date(),
    einsatzart: z.enum(['Brand', 'Technisch', 'Sturmschaden', 'Verkehrsunfall', 'Sonstiges']),
    beschreibung: z.string(),
    fahrzeuge: z.array(z.string()).optional().default([]),
    beitragsbild: z.string().optional(),
    bilder: z.array(z.string()).optional().default([]),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    datum: z.date(),
    beitragsbild: z.string().optional(),
  }),
});

const fuhrpark = defineCollection({
  type: 'content',
  schema: z.object({
    fahrzeugname: z.string(),
    funkrufname: z.string(),
    baujahr: z.number(),
    beschreibung: z.string(),
    foto: z.string().optional(),
    reihenfolge: z.number().optional().default(99),
  }),
});

export const collections = { einsaetze, news, fuhrpark };
