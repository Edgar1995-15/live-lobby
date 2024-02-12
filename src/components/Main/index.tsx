import { useEffect, useState } from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import { useSocket } from "../../services/socket/socketContext";
import { ListenEventNames } from "../../utils/constants/eventNames";
import LoaderVegas from "../LobbyLoader";

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        socket?.on(ListenEventNames.Player, (data) => setPlayerInfo(data));
    }, [playerInfo])

    return (
        <>
            {isLoading ? (
                <LoaderVegas />
            ) : (
                <div className="w-full h-[100vh] main-bg overflow-auto pb-12">
                    {!isGameOpen && <Header />}
                    <Content games={playerInfo?.availableGames} setIsGameOpen={setIsGameOpen} />
                    {!isGameOpen && <Footer balance={playerInfo?.balance || 0} currency={playerInfo?.currencyId || ''} />}
                </div>
            )}
        </>
    )
}

export default Main;
