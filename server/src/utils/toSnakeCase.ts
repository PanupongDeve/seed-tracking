export const camelToSnakeCase = (str: any) => str.replace(/[A-Z]/g, (letter: any) => `_${letter.toLowerCase()}`);

const isObject = function (obj: any) {
    return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};

export const toSnakeCase: any = (obj: any) => {
    if (isObject(obj)) {
        const n: any = {};
    
        Object.keys(obj)
          .forEach((k) => {
            n[camelToSnakeCase(k)] = toSnakeCase(obj[k]);
          });
    
        return n;
      } else if (Array.isArray(obj)) {
        return obj.map((i) => {
          return toSnakeCase(i);
        });
      }
      
      return obj;
}

