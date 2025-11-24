import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom

import './NavigateBackButton.css'; // Importing CSS for styling

function NavigateBackButton() {
    let navigate = useNavigate(); // Initializing the navigate function

    return (
        <button 
            className="navigate-back-button" // Applying CSS class for styling
            onClick={() => navigate(-1)} // Navigating back to the previous page on click
        >
            Go Back
        </button>
    );
}

export default NavigateBackButton; // Exporting the component for use in other parts of the application