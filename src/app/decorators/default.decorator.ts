export function DefaultValue(defaultValue: any) {
  //Property Decorators
  return function (target: any, key: string) {
    let value = defaultValue;
    Object.defineProperty(target, key, {
      get: function () {
        return value;
      },
      set: function (newValue) {
        value = newValue != undefined ? newValue : defaultValue;
      },
    });
  };
}
