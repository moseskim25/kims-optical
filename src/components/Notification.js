import React from 'react';
import './styles/Notification.css';

export default function Notification() {
  return (
    <p className='notification'>
      We are OPEN. However, we strongly encourage making an appointment due to capacity limit.<br />
      Click here to schedule an appointment.<br />
      (Update June 11, 2021 for Step 1 of the Ontario Opening Roadmap)
    </p>
  )
}