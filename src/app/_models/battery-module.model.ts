import { ModuleCell } from "./module-cell.model"

export interface BatteryModule {
    moduleId: number | null
    cells: ModuleCell[]
    temperature: number
}