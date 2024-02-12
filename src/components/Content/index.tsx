import React, { useState, useEffect } from 'react';
import TableCard from '../TableCard';
import Icon from '../Icon';
import styles from "./styles.module.css";

interface IGame {
  label: string;
  disable: boolean;
  tables: ITable[];
}

interface IContent {
  games: IGame[];
  setIsGameOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Content: React.FC<IContent> = ({ games, setIsGameOpen }) => {
  const [selectedGame, setSelectedGame] = useState<IGame | null>(null);
  const [vipGames, setVipGames] = useState<IGame[]>([]);
  const [otherGames, setOtherGames] = useState<IGame[]>([]);

  useEffect(() => {
    const filteredGames = games?.filter(game => game.label.toLowerCase() !== 'fenix');
    const vipGames = filteredGames?.filter(game => game.label.toLowerCase().includes('vip'));
    const otherGames = filteredGames?.filter(game => !game.label.toLowerCase().includes('vip'));
    setVipGames(vipGames);
    setOtherGames(otherGames);

    setSelectedGame(vipGames?.length > 0 ? vipGames[0] : otherGames[0]);
  }, [games]);

  const handleGameClick = (game: IGame) => {
    setSelectedGame(game);
  };

  console.log(selectedGame)

  const getFormattedLabel = (label: string): JSX.Element => {
    switch (label) {
      case 'RUSSIANPOKER':
        return (
          <>
            Russian <br /> Poker
          </>
        );
      case 'TEXASHOLDEMPOKER':
        return (
          <>
            Holdem <br /> Texas
          </>
        );
      default:
        return <>{label}</>;
    }
  };

  return (
    <div className={`w-3/4 m-auto mt-10 mb-28 ${styles.contentWrapper}`}>
      <div className={`w-full flex justify-center ${styles.tabs}`}>
        <div className={`flex gap-16 ml-4 ${styles.gameList}`}>
          {vipGames.map((game, index) => (
            <div key={index} className='cursor-pointer flex flex-col justify-center items-center' onClick={() => handleGameClick(game)}>
              <Icon name={`icons/${selectedGame?.label === game.label ? 'active' : ''}${game.label}`} />
              <h3 className={`uppercase text-center leading-5 mt-2 ${selectedGame?.label === game.label ? 'text-[rgba(223,202,91,1)]' : 'text-white'}`}>VIP <br /> ROOMS</h3>
              {selectedGame?.label === game.label && <Icon name='icons/activeTab' />}
            </div>
          ))}
          {otherGames.map((game, index) => (
            <div key={index} className='cursor-pointer flex flex-col justify-center items-center' onClick={() => handleGameClick(game)}>
              <Icon name={`icons/${selectedGame?.label === game.label ? 'active' : ''}${game.label}`} />
              <h3 className={`uppercase text-center leading-5 mt-2 ${selectedGame?.label === game.label ? 'text-[rgba(223,202,91,1)]' : 'text-white'}`}>{getFormattedLabel(game.label)}</h3>
              {selectedGame?.label === game.label && <Icon name='icons/activeTab' />}
            </div>
          ))}
        </div>
      </div>
      <div className={`flex gap-10 flex-wrap place-content-center mt-20 ${styles.cardWrapper}`}>
        {selectedGame && (
          <>
            {selectedGame.tables.map((table, index) => (
              <>
              {table.tableId !== 37 &&
                <TableCard key={index} table={table} setIsGameOpen={setIsGameOpen} />
              }
              </>

            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
