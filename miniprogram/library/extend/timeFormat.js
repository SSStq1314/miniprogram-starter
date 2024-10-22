// 时间格式转换

// 时间戳转为 2022-01-01
export const timeStampToTime = (timeStamp) => {
  // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let date = new Date(timeStamp);
  if (timeStamp < 10000000000) {
    date = new Date(timeStamp * 1000);
  }
  const Y = `${date.getFullYear()}-`;
  const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const D = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return Y + M + D;
};

// 获取今天日期 2022-01-01
export const getTimeToday = () => {
  const date = new Date();
  const Y = `${date.getFullYear()}-`;
  const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const D = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return Y + M + D;
};

// 2022-01-01 格式日期比较大小 date1 大于 date2 为 true
export const dateBiggerThen = (date1, date2) => Number(date1.replace(/-/g, '')) > Number(date2.replace(/-/g, ''));

// 获取今日年月日十分秒: 2023-01-20 10:30:26
export const getDateToday = () => {
  const date = new Date();
  const Y = `${date.getFullYear()}-`;
  const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const D = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const H = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:`;
  const F = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:`;
  const S = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return `${Y + M + D} ${H}${F}${S}`;
};
