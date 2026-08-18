# 🅰️ Porfolio Angular — Aprendizaje del framework

Repositorio que documenta mi proceso de aprendizaje de **Angular** (v19) con una serie de mini-proyectos que crecen en complejidad: desde los fundamentos y señales hasta la comunicación entre componentes con `input` / `output`, inyección de dependencias y persistencia de estado.

## 🧩 Proyectos del repositorio

| # | Proyecto | Tema principal | Conceptos clave |
|---|---|---|---|
| 1 | [`02-Bases-Angular`](./02-Bases-Angular) | Fundamentos del framework | Estructura de carpetas, componentes, `signal()`, `update()`, `set()`, rutas |
| 2 | [`Tarea-Angular-01`](./Tarea-Angular-01) | Página Hero | Señales reactivas, métodos de clase, `redirectTo` en rutas |
| 3 | [`Ejercicio-2-Output`](./Ejercicio-2-Output) | DragonBall Super | `input.required()`, `output()`, servicio global, `effect()`, `localStorage` |

## 📖 Detalle por proyecto

### 1. 02-Bases-Angular — Fundamentos y contador con señales
Primer acercamiento al framework: análisis de la estructura que genera el CLI, creación de carpetas `pages/` y un **contador** implementado de dos formas — con variable clásica y con **señal** (`signal`), comparando `set()` vs `update()`.

### 2. Tarea-Angular-01 — Página Hero
Página **Hero** que muestra nombre y edad mediante señales, con un método de descripción, botones para cambiar a Spiderman, reset a Ironman y cambio de edad. Incluye redirección de la ruta raíz a `/hero`.

### 3. Ejercicio-2-Output — DragonBall Super (comunicación entre componentes)
Aplicación completa para **agregar personajes** (nombre + poder) y verlos en un listado en tiempo real:
- Hijo → Padre: `output<Character>()` con `(newCharacter)`.
- Padre → Hijo: `input.required<Character[]>()` y `input.required<string>()`.
- Estado global movido a `DragonballService` con **inyección de dependencias** (`inject`).
- Persistencia automática en `localStorage` con `effect()`.

## 🛠️ Stack

- **Angular 19** — componentes standalone (sin NgModules)
- **TypeScript** — tipado estricto
- **Señales** — `signal`, `input`, `output`, `effect`, `inject`
- **Bootstrap 5** — UI (CDN)
- **LocalStorage** — persistencia del estado

## 🚀 Cómo ejecutar cada proyecto

Cada carpeta es una aplicación Angular independiente:

```bash
cd 02-Bases-Angular        # o Tarea-Angular-01, o Ejercicio-2-Output
npm install
ng serve
```

Abre `http://localhost:4200/`.

## 🧠 Aprendizajes destacados

- **Modelo mental del framework**: cómo se muestran los componentes en la web a través de `app/` y el enrutado.
- **Reactividad moderna**: señales como alternativa a los clásicos `@Input` / `@Output`, con una API más limpia y eficiente (`update` lee y escribe en una sola operación).
- **Evolución del estado**: de señales locales en un componente → a un **servicio compartido e inyectable** con persistencia, siguiendo buenas prácticas.
