/*1 Write a JavaScript function to get the number of days in a month.
2 Write a JavaScript function to get the last day of a month.
3 Write a JavaScript function to get time differences in months between two dates.
4 Write a JavaScript function to get the week end date.
5 Write a JavaScript function to add specified weeks to a date
6 Write a JavaScript function to get timezone offset in seconds.*/

function q1_number_of_days_in_month() {
    let month = +prompt("Enter the month:");
    let year = +prompt("Enter the year:");
    return new Date(year, month + 1, 0, 0, 0, 0).getDate();
}

function q2_last_day_of_month() {
    let month = +prompt("Enter the month");
    let year = +prompt("Enter the year");
    day = new Date(year, month + 1, 0, 0, 0, 0).getDay();
    switch (day) {
        case 0:
            return "SUNDAY";
        case 1:
            return "MONDAY";
        case 2:
            return "TUESDAY";
        case 3:
            return "WEDNESDAY";
        case 4:
            return "THIRSDAY";
        case 5:
            return "FRIDAY";
        case 6:
            return "SATURDAY";
    }
}

function q3_get_time_difference() {
    alert("Enter the first date data...")
    let sec1 = +prompt("Enter the seconds:");
    let min1 = +prompt("Enter the minu:");
    let hour1 = +prompt("Enter the hours:");
    let date1 = +prompt("Enter the date:");
    let month1 = +prompt("Enter the month:");
    let year1 = +prompt("Enter the year:");
    alert("Enter the second date data...")
    let sec2 = +prompt("Enter the seconds:");
    let min2 = +prompt("Enter the minu:");
    let hour2 = +prompt("Enter the hours:");
    let date2 = +prompt("Enter the date:");
    let month2 = +prompt("Enter the month:");
    let year2 = +prompt("Enter the year:");
    let date_obj1 = new Date(year1, month1, date1, hour1, min1, sec1);
    let date_obj2 = new Date(year2, month2, date2, hour2, min2, sec2);
    let time_diff_months = Math.round((date_obj2.getTime() - date_obj1.getTime()) / (1000 * 30.4167 * 3600 * 24));
    // here 30.4167 is total days in year / total months : 365/12 = 3.4167 
    return time_diff_months;
}

function q4_get_week_end_dates() {
    let month = +prompt("Enter the month:");
    let year = +prompt("Enter the year:");
    total_days = new Date(year, month + 1, 0, 0, 0, 0).getDate();
    ans_arr = [];
    for (let i = 1; i <= total_days; i++) {
        if (new Date(year, month, i).getDay() == 0 || new Date(year, month, i).getDay() == 6) {
            ans_arr.push(new Date(year, month, i, 0, 0, 0));
        }
    }
    //////////////// consider  saturday , sunday as week ends
    return ans_arr;
}

function q5_add_week_and_date() {

    let date = +prompt("Enter the date:");
    let month = +prompt("Enter the month:");
    let year = +prompt("Enter the year:");
    let weeks = +prompt("Enter the weeks:");

    let add_miliseconds = weeks * 7 * 24 * 60 * 60 * 1000;
    let date_obj = new Date(year, month, date)
    let new_date = date_obj.getTime() + add_miliseconds;
    return (new Date(new_date));
}

function q6_timezone_offset() {
    let sec = +prompt("Enter the seconds:");
    let min = +prompt("Enter the minu:");
    let hour = +prompt("Enter the hours:");
    let date = +prompt("Enter the date:");
    let month = +prompt("Enter the month:");
    let year = +prompt("Enter the year:");

    let date1 = new Date(year, month, date, hour, min, sec);

    return (date1.getTimezoneOffset());
}
console.log(q1_number_of_days_in_month());
console.log(q2_last_day_of_month());
console.log(q3_get_time_difference());
console.log(q4_get_week_end_dates());
console.log(q5_add_week_and_date());
console.log(q6_timezone_offset());