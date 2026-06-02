/**
 * Utility to merge class names, filtering out falsy values.
 * Lightweight alternative to clsx/twMerge.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
