export function downloadURL(data: any, fileName = null): void {
  let a;
  a = document.createElement('a');
  a.href = data;
  a.target = '_blank';
  if (!!fileName) {
    a.download = fileName;
  }
  document.body.appendChild(a);
  a.style = 'display: none';
  a.click();
  a.remove();
}


export function downloadBlob(data, fileName, mimeType): void {
  let blob, url;
  blob = new Blob([data], {
    type: mimeType
  });
  url = window.URL.createObjectURL(blob);
  this.downloadURL(url, fileName);
  // tslint:disable-next-line:only-arrow-functions
  setTimeout(function() {
    return window.URL.revokeObjectURL(url);
  }, 1000);
}

export function bin2String(array): void {
  // let result = '';
  // for (let i = 0; i < array.length; i++) {
  // 	result += String.fromCharCode(parseInt(array[i]));
  // }
  // return result;
  return String.fromCharCode.apply(String, array);
}
