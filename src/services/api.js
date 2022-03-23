let BASE_URL = 'http://localhost:3000/user/'
const mockedIdUser = 12

/**
 *
 * @description function to get user's information
 * @param { string } id - The Id of the user
 * @returns Object
 */
const getUserById = async (id) => {
    if (id === 'mock') BASE_URL = '/data.json'
    try {
        const response = await fetch(BASE_URL + (id === 'mock' ? '' : id))
        if (response.status === 404) {
            throw new Error('error 404')
        }
        if (response.ok) {
            const data = await response.json()
            if (id === 'mock') {
                const userInfos = data.users.find(
                    (user) => user.id === mockedIdUser
                )
                return userInfos
            } else {
                return data.data
            }
        }
    } catch (err) {
        alert(err)
    }
}

/**
 *
 * @description function to get user's activities
 * @param { string } id - The Id of the user
 * @returns Object
 */
const getUserActivityById = async (id) => {
    if (id === 'mock') BASE_URL = '/data.json'
    try {
        const response = await fetch(
            BASE_URL + (id === 'mock' ? '' : `${id}/activity`)
        )
        if (response.status === 404) {
            throw new Error('error 404')
        }
        if (response.ok) {
            const data = await response.json()
            if (id === 'mock') {
                const userActivities = data.activity.find(
                    (activity) => activity.userId === mockedIdUser
                )
                return userActivities
            } else {
                return data.data
            }
        }
    } catch (err) {
        alert(err)
    }
}

/**
 *
 * @description function to get user's average sessions
 * @param { string } id - The Id of the user
 * @returns Object
 */
const getAverageSessionsById = async (id) => {
    if (id === 'mock') BASE_URL = '/data.json'
    try {
        const response = await fetch(
            BASE_URL + (id === 'mock' ? '' : `${id}/average-sessions`)
        )

        if (response.status === 404) {
            throw new Error('error 404')
        }

        if (response.ok) {
            const data = await response.json()
            if (id === 'mock') {
                const userAverageSessions = data.average_sessions.find(
                    (averageSession) => averageSession.userId === mockedIdUser
                )
                return userAverageSessions
            } else {
                return data.data
            }
        }
    } catch (err) {
        alert(err)
    }
}

/**
 *
 * @description function to get User's performance
 * @param { string } id - The Id of the user
 * @returns Object
 */
const getPerformanceById = async (id) => {
    if (id === 'mock') BASE_URL = '/data.json'
    try {
        const response = await fetch(
            BASE_URL + (id === 'mock' ? '' : `${id}/performance`)
        )
        if (response.status === 404) {
            throw new Error('error 404')
        }
        if (response.ok) {
            const data = await response.json()
            if (id === 'mock') {
                const userPerformances = data.performance.find(
                    (performance) => performance.userId === mockedIdUser
                )
                return userPerformances
            } else {
                return data.data
            }
        }
    } catch (err) {
        alert(err)
    }
}

export {
    getUserById,
    getUserActivityById,
    getAverageSessionsById,
    getPerformanceById,
}
