# Next Level Web Development

A mission-by-mission study archive of notes, examples, assignments, and practice applications covering TypeScript, MongoDB, Mongoose, Express, Redux, and Next.js.

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0--1.0-lightgrey.svg)](LICENSE)

[Browse the published notes](https://montasim.github.io/Next-Level-Web-Development/) · [Open the roadmap](media/pdf/Next%20Level%20Web%20Development.pdf)

## About this repository

This is a learning workspace, not one installable application. Each mission captures a stage of the Next Level Web Development curriculum, and some modules contain independent Node, React, Vite, or Next.js projects with their own manifests and commands.

Use it to:

- follow the curriculum in order;
- review focused Markdown notes;
- compare small examples across technologies;
- inspect assignment and practice code;
- revisit MongoDB and backend patterns through topic articles.

## Learning map

| Mission | Focus | Modules |
| --- | --- | --- |
| 0 | Orientation | 0–1 |
| 1 | TypeScript foundations and OOP | 2–5.5 |
| 2 | MongoDB and Mongoose | 6–9 |
| 3 | Structured Node/Express backends, validation, auth, and transactions | 10–19 |
| 4 | Redux and asynchronous state | 20–23 |
| 5 | Next.js, data fetching, NextAuth, and App Router | 24–27 |

The [curriculum roadmap](media/pdf/Next%20Level%20Web%20Development.pdf) provides the original sequence.

## Start here

### Read the notes

Browse [missions](missions) and open a module's `notes.md`. The most consistently indexed paths begin with:

- [Mission 1: TypeScript](missions/mission-1)
- [Mission 2: Mongoose](missions/mission-2)
- [Mission 3: backend development](missions/mission-3)
- [Mission 4: Redux](missions/mission-4)
- [Mission 5: Next.js](missions/mission-5)

Supporting long-form notes live in [articles](articles), while additional session material is under [conceptual-session](conceptual-session).

### Run a code example

There is no root package manager command. Enter the specific example directory, inspect its `package.json` and lockfile, then use the package manager selected by that module.

For example:

```bash
cd missions/mission-1/module-2
npm install
npm run
```

Use `npm run`, `yarn run`, or `pnpm run` to list that module's available scripts before starting it. Do not assume one Node version, package manager, database, or environment file works across the full archive.

## Repository structure

```text
.
├── articles/              # Topic-focused written references
├── conceptual-session/    # Supplemental session notes
├── media/
│   ├── images/
│   └── pdf/               # Curriculum roadmap and supporting PDFs
├── missions/
│   ├── mission-1/         # TypeScript
│   ├── mission-2/         # MongoDB and Mongoose
│   ├── mission-3/         # Backend engineering
│   ├── mission-4/         # Redux
│   └── mission-5/         # Next.js
└── LICENSE                # CC0 1.0 dedication
```

## Selected articles

- [Pick function refactoring and property management](articles/pick-function-refactoring-property-management.md)
- [Express error handling](articles/all-about-express-error-handling.md)
- [MongoDB `$exists`, `$type`, and `$size`](articles/exploring-exists-type-and-size-operators.md)
- [MongoDB arithmetic update operators](articles/exploring-the-power-of-inc-max-min-and-mul-operators-of-mongodb.md)
- [MongoDB logical querying](articles/deep-dive-into-in-nin-and-or-operators.md)
- [Creating a JSON server](articles/create-a-json-server.md)

## Technologies represented

The archive includes examples involving TypeScript, Node.js, Express, MongoDB, Mongoose, Zod, JWT, React, Redux Toolkit, React Router, Vite, Tailwind CSS, Ant Design, and Next.js. Their presence varies by module; they are not root-level dependencies.

## Published site

GitHub Pages returned `200 OK` when checked on 4 August 2026. The published view is a convenient browser for the repository material, while GitHub remains the authoritative source for individual files and history.

## Expectations and limitations

- Notes reflect a learning journey and may preserve exploratory or superseded approaches.
- Module completeness varies; some directories contain notes, some contain runnable projects, and others contain assignment artifacts.
- Several examples rely on external databases, APIs, or authentication providers and require module-specific configuration.
- Dependencies span multiple generations. Install and audit them per module rather than at the repository root.
- Generated files, IDE metadata, and mixed lockfiles are present in parts of the archive.
- This repository does not provide a unified test suite, build, CI pipeline, or production deployment.
- Validate security-sensitive examples against current official documentation before using them in production.

## Contributing

Documentation corrections and improvements to existing examples are welcome:

1. Open an issue describing the module and problem.
2. Create a focused branch.
3. Keep changes within the relevant lesson unless a cross-cutting update is necessary.
4. Run the affected module's own checks, if it provides any.
5. Submit a pull request with the commands you ran.

Do not add course material that you do not have permission to redistribute.

## Support

Use [GitHub Issues](https://github.com/montasim/Next-Level-Web-Development/issues) for broken links, incorrect notes, or reproducible example problems.

If the archive helps your learning, you can [support the maintainer on SupportKori](https://www.supportkori.com/montasim).

## License

The repository is dedicated to the public domain under [CC0 1.0 Universal](LICENSE). Third-party course material, linked resources, package dependencies, trademarks, and externally sourced assets may carry their own terms.
