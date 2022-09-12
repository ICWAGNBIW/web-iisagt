function checkWeekType(a) { // December 17, 1995 00:00:00 GMT+0300 - принимаем в таком формате

  let date = new Date(a);
  console.log('a:', date)

  let year = date.getFullYear(); // определяем год (работаем с 01.09.хххх - 30.06.хххх)
  console.log('год:', year)

  let month = date.getMonth();
  console.log('месяц:', month)

  if (month in [0, 1, 2, 3, 4, 5]) {
    year -= 1
  }

  const first_data = new Date(`September 1, ${year} 00:00:00 GMT+0300`); // первая дата в цикле (от нее идет отсчёт)
  console.log('первое сентября:', first_data);

  let firstDay = [7, 1, 2, 3, 4, 5, 6][first_data.getDay()]; // день недели 1-го сен
  console.log('день недели 1го сен:', firstDay);

  if (firstDay !== 1) { 
    const ostatok = 8 - firstDay
    var Monday = first_data
    Monday.setDate(first_data.getDate() + ostatok)
    var weekType = 'upper'
  } else {
    var Monday = first_data
    var weekType = 'lower'
  }
  console.log('первый понедельник сентября:', Monday)
  console.log('тип недели первого понедельника наоборот: ', weekType)

  while (date >= Monday) {
    Monday.setDate(Monday.getDate() + 7)
    if (weekType == 'lower') {
      weekType = 'upper'
    } else {
      weekType = 'lower'
    }
  }
  
  console.log(Monday)
  console.log(weekType)

  return weekType
}

const first_data = 'January 31, 2022 00:00:00'
checkWeekType(first_data)

//export default checkWeekType;


