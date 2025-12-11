import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from 'react-icons/fa';

const Music = () => {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7);
    const audioRef = useRef(null);

    const tracks = [
        { title: 'Peaceful Piano', file: '/assets/music/piano.mp3', image: '🎹' },
        { title: 'Ocean Waves', file: '/assets/music/ocean.mp3', image: '🌊' },
        { title: 'Forest Sounds', file: '/assets/music/forest.mp3', image: '🌲' },
        { title: 'Rain Meditation', file: '/assets/music/rain.mp3', image: '🌧️' },
        { title: 'Crackling Fire', file: '/assets/music/fire.mp3', image: '🔥' },
    ];

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(err => console.error('Playback error:', err));
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        const next = (currentTrack + 1) % tracks.length;
        setCurrentTrack(next);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        const prev = (currentTrack - 1 + tracks.length) % tracks.length;
        setCurrentTrack(prev);
        setIsPlaying(true);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play().catch(err => console.error('Playback error:', err));
        }
    }, [currentTrack, isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    return (
        <div className="min-h-screen relative py-10">
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: 'url(/backgrounds/starry%20night.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">🎵 Relaxing Music</h1>

                <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-8xl shadow-lg">
                            {tracks[currentTrack].image}
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-dark mb-2">{tracks[currentTrack].title}</h2>
                        <p className="text-gray-500">Track {currentTrack + 1} of {tracks.length}</p>
                    </div>

                    <div className="flex justify-center items-center gap-6 mb-8">
                        <button onClick={prevTrack} className="bg-gray-200 hover:bg-gray-300 p-4 rounded-full transition">
                            <FaBackward className="text-2xl text-dark" />
                        </button>
                        <button onClick={togglePlay} className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl p-6 rounded-full transition transform hover:scale-110">
                            {isPlaying ? <FaPause className="text-3xl text-white" /> : <FaPlay className="text-3xl text-white" />}
                        </button>
                        <button onClick={nextTrack} className="bg-gray-200 hover:bg-gray-300 p-4 rounded-full transition">
                            <FaForward className="text-2xl text-dark" />
                        </button>
                    </div>

                    <div className="flex items-center gap-4 max-w-md mx-auto">
                        <FaVolumeUp className="text-xl text-gray-600" />
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <audio
                        ref={audioRef}
                        src={tracks[currentTrack].file}
                        onEnded={nextTrack}
                        preload="auto"
                    />
                </div>

                <div className="max-w-2xl mx-auto mt-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-dark">Playlist</h3>
                    <div className="space-y-3">
                        {tracks.map((track, index) => (
                            <div
                                key={index}
                                onClick={() => { setCurrentTrack(index); setIsPlaying(true); }}
                                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition ${currentTrack === index
                                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                            >
                                <span className="text-3xl">{track.image}</span>
                                <div className="flex-1">
                                    <p className="font-semibold text-dark">{track.title}</p>
                                    <p className="text-sm text-gray-500">Relaxing Music</p>
                                </div>
                                {currentTrack === index && isPlaying && (
                                    <div className="flex gap-1">
                                        <div className="w-1 h-4 bg-primary animate-pulse"></div>
                                        <div className="w-1 h-4 bg-primary animate-pulse delay-75"></div>
                                        <div className="w-1 h-4 bg-primary animate-pulse delay-150"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;
