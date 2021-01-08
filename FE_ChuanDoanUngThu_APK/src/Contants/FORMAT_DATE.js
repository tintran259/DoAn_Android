import moment from 'moment-timezone'


const getDateByTimeZoneDay = (date) => {
   var hours = parseInt(moment().tz('Asia/Ho_Chi_Minh').format('Z'));
   date = moment(date, 'YYYY-MM-DD HH:mm:ss')
      .add(hours, 'hours')
      .format('DD-MM-YYYY')
      .toString();
   return date;
};

export default getDateByTimeZoneDay