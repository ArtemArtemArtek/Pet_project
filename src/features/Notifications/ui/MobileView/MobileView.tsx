import React, { ReactNode, useState } from "react";
import { Skeleton } from "../../../../shared/ui/Skeleton/Skeleton";
import Drawer from "../../../../shared/ui/Drawer/Drawer";
import { NotificationItem, NotificationItemData } from "../NotificationItem/NotificationItem";
import cls from './MobileView.module.scss'
import { useAnimationLibs } from "../../../../shared/lib/animationProvider";
// import { useDrag } from '@use-gesture/react'
// import { a, useSpring, config } from '@react-spring/web'

interface MobileViewProps {
    isLoading: boolean
    trigger: ReactNode
    notifictionsData: NotificationItemData[]
}

export const MobileViewComponent: React.FC<MobileViewProps> = (props) => {

    const {Gesture, Spring} =useAnimationLibs()
    const { isLoading, notifictionsData, trigger } = props
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerPosition, setDrawerPosition] = useState<'bottom'>('bottom');

    const height = 700
      const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const open = ({ canceled }:{canceled: boolean}) => {
                //     setDrawerPosition('bottom');
                setIsDrawerOpen(true);
                api.start({ y: 0, immediate: false, config: canceled ? Spring.config.wobbly : Spring.config.stiff })
            }
            
            const close = (velocity = 0) => {
      setIsDrawerOpen(false);
    api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity } })
  }

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
      if (oy < -70) cancel()
      if (last) {
        //eslint-disable-next-line
        oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : open({ canceled })
      }
      else api.start({ y: oy, immediate: true })
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  const display = y.to((py) => (py < height ? 'block' : 'none'))

    return (
        <div>
            <button className={cls.mobile_button} onClick={open}>
                {trigger}
            </button>
            <Spring.a.div className={cls.sheet} {...bind()} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}>
                {isLoading ?
                    <Skeleton /> :
                    <div >
                        {notifictionsData.map((element) => (
                            <NotificationItem item={element} />
                        ))}
                    </div>
                }
                </Spring.a.div>
        </div>
    )
}

export const MobileView: React.FC<MobileViewProps> =(props)=>{
    
    const {isLoading} = useAnimationLibs()

    if(!isLoading){
        return (
            <div>Loading</div>
        )
    }

    return(
        <MobileViewComponent {...props} />
    )
}