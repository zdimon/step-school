import React from 'react'
import { WriterItem } from '../interfaces'
import { Writer } from './Writer'

interface Props {
    list?: WriterItem[]
}

export const WriterList = ({ list = [] }: Props) => {
    return (
        <div>
           {list.map((item, i) => <Writer key={i} {...item} />)}
        </div>
    )
}
