export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <h1 className="text-medium text-gradient">
                Unalive
            </h1>
        </header>
    )

    const footer = (
        <footer>
            <small>Created by</small>
            <a target="_blank" href="https://www.linkedin.com/in/suhasi-gadge/">
                <img alt="pfp" src="https://media.licdn.com/dms/image/v2/D5635AQGdAFsfZ_FlKg/profile-framedphoto-shrink_200_200/B56Zc8DZh8GsAY-/0/1749059213813?e=1752080400&v=beta&t=ej7TAtRnX7mjPnXDqdWfP5W5kxnr0BUfbI1LH3nLC78" />
                <p>@suhasi-gadge</p>
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
        </footer>
    )

    return (
        <>
            {header}
            < main >
                {children}
            </main >
            {footer}
        </>
    )
}