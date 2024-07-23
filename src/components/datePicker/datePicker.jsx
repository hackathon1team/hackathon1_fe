import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReactDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate);
    return (
        <label htmlFor="customDatepicker">
            <DatePicker
                id="customDatepicker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showPopperArrow={false}
            />

            <div>dd</div>
        </label>
    );
};

export default ReactDatePicker;
