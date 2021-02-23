function enable(v) {
  switch(v) {
    case 1:
      return "启用";
    case -1:
      return "禁用";
    default:
      return "";
  }
}
function settleType(v) {
  switch(v) {
    case '1':
      return "CPA";
    case '2':
      return "CPS";
    case '3':
      return "CPA+CPS";
    case 1:
      return "CPA";
    case 2:
      return "CPS";
    case 3:
      return "CPA+CPS";
    default:
      return "";
  }
}function money(v) {
  if(v){
    return v/100
  }
}

function date(v){
  if(v){
    var time=new Date(v);
    return time.getFullYear()+"-"+changNum((time.getMonth()+1))+"-"
      +changNum(time.getDate())
      +" "+changNum(time.getHours())
      +":"+changNum(time.getMinutes())
      +":"+changNum(time.getSeconds());
  }
};
function changNum(num){
  if(num<10){
    return "0"+num;
  }
  return num;
};
export default {
  enable,
  settleType,
  date,
  money
}
