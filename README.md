# 🚀 Formity Zero (v0.5 Beta)

**Zero-bug, zero-config form & integration suite** – A complete monorepo containing everything you need to build modern web applications with forms, editors, and integrations.

> **Version:** 0.5 Beta
> 
> This is an early beta release. We welcome feedback, bug reports, and especially contributors!

---

## 🤖 AI Assisted Form Builder (via Integration Engine)

Formity Zero features an **AI Assisted Form Builder** powered by the Integration Engine. This engine is the backbone for all integrations, including current and upcoming roadmap features. Every integration—whether serverless, CRM, storage, or payments—is managed through the Integration Engine, ensuring a unified, extensible, and maintainable architecture.

**Contributors:** Please review our [Code Guidelines](CODE_GUIDELINES.md) before submitting a PR. The guidelines include detailed, line-by-line help and best practices for contributing to this codebase.

---

# 🛣️ Roadmap

## ✅ Current Features
- 28-field form builder with validation and conditional logic
- Universal integration engine (Editor.js, Shadcn, Google Fonts, LLMs)
- Developer UX: CLI + GUI, live preview, export to CodeSandbox/StackBlitz
- Self-healing, cross-platform bootstrap and dependency doctor
- TypeScript, Turbo, pnpm, Vite, and full monorepo setup

## 🚧 Upcoming Features
- **Integration Schemas**: Standardized, reusable integration blueprints for third-party services
- **Serverless Integration Handling (Supabase)**
- **CRM Integrations** (HubSpot, Zoho, Next CRM, others)
- **Cloud Storage Integrations** (Google Drive, OneDrive, Dropbox)
- **Payments Integration** (Stripe, others)

---

# 🤝 Contribute to the Roadmap!

We invite collaborators to help us build the next generation of Formity Zero. Below are prioritized objectives and subtasks. **Pick an easy one to get started, or challenge yourself with a harder one!**

## 1. Serverless Integration Handling (Supabase)
- **Database Integration for Form Builder**
  - [ ] Implement Supabase client and connection config in the integration engine
  - [ ] Enable saving form definitions and user submissions to Supabase tables
- **Authentication**
  - [ ] Add Supabase Auth for end-user sign-up/sign-in flows
  - [ ] Connect form access and submission to authenticated user sessions

## 2. CRM Integrations (HubSpot, Zoho, Next CRM, others)
- **HubSpot Integration**
  - [ ] Add OAuth2 flow and token storage for HubSpot
  - [ ] Map form fields to HubSpot contact properties and push submissions
- **Zoho/Next CRM Integration**
  - [ ] Implement Zoho/Next CRM API connectors
  - [ ] Enable mapping and syncing of form data to CRM leads/contacts

## 3. Google Drive, OneDrive, Dropbox Integrations (File Uploads)
- **Google Drive Integration**
  - [ ] Add OAuth2 and file upload endpoint for Google Drive
  - [ ] Allow users to select/upload files directly to their Drive from the form
- **OneDrive/Dropbox Integration**
  - [ ] Implement OneDrive/Dropbox file upload endpoints
  - [ ] Support file management (list, delete, download) from the form UI

## 4. Payments Integration (Stripe, others)
- **Stripe Integration**
  - [ ] Add Stripe Checkout/Elements to the form builder as a payment field
  - [ ] Handle payment confirmation and webhook for form submission
- **Other Payment Providers**
  - [ ] Add support for additional providers (e.g., PayPal, Square)
  - [ ] Standardize payment integration schema for easy extension

---

## 🏁 How to Get Involved

- **Fork the repo** and pick a subtask above (start with an easy one if you're new!)
- **Open an issue** to discuss your approach or ask for guidance
- **Submit a PR** with your changes and reference the subtask
- **Join the discussion**: Suggest new features, integrations, or improvements

We prioritize easy subtasks for new contributors, but all help is welcome!

---

## 🚀 Quick Start

### One-command bootstrap

1. **Clone or download** this repository
2. **Run the bootstrap script**:

```bash
# Via Node.js
node bootstrap.js

# Or make it executable and run directly
chmod +x bootstrap.js
./bootstrap.js
```

The bootstrap will:
- ✅ Check Node.js 18+ requirement
- 📦 Auto-install pnpm (or use npm/yarn if preferred)
- 🔍 Install all workspace dependencies
- 🩺 Run health checks on all packages
- 🎯 Present interactive menu for next steps

### Available commands

After bootstrap, choose from:
- **Start dev servers** – Hot-reload development for all packages
- **Build everything** – Production builds for all packages
- **Run unit tests** – Complete test suite across all packages

## 📁 Repository Structure

```
formity-zero/
├── bootstrap.js                 # 🩺 1-click setup & health check
├── package.json                 # 📦 Root workspace configuration
├── pnpm-workspace.yaml          # 🔧 Workspace definition
├── turbo.json                   # ⚡ Monorepo task orchestration
├── apps/
│   └── developer-ux/            # 🛠️ CLI + GUI development tools
├── packages/
│   ├── formity/                 # 📝 Form builder with 28 field types
│   ├── integration-engine/      # 🔌 Universal integration hub
│   ├── ahead-editor/            # ✏️ Editor.js wrapper
│   └── ahead-shadcn/            # 🎨 Shadcn/ui components
└── scripts/
    └── doctor.js                # 🩺 Dependency health checker
```

## 🏗️ Package Details

### 📝 Formity
The core form building engine with:
- 28 field types (text, email, select, file upload, etc.)
- Built-in validation system
- Conditional logic support
- Tailwind CSS theming
- Zero configuration required

### 🔌 Integration Engine
Universal hub for connecting any service:
- Pre-configured Editor.js integration
- Shadcn/ui component system
- Google Fonts loader
- LLM provider support
- Extensible registry pattern

### ✏️ Ahead Editor
Complete Editor.js solution:
- All essential blocks (header, paragraph, list, quote, etc.)
- Image upload support
- Link tool with preview
- Inline code formatting
- Zero-config setup

### 🎨 Ahead Shadcn
Ready-to-use Shadcn/ui components:
- Button, Input, and core components
- Tailwind CSS utilities
- Dark/light mode support
- Fully typed with TypeScript

### 🛠️ Developer UX
Complete development experience:
- Interactive CLI for common tasks
- Web-based GUI (http://localhost:3001)
- Live preview of all components
- Export to CodeSandbox/StackBlitz

## 🏃‍♂️ Development Workflow

### Start development servers
```bash
pnpm dev
# Starts all packages in development mode with hot-reload
```

### Build for production
```bash
pnpm build
# Creates optimized builds for all packages
```

### Run tests
```bash
pnpm test
# Runs unit tests across all packages
```

### Type checking
```bash
pnpm check
# TypeScript type checking for all packages
```

### Linting
```bash
pnpm lint
# ESLint across all packages
```

## 🧩 Usage Examples

### Quick Form Setup
```typescript
import { Formity } from 'formity';

const form = new Formity('#my-form', {
  fields: [
    { type: 'short-text', id: 'name', label: 'Full Name' },
    { type: 'email', id: 'email', label: 'Email Address' },
    { type: 'select', id: 'role', label: 'Role', options: ['User', 'Admin'] }
  ],
  onSubmit: (data) => console.log('Form submitted:', data)
});

form.render();
```

### Integration Engine
```typescript
import { IntegrationEngine } from '@integration-engine/core';

const engine = new IntegrationEngine();

// Load Google Fonts
engine.use('google-fonts').init('Inter', [400, 500, 700]);

// Initialize Editor.js
const editor = await engine.use('codex-editor').init({
  holder: 'editor-container',
  placeholder: 'Start writing...'
});
```

### Ahead Editor
```typescript
import { Ahead } from 'ahead-editor';

// Simple setup
const editor = Ahead.init('editor');

// With custom tools
const editor = Ahead.init('editor', {
  customTool: { class: MyCustomTool }
});

// Save content
const content = await Ahead.save(editor);
```

## 🔧 Configuration

All packages are pre-configured with sensible defaults, but can be customized:

- **TypeScript** – Strict mode enabled
- **ESLint** – Recommended rules
- **Vite** – Fast development and building
- **Turbo** – Optimized monorepo builds
- **pnpm** – Efficient package management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `pnpm test`
5. Build: `pnpm build`
6. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- 📖 Check the documentation in each package's README
- 🐛 Report issues on GitHub
- 💬 Ask questions in discussions

---

**Ready to build something amazing?** Run `node bootstrap.js` and you'll be up and running in under 30 seconds! 🚀 