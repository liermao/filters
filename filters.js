// asdalaksjdasdasdadasda3463546 =>  asdalaksj...a3463546
exports.stringFiltering = (value) =>{
    if(value){
        var str1=value.substr(0,10);
        var str2=value.substr(value.length-10,value.length-1);
        return `${str1}...${str2}`;
    }else{
        return '';
    }
};
// 如果小数位数超过7位，则按科学计数法表示
exports.science = (value) => {
    if(value.toString().indexOf(".") == -1||value.toString().split(".")[1].length > 7 ){
        value=value.toExponential(2);
        return value
    }else {
        return value;
    }
};
// 保留几位洗小数
exports.formatNum = (value,data) =>{
    if(value){
        return value.toFixed(data);
    }else{
        return '';
    }
};
// 保留几位洗小数带符号
exports.formatNum2 = (value) =>{
    if(value > 0){
        return "+"+value.toFixed(2);
    }else{
        return value.toFixed(2);
    }
};


// 时间戳格式化成日期
exports.formatDate =(val) =>{
    const date = new Date(val);
    const year = date.getFullYear();
    const month = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const day = date.getDate() > 9 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
    return `${year}-${month}-${day}`;
};

// 时间戳格式化成时分秒
exports.formatTime =(val) =>{
    const date = new Date(val);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hour} : ${minutes} : ${seconds}`;
};
