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

// 保留几位洗小数带符号
exports.formatNum2 = (value) =>{
    if(value > 0){
        return "+"+value.toFixed(2);
    }else{
        return value.toFixed(2);
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
// 格式化日期
exports.formatDate = (value,type)=>{
    let year =value.split(" ")[0].split("-")[0];
    let mou =value.split(" ")[0].split("-")[1];
    let day =value.split(" ")[0].split("-")[2];
    let hour=value.split(" ")[1].split(":")[0];
    let min=value.split(" ")[1].split(":")[1];
    let sec=value.split(" ")[1].split(":")[2];
    if(type==0){
        return mou+'/'+day;
    }else if(type==1){
        return hour+':'+min;
    }else if(type ==2){
        return year+'-'+mou+'-'+day;
    }
};
// 时间戳转换成日期
exports.formatDate1 = (value)=>{
    var time = new Date(value)    //先将时间戳转为Date对象，然后才能使用Date的方法
    var year = time.getFullYear(),
        month = time.getMonth() + 1 ,  //月份是从0开始的
        day = time.getDate(),
        hour = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds()
    //add0()方法在后面定义
    return  year+'-'+add0(month)+'-'+ add0(day)+'  '+add0(hour)+':'+add0(minute)+':'+add0(second)

};

exports.formatNum7 = (value,data) =>{
    if(value.toString().split(".")[1] && value.toString().split(".")[1].length > 7){
        return value.toFixed(data);
    } else{
        return value;
    }
};
//超过6位数的小数用科学计数法表示
exports.science = (value) => {
    if(value.toString().indexOf(".") == -1||value.toString().split(".")[1].length > 7 ){
        value=value.toExponential(2);
        return value
    }else {
        return value;
    }
};
//时间转换成时间戳
exports.formatDate2=(value)=>{
    console.log(value);
    let date = new Date(value).getTime();
    let nowDate=new Date().getTime();
    return Math.ceil((nowDate-date)/(4*3600000));
};

