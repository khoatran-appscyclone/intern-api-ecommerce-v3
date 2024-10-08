export class ObjectUtils {
  static omit<T extends object, K extends keyof T>(
    obj: T,
    keys: K[],
  ): Omit<T, K> {
    const result = { ...obj }; // Shallow copy of the object
    keys.forEach((key) => {
      delete result[key]; // Remove each key
    });
    return result;
  }

  static pick<T extends object, K extends keyof T>(
    obj: T,
    keys: K[],
  ): Pick<T, K> {
    const result = {} as Pick<T, K>;

    keys.forEach((key) => {
      result[key] = obj[key];
    });

    return result;
  }
}
