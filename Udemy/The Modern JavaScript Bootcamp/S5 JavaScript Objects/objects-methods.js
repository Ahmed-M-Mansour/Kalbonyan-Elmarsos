let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

// Chall 
const restaurant = {
    name: 'Mans&Gebnah',
    hallCap: 75,
    guestsCount:0,
    checkAvailability: function (bookNum) {
        const empSeats = this.hallCap - this.guestsCount;
        return bookNum <= empSeats;
    },
    seatBook: function (bookNum) {
        this.guestsCount += bookNum
    },
    removeBook: function(bookNum) {
        this.guestsCount -= bookNum
    }
}

restaurant.seatBook(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeBook(5)
console.log(restaurant.checkAvailability(4))