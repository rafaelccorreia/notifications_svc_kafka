import { NotificationsRepository } from '../repositories/notifications-repository';
interface CountRecipientNotificationsRequest {
    recipientId: string;
}
type CountRecipientNotificationsResponse = {
    count: number;
};
export declare class CountRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse>;
}
export {};
