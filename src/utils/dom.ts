export function canUseDOM(): boolean {
  return !!(
    typeof window !== 'undefined'
    && window.document
    && window.document.createElement
  );
};

type Falsy = boolean | undefined | null | 0;

export function clsx(...classes: (string | Falsy)[]): string {
  return classes.filter(Boolean).join(' ');
};