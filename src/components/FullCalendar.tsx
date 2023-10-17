import { useRef, useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

interface Evento {
  title: string;
  date: string;
}

interface FullCalendarProps {
  eventos: Evento[];
}

const FullCalendar: React.FC<FullCalendarProps> = ({ eventos }) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current!, {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: eventos
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, [eventos]);

  return <div style={{ maxWidth: '650px' }} ref={calendarRef}></div>;
};

export default FullCalendar;
