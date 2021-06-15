/** Permite generar un mapa de datos a partir del arreglo de elementos de la propiedad inputProp
 *
 * @param inputProp Propiedad de tipo array sobre la qeu se debe generar el map,
 *
 * @param keyProp Propiedad dentro de cada elemento del array que se utilizara como llame del map, por defecto es 'id'
 * @param valueProp Propiedad  dentro de cada elemento qeu se desea guardar en el mapa, es opcional, si no se especifica
 * el mapa se guardara con referencia a los objetos completos
 *
 *
 * @constructor
 *
 * Si @inputProp es un arreglo de string, el mapa guardara como llave y como valor cada elemento del array
 *
 * items: string[] = []
 * @ItemsToMap('items')
 * itemsToMap = {};
 *
 * Si @inputProp es un arreglo de elementos y no se especifica el campo keyProp se utiliza por defecto la propiedad id de cada
 * objeto como llave del mapa
 *
 * items: any[] = []
 * @ItemsToMap('items')
 * itemsToMap = {};
 *
 *
 * @keyProp especificado, utiliza el valor de la propiedad 'codigo' de cada objeto como llave del mapa
 * items: any[] = []
 * @ItemsToMap('items', 'codigo')
 * itemsToMap = {};
 *
 * @keyProp especificado, utiliza el valor de la propiedad 'codigo' de cada objeto como llave del mapa
 * @valueProp especificado, utiliza el valor de la propiedad 'descripcion' como value en el map
 * items: any[] = []
 * @ItemsToMap('items', 'codigo', 'descripcion')
 * itemsToMap = {};
 *
 *
 * * si la propiedad @inputProp no se especifica se busca la propiedad generada a partir de @propertyName desechando la terminacion
 * Map o map
 *
 *  items: any[] = []
 * @ItemsToMap()
 * itemsToMap = {};
 *
 * @example propertyName = 'itemsMap' , toma valor 'items' para inputProp
 * @example propertyName = 'itemsmap' , toma valor 'items' para inputProp
 */

// tslint:disable-next-line:typedef
export function ItemsToMap(inputProp: string = null, keyProp = 'id', valueProp?: string) {
  // tslint:disable-next-line:only-arrow-functions
  return function(target: any, propertyName: string): any {

    const newInputProp = inputProp || propertyName.split('Map')[0] || propertyName.split('map')[0];
    // property value
    let _valProp = target[propertyName];

    // property getter method
    const getterProp = () => {
      return _valProp;
    };

    // property setter method
    const setterProp = (newVal: any) => {
      _valProp = newVal;
    };

    // Delete property.
    if (delete target[propertyName]) {

      // Create new property with getter and setter
      Object.defineProperty(target, propertyName, {
        get: getterProp,
        set: setterProp,
        enumerable: true,
        configurable: true
      });
    }

    // property value
    let _val = target[newInputProp];

    // property getter method
    const getter = () => {
      return _val;
    };

    // setter para la propiedad de array de elementos para generar el map
    const setter = (newVal: any) => {
      if (Array.isArray(newVal)) {
        newVal.forEach((el: any) => {
          if (typeof el === 'object') {
            target[propertyName][el[keyProp]] = !!valueProp ? el[valueProp] : el;
          } else {
            target[propertyName][el] = !!valueProp ? el[valueProp] : el;
          }
        });
      }
      _val = newVal;
    };

    // Delete property.
    if (delete target[newInputProp]) {

      // Create new property with getter and setter
      Object.defineProperty(target, newInputProp, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
}
