"use client";
import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from "date-fns";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Event = {
  title: string;
  time: string;
};

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const daysInMonth: Date[] = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const weeksInMonth: Date[][] = [];
  let week: Date[] = [];
  daysInMonth.forEach((day: Date, index: number) => {
    if (index > 0 && index % 7 === 0) {
      weeksInMonth.push(week);
      week = [];
    }
    week.push(day);
  });
  weeksInMonth.push(week);

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const events: { [date: string]: Event[] } = {
    "2024-03-10": [
      { title: "Entrega de TP1 - Ilustración Digital", time: "9:00 AM" },
      { title: "Entrega de TP1 - Lógica de la Programación", time: "2:00 PM" },
      {
        title: "Examen Final - Tratamiento Digital de la Imagen I",
        time: "5:00 PM",
      },
      {
        title: "Entrega de Trabajo de Clase - Diseño Gráfico I",
        time: "5:00 PM",
      },
    ],
    "2024-03-15": [
      {
        title: "Entrega de Trabajo de Clase - Representación Gráfica",
        time: "10:30 AM",
      },
      { title: "Entrega de TP2 - Lógica de la Programación", time: "3:00 PM" },
      {
        title: "Examen Final - Psicología de la Comunicación",
        time: "4:00 PM",
      },
    ],
    "2024-04-05": [
      { title: "Entrega de TP2 - Ilustración Digital", time: "11:00 AM" },
      { title: "Entrega de TP1 - Diseño Gráfico I", time: "3:00 PM" },
      { title: "Examen Final - Representación Gráfica", time: "4:00 PM" },
    ],
    "2024-04-15": [
      {
        title:
          "Entrega de Trabajo de Clase - Tratamiento Digital de la Imagen I",
        time: "1:30 PM",
      },
      {
        title: "Entrega de TP2 - Tratamiento Digital de la Imagen I",
        time: "4:00 PM",
      },
      { title: "Examen Final - Lógica de la Programación", time: "4:30 PM" },
    ],
    "2024-05-08": [
      {
        title: "Entrega de Trabajo de Clase - Lógica de la Programación",
        time: "10:00 AM",
      },
      {
        title: "Entrega de TP1 - Psicología de la Comunicación",
        time: "3:30 PM",
      },
      { title: "Examen Final - Diseño Gráfico I", time: "4:00 PM" },
    ],
    "2024-05-20": [
      { title: "Entrega de TP1 - Representación Gráfica", time: "4:30 PM" },
      { title: "Examen Final - Ilustración Digital", time: "5:00 PM" },
    ],
    "2024-06-10": [
      {
        title: "Entrega de TP2 - Psicología de la Comunicación",
        time: "9:30 AM",
      },
      {
        title: "Examen Final - Tratamiento Digital de la Imagen I",
        time: "2:00 PM",
      },
    ],
    "2024-06-25": [
      {
        title: "Entrega de Trabajo de Clase - Diseño Gráfico I",
        time: "12:00 PM",
      },
      { title: "Examen Final - Lógica de la Programación", time: "3:00 PM" },
    ],
    "2024-07-05": [
      { title: "Entrega de TP1 - Lógica de la Programación", time: "11:30 AM" },
      {
        title: "Examen Final - Psicología de la Comunicación",
        time: "4:00 PM",
      },
    ],
    "2024-07-20": [
      { title: "Entrega de TP2 - Diseño Gráfico I", time: "9:00 AM" },
      { title: "Entrega de TP1 - Representación Gráfica", time: "3:30 PM" },
      { title: "Examen Final - Ilustración Digital", time: "4:00 PM" },
    ],
    "2024-08-10": [
      { title: "Entrega de TP2 - Ilustración Digital", time: "2:30 PM" },
      {
        title: "Examen Final - Tratamiento Digital de la Imagen I",
        time: "5:00 PM",
      },
    ],
    "2024-08-25": [
      {
        title: "Entrega de Trabajo de Clase - Psicología de la Comunicación",
        time: "10:00 AM",
      },
      {
        title: "Entrega de TP2 - Tratamiento Digital de la Imagen I",
        time: "1:30 PM",
      },
    ],
    "2024-09-05": [
      {
        title: "Entrega de TP1 - Tratamiento Digital de la Imagen I",
        time: "4:30 PM",
      },
      { title: "Examen Final - Lógica de la Programación", time: "5:00 PM" },
    ],
    "2024-09-20": [
      { title: "Entrega de TP2 - Lógica de la Programación", time: "11:00 AM" },
      { title: "Examen Final - Diseño Gráfico I", time: "3:00 PM" },
    ],
  };

  const getDayClassName = (day: Date): string => {
    let className = "text-center py-2";
    if (!isSameMonth(day, currentMonth)) {
      className += " text-gray-400";
    }
    if (events[format(day, "yyyy-MM-dd")]) {
      className += " bg-[#f2a5d0] font-semibold";
    }
    return className;
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <div className="flex justify-between items-center mb-4 bg-secondary text-white font-bold rounded-md">
        <button onClick={prevMonth}>
          <MdKeyboardArrowLeft
            className={"text-3xl font-bold cursor-pointer"}
          />
        </button>
        <span>{format(currentMonth, "MMMM yyyy")}</span>
        <button onClick={nextMonth}>
          <MdOutlineKeyboardArrowRight
            className={"text-3xl font-bold cursor-pointer"}
          />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        <div className="text-center">Sun</div>
        <div className="text-center">Mon</div>
        <div className="text-center">Tue</div>
        <div className="text-center">Wed</div>
        <div className="text-center">Thu</div>
        <div className="text-center">Fri</div>
        <div className="text-center">Sat</div>
        {weeksInMonth.map((week: Date[], index: number) => (
          <React.Fragment key={index}>
            {week.map((day: Date) => (
              <div
                key={day.getTime()}
                className={`${getDayClassName(day)} border border-black/20 rounded-md`}
              >
                {events[format(day, "yyyy-MM-dd")] ? (
                  <Dialog key={format(day, "yyyy-MM-dd")}>
                    <DialogTrigger className="text-center">
                      {format(day, "d")}
                    </DialogTrigger>
                    <DialogContent className={"w-full max-w-2xl"}>
                      <DialogHeader>
                        <DialogTitle>Event Details</DialogTitle>
                        {events[format(day, "yyyy-MM-dd")].map(
                          (event, index) => (
                            <DialogDescription key={index}>
                              <div>{event.title}</div>
                              <div>{event.time}</div>
                            </DialogDescription>
                          ),
                        )}
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div className="text-center">{format(day, "d")}</div>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
