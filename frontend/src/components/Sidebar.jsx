function Sidebar() {
    // TO-DO: Can I make this dynamic? That way when uploading a photo, I can add a new section to the sidebar?
    return (
        <aside>
            <h2>Albums</h2>
            <nav>
                <li>All Photos</li>
                <li>Landscape</li>
                <li>Portrait</li>
                <li>Urban</li>
            </nav>
        </aside>
    )
}

export default Sidebar;