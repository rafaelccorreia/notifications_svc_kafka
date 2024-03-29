import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notifications-body';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
export declare class NotificationsController {
    private sendNotification;
    private cancelNotification;
    private readNotification;
    private unreadNotification;
    private countRecipientNotifications;
    private getRecipientNotifications;
    constructor(sendNotification: SendNotification, cancelNotification: CancelNotification, readNotification: ReadNotification, unreadNotification: UnreadNotification, countRecipientNotifications: CountRecipientNotifications, getRecipientNotifications: GetRecipientNotifications);
    cancel(id: string): Promise<void>;
    countFromRecipient(recipientId: string): Promise<{
        count: number;
    }>;
    getFromRecipient(recipientId: string): Promise<{
        notifications: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
        }[];
    }>;
    read(id: string): Promise<void>;
    unread(id: string): Promise<void>;
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
        };
    }>;
}
