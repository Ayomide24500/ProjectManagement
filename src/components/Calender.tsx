import "../index.css";

function Calendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = [];

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push("");
  }

  for (let i = 1; i <= totalDaysInMonth; i++) {
    calendarDays.push(i);
  }

  const remainingDays = 42 - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push("");
  }

  return (
    <div className="calendar  w-full">
      <h2 className="font-bold mb-4">
        {months[currentMonth]} {currentYear}
      </h2>
      <div className="days-of-week lg:mt-5">
        {days.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`day ${day === currentDay ? "current-day" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
