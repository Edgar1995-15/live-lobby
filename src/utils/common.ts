export const getPlayerCredentials = () => {
    const query = new URLSearchParams(window.location.search);
    const session = query.get('token');
    const uid = query.get('playerId');
  
    if (!session || !uid) {
      throw new Error('Session or user id is not defined');
    }
  
    return { session, uid };
  };
  
  