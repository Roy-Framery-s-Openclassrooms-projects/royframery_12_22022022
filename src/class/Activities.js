class Activities {
    constructor(data) {
        this._activities = data.sessions.map((session) => {
            return {
                name: this.formatedDate(session.day),
                ...session,
            }
        })
    }

    get formatedActivities() {
        // console.log(this._activities)
        return this._activities
    }

    formatedDate = (date) => {
        const day = new Date(date)
        return day.getDate().toString()
    }
}

export default Activities
