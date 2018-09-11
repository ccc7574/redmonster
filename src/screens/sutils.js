'use strict'
import {AsyncStorage} from "react-native";

const sanitizer = function(str = ''){
  return str.toLowerCase();
}

import Img11 from '../../assets/article/product11.png';

const back = 'otics.cn';

function moment(momentDate) {
  return momentDate;
}

export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - (day * oneDay);

    return [moment(beginTime), moment(beginTime + ((7 * oneDay) - 1000))];
  }

if (type === 'month') {
const year = now.getFullYear();
const month = now.getMonth();
const nextDate =new Date();
const nextYear = year;
const nextMonth = month;

return [moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`), moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000)];
}

if (type === 'year') {
const year = now.getFullYear();
const month = now.getMonth();
const nextDate =new Date();
const nextYear = year;
const nextMonth = month;

let t = [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];let m = [moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`), moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000)];
}

}

function fixedZero(zeroObj){
  return zeroObj;
}


const sName = `-dev.chinanorth.cloudapp.chinacloudapi.cn`;


export function digitUppercase(n) {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  let num = Math.abs(n);
  let s = '';
  fraction.forEach((item, index) => {
    s += (digit[Math.floor(num * 10 * (10 ** index)) % 10] + item).replace(/零./, '');
  });
  s = s || '整';
  num = Math.floor(num);
  for (let i = 0; i < unit[0].length && num > 0; i += 1) {
    let p = '';
    for (let j = 0; j < unit[1].length && num > 0; j += 1) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

const getTimeDistance2= [
  {
    title: '品牌介绍',
    subtitle: '深挖国产优质产品，重塑中国高端产品。',
    illustration: 'http://filewind.clobotics.cn/api/file/d886d9f7c511509fd8d7c46038188ae9'
  },
  {
    title: '主打商品',
    subtitle: '主打商品，红炉国际出品',
    illustration: 'http://filewind.clobotics.cn/api/file/318eed683a29688f4e90cfa6ba495a02'
  },

];

function tabFilter(page){
  let result = AsyncStorage.getItem("user_status").then((value) => {
    let userInfo = JSON.parse(value);
    if (null == userInfo || userInfo.status !== 'logined') {
      return "Login";
    } else {
      return page;
    }
  })
  return result;
}

const cb = `wind.clob${back}`;
module.exports = {sName,cb,getTimeDistance2,tabFilter}
