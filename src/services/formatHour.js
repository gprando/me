import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt'

export default function formatHour(hour) {
  const hora = parseISO(hour);
  const data = format(
    hora,
    "dd 'de' MMMM 'de' yyyy', às' HH:mm'h'",
    {
      locale: pt,
    }
  );
  return data;
}


