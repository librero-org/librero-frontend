import './screen-error-style.css';

export function ScreenErrorComponent() {
    return (
        <div className=".spiner-container">
            <div className="spiner-error"></div>
            <div className="texto">
                <p>Whoops! something went wrong. Wait for us to solve it</p>
            </div>
        </div>
    );
}
