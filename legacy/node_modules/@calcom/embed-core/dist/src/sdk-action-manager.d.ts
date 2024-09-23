type Namespace = string;
export type EventDataMap = {
    eventTypeSelected: {
        eventType: any;
    };
    linkFailed: {
        code: string;
        msg: string;
        data: {
            url: string;
        };
    };
    linkReady: Record<string, never>;
    bookingSuccessful: {
        booking: unknown;
        eventType: unknown;
        date: string;
        duration: number | undefined;
        organizer: {
            name: string;
            email: string;
            timeZone: string;
        };
        confirmed: boolean;
    };
    "*": Record<string, unknown>;
    __routeChanged: Record<string, never>;
    __windowLoadComplete: Record<string, never>;
    __closeIframe: Record<string, never>;
    __iframeReady: Record<string, never>;
    __dimensionChanged: {
        iframeHeight: number;
        iframeWidth: number;
        isFirstTime: boolean;
    };
};
export type EventData<T extends keyof EventDataMap> = {
    [K in T]: {
        type: string;
        namespace: string;
        fullType: string;
        data: EventDataMap[K];
    };
}[T];
export declare class SdkActionManager {
    namespace: Namespace;
    static parseAction(fullType: string): {
        ns: string;
        type: string;
    } | null;
    getFullActionName(name: string): string;
    fire<T extends keyof EventDataMap>(name: T, data: EventDataMap[T]): void;
    on<T extends keyof EventDataMap>(name: T, callback: (arg0: CustomEvent<EventData<T>>) => void): void;
    off<T extends keyof EventDataMap>(name: T, callback: (arg0: CustomEvent<EventData<T>>) => void): void;
    constructor(ns: string | null);
}
export {};
//# sourceMappingURL=sdk-action-manager.d.ts.map