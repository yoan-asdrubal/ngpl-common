
export function currentDateFormated(): any {
  const date: Date = new Date(Date.now());
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function getDateFromString(date: string) : any{
  const values = date.split('/');
  const newObj = values[1] + '/' + values[0] + '/' + values[2];
  return new Date(newObj);
}

export function completeFullValueLess10(value) : any{
  return `0${value}`.slice(-2);
}

export function currentTimeStringFormatted(): any {
  return `${completeFullValueLess10(new Date().getHours())}:${completeFullValueLess10(new Date().getMinutes())}`;
}

export function currentDateUTC(date: Date = new Date()): any {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0, 0)).valueOf();
}
