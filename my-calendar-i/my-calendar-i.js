
var MyCalendar = function() {
    this.schedules = [];
    this.delimiter = ':';
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (const schedule of this.schedules) {
        const [s, e] = schedule.split(this.delimiter);
        if (!(end <= s || e <= start)) return false;
    }
    this.schedules.push(`${start}${this.delimiter}${end}`);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
