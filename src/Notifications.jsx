import { useEffect } from "react";
import "./css/notifications.css";
/**
 * 
 * @param {string} message
 * @param {number} index 
 * @returns JSX
 * The component will always be created new everytime from its parent
 * Also this component will send the notification to its parent once its time
 * has come to get killed.
 */
export default function Notifications({
    message, index, 
    handleClearNotification, horizontalPosition="left", verticalPosition="top"}) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            handleClearNotification(message.key);
        }, Math.floor((Math.random() + 1) * 4000)) // After 15 seconds attempt to kill!
        return () => {
            console.log("clearing", timeout);
            clearTimeout(timeout);
            return true;
        } // clean when the Parent unmounts me.
    }, []); // run only on mount
    return (
        <div style=
            {{
            position: "absolute",
            [verticalPosition]: ((index * 5) * 1.5)+"rem",
            [(horizontalPosition == "right") ? "left" : "right"]: "80vw",
            width: "30rem",
            height: "5rem",
            zIndex: 9999999,
            borderRadius: "0.5rem",
            background: "magenta",
            color: "white",
            marginBottom: "5rem",
            paddingLeft: "0.4rem" 
            }}
        >
            <h1>{message.message}</h1>
        </div>
    );
}