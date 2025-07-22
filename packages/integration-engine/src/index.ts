export interface RegistryItem {
  init?: (config?: any) => any;
  customize?: (key: string, opts?: any) => any;
  save?: (instance: any) => any;
  [k: string]: any;
}

class Registry {
  private store = new Map<string, RegistryItem>();
  register(name: string, item: RegistryItem) {
    this.store.set(name, item);
  }
  get(name: string) {
    if (!this.store.has(name)) throw new Error(`Preset "${name}" not found`);
    return this.store.get(name)!;
  }
}

// presets ---------------------------------------------------------
const codexEditor: RegistryItem = {
  init: (cfg) =>
    import('@editorjs/editorjs').then(({ default: EditorJS }) => new EditorJS(cfg)),
  save: (editor) => editor.save(),
  customize: (tool, opts) => ({ [tool]: opts }),
};

const shadcnUI: RegistryItem = {
  customize: (component, opts) => ({ component, opts }),
};

const googleFonts: RegistryItem = {
  init: (family = 'Roboto', weights = [400]) => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${family}:wght@${weights.join(';')}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  },
};

const llms: RegistryItem = {
  init: ({ provider, apiKey }: { provider: string; apiKey: string }) => ({
    send: async (prompt: string) => {
      console.log(`[${provider}]`, prompt);
      return 'mock-response';
    },
  }),
};

// engine ---------------------------------------------------------
export class IntegrationEngine {
  private registry = new Registry();
  constructor() {
    this.registry.register('codex-editor', codexEditor);
    this.registry.register('shadcn-ui', shadcnUI);
    this.registry.register('google-fonts', googleFonts);
    this.registry.register('llms', llms);
  }
  use(name: string) {
    return this.registry.get(name);
  }
  register(name: string, item: RegistryItem) {
    this.registry.register(name, item);
  }
}

export default IntegrationEngine; 