// percentage
// console.log(Math.round((Math.random()*100)+1))
// percentage

function transfer(){
    let stats = document.querySelector("#data")
    stats = stats.innerHTML
    console.log(stats)
    return stats
}

function weaponType(weaponPower){
    let attackSpeed = 1 
    let alwaysSpEffect = false
    let weaponType = ""
    let chance = (Math.round(Math.random()*100))+1
    if (chance < 21){
        weaponType = "War Hammer"
        weaponPower = weaponPower * 2
        attackSpeed = attackSpeed / 2
    }
    else if (chance < 41){
        weaponType = "Sword"
    }
    else if (chance < 61){
        weaponType = "Daggers"
        weaponPower = weaponPower / 2
        attackSpeed = attackSpeed * 2
    }
    else if (chance < 81){
        weaponType = "Claymore"
        weaponPower = weaponPower * 3
        attackSpeed = attackSpeed / 3
    }
    else if (chance < 101){
        weaponType = "Wand"
        weaponPower = (weaponPower / 4)
        alwaysSpEffect = true
    }
    else{
        console.log("logic error, function weaponType")
    }
    return {weaponType,weaponPower,attackSpeed,alwaysSpEffect}
}

function rarity(baseWeaponPower){
    let chance = (Math.round(Math.random()*4096))+1
    let weaponRarity = null
    fail = false
    let coins = 0
    if (chance < 2048){
        weaponRarity = "Common"
        weaponPower = baseWeaponPower * 1
    }
    else if (chance < 3072){
        weaponRarity = "Uncommon"
        weaponPower = baseWeaponPower * 2
    }
    else if (chance < 3584){
        weaponRarity = "Rare"
        weaponPower = baseWeaponPower * 3
    }
    else if (chance < 3840){
        weaponRarity = "Epic"
        weaponPower = baseWeaponPower * 4
    }
    else if (chance < 3968){
        weaponRarity = "Legendary"
        weaponPower = baseWeaponPower * 5
    }
    else if (chance < 4032){
        weaponRarity = "Mythical"
        weaponPower = baseWeaponPower * 6
    }
    else if (chance < 4064){
        weaponRarity = "Cosmic"
        weaponPower = baseWeaponPower * 7
    }
    else if (chance < 4080){
        weaponRarity = "Universal"
        weaponPower = baseWeaponPower * 8
    }
    else if (chance < 4088){
        weaponRarity = "Divine"
        weaponPower = baseWeaponPower * 9
    }
    else if (chance < 4092){
        weaponRarity = "Celestial"
        weaponPower = baseWeaponPower * 10
    }
    else if (chance < 4094){
        weaponRarity = "Transendant"
        weaponPower = baseWeaponPower * 11
    }
    else if (chance < 4095){
        weaponRarity = "Reality"
        weaponPower = baseWeaponPower * 12
    }
    else if (chance < 4096){
        coins = weaponPullCost/4
        fail = true
    }
    else{
        console.log("logic error, rarity function ")
    }
    return {weaponRarity,coins,fail,weaponPower}
}

function effectAndCurse(itemRarity,alwaysSpEffect,userLv){
    let chance = (Math.round(Math.random()*100))+1
    if (chance > 11){
        // effects
        effect = "none"
    }
    chance = (Math.round(Math.random()*100))+1
    if (chance > 6){
        //curses
        curse = "none"
    }
    if (userLv < 25 && itemRarity == "Legendary"){
        curseAndEffect = {effect,curse,"unworthy - Legendary"}
    }
    elif (userLv < 50 && itemRarity == "Mythical"){
        curseAndEffect = {effect,curse,("unworthy - Mythical")}
    }
}

function weaponRoll(userGold,userLv,amountPulled,exp){
    let baseWeaponPower = exp/userLv
    let weaponPullCost = userLv * amountPulled

    if (userGold >= weaponPullCost){
        userGold = userGold - weaponPullCost
        let itemRarity = rarity(baseWeaponPower)

        if (itemRarity.fail == true){
            console.log("refund")
            // replace with innerHtml
            userGold = userGold (weaponPullCost/4)
        }

        else{
            let itemType = weaponType(itemRarity.weaponPower)
            let itemRarity = itemRarity.weaponRarity
            let itemWeaponPower = itemType.weaponPower
            let itemAttackSpeed = itemType.attackSpeed
            let alwaysSpCheck = itemType.alwaysSpEffect
            let itemTypeStore = itemType.weaponType
            let baseWeapon = {itemTypeStore,itemRarity,itemWeaponPower,itemAttackSpeed}
            console.log(baseWeapon)

            let effect = effectAndCurse(itemRarity,alwaysSpCheck,userLv)
        }
    }
    else if (userGold < weaponPullCost){
        console.log("insufficient funds")
        // replace with innerHTML
    }
    else{
        console.log("logic error, weaponRoll")
    }
}
console.log(weaponRoll(1000,1,0,1))