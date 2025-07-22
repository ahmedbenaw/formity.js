import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  React.createElement('button', {
    ...props,
    className: cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium',
      'bg-blue-600 text-white px-4 py-2 hover:bg-blue-700',
      props.className
    )
  })
);

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  React.createElement('input', {
    ...props,
    className: cn(
      'flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2',
      props.className
    )
  })
);

export const Ahead = { Button, Input, cn }; 