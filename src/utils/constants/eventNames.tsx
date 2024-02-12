export enum ListenEventNames {
    Player = 'player',
    Balance = 'balance',
    GetMessages = 'playerMessages',
    GetMessage = 'playerMessage',
    StateChange = 'stateChange',
    NewRound = 'newRound',
    EndRound = 'endRound',
    BetData = 'betData',
    StateInfo = 'stateInfo',
    CancelRound = 'cancelRound',
    SitoutPlayer = 'SitoutPlayer',
    OpenBettingTime = 'openBettingTime',
    CloseBettingTime = 'closeBettingTime',
    RoundWins = 'roundWins',
    SettleWin = 'settleWin',
    PlaceBet = 'placeBet',
    RaiseError = 'raiseError',
    GetHistory = 'roundHistory',
    GetNewNickName = 'nickname',
    GetRoundWins = 'RoundWins',
    Info = 'info',
    PlayerCount = 'tablePlayersCount'
  }
  
  export enum SendEventNames {
    Launch = 'launch',
    SendMessage = 'SendMessage',
    GetBalance = 'GetBalance',
    PlaceBet = 'PlaceBet',
    SitoutPlayer = 'SitoutPlayer',
    SitPlayer = 'SitPlayer',
    SetNickname = 'SetNickname',
    GetHistory = 'GetHistory',
    CancelRound = 'CancelRound',
    CancelLastCard = 'CancelLastCard',
    SendMessageToDealer = 'SendMessageToDealer'
  }
  