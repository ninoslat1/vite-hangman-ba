export const DeveloperNotes = () => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button">Developer Notes</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <p>Welcome to the Blue Archive hangman game project! This game is the result of my passion for gaming and anime, specifically the Blue Archive. My goal is to bring a fun and challenging gaming experience to Blue Archive fans while keeping the simplicity of the classic charades game</p>
                </div>
            </div>
        </div>
    )
}