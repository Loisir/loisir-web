export const DEV_ENV : boolean = process.env.NODE_ENV !== 'production';

export function canUseDOM() : boolean {
  return !!(
    typeof window !== 'undefined'
    && window.document
    && window.document.createElement
  );
}