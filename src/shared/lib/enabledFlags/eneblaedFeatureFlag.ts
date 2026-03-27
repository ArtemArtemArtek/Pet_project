import { EnabledFlags } from "../../types"
import { getEnabledFlags } from '../enabledFlags';

interface enabledFeatureFlagProps<T> {
    name: keyof EnabledFlags
    on: () => T
    off: () => T
}

export function enabledFeatureFlag<T>({ name, off, on }: enabledFeatureFlagProps<T>): T {
    if (getEnabledFlags(name)) {
        return on()
    }
    return off()
}