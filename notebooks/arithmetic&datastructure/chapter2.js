// class Student {
// 	constructor(name) {
// 		this.name = name;
// 		this.subjects = {}
// 	}
// 	addsubject(subject,grade) {
// 		console.log(typeof(grade) === 'number');
// 		this.subjects[subject] = typeof(grade) === 'number' ? grade : 0;
// 	}

// 	showaveragegrade() {
// 		let num = 0;
// 		let result = 0;
// 		for (let subject in this.subjects) {
// 			num += 1;
// 			result += this.subjects[subject]
// 		}
// 		console.log(this.name+' averagegrade:'+result/num);
// 	}
// }
// 生成随机单词的方法
// var randomInt = function(x) {
// 	x *=Math.random();
// 	x = Math.round(x);
// 	return x;}
// var randomWord = function(wdlength) {
// 	alphabet = ['a','b','c','d','e','f','g','h','i','j'];
// 	result = '';
// 	for (let i =0;i<wdlength;i++) {
// 		let location = randomInt(alphabet.length);
// 		result += alphabet[location];
// 	}
// 	return result;}
// var randomwords = function(length) {
// 	let result = [];
// 	for (let i=0;i<length;i++) {
// 		result.push(randomWord(randomInt(10)));
// 	}
// 	return result;}

// var list = randomwords(10);
// console.log(list);
// // console.log('sort:\n'+list.sort());
// console.log(list.sort().reverse());
// 储存月温度
exports.matrix = (numrows,numcols,init) => {
    let matrix = [];
    for (let i=0;i<numrows;i++) {
        let col = [];
        for (let i=0;i<numcols;i++) {
            col.push(init);
        }
        matrix.push(col);
    }
    return matrix;
};
exports.weeklyTemps = class {
    constructor(month) {
        this.month = month;
        this.data = exports.matrix(5,7,null);
        this.addTemp = (date,temp)=>{
            let day = date%7;
            let week = date>7 ?(date-day)/7: 1;
            this.data[week-1][day-1] = temp;
        };
        this.monthAvg = ()=>{
            let monthtemp = 0;
            let days = 0;
            for (let week of this.data) {
                for (let day of week) {
                    if (typeof day !== 'object') {
                        monthtemp += day;
                        days++;
                    }
                }
            }
            return monthtemp/days;
        };
        this.weekAvg = (week)=> {
            if (week > 5) {
                throw new Error('invalid week!');
            }
            week = this.data[week-1];
            let weektemp = 0;
            let days = 0;
            for (let day of week) {
                if (typeof day !== 'object') {
                    weektemp += day;
                    days++;
                }
            }
            return days > 0 ? weektemp/days : console.log('invalid week!');
        };
        this.weeklyAvg = () => {
            let monthtemp = 0;
            let weeks = 0;
            for (let week of this.data) {
                if (week[0] !== 'object') {
                    for (let day of week) {
                        if (typeof day !== 'object') {
                            monthtemp += day;
                        }
                    }
                    weeks++;
                }
            }
            return monthtemp/weeks;
        };
    }
};
// a = new exports.weeklyTemps(11);
// console.log(a.month);
// a.addTemp(1,10);
// a.addTemp(2,20);
// a.addTemp(3,30);
// console.log('month average:'+a.monthAvg());
// console.log('week1 average:'+a.weekAvg(1));
// console.log('week2 average:'+a.weekAvg(2));
// console.log('weekly average:'+a.weeklyAvg(2));