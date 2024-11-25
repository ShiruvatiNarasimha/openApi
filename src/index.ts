class DataClass {
  private timeZone: string;
  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }

  getTime() {
    var d = new Date();
    return d.getTime();
  }

  getMonth() {
    var d = new Date();
    return d.getMonth();
  }

  getTimeZone() {
    return this.timeZone;
  }

  expensiveOpration() {
    const startTime = new Date().getTime();
    let ctr = 0;
    for (let i = 0; i < 10000; i++) {
      ctr++;
    }
    console.log(ctr);
    const endTime = new Date().getTime();
    console.log("totoal time taken: " + (endTime - startTime) + "ms");
  }
}

const dataObject = new DataClass("IND");
const response = dataObject.expensiveOpration();
console.log(response);
