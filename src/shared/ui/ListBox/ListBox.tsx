import React, { memo, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { useState } from 'react'
import { HStack } from "../Stacks";
import cls from './ListBox.module.scss'
import ClassNameHelper from "../../../shared/lib/classNames/classNames";

export interface ListboxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

export interface ListBoxProps {
    items: ListboxItem[]
    onChangeHandler: (value: string) => void
    defaultValue?: string
    value?: string
    label?: string
    direction?: DropdownDirection
}

type DropdownDirection = 'top' | 'bottom';

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export const ListBox: React.FC<ListBoxProps> = memo((props) => {
    // const [selectedPerson, setSelectedPerson] = useState(people[0])
    const {
        items,
        onChangeHandler,
        defaultValue,
        label,
        direction = 'bottom',
        value
    } = props

    const optionsClasses = [mapDirectionClass[direction]];
    console.log('rerender listbox')
    return (
        <HStack gap="8">
            {label&& <span>{`${label}:`}</span>}
        <HListBox as="div" className={cls.HListBox} value={defaultValue} onChange={onChangeHandler} >
            <HListBox.Button className={cls.hlist_button}>{value ?? defaultValue}</HListBox.Button>
            <HListBox.Options className={ClassNameHelper(cls.hlist_options, {}, optionsClasses)}>
                {items.map((item) => (
                    <HListBox.Option  disabled={item.value===value?true:false} key={item.value} value={item.value}>
                        {({ active, selected }) => (
                            <li className={active ? cls.hlist_option_active : cls.hlist_option}>
                                {selected && '!!!'}
                                {item.content}
                            </li>
                            )
                        }
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
        </HStack>
    )
})