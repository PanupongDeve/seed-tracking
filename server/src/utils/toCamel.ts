export const snakeToCamel: any = (snakeCaseString: any) => snakeCaseString.replace(/([-_]\w)/g, (g: any) => g[1].toUpperCase()) 

const isObject = function (obj: any) {
    return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};

export const toCamel: any = (obj: any) => {
    if (isObject(obj)) {
        const n: any = {};
    
        Object.keys(obj)
          .forEach((k) => {
            n[snakeToCamel(k)] = toCamel(obj[k]);
          });
    
        return n;
      } else if (Array.isArray(obj)) {
        return obj.map((i) => {
          return toCamel(i);
        });
      }
      
      return obj;
}

