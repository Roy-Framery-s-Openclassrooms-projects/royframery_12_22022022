let BASE_URL = 'http://localhost:3000/user/'

const getUserById = async (id) => {
    if (id === 'mock') BASE_URL = '/data.json'
    try {
        const response = await fetch(BASE_URL + (id === 'mock' ? '' : id))
        if (response.ok) {
            if (id === 'mock') {
                const data = await response.json()
                const userInfos = data.users.find((user) => user.id === 12)
                return userInfos
            } else {
                const data = await response.json()
                return data.data
            }
        }
    } catch (err) {
        console.log(err)
    }
}

const getUserActivityById = async (id) => {
    if (id === 'mock') BASE_URL = '/data.json'
    try {
        const response = await fetch(
            BASE_URL + (id === 'mock' ? '' : `${id}activity`)
        )
        if (response.ok) {
            const data = await response.json()
            if (id === 'mock') {
                const userActivities = data.activity.find(
                    (activity) => activity.userId === 12
                )
                return userActivities
            } else {
                return data.data
            }
        }
    } catch (err) {
        console.log(err)
    }
}

const getAverageSessionsById = async (id) => {
    if (id === 'mock') BASE_URL = '/data.json'
    try {
        const response = await fetch(
            BASE_URL + (id === 'mock' ? '' : `${id}/average-sessions`)
        )
        if (response.ok) {
            const data = await response.json()
            if (id === 'mock') {
                const userActivities = data.average_sessions.find(
                    (activity) => activity.userId === 12
                )
                return userActivities
            } else {
                console.log(data)
                return data.data
            }
        }
    } catch (err) {
        console.log(err)
    }
}

const getPerformanceById = async (id) => {
    if (id === 'mock') BASE_URL = '/data.json'
    try {
        const response = await fetch(
            BASE_URL + (id === 'mock' ? '' : `${id}/performance`)
        )
        if (response.ok) {
            const data = await response.json()
            if (id === 'mock') {
                const userActivities = data.performance.find(
                    (activity) => activity.userId === 12
                )
                return userActivities
            } else {
                return data.data
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export {
    getUserById,
    getUserActivityById,
    getAverageSessionsById,
    getPerformanceById,
}
