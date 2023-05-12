const fn = {
  getName : callback => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAge : callback => {
    const age = 20;
    setTimeout(() => {
      callback(age);
      throw new Error("서버에러");
    }, 3000);
  }
}

module.exports = fn;