import { useState, useEffect } from 'react';

// Custom hook to handle real-time date and time updates
export const useDateTime = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Update the date and time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());  // Set the current date and time every second
        }, 1000);
        return () => clearInterval(timer);  // Clean up the interval on component unmount
    }, []);

    // Function to format the date (Danish format with capitalized weekday)
    const formatDate = (date) => {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('da-DK', options);
        return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);  // Capitalize first letter
    };

    // Function to format the time (Danish format for hours and minutes)
    const formatTime = (date) => {
        return date.toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });
    };

    // Return the formatted date and time
    return {
        currentDate,
        formattedDate: formatDate(currentDate),
        formattedTime: formatTime(currentDate)
    };
};
