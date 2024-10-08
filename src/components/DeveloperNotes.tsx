import { Notification } from "../templates/IconList"

export const DeveloperNotes = () => {
    return (
        <div className="drawer flex">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button hover:cursor-pointer text-[#c6898d]"><Notification/></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="bg-[#D6B6CC] text-[#FCFBB6] min-h-full w-80 p-5">
                    <h1 className="text-center text-xl py-5">Developer Notes</h1>
                    <div className="font-kanit font-semibold">
                        <div className="block py-2">
                            <cite>Welcome to Hang-<span className="text-[#c6898d]">ARU</span>. First, I want to say thank you to the Blue Archive community for their "UWWOOGGHHH 😭😭😭" and "CNUUY" spirit, which inspired me to develop this game until deployment.</cite>
                        </div>
                        <div className="block py-2">
                            <cite>Blue Archive gave me a nostalgic feeling about my past, where my Sociology Teacher never gave up on teaching me her subject, even though sometimes I fled from her class or slept during her lessons. With her dedication to teaching, I got 90 as my final exam score in her subject. My past kind of reminds me of Sensei and his students, where he is willing to sacrifice anything to save them. In the future, I hope to become like my Sociology Teacher but in the Software Engineering field, where I teach my junior SWEs and celebrate with them after we achieve something in our software development.</cite>
                        </div>
                        <div className="block py-2">
                            <p>Their project is my inspiration in building this project. please follow them on github</p>
                        </div>
                        <div className="flex items-center justify-between py-5 gap-2">
                            <div className="flex flex-col items-center justify-center overflow-hidden w-20 h-20 mr-4">
                                <a href="https://github.com/arufars/api-blue-archive" target="_blank">
                                    <img src="https://github.com/arufars.png?size=50" alt="Arufars Profile Picture" className="w-full h-full object-cover rounded-full" />
                                </a>
                                <p className="text-center text-xs mt-2 overflow-ellipsis font-extrabold">Arufars</p>
                            </div>
                            <div className="flex flex-col items-center justify-center overflow-hidden w-20 h-20 mr-4">
                                <a href="https://github.com/torikushiii/BlueArchiveAPI" target="_blank">
                                    <img src="https://github.com/torikushiii.png?size=50" alt="Arufars Profile Picture" className="w-full h-full object-cover rounded-full"/>
                                </a>
                                <p className="text-center text-xs mt-2 overflow-ellipsis font-extrabold">Torikushii</p>
                            </div>
                            <div className="flex flex-col items-center justify-center overflow-hidden w-20 h-20 mr-4">
                                <a href="https://github.com/WebDevSimplified/react-hangman" target="_blank">
                                    <img src="https://github.com/WebDevSimplified.png?size=50" alt="Arufars Profile Picture" className="w-full h-full object-cover rounded-full"/>
                                </a>
                                <p className="text-center text-xs mt-2 overflow-ellipsis font-extrabold">WDS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}