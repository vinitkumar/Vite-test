import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/nl';

export default function CustomLocalizationProvider({ language, children }) {
    const adapterLocale = language === "nl" ? "nl": "en";
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={adapterLocale}>
        { children }
      </LocalizationProvider>
    );
}

