import { useState, useEffect, useRef } from "react"
import song from "@assets/01 Mitsukiyo 01 Constant Moderato.flac"

const App = () => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(song))
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const playPause = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
      audioRef.current.loop = true;
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      audioRef.current!.pause()
      audioRef.current!.currentTime = 0
    };
  }, []);

  return (
    <div className="absolute right-5 top-5 md:right-10 md:top-10 z-50">
      <label className="swap">
        <input type="checkbox" checked={isPlaying} onChange={playPause} />
        <svg className="swap-on fill-current text-[#CFF1FB] bg-[#2f89e3] animate-bounce w-8 h-8 lg:w-10 lg:h-10 p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
        <svg className="swap-off fill-current text-slate-900 w-8 h-8 lg:w-10 lg:h-10 p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
      </label>
    </div>
  );
};

export default App;