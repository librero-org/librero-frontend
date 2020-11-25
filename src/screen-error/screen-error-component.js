import './screen-error-style.css';
import { Link } from 'react-router-dom';

export function ScreenErrorComponent() {
    return (
        <div className="screen-error-container">
            <div className="screen-error-message">
                <div className="text">
                    <span>Oops!</span>
                    <p>The page can't be load</p>
                </div>
                <Link to="./">Go TO Homepage</Link>
            </div>
        </div>
    );
}
