# 🚀 Formity Zero (v0.5 Beta)

**Zero-bug, zero-config form & integration suite** – A complete monorepo containing everything you need to build modern web applications with forms, editors, and integrations.

> **Version:** 0.5 Beta
> 
> This is an early beta release. We welcome feedback, bug reports, and especially contributors!


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
- **🤖 AI Assisted Form Builder** (via Integration Engine)
- **Serverless Integration Handling (Supabase)**
- **CRM Integrations** (HubSpot, Zoho, Next CRM, others)
- **Cloud Storage Integrations** (Google Drive, OneDrive, Dropbox)
- **Payments Integration** (Stripe, others)

---

### 🤖 AI Assisted Form Builder (via Integration Engine) **Highest-Priority**

Formity Zero features an **AI Assisted Form Builder** powered by the Integration Engine. This engine is the backbone for all integrations, including current and upcoming roadmap features. Every integration—whether serverless, CRM, storage, or payments—is managed through the Integration Engine, ensuring a unified, extensible, and maintainable architecture.

- **LLM-driven form generation from plain language prompts**
- **AI validation rules that adapt to user answers**
- **Auto-mapping form fields to CRM columns**

| Task                      | Status                            |
| ------------------------- | --------------------------------- |
| **AI Form Generator**     | `🚧` LLM prompt → JSON schema     |
| **AI Validation Engine**  | `🚧` Auto-adaptive rules          |
| **Supabase Auth**         | `🚧` User sign-up flows           |
| **HubSpot OAuth**         | `🚧` Token storage & sync         |
| **Google Drive Upload**   | `🚧` OAuth + list/delete files    |
| **Stripe Checkout Field** | `🚧` Payment confirmation webhook |

---
---

# 🤝 Contribute to the Roadmap!

We invite collaborators to help us build the next generation of Formity Zero. Below are prioritized objectives and subtasks. **Pick an easy one to get started, or challenge yourself with a harder one!**

> **Note:** All UI-related contributions must use [ahead-shadcn] components for consistency and best UX.
> 
> **SSO First:** All integrations should support SSO (Single Sign-On) for end users who do not touch code, ensuring seamless authentication and onboarding.

## 0. 🤖 AI Assisted Form Builder (via Integration Engine)
- **Google AI API Integration (Highest Priority)**
  - [ ] Integrate Google AI API with the Integration Engine for LLM-driven form generation
  - [ ] Enable prompt-to-JSON schema conversion and adaptive validation using Google AI
- **OpenAI Integration**
  - [ ] Integrate OpenAI (GPT-4/3.5) for form generation and validation
  - [ ] Add fallback and multi-provider support in the Integration Engine
- **Kimi 2, DeepSeek, Claude, Grok Integrations**
  - [ ] Add Kimi 2, DeepSeek, Claude, and Grok as selectable LLM providers in the Integration Engine
  - [ ] Standardize LLM API schema for easy extension and provider switching
- **LLM-driven Form Generation**
  - [ ] Build UI for plain language form creation using [ahead-shadcn]
- **AI Validation Rules**
  - [ ] Create adaptive validation logic that responds to user answers
  - [ ] Integrate validation feedback into the form UI using [ahead-shadcn]
- **Auto-mapping to CRM Columns**
  - [ ] Map generated form fields to CRM columns automatically
  - [ ] Allow user override and review of mappings using [ahead-shadcn]

## 1. Serverless Integration Handling (Supabase) **High-Priority**
- **Database Integration for Form Builder**
  - [ ] Implement Supabase client and connection config in the integration engine
  - [ ] Enable saving form definitions and user submissions to Supabase tables
- **Authentication**
  - [ ] Add Supabase Auth for end-user sign-up/sign-in flows (with SSO support)
  - [ ] Connect form access and submission to authenticated user sessions using [ahead-shadcn] UI

## 2. CRM Integrations (HubSpot, Zoho, Next CRM, others) **High-Priority**
- **HubSpot Integration**
  - [ ] Add OAuth2/SSO flow and token storage for HubSpot
  - [ ] Map form fields to HubSpot contact properties and push submissions
- **Zoho/Next CRM Integration**
  - [ ] Implement Zoho/Next CRM API connectors with SSO
  - [ ] Enable mapping and syncing of form data to CRM leads/contacts using [ahead-shadcn] UI

## 3. Google Drive, OneDrive, Dropbox Integrations (File Uploads) **Medium-Priority**
- **Google Drive Integration**
  - [ ] Add OAuth2/SSO and file upload endpoint for Google Drive
  - [ ] Allow users to select/upload files directly to their Drive from the form using [ahead-shadcn]
- **OneDrive/Dropbox Integration**
  - [ ] Implement OneDrive/Dropbox file upload endpoints with SSO
  - [ ] Support file management (list, delete, download) from the form UI using [ahead-shadcn]

## 4. Payments Integration (Stripe, others) **Medium-Priority**
- **Stripe Integration**
  - [ ] Add Stripe Checkout/Elements to the form builder as a payment field using [ahead-shadcn]
  - [ ] Handle payment confirmation and webhook for form submission
- **Other Payment Providers**
  - [ ] Add support for additional providers (e.g., PayPal, Square, Amazon Payment Services, 2Checkout/Verifone, Geidea, Fawry, Mada, takepayments, Worldpay, Revolut) with SSO where available
  - [ ] Standardize payment integration schema for easy extension

## 5. Calendar Integrations (Google Calendar, Microsoft Calendar) **Low-Priority**
- **Google Calendar Integration**
  - [ ] Integrate Google Calendar API via the Integration Engine for booking forms
  - [ ] Build booking form UI using [ahead-shadcn] and support SSO for end users
- **Microsoft Calendar Integration**
  - [ ] Integrate Microsoft Calendar API for event creation and management
  - [ ] Enable two-way sync and booking management using [ahead-shadcn] UI

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
