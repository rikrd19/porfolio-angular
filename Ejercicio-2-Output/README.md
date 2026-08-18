# 🐉 DragonBall Super — Ejercicio de Outputs y Señales en Angular

Aplicación construida durante el curso de **Angular** para practicar la comunicación entre componentes con la API moderna de **señales (`signals`)** y **`input()` / `output()`**, junto con la persistencia de datos en `localStorage`.

Permite agregar personajes con su nivel de poder y ver el listado actualizado en tiempo real. El estado se conserva incluso al recargar el navegador.

## ✨ Funcionalidades

- ➕ Agregar personajes con **nombre** y **poder** desde un formulario controlado.
- 📋 Listado de personajes con su nivel de poder, renderizado con `@for`.
- 🔄 Comunicación hijo → padre mediante `output<Character>()` y `(newCharacter)`.
- 🧩 Paso de datos padre → hijo con `input.required<Character[]>()`.
- 💾 Persistencia automática en `localStorage` usando `effect()`.
- ⚡ Reactividad total con señales (`signal()` / `update()` / `set()`).
- 🎨 UI con **Bootstrap 5** vía CDN.

## 🛠️ Tecnologías

| Tecnología | Detalle |
|---|---|
| Angular | v19 (standalone components, sin NgModules) |
| TypeScript | Tipado estricto |
| Señales | `signal`, `input`, `output`, `effect` |
| Bootstrap | 5.3.3 (CDN) |
| LocalStorage | Persistencia del estado |

## 📁 Estructura del proyecto

```
src/app/
├── components/
│   └── dragonball/
│       ├── character-add/        # Formulario + output<Character>
│       └── character-list/       # Listado con input.required
├── pages/
│   └── dragonball-super/         # Página principal (orquestadora)
├── services/
│   └── dragonball.service.ts     # Estado global + localStorage
├── interfaces/
│   └── character.interface.ts    # Interfaz Character
└── app.routes.ts                 # Ruta '' → DragonballSuperComponent
```

## 🔑 Conceptos aplicados

- **Señales (`signals`)**: estado reactivo con `signal()`, `update()` y `set()`.
- **`input.required<T>()`**: inputs tipados para recibir datos del padre.
- **`output<T>()`**: eventos que el hijo emite con `.emit()` para avisar al padre.
- **Inyección de dependencias**: `inject(DragonballService)` en componentes standalone.
- **`effect()`**: reacción a cambios de señal (persistencia en `localStorage`).
- **Control flow**: `@for` con `@empty` para el renderizado de listas.

## 🚀 Cómo ejecutar

```bash
npm install
ng serve
```

Abre `http://localhost:4200/` y prueba a agregar un personaje: el listado se actualiza al instante y sigue ahí al recargar la página.

## 🧠 Aprendizajes destacados

Este ejercicio es el primer acercamiento a la comunicación entre componentes en Angular moderno: entender la diferencia entre **entrada de datos** (inputs) y **salida de eventos** (outputs) fue la base para después refactorizar el estado a un **servicio compartido** (`DragonballService`), mostrando la evolución de "estado local en componentes" hacia "estado global con persistencia".
