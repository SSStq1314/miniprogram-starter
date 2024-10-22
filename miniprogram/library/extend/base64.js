const Base64 = {
  // 加密
  encode(str) {
    if (str === undefined || str === '' || str === null) {
      return str;
    }
    return new Buffer(str).toString('base64');
  },
  // 解密
  decode(str) {
    if (str === undefined || str === '' || str === null) {
      return str;
    }
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return new Buffer(str, 'base64').toString('utf8');
  }
};
export default Base64;
