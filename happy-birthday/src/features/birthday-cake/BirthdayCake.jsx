import { Entity } from 'aframe-react'
import BirthdayCakeModel from '../../assets/models/birthdaycake.gltf'
import { useOnDetect } from '../../hooks/useOnDetect'

export const BirthdayCake = () => {
    const scale = '0.018 0.018 0.018'

    useOnDetect(() => {
        const cakeElement = document.querySelector('#birthday-cake')
        if (!cakeElement) return
        cakeElement.emit('rotate')
        cakeElement.emit('scale')
    })

    return (
        <Entity
            id='birthday-cake'
            primitive='a-gltf-model'
            src={BirthdayCakeModel}
            position='0 -0.5 0.2'
            scale={scale}
            animation__scale={`property: scale; from: 0 0 0; dur: 1000; easing: easeOutSine; to: ${scale}; startEvents: scale`}
            animation__rotation={`property: rotation; from: 0 0 0; dur: 1000; easing: easeOutSine; to: 0 360 0; startEvents: rotate`}
        ></Entity>
    )
}
