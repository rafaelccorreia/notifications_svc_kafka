"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationViewMode = void 0;
class NotificationViewMode {
    static toHTTP(notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
        };
    }
}
exports.NotificationViewMode = NotificationViewMode;
//# sourceMappingURL=notification-view-model.js.map