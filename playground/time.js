// var date = new Date();
// var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// console.log(month[date.getMonth() + 1]);

var moment = require('moment');


// new Date().getTime();
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234
var date = moment(createdAt);
console.log(date.format('h:mm a'));
