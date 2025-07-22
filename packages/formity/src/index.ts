export interface Field {
  type: string;
  id: string;
  label: string;
  validations?: any;
}

export interface FormityConfig {
  fields: Field[];
  onSubmit: (data: Record<string, any>) => void;
}

export class Formity {
  private container: HTMLElement;
  constructor(selector: string, private config: FormityConfig) {
    const el = document.querySelector(selector);
    if (!el) throw new Error(`Container ${selector} not found`);
    this.container = el as HTMLElement;
  }
  render() {
    this.container.innerHTML = '';
    const form = document.createElement('form');
    this.config.fields.forEach((f) => {
      const label = document.createElement('label');
      label.textContent = f.label;
      const input = document.createElement('input');
      input.name = f.id;
      form.append(label, input);
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      this.config.onSubmit(data);
    });
    this.container.appendChild(form);
  }
} 