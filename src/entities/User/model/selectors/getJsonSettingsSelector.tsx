import { buildSelector } from "../../../../shared/lib/store";

export const [useJsonSettingsSelector, getJsonSettings] = buildSelector((state)=>state.user.isAuth?.jsonSettings) 