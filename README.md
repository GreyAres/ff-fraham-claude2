# Freiwillige Feuerwehr Fraham – Website

Neue Website der Freiwilligen Feuerwehr Fraham (https://ff-fraham.at), gebaut mit
[Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com) und
[Decap CMS](https://decapcms.org), gehostet auf [Netlify](https://netlify.com).

## Projekt lokal starten

```bash
npm install
npm run dev
```

Die Seite läuft danach unter `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Content-Struktur

- `src/content/einsaetze/` – Einsatzberichte (Markdown mit Frontmatter)
- `src/content/news/` – News & Veranstaltungen
- `src/content/fuhrpark/` – Fahrzeuge des Fuhrparks

Diese Inhalte können entweder direkt als Markdown-Dateien bearbeitet oder komfortabel über
den CMS-Admin-Bereich unter `/admin` gepflegt werden.

## Deployment auf Netlify

1. Repository auf GitHub hochladen.
2. In Netlify: "Add new site" → "Import an existing project" → GitHub-Repo auswählen.
3. Build-Einstellungen werden automatisch aus `netlify.toml` übernommen
   (Build-Command: `npm run build`, Publish-Verzeichnis: `dist`).
4. Nach dem ersten Deploy: Netlify Identity aktivieren (siehe Anleitung im Chat/Angebot).
5. Domain `ff-fraham.at` unter "Domain settings" hinterlegen und DNS entsprechend setzen.

## Admin-Bereich

Erreichbar unter `/admin`. Login erfolgt über Netlify Identity + Git Gateway.
