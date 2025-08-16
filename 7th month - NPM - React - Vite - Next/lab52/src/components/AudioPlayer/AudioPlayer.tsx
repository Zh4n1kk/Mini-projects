'use client'

import {useEffect, useRef, useState} from "react";

const AudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [audios, setAudios] = useState(
        [
            {
                src: '/music/The%20Doors%20-%20People%20Are%20Strange.mp3',
                name: 'The doors - People Are Strange'
            },
            {
                src: '/music/Gotye - Somebody That I Used To Know (feat. Kimbra) [Official Music Video].mp3',
                name: 'Gotye - Somebody That I Used To Know'
            },
            {
                src: `/music/La Valse d'Amilie.mp3`,
                name: `La Valse d'Amilie`
            },
            {
                src: `/music/Souvenir d'Italie.mp3`,
                name: `Souvenir d'Italie`
            },
        ]
    )

    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentDuration, setCurrentDuration] = useState(0);
    const [isShuffled, setIsShuffled] = useState(false);
    const [isRepeating, setIsRepeating] = useState(false);

    const playPause = () => {
        if (!audioRef.current) return;

        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        } else if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }

    const repeat = () => {
        setIsRepeating(!isRepeating);
    }

    const nextSong = () => {
        if (!audioRef.current) return;

        if (isRepeating) {
            audioRef.current.currentTime = 0
            audioRef.current.play();
            return;
        }
        if (isShuffled) {
            let randomNum = index;
            while (randomNum === index) {
                randomNum = Math.floor(Math.random() * audios.length);
            }
            setIndex(randomNum)
            return;
        } else {
            if (index + 1 >= audios.length) return;
            setIndex(index + 1);
        }

    }

    const prevSong = () => {
        if (!audioRef.current) return;

        if (isRepeating) {
            audioRef.current.currentTime = 0
            audioRef.current.play();
            return;
        }
        if (isShuffled) {
            let randomNum = index;
            while (randomNum === index) {
                randomNum = Math.floor(Math.random() * audios.length);
            }
            setIndex(randomNum)
            return;
        } else {
            if (index - 1 < 0) return;
            setIndex(index - 1);
        }

    }

    // Shuffle state
    const shuffle = () => {
        setIsShuffled(!isShuffled)
    }

    // Range Tracking
    const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = Number(e.target.value)
        setCurrentDuration(Number(e.target.value))
    }

    // Duration calculation
    const calculateTime = () => {
        const minutes = JSON.stringify(Math.floor(duration / 60));
        const seconds = JSON.stringify(Math.floor(duration % 60));

        return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
    }

    // CurrentTime Calculation
    const calculateCurrentTime = () => {
        const minutes = JSON.stringify(Math.floor(currentDuration / 60));
        const seconds = JSON.stringify(Math.floor(currentDuration % 60));

        return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
    }

    // Song Switch
    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.src = audios[index].src;
        audioRef.current.load()

        if (isPlaying) {
            audioRef.current.play()
        }

        return () => {

        }
    }, [index])

    // Tracking time
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => {
            setCurrentDuration(audio.currentTime)
        }

        audio.addEventListener('timeupdate', updateTime);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
        }
    }, [])

    return (
        <>
            <div className={`w-full h-[100vh] flex items-center justify-center`}>
                <div className={`flex flex-col items-center`}>
                    <h1 className={`text-2xl`}>{`${audios[index].name}`}</h1>
                    <div>
                        <div className={`flex justify-between gap-2`}>
                            <p className={`w-10`}>{calculateCurrentTime()}</p>
                            <input className={`w-80 hover:bg-transparent transition-[2s]`} type='range' min={0} max={duration} value={currentDuration}
                                   onChange={handleTime}></input>
                            <p className={`w-10`}>{calculateTime()}</p>
                        </div>
                    </div>
                    <div className={`flex gap-3`}>
                        <div className={`rounded-md flex items-center hover:bg-black `}>
                            <button onClick={prevSong}><img className={`w-10 hover:invert`}
                                                            src={`/icons/fast_rewind.svg`} alt="Logo"/></button>
                        </div>
                        <div className={`rounded-md flex items-center hover:bg-black `}>
                            <button className={`w-10 hover:invert`} onClick={playPause}>{isPlaying ?
                                <img className={`w-40`} src={`/icons/pause.svg`} alt="Logo"/> :
                                <img className={`w-40`} src={`/icons/play.svg`} alt="Logo"/>}</button>
                        </div>
                        <div className={`rounded-md flex items-center hover:bg-black `}>
                            <button onClick={nextSong}><img className={`w-10 hover:invert`}
                                                            src={`/icons/fast_forward.svg`} alt="Logo"/></button>
                        </div>
                        <div className={`rounded-md flex items-center hover:bg-black `}>
                            <button onClick={shuffle}>{isShuffled ?
                                <img className={`w-10 hover:invert`} src={`/icons/shuffle_on.svg`} alt="Logo"/> :
                                <img className={`w-10 hover:invert`} src={`/icons/shuffle.svg`} alt="Logo"/>}</button>
                        </div>
                        <div className={`rounded-md flex items-center hover:bg-black `}>
                            <button onClick={repeat}>{isRepeating ?
                                <img className={`w-10 hover:invert`} src={`/icons/repeat_on.svg`} alt="Logo"/> :
                                <img className={`w-10 hover:invert`} src={`/icons/repeat.svg`} alt="Logo"/>}</button>
                        </div>
                    </div>
                </div>
            </div>
            <audio
                onLoadedMetadata={() => {
                    if (!audioRef.current) return;
                    setDuration(audioRef.current.duration);
                }}
                onEnded={() => {
                    if (!audioRef.current) return;
                    setCurrentDuration(0)
                    nextSong()
                    audioRef.current.play()
                }}
                hidden
                ref={audioRef}
            ></audio>
        </>
    )
}

export default AudioPlayer
