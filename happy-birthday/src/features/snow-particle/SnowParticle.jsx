import { Entity } from 'aframe-react'

export const SnowParticle = () => {
    return <Entity particle-system={{ preset: 'snow', particleCount: 5000 }} />
}
