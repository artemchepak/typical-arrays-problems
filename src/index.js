
exports.min = function min (array) {
  let result = 0;
  if (array === undefined || array.length === 0) {
    result = 0;
  }
  else {
    result = (array === [], 0, Math.min.apply(null, array));
  }
  
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if (array === undefined || array.length === 0) {
    result = 0;
  }
  else {
    result = Math.max.apply(null, array);
  }
  
  return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if (array === undefined || array.length === 0) {
    result = 0;
  }
  else {
    result = array.reduce((a, b) => a + b, 0) / array.length;
  }
  
  return result;
}
