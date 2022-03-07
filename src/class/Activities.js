class Activities {
    constructor(data) {
        this._activities = data.sessions
    }

    get formatedActivities() {
        const formatedActivities = []
        console.log(this._activities)
        for (let i = 0; i < this._activities.length; i++) {
            const activity = this._activities[i]
            formatedActivities.push({
                name: i + 1,
                kilogram: activity.kilogram,
                calories: activity.calories,
            })
        }
        return formatedActivities
    }
}

export default Activities
