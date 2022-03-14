export default class AverageSessionsClass {
    constructor(averageSessions) {
        this._averageSessions = averageSessions.map((session) => {
            return {
                name: this.formatDay(session.day),
                ...session,
            }
        })
    }

    get sessions() {
        return this._averageSessions
    }

    formatDay = (day) => {
        switch (day) {
            case 1:
                return 'L'
            case 2:
                return 'M'
            case 3:
                return 'M'
            case 4:
                return 'J'
            case 5:
                return 'V'
            case 6:
                return 'S'
            case 7:
                return 'D'
            default:
                break
        }
    }
}
