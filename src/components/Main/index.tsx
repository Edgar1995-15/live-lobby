import { useEffect, useState } from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import { useSocket } from "../../services/socket/socketContext";
import { ListenEventNames } from "../../utils/constants/eventNames";
import LoaderVegas from "../LobbyLoader";
import styles from "./styles.module.css";
import RaiseError from "../ErrorComponent";

interface IPlayerInfo {
    balance: number;
    currencyId: string;
    availableGames: any;
}

const Main = () => {
    const { socket } = useSocket();
    const [playerInfo, setPlayerInfo] = useState<IPlayerInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isGameOpen, setIsGameOpen] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<number | null>(null);

    useEffect(() => {
        if (playerInfo) {
            setIsLoading(false);
        }
    }, [playerInfo]);

    useEffect(() => {
        socket?.on(ListenEventNames.Player, (data) => setPlayerInfo(data));
    }, [playerInfo])

    useEffect(() => {
        socket?.on(ListenEventNames.RaiseError, (data) => setErrorCode(data?.errorCode))
    }, [errorCode])

    const setLanguageFromQueryParams = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const langParam = queryParams.get('lang');
        if (langParam) {
            localStorage.setItem('language', langParam);
        }
    };

    useEffect(() => {
        setLanguageFromQueryParams();
    }, []);

    return (
        <>
            {errorCode && <RaiseError errorCode={errorCode} />}
            {isLoading ? (
                <LoaderVegas />
            ) : (
                <div className={`w-full h-[100vh] main-bg overflow-auto pb-12 ${styles.main}`}>
                    <Header isGameOpen={isGameOpen} />
                    <Content games={playerInfo?.availableGames} setIsGameOpen={setIsGameOpen} isGameOpen={isGameOpen} balance={playerInfo?.balance} />
                    {!isGameOpen && <Footer balance={playerInfo?.balance || 0} currency={playerInfo?.currencyId || ''} />}
                </div>
            )}
        </>
    )
}

export default Main;
