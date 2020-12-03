import React from 'react'
import { WriterItem } from '../interfaces'

export const Writer = (props: WriterItem) => {
    const { name, lastname } = props
    return (
        <div style={{ display: 'flex' }}>
            <div>
                {name}
            </div>
            <div>
                {lastname}
            </div>
        </div>
    )
}
