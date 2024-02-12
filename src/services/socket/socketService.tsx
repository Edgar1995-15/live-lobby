import * as signalR from '@microsoft/signalr';
import { SendEventNames } from '../../utils/constants/eventNames';
import { SOCKET_URL } from '../../api/config';
import { getPlayerCredentials } from '../../utils/common';

type MessageCallback = (message: string) => void;

const { uid, session } = getPlayerCredentials();

class SocketService {
    private connection: signalR.HubConnection | null = null;

    public startConnection(
        onReceiveMessage: MessageCallback,
        onConnectionStart?: () => void,
    ): signalR.HubConnection {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(`${SOCKET_URL}/?uid=${uid}&session=${session}`, {
                transport: signalR.HttpTransportType.WebSockets,
                withCredentials: false,
            })
            .configureLogging(signalR.LogLevel.Debug)
            .build();

        this.connection.on('ReceiveMessage', onReceiveMessage);

        this.connection
            .start()
            .then(() => {
                console.log('SignalR Connected');
                onConnectionStart?.();
            })
            .catch((error) => {
                console.error('Error connecting to SignalR:', error);
            });

        return this.connection;
    }

    public invoke(eventName: SendEventNames, data?: unknown) {
        if (this.connection) {
            if (data) {
                this.connection
                    .invoke(eventName, data)
                    .catch((error) => console.error('Error invoking SendMessage:', error));
            } else {
                this.connection.invoke(eventName)
                .catch((error) => console.error('Error invoking SendMessage:', error));
            }
        }

    }

    public stop() {
        if (this.connection) {
            this.connection.stop();
        }
    }
}

const socketService = new SocketService();

export default socketService;
