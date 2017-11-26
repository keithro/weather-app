/* SEPERATE INTO TWO DIFFERENT FUNCTIONS? */
/* ACTUALLY THREE DIFFERENT FUNCTIONS? */

const getDate = (data) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
  const timestamp = parseInt(data);
  const time = new Date(timestamp);
  console.log('Date:', time); // working?
  const date = time.getDate();
  const day = time.getDay(); // 0-6
  return `${days[day]} ${date}`;
};

module.exports = { getDate };
// module.exports.getDate = getDate; //if above doesn't work
