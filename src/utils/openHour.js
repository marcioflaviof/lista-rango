import { getDay, compareAsc } from "date-fns";

const openHour = (initialHour, finalHour, days) => {
  const now = new Date();

  if (days.includes(getDay(now))) {
    const openHour = new Date(
      new Date().setHours(initialHour.split(":")[0], initialHour.split(":")[1])
    );
    const closeHour = new Date(
      new Date().setHours(finalHour.split(":")[0], finalHour.split(":")[1])
    );

    const isOpen =
      compareAsc(now, openHour) === 1 && compareAsc(now, closeHour) === -1;

    if (isOpen) return true;
  }

  return false;
};

export { openHour };
