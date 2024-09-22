declare global {
    interface Window {
        ca: {
            forceInit: () => void;
        };
    }
}

export {};
