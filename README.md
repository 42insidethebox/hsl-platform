### HSL — Full-Stack Platform (Typescript/Angular)

Responsive, modular front-end application (30k+ LOC). Features include dashboard analytics, Google Maps integration, dynamic UI components, smooth animations and more !

Originally built in Angular, currently being migrated to React Native for cleaner modularity, maintainability, MVP and scalability.

### Demo (HSL Platform)

![Image](https://github.com/user-attachments/assets/f4246a75-04c5-4c39-afa9-d3e3124757ea)

## **Table of Contents** 📚

###### **Technological Overview** 🖥️

###### **Design Principles Aligned with HSL Code** 🎨

###### HSL Codebase Structure 📂

# **Technological Overview** 🖥️

The HSL project is powered by the robust MEAN stack, a quartet of groundbreaking technologies, each playing a pivotal role in shaping the ecosystem. Together, they form the backbone of our high-performing, scalable, and efficient platform.

### **MongoDB** 🍃

MongoDB is a trailblazing NoSQL database that offers us the flexibility to store data in a JSON-like format. Its schema-less nature ensures HSL can effortlessly adapt to the ever-evolving data requirements.

**Key Features in HSL**:

- **Dynamic Schema**: Tailored to accommodate diverse product listings and user profiles.
- **Scalability**: Horizontal scalability ensures HSL can accommodate surges in user traffic.
- **Performance**: Indexing capabilities guarantee swift data retrieval, vital for a real-time marketplace experience.

### **Express.js** 🚀

Sitting atop Node.js, Express.js is a minimalist web application framework. It streamlines the backend development, paving the way for rapid API development and integration in the HSL project.

**Key Features in HSL**:

- **Middleware Integration**: Enhances request and response objects, perfect for customizing user interactions.
- **Routing**: Directs web requests seamlessly, ensuring users can navigate the HSL platform with ease.
- **Performance**: Lightweight nature ensures faster server-side processing, crucial for a responsive marketplace.

### **Angular** 🅰️

Angular is our front-end champion. As a framework, it's renowned for creating dynamic Single Page Applications (SPAs), promoting component-based architecture, and ensuring a cohesive user experience.

**Key Features in HSL**:

- **Two-Way Data Binding**: Keeps the UI in perfect sync with the underlying data.
- **Modularity**: Components, services, and modules ensure a clean codebase, making feature additions and debugging a breeze.
- **Reactive Programming**: Harnessing the power of RxJS for a more responsive and interactive user experience.

### **Node.js** 💚

Node.js is the powerhouse that runs JavaScript on the server-side. With its event-driven, non-blocking I/O model, it's perfectly suited for the data-intensive real-time applications that the HSL marketplace embodies.

**Key Features in HSL**:

- **Event-Driven Architecture**: Handles multiple user requests concurrently without a hitch.
- **Package Management**: Leveraging npm for an extensive library of modules, expediting development.
- **Asynchronous Nature**: Ensures seamless data flow between the database, server, and frontend, pivotal for real-time updates in a bustling marketplace.

# **Design Principles Aligned with HSL Code** 🎨

The HSL platform embodies a harmonious blend of design and code. Below, we'll correlate our design principles with the components and functionalities we've discussed:

### **Simplicity is Key** 🗝️

- **Directive-Driven UI**: Angular's directive system ensures that UI components are both intuitive and self-contained, streamlining their integration and application.
- **Component Modularity**: The modular nature of components, such as those handling navigation and user authentication, promotes a cleaner codebase that's easier to navigate and maintain.

### **Consistency** 🔄

- **Styling with Angular Material**: The utilization of Angular Material components provides a consistent and standardized UI across the platform, as seen in our navigation bar and user authentication forms.
- **Predictable Data Flow**: Angular services facilitate a consistent and predictable data flow, ensuring smooth interactions across the platform.

### **Feedback and Responsiveness** 📣

- **Reactive Forms**: Angular's reactive forms, as seen in the user registration and login modules, offer real-time validation feedback, enhancing the user experience.
- **Event-Driven Feedback**: The use of EventEmitter in various components ensures immediate feedback, allowing users to be constantly informed of their actions' outcomes.

### **Accessibility** 🌍

- **Semantic HTML**: By incorporating semantic HTML elements, the platform ensures compatibility with screen readers and adherence to web accessibility standards.
- **Keyboard-Navigable Components**: The integration of Angular Material's components guarantees efficient navigation for keyboard users.

These design principles, when intertwined with the HSL codebase, promise a user-centric platform underpinned by a clean, efficient, and maintainable code structure.

# HSL Codebase Structure 📂

The HSL platform's codebase is organized into modular components, ensuring both scalability and maintainability. Here's a hierarchical representation:

## **1. Root Directory** 🌳

- `./src`
  - **Entry Points**
    - `index.html`: Main HTML file.
    - `main.ts`: Application's main entry point.
    - `styles.css`: Global styles.
  - **Environment Configuration**
    - `./environments`
      - `environment.ts`: Configuration variables.
  - **Shared Resources**
    - `./assets`
      - `./util`: Utility functions.
        - `oneOf.ts`: Utility function.
      - `./images`: Directory for image assets.
  - **App Core**
    - `./app`
      - **Main App Components**
        - `app.component.html`: Main component template.
        - `app.component.ts`: Main component logic.
        - `app.component.css`: Main component styles.
        - `app.module.ts`: App module definitions.
      - **Shared Modules & Services**
        - `./shared`
          - `./services`
            - `shared.service.ts`: Shared service logic.
            - `shared-materials.module.ts`: Angular Material module import for shared components.
      - **User Routes**
        - `./user-routes`
      - **State Management (Store)**
        - `./store`
          - `app.actions.ts`: Actions for state management.
          - `app.reducer.ts`: Reducers for state management.
          - `app.state.ts`: Application state definitions.
      - **Main Modules**
        - `./modules`
    - **Angular Configuration & Modules**
      - `./main.ts`
      - `./styles.css`

---

## **2. Modules** 📦 <a name="modules"></a>

- **Transaction Module**
  - `./modules/transaction`
    - **Main Transaction Components**
      - `transaction.component.html`, `.ts`, `.css`: Main transaction component files.
      - `transaction-routing.module.ts`: Transaction routing configurations.
      - `transaction.module.ts`: Transaction module definitions.
      - **Sub-Modules (Payments, Invoices)**
        - ./transactions/payments`
        - ./transactions/invoices
- **Admin Module**
  - `./modules/admin`
    - **Sub-Modules (User Management, Service Management)**
      - `./user-management`: User management component files.
      - `./service-management`: Service management component files.
- **User Module**
  - `./modules/user`
    - **Sub-Modules (Register, Profile)**
      - `./register`: User registration component files.
      - ./profile`
- **Service Module**
  - `./modules/service`
    - **Sub-Modules (Booking, Listing)**
      - `./booking`: Booking component files.
      - `./listing`: Service listing component files.

Together, these core modules encapsulate the primary business logic of HSL:  
- **Transaction** for financial operations 💳  
- **Admin** for platform oversight 🛠️  
- **User** for account and identity management 👤  
- **Service** for the marketplace ecosystem 📦  

This modular structure ensures the platform remains scalable, testable, and easy to maintain as features expand.

3. Extended Codebase Walkthrough 🧭

The HSL platform is now focused on the frontend client layer, architected in Angular, supported by shared libraries, reusable components, and testing suites. While the original design included a Node/Express backend, the current repo is frontend-first, with backend integration points left open for future expansion.

3.1 Frontend (Angular) 🅰️

Located under ./src/app, the frontend implements the full Single Page Application.

Key Directories:

./src/app/modules/ → Core feature modules (Transaction, Admin, User, Service).
./src/app/shared/ → Shared Angular Material modules, services, and utilities.
./src/app/store/ → Application state management (actions, reducers, state).
./src/assets/ → Static resources (icons, avatars, logos) and utility scripts.

3.2 Shared Components & UI Library 🎨

Custom UI elements live under ./components/ (cards, buttons, forms, modals, tables, etc.).

./components/cards/ → InfoCard, StatCard.
./components/buttons/ → PrimaryButton, SecondaryButton.
./components/forms/ → Input, Checkbox, Select.
./components/modals/ → ConfirmModal, Dialog.
./components/tables/ → DataTable, UserTable.
./components/ui/ → TabBar, IconSymbol, ThemedView/Text.

This modular design ensures fast development and consistent UX.

---

# **4. Application Core: AppModule** ⚡

The **`AppModule`** (`./src/app/app.module.ts`) serves as the **central orchestrator** of the HSL platform. It declares components, imports feature modules, and configures Angular’s core services like routing, state management, and HTTP communication.

---

## **4.1 Declarations** 🧩

The `declarations` array registers **all components** that belong to this application:

* **User Flows**: `LoginComponent`, `RegisterComponent`, `BookingsTransactionsComponent`, `MyProfileComponent`, `UserProfileInfoComponent`, `ProviderProfileComponent`.
* **Homepage & Dashboard**: `HeroSectionComponent`, `HowItWorksComponent`, `FeaturedListingsComponent`, `CTAsComponent`, `CtaComponent`, `DashboardComponent`.
* **Dashboard Widgets**: `UserInfoComponent`, `UserActivityMetricsComponent`, `UserBadgesComponent`, `EarningsOverviewComponent`, `HistoryTimelineComponent`, `HeatmapSectionComponent`, `ReviewsSectionComponent`.
* **Service & Listings**: `ListingComponent`, `BrowseListingsComponent`, `MyListingsComponent`, `CategoriesComponent`, `FavoritesComponent`, `ReviewsComponent`.
* **Admin Panel**: `UserDialogComponent`, `PicklistComponentComponent`.
* **Shared UI**: `HeaderComponent`, `MapComponent`.

This modular declaration approach ensures **reusability** and **testability** across the codebase.

---

## **4.2 Imports** 📦

The `imports` array integrates **Angular libraries**, **Material UI modules**, and **feature modules**:

* **Core Angular**:

  * `BrowserModule`, `FormsModule`, `ReactiveFormsModule`, `BrowserAnimationsModule`, `HttpClientModule`.
* **Angular Material**:

  * `SharedMaterialModule`, `MatDialogModule`, `MatStepperModule`.
* **State Management (NgRx)**:

  * `StoreModule.forRoot({ app: appReducer })`
  * `EffectsModule.forRoot([])`
* **Feature Modules**:

  * `ServiceModule`, `TransactionRoutingModule`, `ServicesRoutingModule`, `UserProfileRoutingModule`.
* **Routing**:

  * `AppRoutingModule` (central routing config).
  * `RouterModule.forRoot([...])` (root-level route definitions).

---

## **4.3 Routing** 🛣️

Defined inline with `RouterModule.forRoot()`:

```ts
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },  
{ path: 'dashboard', component: DashboardComponent },  
{ path: 'listings', component: ListingComponent },  
```

This ensures:

* Default path → Dashboard.
* Listings path → Service listing module.
* Extendable for future features.

---

## **4.4 Bootstrap** 🚀

```ts
bootstrap: [AppComponent]
```

The application boots from `AppComponent`, which serves as the root shell for rendering all other components.

---
# **5. Roadmap & Lessons Learned** 🛠️

The current HSL repo emphasizes the **frontend Angular client**, but the architecture was always intended as full MEAN.  

### **Next Milestones** 📌
- **Backend Rebuild**: Re-implement Express.js services with MongoDB integration.  
- **API Layer**: Document REST endpoints for services, transactions, and profiles.  
- **CI/CD**: Integrate automated testing and deployment pipelines.  
- **DevOps**: Reinforce backup + versioning protocols (lesson learned after one accidental `rm -rf` 😅).  

This roadmap ensures HSL remains **future-proof, resilient, and extensible** for production environments.  

> ⚠️ An earlier backend prototype was lost during a local cleanup incident back in 2023 — a valuable reminder of the importance of backups and strict versioning. This experience directly shaped my commit discipline and DevOps practices, ensuring resilience is now baked into the evolution of HSL.  

---

# **6. Getting Started** 🚀

Follow these steps to run the project locally:

1. **Clone the repo**  
   ```bash
   git clone https://github.com/username/hsl.git
   cd hsl
   ```
    Install dependencies
   ```bash
   npm install
   ```
Run the dev server
  ```bash
  ng serve
  ```
Open your browser and navigate to:
👉 http://localhost:4200/
