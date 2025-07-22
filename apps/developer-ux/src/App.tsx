import { Formity } from 'formity';
import { IntegrationEngine } from '@integration-engine/core';
import { Ahead as EditorAhead } from 'ahead-editor';
import { Ahead as ShadcnAhead } from 'ahead-shadcn';
import { useEffect, useRef } from 'react';

export default function App() {
  const editorRef = useRef<any>();

  useEffect(() => {
    const engine = new IntegrationEngine();
    engine.use('google-fonts').init('Inter');
    editorRef.current = EditorAhead.init('editor');
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Formity Zero</h1>
      <div id="editor" className="w-full max-w-2xl border rounded p-2" />
      <ShadcnAhead.Button>Hello Shadcn</ShadcnAhead.Button>
      <div id="form" className="w-full max-w-md" />
      <Formity
        selector="#form"
        config={{
          fields: [
            { type: 'short-text', id: 'name', label: 'Name' },
            { type: 'email', id: 'email', label: 'Email' },
          ],
          onSubmit: (d) => alert(JSON.stringify(d, null, 2)),
        }}
      />
    </div>
  );
} 