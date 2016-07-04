function forEach(obj, fn) {
  const hasOwn = Object.hasOwnProperty;
  for (const key in obj) {
    if (hasOwn.call(obj, key)) {
      fn(obj[key], key, obj);
    }
  }
}

function truncate(str, maxLength, suffix = '') {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - suffix.length) + suffix;
  }
  return str;
}

function findIndex(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return i;
    }
  }
  return -1;
}


export {
  forEach,
  truncate,
  findIndex,
};

export default {
  forEach,
  truncate,
  findIndex,
};
