import { ReactElement, ReactNode } from "react";
import { EnabledFlags } from "../../../types"
import { getEnabledFlags } from '../../enabledFlags';

interface FeatureFlagProps {
    name: keyof EnabledFlags
    on: ReactElement
    off: ReactElement
}

export function FeatureFlag({ name, off, on }: FeatureFlagProps) {
    if (getEnabledFlags(name)) {
        return on
    }
    return off
}