# EventsHub
ICI 2026 01

## Git hooks (Husky.Net)

Después de clonar el repositorio, ejecuta desde la raíz:

```sh
dotnet tool restore
dotnet husky install
```

`pre-commit` compila la API y sus dependencias mediante `.husky/task-runner.json`.
Las pruebas se ejecutan por separado con `dotnet test EventsHub.slnx`.
`commit-msg` valida la primera línea del mensaje. Ejemplos válidos:

```text
feat(parcial02): agregar eventos
feat(parcial02) - agregar eventos
fix: corregir validación
```

Tipos permitidos: `feat`, `fix`, `chore`, `docs`, `refactor`, `test` y `hotfix`.
