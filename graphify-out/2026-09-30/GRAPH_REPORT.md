# Graph Report - EventsHub  (2026-09-30)

## Corpus Check
- Corpus is ~48,038 words - fits in a single context window. You may not need a graph.

## Summary
- 555 nodes · 771 edges · 45 communities (38 shown, 7 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Generated API Clients
- Backend Layer Dependencies
- React Frontend Tooling
- Dotnet Project Dependencies
- Architecture and Testing Principles
- Event Controllers and Tests
- Application TypeScript Configuration
- Frontend Development Dependencies
- Generated API Models
- Node TypeScript Configuration
- Event Domain Model
- OpenAPI Generation Workflow
- HTTP Integration Collections
- Graphify Installation and Hooks
- Event Command Handlers
- Database Seeding and Fixtures
- API Launch Configuration
- Controller Mediation and Weather
- Documentation Host Configuration
- Weather Forecast Model
- Git Collaboration Practices
- Event List Query
- Event Editing Handler
- Event Details Query
- Knowledge Graph Pipeline
- CQRS Design Principles
- Event Command Contracts
- SVG Icon Sprite
- Graph Export Formats
- Extraction Evidence Rules
- Knowledge Graph Traversal
- Incremental Graph Maintenance
- Vite Template Guidance
- URL Ingestion and Watching
- Database Context
- Database Model Snapshot
- Cross Repository Graphs
- Media Transcription Workflow
- TypeScript Project References
- Project Course Context
- React Activity Types
- Favicon Vector Asset
- Layered Hero Illustration
- React Vector Asset
- Vite Vector Asset

## God Nodes (most connected - your core abstractions)
1. `Event` - 25 edges
2. `EventsRpcClient` - 20 edges
3. `WeatherForecastRpcClient` - 19 edges
4. `compilerOptions` - 18 edges
5. `compilerOptions` - 15 edges
6. `Graphify skill` - 15 edges
7. `AppDbContext` - 13 edges
8. `Event` - 13 edges
9. `ApiException` - 13 edges
10. `EventsHub.Persistence` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Post commit hooks` --semantically_similar_to--> `Post commit hook`  [INFERRED] [semantically similar]
  docs/guides/install-graphify-openspec.md → .codex/skills/graphify/references/hooks.md
- `Graphify` --references--> `Graphify skill`  [EXTRACTED]
  docs/guides/install-graphify-openspec.md → .codex/skills/graphify/SKILL.md
- `GlobalTestSetup` --references--> `AppDbContext`  [EXTRACTED]
  tests/EventsHub.UnitTests/GlobalTestSetup.cs → src/EventsHub.Persistence/AppDbContext.cs
- `EventsControllerTests` --references--> `EventsController`  [EXTRACTED]
  tests/EventsHub.UnitTests/Controllers/EventsControllerTests.cs → src/EventsHub.Api/Controllers/EventsController.cs
- `EventsHub.Persistence` --references--> `Entity Framework Core`  [EXTRACTED]
  AGENTS.md → docs/fundamentals/DbContextFundamentals.md

## Import Cycles
- None detected.

## Communities (45 total, 7 thin omitted)

### Community 0 - "Generated API Clients"
Cohesion: 0.07
Nodes (37): EventsHub.OpenApi.Client, JsonSerializerSettings, CultureInfo, Exception, global_system, HttpClient, HttpContent, HttpRequestMessage (+29 more)

### Community 1 - "Backend Layer Dependencies"
Cohesion: 0.07
Nodes (35): automapper, EventsHub.Domain, EventsHub.Persistence.Migrations, EventsHub.Application.Events.Queries, EventsHub.Api.Controllers, EventsHub.Application.Events.Commands, EventsHub.UnitTests, EventsHub.Persistence (+27 more)

### Community 2 - "React Frontend Tooling"
Cohesion: 0.05
Nodes (45): axios, @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks (+37 more)

### Community 3 - "Dotnet Project Dependencies"
Cohesion: 0.07
Nodes (26): AutoMapper (13.0.1), coverlet.collector (6.0.4), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Microsoft.NET.Test.Sdk (17.14.0) (+18 more)

### Community 4 - "Architecture and Testing Principles"
Cohesion: 0.08
Nodes (31): Bruno integration tests, EventsHub.Api, EventsHub.Application, EventsHub.Domain, EventsHub.Persistence, NUnit tests, React TypeScript frontend, Repository guidelines (+23 more)

### Community 5 - "Event Controllers and Tests"
Cohesion: 0.16
Nodes (15): ActionResult, HttpDelete, HttpPost, HttpPut, NotFoundObjectResult, ProducesResponseType, SetUp, CancellationToken (+7 more)

### Community 6 - "Application TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 7 - "Frontend Development Dependencies"
Cohesion: 0.11
Nodes (18): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+10 more)

### Community 8 - "Generated API Models"
Cohesion: 0.12
Nodes (17): DateTimeOffset, Event, Category, City, Date, Description, Id, IsCancelled (+9 more)

### Community 9 - "Node TypeScript Configuration"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 10 - "Event Domain Model"
Cohesion: 0.15
Nodes (12): DateTime, Event, Category, City, Date, Description, Id, IsCancelled (+4 more)

### Community 11 - "OpenAPI Generation Workflow"
Cohesion: 0.26
Nodes (12): API controllers, Documentation host, Generated CSharp client, NSwag, OpenAPI schema, OpenAPI setup, API controllers, Documentation host (+4 more)

### Community 12 - "HTTP Integration Collections"
Cohesion: 0.33
Nodes (11): Local baseUrl https://localhost:5001/api/v1, POST events: named 200 but asserts 404 and event not found, DELETE event: named 200 but asserts 404 and event not found, PUT events: named 204 but asserts 404 and event not found, GET seeded event expects 200, GET non-existing-eventid expects 404 and event not found, GET events expects 200 and array, Events request folder with inherited auth (+3 more)

### Community 13 - "Graphify Installation and Hooks"
Cohesion: 0.20
Nodes (10): AST rebuild, CLAUDE.md integration, Graphify hooks, Post commit hook, Codex skills, Graphify, Graphify and OpenSpec installation, Graphify ignore rules (+2 more)

### Community 14 - "Event Command Handlers"
Cohesion: 0.27
Nodes (8): Command, IRequestHandler, CancellationToken, Task, Handler, CancellationToken, Task, Handler

### Community 15 - "Database Seeding and Fixtures"
Cohesion: 0.22
Nodes (7): OneTimeSetUp, OneTimeTearDown, Task, DbInitializer, Task, GlobalTestSetup, AppDbContext

### Community 16 - "API Launch Configuration"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 17 - "Controller Mediation and Weather"
Cohesion: 0.22
Nodes (8): ControllerBase, IMediator, EventsHubBaseController, Mediator, HttpGet, IEnumerable, WeatherForecastController, WeatherForecast

### Community 18 - "Documentation Host Configuration"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 19 - "Weather Forecast Model"
Cohesion: 0.25
Nodes (7): EventsHub.Api, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 20 - "Git Collaboration Practices"
Cohesion: 0.25
Nodes (8): Branches, Cherry pick, Commits, Git practice, Merge, Pull requests, Squash, Stash

### Community 21 - "Event List Query"
Cohesion: 0.32
Nodes (7): ILogger, CancellationToken, List, Task, GetEventList, Handler, Query

### Community 22 - "Event Editing Handler"
Cohesion: 0.25
Nodes (7): IMapper, CancellationToken, Task, Command, Event, EditEvent, Handler

### Community 23 - "Event Details Query"
Cohesion: 0.29
Nodes (7): Query, CancellationToken, Task, GetEventDetails, Handler, Query, Id

### Community 24 - "Knowledge Graph Pipeline"
Cohesion: 0.29
Nodes (7): AST extraction, Community detection, Graph health diagnostics, Graphify skill, Knowledge graph, Semantic cache, Semantic extraction

### Community 25 - "CQRS Design Principles"
Cohesion: 0.29
Nodes (7): Command model, Command Query Separation, CQRS, Domain events, Event sourcing, Outbox pattern, Query model

### Community 26 - "Event Command Contracts"
Cohesion: 0.29
Nodes (7): IRequest, Command, Event, CreateEvents, Command, Id, DeleteEvent

### Community 27 - "SVG Icon Sprite"
Cohesion: 0.29
Nodes (7): SVG symbol sprite, Bluesky icon, Discord icon, Documentation icon, GitHub icon, Social icon, X icon

### Community 28 - "Graph Export Formats"
Cohesion: 0.33
Nodes (6): FalkorDB, Graph exports and benchmark, GraphML, Neo4j, Token reduction benchmark, Wiki export

### Community 29 - "Extraction Evidence Rules"
Cohesion: 0.33
Nodes (6): AMBIGUOUS relationships, EXTRACTED relationships, Extraction specification, Hyperedges, INFERRED relationships, Provenance

### Community 30 - "Knowledge Graph Traversal"
Cohesion: 0.33
Nodes (6): Breadth first traversal, Constrained query expansion, Depth first traversal, Graph traversal, Shortest path, Work memory

### Community 31 - "Incremental Graph Maintenance"
Cohesion: 0.33
Nodes (6): Change detection, Community reclustering, Deleted source pruning, Incremental graph update, Replace on reextract, Semantic manifest

### Community 32 - "Vite Template Guidance"
Cohesion: 0.33
Nodes (6): Events Hub HTML root loads /src/main.tsx, React TypeScript Vite template with HMR, Vite plugin-react uses Oxc, Vite plugin-react-swc uses SWC, React Compiler enabled; impacts Vite dev and build performance, Type-aware ESLint rules recommended for production

### Community 33 - "URL Ingestion and Watching"
Cohesion: 0.40
Nodes (5): AST rebuild, File watcher, Semantic update flag, URL ingestion, URL ingestion and watch

### Community 34 - "Database Context"
Cohesion: 0.40
Nodes (5): DbContext, DbContextOptions, DbSet, AppDbContext, Events

### Community 35 - "Database Model Snapshot"
Cohesion: 0.40
Nodes (4): ModelSnapshot, DateTime, ModelBuilder, AppDbContextModelSnapshot

### Community 36 - "Cross Repository Graphs"
Cohesion: 0.50
Nodes (4): Cross repository graph merge, Graph merging, Repository cloning, Repository provenance

### Community 37 - "Media Transcription Workflow"
Cohesion: 0.50
Nodes (4): Audio transcription, Domain prompt, Media transcription, Whisper

## Knowledge Gaps
- **250 isolated node(s):** `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)`, `Microsoft.EntityFrameworkCore.Design (10.0.11)`, `Microsoft.NET.Sdk.Web` (+245 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 303 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Event Domain Model` to `Database Context`, `Event Controllers and Tests`, `Event List Query`, `Event Editing Handler`, `Event Details Query`, `Event Command Contracts`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `Database Context` to `Backend Layer Dependencies`, `Event Domain Model`, `Event Command Handlers`, `Database Seeding and Fixtures`, `Event List Query`, `Event Editing Handler`, `Event Details Query`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `EventsController` connect `Event Controllers and Tests` to `Backend Layer Dependencies`, `Controller Mediation and Weather`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` to the rest of the system?**
  _250 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Generated API Clients` be split into smaller, more focused modules?**
  _Cohesion score 0.07373271889400922 - nodes in this community are weakly interconnected._
- **Should `Backend Layer Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06948051948051948 - nodes in this community are weakly interconnected._
- **Should `React Frontend Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.05142857142857143 - nodes in this community are weakly interconnected._
## Run limitations

- Semantic extraction ran in session agents; actual input/output token usage was not exposed. Zero token fields are placeholders, not measured zero cost.
- Graph health diagnostic: 56 dangling-endpoint edges; 31 same-endpoint edges collapsed in this undirected graph (30 in a directed simulation). The graph remains usable but some relationships may be incomplete or merged.
- Four SVG assets were inspected from XML without visual rendering; hero.png was visually inspected.
