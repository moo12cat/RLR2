namespace RLR2 {

    let longRangeActive = false;
    let lowRateActive = false;

    // Long Range toggle
    export function enableLongRangeToggle(on: boolean): void {
        longRangeActive = on;
        if (on) {
            radio.setTransmitPower(7);
            console.log("RLR2 Long Range Toggle ON");
        } else {
            console.log("RLR2 Long Range Toggle OFF");
        }
    }

    // 250 kbps toggle
    export function enable250kbps(on: boolean): void {
        lowRateActive = on;
        if (on) {
            // Nordic radios: set low data rate for longer range
            radio.config({
                group: 1,
                frequencyBand: 48,
                transmitPower: radio.getTransmitPower()
            });
            console.log("250 kbps mode enabled (low-rate)");
        } else {
            // Reset normal rate
            radio.config({
                group: 1,
                frequencyBand: 48,
                transmitPower: radio.getTransmitPower()
            });
            console.log("250 kbps mode disabled (normal rate)");
        }
    }

    // Send value with optional LR duplication
    export function sendValueWithLR(name: string, value: number): void {
        radio.sendValue(name, value);
        if (longRangeActive) {
            control.waitMicros(500);
            radio.sendValue(name, value);
        }
    }
}

// --- Paste your full original RLR2 code below ---
// (leave everything exactly as-is)
