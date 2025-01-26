export function myBind(thisArg, ...otherArgs) {
  return (...args) => {
    const fieldTime = new Date().getTime();
    thisArg[fieldTime] = this;
    const res = thisArg[fieldTime](...args, ...bindArgs);
    delete thisArg[fieldTime]
    return res;
  }
}