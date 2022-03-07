import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = '/data.json'

const GetUserById = (id) => {
    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        async function getUserData() {
            try {
                const response = await axios.get(BASE_URL)
                const data = response.data
                const userData = data.users.find((user) => user.id === id)
                setUser(userData)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getUserData()
    }, [id])
    return { isLoading, user }
}

const GetUserActivityById = (id) => {
    const [userActivity, setUserActivity] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        async function getUserData() {
            try {
                const response = await axios.get(BASE_URL)
                const data = response.data
                const userData = data.activity.find(
                    (user) => user.userId === id
                )
                setUserActivity(userData)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getUserData()
    }, [id])
    return { isLoading, userActivity }
}

export { GetUserById, GetUserActivityById }
