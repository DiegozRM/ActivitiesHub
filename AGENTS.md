# Repository Guidelines

## Project Structure & Module Organization
EventsHub combines a .NET 10 backend with a React/TypeScript frontend.
- `src/EventsHub.Api/`: HTTP controllers, startup, and API configuration.
- `src/EventsHub.Domain/`: domain entities; `src/EventsHub.Application/`: application layer.
- `src/EventsHub.Persistence/`: EF Core SQLite context, migrations, and seed data.
- `src/EventsHub.OpenApi/`, `src/openapi/`, and `src/nswag/`: documentation host, API schema, and client generation configuration.
- `web/src/`: React components, types, styles, and assets; `web/public/`: static assets.
- `tests/EventsHub.UnitTests/`: NUnit tests; `tests/EventsHub.IntegrationTests/`: Bruno HTTP collections.
- `docs/`: testing and OpenAPI documentation.

## Build, Test, and Development Commands
Run backend commands from the repository root:
- `dotnet restore EventsHub.slnx`: restore NuGet packages.
- `dotnet build EventsHub.slnx`: build backend projects and tests.
- `dotnet test EventsHub.slnx`: run NUnit tests.
- `dotnet run --project src/EventsHub.Api`: start the API at `https://localhost:5001`.

From `web/`, run `npm ci` to install locked dependencies, `npm run dev` to start Vite on port 3000, `npm run build` to type-check and bundle, and `npm run lint` to run ESLint. Use `npm run preview` to inspect the production bundle.

## Coding Style & Naming Conventions
Use four-space indentation in C# and two spaces in TypeScript/TSX. Use PascalCase for C# types, public members, and React components; camelCase for local variables and functions; and `_camelCase` for private fields. Suffix asynchronous C# methods with `Async`. Preserve nearby namespace and quoting styles. C# nullable reference types are enabled; frontend linting uses TypeScript, React Hooks, and React Refresh rules. Regenerate OpenAPI schemas and `*.generated.cs` clients rather than editing them manually.

## Testing Guidelines
Use NUnit fixtures and Arrange/Act/Assert sections. Name tests `Method_WhenCondition_ExpectedResult`, following `EventsControllerTests.cs`. Cover successful responses and missing-resource cases. Current fixtures migrate and seed a local SQLite database; account for shared state when adding tests. Collect coverage with `dotnet test EventsHub.slnx --collect:"XPlat Code Coverage"`; no minimum threshold is configured. Run Bruno collections against the running API using the `local` environment.

## Commit & Pull Request Guidelines
Recent commits use `feat(parcial02) - description`; follow the applicable scope and keep descriptions concise. PRs should describe behavior changes, link related issues when applicable, and list validation performed. Include screenshots for UI changes and mention schema, migration, or API contract changes.

## Security & Configuration Tips
Keep secrets out of tracked settings; use environment variables or .NET user secrets. Local SQLite files are ignored. API startup applies migrations and seeds data automatically. Keep frontend URLs and API CORS origins aligned when changing ports.
