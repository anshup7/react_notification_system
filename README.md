# Notification System

### Creates Notification system in React. Implemented configurable notification component that takes props to show the notification popups dynamically.

# Functional Requirements
- Create A Notification Popup
- The Popup should have "x" to close it on demand
- The popup should disappear after certain amount of time
- The popup should be configurable for its position 
    > Left, Right, Top and Bottom

    >The above is done by using props and dynamic variable usage
    `
        export default function Notifications({
        message, index, 
        handleClearNotification, horizontalPosition="left", verticalPosition="top"})
    `
- The Popups should be stacked.

