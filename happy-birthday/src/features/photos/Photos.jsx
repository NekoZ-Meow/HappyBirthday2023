import { Entity } from 'aframe-react'
import { useCloudStorage } from '../../hooks/useCloudStorage'

export const Photos = () => {
    const imagePath = useCloudStorage('line_408518499497703.jpg')

    return <Entity primitive='a-image' src={imagePath}></Entity>
}
