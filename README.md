# Nulta točka – web stranica

Statička stranica napravljena u [Astru](https://astro.build), hostana besplatno na Vercelu.

## Lokalno pokretanje

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # gradi u dist/
npm run preview   # pregled builda
```

## Gdje je što

| Što mijenjam | Datoteka |
|---|---|
| Cijene, FAQ, područja podrške, kontakt, krizni brojevi | `src/data/site.json` |
| Blog članci | `src/content/blog/*.md` |
| Boje, fontovi, razmaci | `src/styles/global.css` (`:root`) |
| Sekcije početne stranice | `src/components/*.astro` |
| Podstranice | `src/pages/` |
| Fotografije | `src/assets/` |
| Postavke CMS-a | `.pages.yml` |

Netehnički urednici sve iz `site.json` i bloga mogu mijenjati kroz **Pages CMS** (vidi korak 5).

## Objava: korak po korak (sve besplatno)

### 1. Gmail
Otvorite zajednički mail (npr. `nultatocka@gmail.com`) i upišite ga u `site.json` → `contact.email`.

### 2. Cal.com (rezervacije)
1. Registracija na <https://cal.com>, korisničko ime npr. `nultatocka`.
2. Kreirajte dva event typea s **točno ovim slugovima**:
   - `uvodni-razgovor`: 45 min, lokacija Cal Video ili Google Meet
   - `individualna-podrska`: 60 min
3. U opis svakog eventa upišite upute za uplatu (IBAN ili Revolut, iznos, poziv na broj).
4. Pod *Settings → Booking* uključite potvrdni mail i podsjetnike.
5. Upišite korisničko ime u `site.json` → `booking.calUsername`. Dok je prazno, stranica prikazuje poruku „kalendar uskoro" s linkom na kontakt.

### 3. Web3Forms (kontakt forma)
1. Na <https://web3forms.com> upišite Gmail adresu i dobit ćete *access key*.
2. Upišite ključ u `site.json` → `contact.web3formsKey`. Ključ je javan po dizajnu i smije biti u kodu.

### 4. GitHub + Vercel
1. Sadržaj ove mape (`web/`) je u **privatnom** repozitoriju na GitHubu (`VrachoxWizard/nulta-tocka`).
2. Na <https://vercel.com> odaberite *Add New → Project*, uvezite repo s GitHuba.
   - Framework preset: **Astro** (Vercel ga sam prepozna)
   - Build command: `npm run build`
   - Output directory: `dist`
3. Nakon deploya stranica je na `https://<ime-projekta>.vercel.app`. Ako adresa nije `nulta-tocka.vercel.app`, promijenite `site` u `astro.config.mjs`.
4. Za analitiku bez kolačića uključite **Vercel Web Analytics** ili **Cloudflare Web Analytics** (ručno dodani skript). Ni jedno ne koristi kolačiće, pa ne treba cookie banner.

### 5. Pages CMS (uređivanje bez kodiranja)
1. Na <https://app.pagescms.org> se prijavite GitHub računom i odaberite repo.
2. CMS čita `.pages.yml` i prikazuje sekcije **Blog** i **Sadržaj stranice**.
3. Svako spremanje radi commit na GitHub, a Vercel automatski objavljuje novu verziju za 1–2 minute.

### 6. Google
Dodajte stranicu u [Google Search Console](https://search.google.com/search-console) i pošaljite `sitemap-index.xml`.

## Kasnije (kad zatreba)
- **Domena** (`nultatocka.hr` ili `.com`): dodajte je u Vercelu pod *Settings → Domains* i promijenite `site` u `astro.config.mjs`.
- **Mail `info@domena`**: besplatni Cloudflare Email Routing prosljeđuje poštu na Gmail.
- **Online plaćanje**: Stripe kroz Cal.com, nakon otvaranja obrta.
- **Newsletter**: MailerLite (besplatno do 500 pretplatnika).

## Pravila za tekstove
Nulta točka **nije** zdravstvena ustanova. U tekstovima koristite izraze „mentorstvo", „podrška", „razgovor" i „osobni razvoj". Izbjegavajte „terapija", „psihoterapija", „savjetovanje", „psihološka pomoć" i „dijagnoza" jer su to zakonom regulirane djelatnosti. Disclaimer i krizni brojevi moraju ostati vidljivi u footeru.
