export function isNull(value: any): boolean {
  return value === null;
}

export function isNotNull(value: any): boolean {
  return value !== null;
}

export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}

export function isNotNullOrUndefined(value: any): boolean {
  return value !== null && value !== undefined;
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isBoolean(value: any): boolean {
  return typeof value === 'boolean';
}

export function isFunction(value: any): boolean {
  return typeof value === 'function';
}

export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object';
}

export function isPrimitive(value: any): boolean {
  return (typeof value !== 'object' && typeof value !== 'function') || value === null;
}

export function isString(value: any): boolean {
  return typeof value === 'string';
}

export function isUndefined(value: any): boolean {
  return value === undefined;
}

export function isNotUndefined(value: any): boolean {
  return value !== undefined;
}
