import { initializeApp } from 'firebase/app'
import { getStorage, getDownloadURL, ref } from 'firebase/storage'

import { useEffect, useState } from 'react'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
}

console.log(firebaseConfig)

const app = initializeApp(firebaseConfig)

export const useCloudStorage = (fileName) => {
    const storage = getStorage(app)
    const imageRef = ref(storage, fileName)

    const [imagePath, setPath] = useState(null)
    getDownloadURL(imageRef).then((url) => {
        setPath(url)
    })

    return imagePath
}
