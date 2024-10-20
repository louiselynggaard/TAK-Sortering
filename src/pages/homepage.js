// Hooks
import React, { useState } from 'react';
import { useDateTime } from '../hooks/useDateTime';
// Components
import Header from '../components/header.js';
import ProgressBar from '../components/progress-bar.js';

const HomePage = () => {
    // Use the custom hook to get the real-time date and time
    const { formattedDate, formattedTime } = useDateTime();

    const [progress_currentBatch, setProgress_currentBatch] = useState(0);
    const [progress_daily, setProgress_daily] = useState(0);

    // Current batch progress
    const increaseProgress_currentBatch = () => {
        setProgress_currentBatch(prev => (prev < 100 ? prev + 10 : 100));  // Increase progress by 10, max 100
    };
    
    const decreaseProgress_currentBatch = () => {
        setProgress_currentBatch(prev => (prev > 0 ? prev - 10 : 0));  // Decrease progress by 10, min 0
    };

    // Daily progress
    const increaseProgress_daily = () => {
        setProgress_daily(prev => (prev < 100 ? prev + 10 : 100));  // Increase progress by 10, max 100
    };
    
    const decreaseProgress_daily = () => {
        setProgress_daily(prev => (prev > 0 ? prev - 10 : 0));  // Decrease progress by 10, min 0
    };
    
    
    return (
        <div>
            <Header title="Nordsjælland" subtitle="Fredag 2" /> {/*Current batch*/}
            <div>
                <ProgressBar progress={progress_currentBatch} />
                <button onClick={increaseProgress_currentBatch}>Increase Progress</button>
                <button onClick={decreaseProgress_currentBatch}>Decrease Progress</button>
            </div>

            <Header title={formattedDate} subtitle={formattedTime} /> {/*Dato + timestamp*/}
            <div>
                <ProgressBar progress={progress_daily} />
                <button onClick={increaseProgress_daily}>Increase Progress</button>
                <button onClick={decreaseProgress_daily}>Decrease Progress</button>
            </div>
        </div>
    );
};

export default HomePage;
