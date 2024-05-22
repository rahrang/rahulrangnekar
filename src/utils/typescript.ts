export function ExcludeNullish<T>(value: T | undefined | null): value is T {
  return value != null;
}
