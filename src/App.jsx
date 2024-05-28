import { useCallback, useEffect, useRef, useState } from 'react';
import Notifications from './Notifications';

function App() {
  // The array is only level 1 hence using simple copy should be fine
  const [notificationMessages, setNotificationMessages] = useState([]);
  const inputRef = useRef();

  const createMessage = useCallback(function create(message) {
    const messageObject = {
      message,
      key: `${message.toUpperCase()}_${Date.now()}`
      /**
       * The above is not that bad practice of using Date.now() but since the value is going
       * to stay constant during its lifetime of existence. The date.now() can be safely used
       * without causing much of rendering.
       */
    };
    return messageObject;
  }, []); // No change in function def expected in run time


  function handleSend() {
    const currentMessages = [...notificationMessages];
    const message = createMessage(inputRef.current.value);
    currentMessages.unshift(message);
    setNotificationMessages(currentMessages);
  }

  function handleClear(messageKey) {
    const leftNotifications = notificationMessages.filter(obj => obj.key !== messageKey);
    setNotificationMessages(leftNotifications);
  }

  

  return (
      <div className="container">
        <label htmlFor="notification_message">Notification Message</label>
        <div>
          <textarea name="notification_message" ref={inputRef}></textarea>
          <button className="send-button" onClick={handleSend}>Send</button>
        </div>
        {
          notificationMessages.map((obj, index) => 
          <Notifications key={obj.key} message={obj} 
          index={index} handleClearNotification={handleClear}></Notifications>)
        }
      </div>
  )
}

export default App
