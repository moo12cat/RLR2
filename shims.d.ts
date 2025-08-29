declare namespace RLR2 {

    /**
     * Toggle long-range mode on/off.
     */
    //% block="enable long range toggle %on"
    function enableLongRangeToggle(on: boolean): void;

    /**
     * Toggle 250 kbps low-rate mode on/off.
     */
    //% block="enable 250kbps mode %on"
    function enable250kbps(on: boolean): void;

    /**
     * Send a value using long-range wrapper (duplicate if LR mode on).
     */
    //% block="send value with LR name %name value %value"
    function sendValueWithLR(name: string, value: number): void;
}
