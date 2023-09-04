import { Entity } from 'aframe-react'

export const HappyBirthdayText = () => {
    return (
        <Entity
            primitive='a-text'
            value='Happy Birthday!!'
            align='center'
            position='0 0.4 0'
            animation='property: position; dir: alternate; dur: 1000 easing: easeInOutSine; loop: true; to: 0 0.6 0'
        ></Entity>
    )
}
