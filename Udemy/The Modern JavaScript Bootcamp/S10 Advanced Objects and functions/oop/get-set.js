const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code use the setter & getter
data.location = 'Met-taref    '
data.location = '      6th of october    '
console.log(data.locations)