export const trimString = (stringVal, length) => stringVal.length > length ? `${stringVal.substring(0, length - 3)}...` : stringVal;

export const ucFirst = stringVal => `${stringVal.substr(0, 1).toUpperCase()}${stringVal.substr(1)}`;

export const getRandom = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const getSecureRandom = () => {
  // Divide a random UInt32 by the maximum value (2^32 -1) to get a result between 0 and 1
  return window.crypto.getRandomValues(new Uint32Array(1))[0] // 4294967295;
};

export const removeStrangeChars = input => {
  var output = "";
  for (var i=0; i<input.length; i++) {
    if (input.charCodeAt(i) <= 9000) {
      output += input.charAt(i);
    }
  }
  return output;
};

export const isProdRequest = () => process.env.NODE_ENV === 'production';
