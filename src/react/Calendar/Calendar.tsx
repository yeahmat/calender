/** Dependencies */
import React, { FC, useState, Fragment } from 'react';

/** Types */
import { CalendarProps } from './Calendar.types';

/** Helpers */
import { dateToNumbers } from '../../helpers';
import {
  getNextMonth,
  getPreviousMonth,
  createCalendarWeeks,
  isSameDay
} from './Calendar.helpers';

/** Components */
import {
  BaseDayComponent,
  BaseDayNameComponent
} from './components';

/** Constants */
import {
  baseStylesForComponentInterface,
  classNames
} from './Calendar.constants';

/**
 * A customizable calendar component that displays the days of a month in a grid format.
 *
 * @param {Date | {year: number, month: number, day: number}} [date=new Date()] - The date to display in the calendar. If an object is passed, it should have year, month, and day properties.
 * @param {BaseDayComponentProps | ((props: BaseDayComponentProps) => React.ReactElement)} [customDay=BaseDayComponent] - The component used to display each day in the calendar.
 * @param {BaseDayNameComponentProps} [customDayName=BaseDayNameComponent] - The component used to display each day name in the calendar.
 * @param {boolean} [showAdjacentDays=true] - Whether to display days from the previous and next months that are adjacent to the displayed month.
 * @param {string[]} [dayNames=['S', 'M', 'T', 'W', 'T', 'F', 'S']] - An array of strings that represent the names of the days of the week. The first element represents Sunday, the second represents Monday, and so on.
 * @param {string[]} [dayNameToolTips] - An optional array of strings that represent the tooltips to display for each day name. If provided, it should have 7 elements in the same order as dayNames.
 * @param {string} [className] - The CSS class name to apply to the top-level element of the calendar.
 * @param {CustomHeaderAndFooterRenderer} [customHeader] - A function that returns the custom header element for the calendar. It receives an object with the following properties: handleNextMonth, handlePrevMonth, nextMonth, prevMonth, selectedMonth, selectedYear, and today.
 * @param {CustomHeaderAndFooterRenderer} [customFooter] - A function that returns the custom footer element for the calendar. It receives an object with the following properties: handleNextMonth, handlePrevMonth, nextMonth, prevMonth, selectedMonth, selectedYear, and today.
 * @param {React.CSSProperties} [style] - An object containing the inline style of the top-level element of the calendar.
 * @param {{
*   componentInterface?: string;
*   customHeader?: string;
*   component?: string;
*   dayName?: string;
*   customFooter?: string;
*   emptyCell?: string;
* }} [customClassNames=classNames] - An object containing CSS class names to override the default class names used by the component.
* @param {CustomDates} [customDates] - An array of custom dates to be displayed on the calendar. Each object in the array should have a `name`, `date`, and optionally a `className` and `tooltip` property. The `date` property should be a `Date` object.
* @returns {React.ReactElement} A calendar component that displays the days of a month in a grid format.
*/
const Calendar: FC<CalendarProps> = ({
  date = new Date(),
  customDay = BaseDayComponent,
  customDayName = BaseDayNameComponent,
  showAdjacentDays = true,
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  dayNameToolTips,
  className,
  customHeader,
  customFooter,
  style,
  customClassNames = classNames,
  customDates,
  layout = 'grid'
}) => {
  // Stateful date value that will be used to render the calendar
  const [currentDate, setCurrentDate] = useState(date);

  // Get the year, month, and day from the current date
  // If the date prop is an object, use its values instead
  // This is the first month that will display in the calendar
  const { year, month, day } = dateToNumbers(currentDate);

  // Dynamic components that will be used to render the calendar
  // These can be overridden as props to the Calendar component
  const DayComponent = customDay;
  const DayNameComponent = customDayName;
  const CustomHeader = customHeader || null;
  const CustomFooter = customFooter || null;

  // Get the previous and next months
  const handleNextMonth = (stop?: null) => {
    if (stop === null) {
      return;
    }
    setCurrentDate(new Date(year, month, day));
  };

  const handlePrevMonth = (stop?: null) => {
    if (stop === null) {
      return;
    }
    setCurrentDate(new Date(year, month - 2, day));
  };

  // These values are used to determine the calendar's start and end dates
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);

  /**
   * Creates an array of JSX elements representing the days in the calendar grid.
   *
   * @param {Date} start - The start date of the calendar.
   * @param {Date} end - The end date of the calendar.
   * @returns {JSX.Element[]} An array of JSX elements representing the days in the calendar.
   */
  const createCalendarDays = (start: Date, end: Date) => {
    const days: (JSX.Element | null)[] = [];
    const startWeekday = start.getDay();
    const totalDays = end.getDate();

    for (let i = 1 - startWeekday; i <= totalDays + 6 - end.getDay(); i += 1) {
      const currentDate = new Date(year, start.getMonth(), i);
      const isCurrentDay = isSameDay(currentDate, new Date());

      const inSelectedMonth = currentDate.getFullYear() === year && currentDate.getMonth() === month - 1;

      const safeCustomDates = customDates || [];
      const filteredCustomDates = safeCustomDates.filter(({ date }) => isSameDay(date, currentDate));

      const dayComponent: JSX.Element | null = showAdjacentDays || (i > 0 && i <= totalDays)
        ? (
          <DayComponent
            key={currentDate.toString()}
            isCurrentDay={isCurrentDay}
            date={currentDate}
            inSelectedMonth={inSelectedMonth}
            customDates={filteredCustomDates}
            baseStyles={baseStylesForComponentInterface}
          />
        ) :(
          <div
            key={currentDate.toString()}
            className={classNames.emptyCell}
          />
        );

      days.push(dayComponent);
    }

    return days;
  };

  const days = createCalendarDays(startDate, endDate);
  const weeks = createCalendarWeeks(days);

  const customHeaderFooterProps = {
    selectedMonth: month,
    selectedYear: year,
    today: new Date(),
    handleNextMonth,
    nextMonth: getNextMonth(month),
    handlePrevMonth,
    prevMonth: getPreviousMonth(month)
  };

  const validTooltips = dayNameToolTips && dayNameToolTips.length === 7;
  const tooltips = validTooltips ? dayNameToolTips : dayNames;

  // If the layout is grid, wrap the calendar in a div element
  // Otherwise, wrap the calendar in a React Fragment
  const CalendarInterfaceRoot = layout === 'grid' ? 'div' : Fragment;
  return (
    <div
      className={className ? className : customClassNames.componentInterface}
      style={style}
    >
      {CustomHeader && (
        <CustomHeader {...customHeaderFooterProps} />
      )}

      <CalendarInterfaceRoot>
        {dayNames.map((dayName, idx) => (
          <DayNameComponent
            key={idx}
            className={customClassNames.dayName}
            label={dayName}
            tooltip={tooltips[idx]}
            baseStyles={baseStylesForComponentInterface}
          />
        ))}

        <React.Fragment>
          {weeks}
        </React.Fragment>
      </CalendarInterfaceRoot>

      {CustomFooter && (
        <CustomFooter {...customHeaderFooterProps} />
      )}
    </div>
  );
};

export default Calendar;
