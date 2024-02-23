# Kode Pos

## Contents

- [About](#about)
- [Getting started](#getting-started)
  - [Requirements](#requirements)
  - [Quick Start](#quick-start)
- [License](#license)

## About

Indonesian Postal Code with fastify and prisma orm.

## Getting Started

### Requirements

Node Version^18.18.2 or higher.
If you haven't installed node js, please visit the link below:

https://nodejs.dev/en/download

NPM Version^9.8.1 or higher.

### Quick Start

**With Makefile.**

Install :

```bash
make install
#with bun
make bun
```

Migrate databases :

```bash
make migrate
```

db push :

```bash
make db
```

Run :

```bash
make
```

**Manual.**

Install :

```bash
npm i
#with bun
bun i
```

Migrate :

```bash
npx prisma migrate dev --schema prisma/schema.prisma
```

Run :

1. Build.

```bash
npm run build
```

2. Start.

```bash
npm run start
#with bun
bun start
```

## License

MIT

### <a href="#kode-pos">Back to top</a>
