import { useState } from "react";
import Icon from "../Icon";
import fscreen from 'fscreen';
import styles from './styles.module.css';

interface IHeader {
    isGameOpen: boolean;
}

const Header: React.FC<IHeader> = ({isGameOpen}) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(true);
    
    const toggleFullScreen = () => {
        if (fscreen.fullscreenEnabled) {
            setIsFullScreen(false)
            if (!fscreen.fullscreenElement) {
                fscreen.requestFullscreen(document.documentElement)
            } else {
                setIsFullScreen(true)
                fscreen.exitFullscreen()
            }
        }
    }
    return (
        <div className="flex justify-between pt-5">
            <div className={`ml-5 cursor-pointer ${styles.headerIcon}`}>{!isGameOpen ?<Icon name="icons/exit" className="w-10" /> : '' }</div>
            <div className={styles.headerLogo} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}><Icon name={hovered ? "icons/logo-hovered" : "icons/logo"} className="w-56 " /></div>
            <div className={`mr-5 cursor-pointer ${styles.headerIcon}`} onClick={toggleFullScreen}>{!isGameOpen ? <Icon name={isFullScreen ? "icons/fullscreen" : "icons/exitfullscreen"} className="w-10" /> : ''}</div>
        </div>
    )
}

export default Header;