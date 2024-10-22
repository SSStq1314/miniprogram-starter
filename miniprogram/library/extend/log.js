const rtlog = wx.getRealtimeLogManager();

const logger = {
  debug() {
    const stackInfo = getStackInfo();
    rtlog.debug.apply(rtlog, [stackInfo, ...arguments]);
  },
  info() {
    const stackInfo = getStackInfo();
    rtlog.info.apply(rtlog, [stackInfo, ...arguments]);
  },
  warn() {
    const stackInfo = getStackInfo();
    rtlog.warn.apply(rtlog, [stackInfo, ...arguments]);
  },
  error() {
    const stackInfo = getStackInfo();
    rtlog.error.apply(rtlog, [stackInfo, ...arguments]);
  },
  setFilterMsg(msg) {
    // 从基础库2.7.3开始支持
    if (!rtlog.setFilterMsg) {
      return;
    }
    if (typeof msg !== 'string') {
      return;
    }
    rtlog.setFilterMsg(msg);
  }
};
function getFileName(path) {
  return path.split('/').pop();
}

function getStackInfo() {
  const stackList = new Error().stack.split('\n').slice(3);
  const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
  const stackReg2 = /at\s+()(.*):(\d*):(\d*)/i;
  const s = stackList[0];
  const sp = stackReg.exec(s) || stackReg2.exec(s);
  const data = {};
  if (sp && sp.length === 5) {
    data.method = sp[1];
    data.path = sp[2];
    data.line = sp[3];
    data.pos = sp[4];
    data.file = getFileName(data.path);
  }
  return data;
}
export default logger;
