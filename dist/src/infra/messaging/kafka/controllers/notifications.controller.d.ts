import { SendNotification } from '@application/use-cases/send-notification';
interface SendNotificationsPayload {
    content: string;
    category: string;
    recipientId: string;
}
export declare class NotificationsController {
    private sendNotification;
    constructor(sendNotification: SendNotification);
    handleSendNotification({ content, category, recipientId }: SendNotificationsPayload): Promise<void>;
}
export {};
