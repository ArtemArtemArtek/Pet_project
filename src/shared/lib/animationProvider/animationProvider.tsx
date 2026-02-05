import {
    createContext,
    useRef,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationProviderProps {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoading?: boolean;
}

const animationContext = createContext<AnimationProviderProps>({});

export const useAnimationLibs = () => {
    return useContext(animationContext);
};

const initialAnimationLibs = () => {
    return Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react'),
    ]);
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const GestureRef = useRef<GestureType>();
    const SpringRef = useRef<SpringType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        initialAnimationLibs().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            Spring: SpringRef.current,
            Gesture: GestureRef.current,
            isLoading: isLoaded,
        }),
        [isLoaded],
    );

    return (
        <animationContext.Provider value={value}>
            {children}
        </animationContext.Provider>
    );
};
