import React from 'react';

export const moneyFormat = (num) => {
  return '$ ' + (num > 999 ? `${num.toString().slice(0, -3)},${num.toString().slice(-3)}` : num);
};

export const escapedNewLineToLineBreakTag = (string) => {
  return string.split('\\n').map((item, index) => {
    return index === 0 ? item : [<br key={index} />, item];
  });
};
