import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dayjs from "dayjs";
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CustomLocalizationProvider from './CustomLocalizationProvider'



function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(null);

  return (
    <div>
      <div>
            <h2>Dutch Datepicker</h2>
           <CustomLocalizationProvider language={"nl"}>
            <DatePicker
              maxDate={dayjs()}
              //  inputRef={dateRef}
              name="transactions[date]"
              slotProps={{
                textField: {
                  inputProps: {
                    required: true,
                    pattern: "^(MM / DD / YYYY)"
                  }
                }
              }}
              value={date}
            />
        </CustomLocalizationProvider>

      </div>
       <div>
            <h2>English Datepicker</h2>
        <CustomLocalizationProvider language={"en"}>
            <DatePicker
              maxDate={dayjs()}
              //  inputRef={dateRef}
              name="transactions[date]"
              slotProps={{
                textField: {
                  inputProps: {
                    required: true,
                    pattern: "^(MM / DD / YYYY)"
                  }
                }
              }}
              value={date}
            />
            </CustomLocalizationProvider>
       </div>

    </div>
  )
}

export {App, Header};
