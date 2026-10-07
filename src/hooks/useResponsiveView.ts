import { useEffect, useState } from 'react';
import type { View } from '../types';

function getViewByWidth(width: number): View {
  if (width < 640) return 'day';
  if (width < 1024) return '3days';
  return 'week';
}

export function useResponsiveView(): View {
  const [view, setView] = useState<View>(() =>
    getViewByWidth(window.innerWidth),
  );

  useEffect(() => {
    const onResize = () => setView(getViewByWidth(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return view;
}