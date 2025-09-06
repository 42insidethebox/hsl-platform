# 🌐 HSL — Full-Stack Platform (TypeScript / Angular)

Responsive and modular full-stack application (30k+ LOC) designed for scalability and long-term maintainability.

Features include:

* **Dashboard analytics** 📊
* **Google Maps integration** 🗺️
* **Dynamic UI components** ⚡
* **Smooth animations and transitions** 🎞️
* **Extensible architecture** with modular feature sets 📦

Originally built in Angular as a frontend-first SPA, the project is being progressively migrated toward **React Native** to achieve **cross-platform scalability**, **cleaner modularity**, and **MVP-ready maintainability**.

---

# 🎥 Demo (HSL Platform)

![Image](https://github.com/user-attachments/assets/f4246a75-04c5-4c39-afa9-d3e3124757ea)

---

# 📚 Table of Contents

* [Technological Overview 🖥️](#technological-overview)
* [Design Principles Aligned with HSL Code 🎨](#design-principles-aligned-with-hsl-code)
* [HSL Codebase Structure 📂](#hsl-codebase-structure)
* [Application Core ⚡](#application-core-appmodule)
* [Roadmap & Lessons Learned 🛠️](#roadmap--lessons-learned)
* [Getting Started 🚀](#getting-started)

---

# 🖥️ Technological Overview

The HSL platform is powered by the **MEAN stack** (MongoDB, Express.js, Angular, Node.js). Each technology contributes a critical role in building a performant, maintainable, and scalable ecosystem.

---

## 🍃 MongoDB

MongoDB provides schema flexibility with JSON-like document storage, ideal for heterogeneous product listings and dynamic user profiles.

**Key Features in HSL:**

* **Dynamic Schema**: Easily accommodates new service types and attributes.
* **Horizontal Scalability**: Shards data efficiently to handle user growth.
* **Performance**: Indexed queries ensure low-latency retrieval, essential for marketplace responsiveness.

---

## 🚀 Express.js

Express.js serves as the lightweight backend layer, enabling rapid development of REST APIs and middleware.

**Key Features in HSL:**

* **Middleware Integration**: Extensible hooks for authentication, validation, and logging.
* **Routing**: Centralized route handling for modular APIs.
* **Performance**: Minimal overhead, optimized for high-throughput requests.

---

## 🅰️ Angular

Angular is the primary framework for building the frontend SPA, ensuring modularity, consistency, and developer productivity.

**Key Features in HSL:**

* **Two-Way Data Binding**: Maintains real-time sync between UI and model.
* **Component Modularity**: Feature-based modules simplify extension and debugging.
* **Reactive Programming**: Extensive use of RxJS for async workflows and event streams.

---

## 💚 Node.js

Node.js powers the backend with an asynchronous, event-driven architecture.

**Key Features in HSL:**

* **Non-Blocking I/O**: Handles concurrent requests efficiently.
* **Event Loop**: Perfect for real-time data flows such as bookings and transactions.
* **npm Ecosystem**: Access to a vast package ecosystem accelerates development.

---

# 🎨 Design Principles Aligned with HSL Code

The HSL platform was developed under a set of guiding design principles that prioritize clarity, consistency, and scalability.

---

### 🗝️ Simplicity is Key

* **Directive-Driven UI**: Angular directives encapsulate logic into clear, reusable blocks.
* **Component Modularity**: Small, single-purpose components (e.g., Auth, Map, Listings) ensure maintainability.

---

### 🔄 Consistency

* **Angular Material**: Enforces visual consistency across all modules.
* **Predictable Data Flow**: NgRx services manage state predictably and transparently.

---

### 📣 Feedback and Responsiveness

* **Reactive Forms**: Provide real-time validation feedback for inputs (login, registration).
* **Event Emitters**: Push immediate UI updates upon backend interaction.

---

### 🌍 Accessibility

* **Semantic HTML**: Ensures compatibility with screen readers.
* **Keyboard Navigation**: Angular Material guarantees focus management and keyboard access.

---

# 📂 HSL Codebase Structure

The codebase is organized into **modular, feature-driven components**. This ensures scalability and encourages separation of concerns.

---

## 🌳 Root Directory

* `./src`

  * **Entry Points**

    * `index.html` → Main HTML shell.
    * `main.ts` → Angular bootstrap file.
    * `styles.css` → Global styles.
  * **Environment Configurations**

    * `./environments/environment.ts` → Environment-specific variables.
  * **Assets**

    * `./assets/util/` → Utility functions.
    * `./assets/images/` → Static resources.

---

## 📦 Modules

* **Transaction Module**

  * Components for payments, invoices, and history.
* **Admin Module**

  * User and service management dashboards.
* **User Module**

  * Registration, profile, authentication flows.
* **Service Module**

  * Booking, listing, and service catalog management.

---

## 🧭 Extended Walkthrough

### Angular App (`./src/app`)

* **Modules**: Transaction, Admin, User, Service.
* **Shared**: Angular Material imports, common services, shared UI.
* **State Management**: Actions, reducers, and centralized store.
* **Assets**: Images, utility scripts, constants.

### Shared Components

* **UI Elements**: Buttons, cards, tables, modals, dialogs.
* **Widgets**: Heatmaps, dashboards, and metrics panels.

---

# ⚡ Application Core: AppModule

The `AppModule` (`./src/app/app.module.ts`) is the root orchestrator.

---

### 🧩 Declarations

Registers all reusable components:

* **User Flows**: Login, Register, Profile, Booking.
* **Dashboard**: Analytics, Widgets, Activity Metrics.
* **Admin Panel**: User management, picklists, dialogs.
* **Service Listings**: Browse, Favorites, Reviews.

---

### 📦 Imports

Integrates:

* Angular Core (`FormsModule`, `HttpClientModule`, `ReactiveFormsModule`).
* Angular Material (`MatDialogModule`, `MatStepperModule`).
* NgRx for state management.
* Feature modules (Service, Transaction, Admin).

---

### 🛣️ Routing

Centralized with `RouterModule.forRoot()`:

```ts
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'listings', component: ListingComponent },
```

---

### 🚀 Bootstrap

```ts
bootstrap: [AppComponent]
```

The `AppComponent` initializes the SPA shell.

---

# 🛠️ Roadmap & Lessons Learned

The HSL project continues to evolve toward production readiness.

---

### 📌 Next Milestones

* **Backend Rebuild**: Reintroduce Express.js + MongoDB services with documented APIs.
* **API Integration**: Solidify backend routes for services, profiles, and transactions.
* **CI/CD**: Establish automated build, test, and deployment pipelines.
* **Cloud-Readiness**: Prepare infrastructure with Docker and Terraform.

---

### 📚 Lessons Learned

* **Modularity First**: A feature-based folder structure drastically simplifies scaling.
* **Testing Culture**: Unit and integration tests prevent regressions during migration.
* **DevOps Alignment**: Early adoption of CI/CD ensures reproducibility and consistency.
* **Resilience Matters**: Robust versioning and environment configs prevent downtime during iteration.

---

# 🚀 Getting Started

To run HSL locally:

```bash
# Clone repository
git clone https://github.com/username/hsl.git
cd hsl

# Install dependencies
npm install

# Run dev server
ng serve
```

Open browser at:
👉 [http://localhost:4200/](http://localhost:4200/)

