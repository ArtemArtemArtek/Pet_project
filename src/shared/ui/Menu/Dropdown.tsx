import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { VStack } from '../Stacks'
import { ReactNode, Fragment } from 'react'
import { AppLink } from '../AppLink/AppLink'
import { Button, ButtonTheme } from '../Button/Button'

export interface DropdownItem{
  label: string
  value?: ReactNode
  onClick?: ()=>void
  href?: string
}

interface DropdownProps{
  items: DropdownItem[]
  trigger: ReactNode
}

export const Dropdown:React.FC<DropdownProps>=(props)=> {

  const {items, trigger} = props

  return (
    
    <Menu as='div' className={cls.DropdownWrapper} >
      <Menu.Button className={cls.DropdownButton}>{trigger}</Menu.Button>
      <Menu.Items className={cls.DropdownOptions}>
        {items.map((item)=>{  
          const content = ({ active }:{active:boolean}) => (
            <Button 
              theme={ButtonTheme.BACKGROUND}
              className={active?cls.active:cls.DropdownOption}
              onClick = {item.onClick}
            >
              {item.label}
            </Button>
          )

          if(item.href){
            return(
              <Menu.Item as={AppLink} to={item.href}>
                {content}
              </Menu.Item>
            )
          }else{
            return(
                <Menu.Item as={Fragment}>
                {content}
              </Menu.Item>
            )
          }
          
        })}
      </Menu.Items>
    </Menu>
  )
}