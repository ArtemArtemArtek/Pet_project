import { Themes } from "../../../../app/providers/ThemeProvider"
            
export interface jsonSettingsType{
    theme?: Themes
    pageInitedFirstTime?: boolean
    isRedesigned?: boolean
}