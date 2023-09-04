import { Entity } from 'aframe-react'
import BirthdayCakeModel from '../../assets/models/birthdaycake.gltf'

export const BirthdayCake = () => {
    return (
        <Entity
            primitive='a-gltf-model'
            src={BirthdayCakeModel}
            position='0 -0.5 0.2'
            scale='0.015 0.015 0.015'
        ></Entity>
    )
}
