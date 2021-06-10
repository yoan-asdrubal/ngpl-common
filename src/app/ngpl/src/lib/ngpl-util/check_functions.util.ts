export function isNull(value: boolean): boolean {
  return value === null;
}

export function isNotNull(value: boolean): boolean {
  return value !== null;
}

export function isNullOrUndefined(value: boolean): boolean {
  return value === null || value === undefined;
}

export function isNotNullOrUndefined(value: boolean): boolean {
  return value !== null && value !== undefined;
}

export function isArray(value: boolean): boolean {
  return Array.isArray(value);
}

export function isBoolean(value: boolean): boolean {
  return typeof value === 'boolean';
}

export function isFunction(value: boolean): boolean {
  return typeof value === 'function';
}

export function isNumber(value: boolean): boolean {
  return typeof value === 'number';
}

export function isObject(value: boolean): boolean {
  return value !== null && typeof value === 'object';
}

export function isPrimitive(value: boolean): boolean {
  return (typeof value !== 'object' && typeof value !== 'function') || value === null;
}

export function isString(value: boolean): boolean {
  return typeof value === 'string';
}

export function isUndefined(value: boolean): boolean {
  return value === undefined;
}

export function isNotUndefined(value: boolean): boolean {
  return value !== undefined;
}
