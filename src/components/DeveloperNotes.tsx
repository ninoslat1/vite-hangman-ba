export const DeveloperNotes = () => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button hover:cursor-pointer">Developer Notes</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-slate-900 text-sky-200 min-h-full w-80 p-4">
                    <h1 className="text-center text-xl py-5">Developer Notes</h1>
                    <div className="font-kanit">
                        <div className="block py-2">
                            <cite>Welcome to Hang-<span className="text-[#d6989c]">ARU</span>. First, I want to say thank you to the Blue Archive community for their "UWWOOGGHHH 😭😭😭" and "CNUUY" spirit, which inspired me to develop this game until deployment.</cite>
                        </div>
                        <div className="block py-2">
                            <cite>Blue Archive gave me a nostalgic feeling about my past, where my Sociology Teacher never gave up on teaching me her subject, even though sometimes I fled from her class or slept during her lessons. With her dedication to teaching, I got 90 as my final exam score in her subject. My past kind of reminds me of Sensei and his students, where he is willing to sacrifice anything to save them. In the future, I hope to become like my Sociology Teacher but in the Software Engineering field, where I teach junior SWEs about various topics and celebrate with them after we achieve something in our software development.</cite>
                        </div>
                        <div className="block py-2">
                            <p>Please follow their GitHub to inspire me to further develop this game.</p>
                        </div>
                        <div>
                            <div>
                                <img src="https://github.com/arufars.png?size=100" alt="GitHub Profile Picture"/>
                                <p>Check out my repository: <a href="https://github.com/octocat/Hello-World">Hello World</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}