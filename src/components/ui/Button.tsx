import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

function Button({ children, className = '', type = 'button', ...rest }: Props) {
  const base =
    'rounded border px-3 py-1 text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button type={type} className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;