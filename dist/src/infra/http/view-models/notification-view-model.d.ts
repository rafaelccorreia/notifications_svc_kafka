import { Notification } from '@application/entities/notification';
export declare class NotificationViewMode {
    static toHTTP(notification: Notification): {
        id: string;
        content: string;
        category: string;
        recipientId: string;
    };
}
