import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { IoWarning } from "react-icons/io5";
const GitHubCalendarComponent = ({ username }) => {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div>
        <div className='flex  items-center gap-2 '>
        <IoWarning className='text-4xl text-yellow-400'/>
      <h2 className='text-3xl my-5 text-red-700 font-semibold'>Can't Show Private Contributions</h2>
      </div>
      <GitHubCalendar
        username={username}
        transformData={selectLastHalfYear}
      />
    </div>
  );
};

export default GitHubCalendarComponent;
