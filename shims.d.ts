declare namespace longrange {

    /**
     * Toggle long-range mode on/off.
     * This will adjust redundancy or other optional features without modifying your existing code.
     */
    //% block="enable long range toggle %on"
    //% help="Toggle long-range mode for extra reliability (no changes to your existing radio logic)."
    function enableLongRangeToggle(on: boolean): void;
}
