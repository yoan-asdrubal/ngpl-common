
export function objToBase64(object: any): string {
  let objJsonStr = object;
  if (typeof object !== 'string') {
    objJsonStr = JSON.stringify(object);
  }
  const objJsonB64 = btoa(objJsonStr);

  return objJsonB64;
}

export function base64ToObj(object: string): any {

  const objB64toObje = atob(object);

  const obj = JSON.parse(objB64toObje);

  return obj;
}
