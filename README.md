# BBL Pivotal kodeoppgave ❤️

Dette er en liten test for å få et lite innblikk i kompetansenivå når det kommer til koding i React.
Dette er en React SPA med Vite og Tailwind for styling. Om du ønsker å style med plain CSS istedet er det helt i orden!

Appen er en veldig liten plante app, med oversikt over diverse planter (bare hardkodet).
Per nå er det bare mulig å se plantene uten noe form for filter eller paginering.

## Komme igang

For å kjøre denne applikasjonen trenger du:

- En github bruker
- Yarn package manager
- Node versjon 20 eller nyere
- En kodeeditor av eget valg, feks VS Code eller Cursor

For å komme igang, lag en fork av dette repoet på Github.
Lag din egen branch ut ifra master.
Når du er ferdig lager du en pull request

For å starte applikasjonen kjør:

```
yarn
```

for å installere pakker, etterfulgt av:

```
yarn dev
```

for å starte applikasjonen.

## Oppgave

Denne web-appen inneholder 4 sider:

- Planter
  - Dette er hovedsiden med oversikt over alle plantene
  - Plantene er hardkodet og ligger i [src/data/plants.ts](src/data/plants.ts).
- Om oss
- Kontakt
- Handlekurv

### Del 1: Forbedringer

Appen har litt rom for forbedringer. Om du på noe tidspunkt kommer over noe du ville gjort annerledes eller fikset på, ikke være redd for å gjøre det!

Jeg ønsker meg følgende:

- Navigasjonsbaren [src/components/Navigation.tsx](src/components/Navigation.tsx):

  - Koden i navigasjonsbaren er litt repetativ, kan rydde opp litt her?

- Listen over planter [src/pages/Plants.tsx](src/pages/Plants.tsx):

  - "Kortet" som viser informasjon om plantene skulle jeg gjerne hatt som et gjenbruktbart komponent: Card, kan du implementere dette?
  - Siden ser ikke bra ut på små skjermer, kan du fikse dette? (Igjen, kan godt bruke plain css her om du ønsker det)

- Igjen, om du kommer over noe du ville gjort annerledes eller forbedret, gjør gjerne det :)

### Del 2: Filter

I komponentet for plante siden ([src/pages/Plants.tsx](src/pages/Plants.tsx)) er det et filter komponent som er utkommentert. Kan du koble på dette komponentet og fikse filtreringen på kategori?

Kan du også legge til et søkefelt? Det skal være mulig å søke på plantenavn.

### Del 3: Handlekurv

Kan du legge på en mulighet til å legge til planter til handlekurven?

Jeg ønsker meg følgende funksjonalitet:

- Det skal være mulig å legge til planter fra plantesiden.
- Jeg vil ha en indikasjon ved navigasjonselementet for "Handlekurv" på hvor mange gjenstader som er i handlekurven.
- Alle gjenstandene skal listes ut i handlekurven med antall på hver gjenstand og med mulighet til å fjerne en enkelt gjenstand.
- Handlekurven skal være lagret på enheten på tvers av sesjoner, altså om jeg lukker nettsiden og åpner den opp igjen, skal gjenstandene fortsatt være lagret.

Helt til slutt ønsker jeg meg en bestillingsknapp på handlekurv siden som tømmer handlekurven og tar brukeren til en bekreftelsesside (ikke laget enda). Ingenting trenger å lagres.

Lykke til ❤️
