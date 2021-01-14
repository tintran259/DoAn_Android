import moment from 'moment-timezone'


export const getDateByTimeZoneDay = (date, timeZone) => {
   if (!timeZone) timeZone = 'Asia/Ho_Chi_Minh';
   var hours = parseInt(moment().tz(timeZone).format('Z'));
   date = moment(date, 'YYYY-MM-DD HH:mm:ss')
      .add(hours, 'hours')
      .format('DD-MM-YYYY HH:mm')
      .toString();
   return date;
};

export default getDateByTimeZoneDay