import './cards-book-style.css';

export function CardsBookComponent() {
    return (
        <div className="main-cards">
            <div class="card-item">
                <img src="../img/uno.jpg" alt="" />
                <div class="card-content">
                    <span class="card-title"><a href="#">Lorem ipsum dolor sit amet consectetur.</a></span>
                    <span class="card-author"><a href="#">Lorem, ipsum dolor.</a></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident molestiae, ipsum quis esse
                    adipisci? Omnis, vel dolorem!</p>
                </div>
            </div>
        </div>
    );
}