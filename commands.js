// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis

// 2. Create a collection called bounties
db.createCollection('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.destinations.insertOne({
    ...
})

// 2. Query for all bounties in the bounties collection
db.destinations.find()

// 3. Insert many bounties at once using the given objects
db.destinations.insertMany ([
    {...},
    {...},
])

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.destinations.find({ location: "Grasslands" })

// 2. Query for all bounties with a reward worth 10000 or more
db.destinations.find ({ reward: {$gt: 10000} })

// 3. Query for all bounties, but exclude the client attribute from being shown
db.destinations.find ( {}, {client: 0})

// 4. Query for a Groundhog in the Woodlands


// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.destinations.updateOne ({name: "Polarwind"}, {$set: {reward: 10000} })

// 2. Remove Lokinkajou

db.destinations.deleteOne({name: "lokinkajou"})

// 3. Delete all bounties sent by Songbird
db.destinations.deleteMany({client: "Songbird"})

// 4. Update all captured statuses to true
db.destinations.updateManyy(
    {captured: false},
    {$set: {captured: true}}
)