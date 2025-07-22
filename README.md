# 🚀 Formity Zero

**Zero-bug, zero-config form & integration suite** – A complete monorepo containing everything you need to build modern web applications with forms, editors, and integrations.

## ✨ Features

- **🎯 Formity.js** – 28-field form engine with validation and conditional logic
- **🔌 @integration-engine/core** – Universal integration hub for any service
- **✏️ Ahead-Editor** – Complete Editor.js wrapper with all tools pre-configured
- **🎨 Ahead-Shadcn** – Shadcn/ui components ready to use
- **🛠️ Developer-UX** – CLI + GUI for seamless development experience

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