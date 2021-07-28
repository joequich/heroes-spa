import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DCScreen = () => {
    return (
        <div>
            <h1>DCScreen</h1>
            <hr />
            <HeroList publisher="DC Comics" />
        </div>
    )
}
