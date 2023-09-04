import { BirthdayCake } from './features/birthday-cake/BirthdayCake'
import { HappyBirthdayText } from './features/happy-birthday-text/HappyBirthdayText'
import { SnowParticle } from './features/snow-particle/SnowParticle'

function App() {
    return (
        <>
            <HappyBirthdayText></HappyBirthdayText>
            <BirthdayCake></BirthdayCake>
            <SnowParticle></SnowParticle>
        </>
    )
}

export default App
