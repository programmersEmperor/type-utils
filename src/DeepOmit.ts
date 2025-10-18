/**
 * DeepOmit<T, Keys>
 * Recursively omit keys from an object type.
 */
export type DeepOmit<T, K extends string | number | symbol> = {
    [P in keyof T as P extends K ? never : P]:
      T[P] extends Record<string, any> ? DeepOmit<T[P], K> : T[P];
  };
  