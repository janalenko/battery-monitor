import { BatteryModule } from "./battery-module.model"

export interface BmsInfo {
    modules: BatteryModule[],
    soc: number
    batteryCurrent: number
    batteryVoltage: number
    batteryDelta: number
    contactorState: boolean
}