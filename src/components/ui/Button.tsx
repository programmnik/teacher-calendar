import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Size = 'sm' | 'md';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: Size;
};

const SIZE_STYLES: Record<Size, string> = {
  sm: 'h-7 px-2 text-(length:--font-size-lesson)',
  md: 'h-8 px-3 text-(length:--font-size-button)',
};

function Button({
  children,
  className = '',
  size = 'md',
  type = 'button',
  ...rest
}: Props) {
  const base =
    'inline-flex items-center justify-center rounded border border-toolbar-border bg-toolbar-bg text-text-primary hover:bg-schedule-cell-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors';

  return (
    <button
      type={type}
      className={`${base} ${SIZE_STYLES[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;