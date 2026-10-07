import { useEffect, useState } from 'react';
import type { Lesson, LessonMenuPosition, LessonMenuState } from '../types';

export function useLessonMenu() {
  const [menu, setMenu] = useState<LessonMenuState>(null);

  const openMenu = (lesson: Lesson, position: LessonMenuPosition) => {
    setMenu({ lesson, position });
  };

  const closeMenu = () => setMenu(null);

  useEffect(() => {
    if (!menu) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    const onClick = () => closeMenu();

    window.addEventListener('keydown', onKey);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('click', onClick);
    };
  }, [menu]);

  return { menu, openMenu, closeMenu };
}