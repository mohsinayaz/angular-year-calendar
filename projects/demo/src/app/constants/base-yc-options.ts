import { YCConfig } from 'projects/angular-year-calendar/src/public-api';

export const BaseYCOptions: YCConfig = {
  themeColors: {
    primary: 0, // red
    secondary: 60 // yellow
  },
  data: [],
  nextBtn: {
    text: '>',
    class: 'btn btn-link btn-sm',
  },
  prevBtn: {
    text: '<',
    class: 'btn btn-link btn-sm',
  },
  todayBtn: {
    hide: false
  },
  firstWeekMonth: {
    month: 0, // January
    week: 0 // use `null` for standard weeks and calculations
  },
  showWeekNumbers: false,
  weekNumbersColor: '#778CA2',
  dayClass: 'icp-year-calendar-day',
  maxValue: 10 // let the component calculate the max value from all values,
};