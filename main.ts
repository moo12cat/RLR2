namespace longrange {

    let longRangeActive = false;

    export function enableLongRangeToggle(on: boolean): void {
        longRangeActive = on;
        if (on) {
            // Example enhancement: send extra packet copies automatically
            console.log("Long Range Toggle ON: redundancy enabled (does not modify your existing code)");
        } else {
            console.log("Long Range Toggle OFF: normal behavior");
        }
    }

    // Optional wrapper for sending with redundancy, without touching your original radio.sendValue calls
    export function sendValueWithLongRange(name: string, value: number): void {
        radio.sendValue(name, value);
        if (longRangeActive) {
            // Send a second copy for redundancy
            control.waitMicros(500);
            radio.sendValue(name, value);
        }
    }
}
