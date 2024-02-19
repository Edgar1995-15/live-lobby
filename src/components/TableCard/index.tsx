import React, { useState, useEffect, useRef } from 'react';
import { getImageSource, getVideoSource } from '../../utils/helper';
import styles from "./styles.module.css";
import Icon from '../Icon';
import GameLoader from '../LobbyLoader/GameLoader';
import RaiseError from '../ErrorComponent';

interface IProps {
    table: ITable;
    setIsGameOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    isGameOpen: boolean;
    balance?: number | undefined;
}

const TableCard: React.FC<IProps> = ({ table, setIsGameOpen, isGameOpen, balance }) => {
    const [showIframe, setShowIframe] = useState<boolean>(false);
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
    const [isVideoInViewport, setIsVideoInViewport] = useState<boolean>(false);
    const [displayError, setDisplayError] = useState<boolean>(false);

    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            const videoEntry = entries[0];
            if (videoEntry.isIntersecting) {
                setIsVideoInViewport(true);
            } else {
                setIsVideoInViewport(false);
            }
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [videoRef.current]);

    useEffect(() => {
        preloadImages();
    }, []);

    useEffect(() => {
        if (window.innerWidth < 768 && isVideoInViewport) {
            setShowVideo(true)
        }
    }, [isVideoInViewport])

    const preloadImages = () => {
        const imageSources = [8, 10, 11, 13, 14, 23, 24, 29, 30, 33, 47, 48, 49, 50, 54].map(tableId => getImageSource(tableId));
        imageSources.forEach(src => {
            const img: any = new Image();
            img.src = src;
        });
    };

    const handleTableClick = () => {
        if ((table.gameId === 5 && balance && table.minStake > balance) || (table.isOccupied)) {
            setDisplayError(true);
        } else {
            setShowIframe(true);
            if (setIsGameOpen) {
                setIsGameOpen(true);
            }
        }
    };

    useEffect(() => {
        const handleEventMessage = (event: MessageEvent) => {
            if (event.data === 'closeGame') {
                setShowIframe(false);
                if (setIsGameOpen) {
                    setIsGameOpen(false);
                }
            }
        };

        window.addEventListener('message', handleEventMessage);

        return () => {
            window.removeEventListener('message', handleEventMessage);
        };
    }, []);

    const handleMouseEnter = () => {
        if (videoLoaded) {
            setShowVideo(true);
        }
    };

    const handleMouseLeave = () => {
        setShowVideo(false);
    };

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    return (
        <>
            {showIframe && <GameLoader table={table} />}
            <div className={`w-[24vw] h-[12vw] cursor-pointer ${styles.tableCard}`} onClick={handleTableClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={videoRef}>
                {displayError && table.gameId === 5 && <RaiseError errorCode={table.isOccupied ? 520 : 5} />}
                {!isGameOpen && 
                <div className='relative w-full h-full'>
                    <img src={getImageSource(table.tableId)} className={`w-full h-full object-fill rounded-2xl ${styles.tableImg} ${table.isOccupied ? 'blur-sm' : ''}`} />
                    <video
                        src={getVideoSource(table.tableId)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                        className={`w-full h-full absolute inset-0 object-fill rounded-2xl ${styles.tableVideo} ${showVideo ? '' : 'hidden'} ${table.isOccupied ? 'blur-sm' : ''}`}
                        onLoadedData={handleVideoLoad}
                    />
                    {table.isOccupied &&
                        <span className='absolute inset-0 text-center top-32 uppercase text-white'>Occupied</span>
                    }
                    <div className='absolute bottom-3 flex items-center w-full flex-col'>
                        <span className={`font-bold text-white uppercase text-[1.60vw] ${styles.tableStake}`}>
                            {table.tableName}
                        </span>
                        <div className={`${styles.stakeAmount} flex`}>
                            <Icon name='icons/stakeArrow' className='rotate-180 w-20' />
                            <span className='text-[#f9c700] font-bold text-xs'>{table.currencyId} {table.minStake} - {table.maxStake}</span>
                            <Icon name='icons/stakeArrow' className='w-20' />
                        </div>
                    </div>
                </div>
                }
                {showIframe && (
                    <div className={styles.iframewrapper}>
                        <iframe src={`${table.gameUrl}&externalGame=false`} className={`w-full h-full absolute inset-0 z-10 ${styles.iframe}`} title="Game" style={{backgroundImage: `url(${getImageSource(table.tableId)})`}} />
                    </div>
                )}
            </div>
        </>
    );
};

export default TableCard;
