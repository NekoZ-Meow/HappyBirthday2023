import { Entity } from 'aframe-react'
import { useOnDetect } from '../../hooks/useOnDetect'

export const HappyBirthdayText = () => {
    useOnDetect(() => {
        document.querySelector('#happy-birthday-text').emit('scale')
    })
    return (
        <Entity
            id='happy-birthday-text'
            position='0 0.4 0'
            animation='property: position; dir: alternate; dur: 1000 easing: easeInOutSine; loop: true; to: 0 0.6 0'
            animation__scale='property: scale; from: 0 0 0; dir: alternate; dur: 1000 easing: easeInOutSine; to: 1 1 1; startEvents: scale'
        >
            <Entity primitive='a-text' value='Happy Birthday!!' align='center' position='0 0.3 0'></Entity>
            <Entity primitive='a-text' value='Yunchan' align='center' position='0 0 0'></Entity>
        </Entity>
    )
}
