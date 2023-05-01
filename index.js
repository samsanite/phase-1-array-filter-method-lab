// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(function(driverName){
        return driverName.toUpperCase() === string.toUpperCase()
    })
}
function fuzzyMatch(drivers, string){
    return drivers.filter(function(driverName){
        return driverName.toUpperCase().substring(0, string.length) === string.toUpperCase()
    })
}
function matchName(drivers, string){
    return drivers.filter(function(driverName){
        return driverName.name === string
    })
}