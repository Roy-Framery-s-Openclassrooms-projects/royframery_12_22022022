export default class Performance {
    constructor(kind, performances) {
        this._performance = performances.map((performance) => {
            return {
                ...performance,
                kind: this.translateText(kind[performance.kind]),
            }
        })
    }

    get performance() {
        return this._performance
    }

    translateText = (text) => {
        switch (text) {
            case 'energy':
                return 'energie'
            case 'strength':
                return 'force'
            case 'speed':
                return 'vitesse'
            case 'intensity':
                return 'intensité'

            default:
                return text
        }
    }
}
