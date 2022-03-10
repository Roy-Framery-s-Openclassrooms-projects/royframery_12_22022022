class Activities {
    constructor(data) {
        this._activities = data.sessions.map((session) => {
            return {
                name: this.formatDate(session.day),
                ...session,
            }
        })
    }

    get formatedActivities() {
        return this._activities
    }

    formatDate = (date) => {
        const day = new Date(date)
        return day.getDate().toString()
    }
}

export default Activities
