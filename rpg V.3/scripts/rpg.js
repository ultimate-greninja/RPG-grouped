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
    let attackSpeed = 10
    let alwaysSpEffect = false
    let weaponType = ""
    let chance = (Math.round(Math.random()*100))+1
    if (chance < 21){
        weaponType = "War Hammer"
        weaponPower = weaponPower * 2
        attackSpeed = Math.round(attackSpeed / 2)
    }
    else if (chance < 41){
        weaponType = "Sword"
        weaponPower = weaponPower * 1
        attackSpeed = attackSpeed * 1
    }
    else if (chance < 61){
        weaponType = "Daggers"
        weaponPower = Math.round(weaponPower / 2)
        attackSpeed = attackSpeed * 2
    }
    else if (chance < 81){
        weaponType = "Claymore"
        weaponPower = weaponPower * 3
        attackSpeed = Math.round(attackSpeed / 3)
    }
    else if (chance < 101){
        weaponType = "Wand"
        weaponPower = Math.round(weaponPower / 4)
        alwaysSpEffect = true
    }
    else{
        console.log("logic error, function weaponType")
    }
    return {weaponType,weaponPower,attackSpeed,alwaysSpEffect}
}

function rarity(baseWeaponPower,baseWeaponDurability){
    let chance = (Math.round(Math.random()*4096))+1
    let weaponRarity = null
    let weaponPower = 0
    let WeaponDurability = 0
    fail = false
    let refund = 0
    if (chance < 2048){
        weaponRarity = "Common"
        weaponPower = baseWeaponPower * 1
        WeaponDurability = baseWeaponDurability * 1
    }
    else if (chance < 3072){
        weaponRarity = "Uncommon"
        weaponPower = baseWeaponPower * 2
        WeaponDurability = baseWeaponDurability * 2
    }
    else if (chance < 3584){
        weaponRarity = "Rare"
        weaponPower = baseWeaponPower * 3
        WeaponDurability = baseWeaponDurability * 3
    }
    else if (chance < 3840){
        weaponRarity = "Epic"
        weaponPower = baseWeaponPower * 4
        WeaponDurability = baseWeaponDurability * 4
    }
    else if (chance < 3968){
        weaponRarity = "Legendary"
        weaponPower = baseWeaponPower * 5
        WeaponDurability = baseWeaponDurability * 5
    }
    else if (chance < 4032){
        weaponRarity = "Mythical"
        weaponPower = baseWeaponPower * 6
        WeaponDurability = baseWeaponDurability * 6
    }
    else if (chance < 4064){
        weaponRarity = "Cosmic"
        weaponPower = baseWeaponPower * 7
        WeaponDurability = baseWeaponDurability * 7
    }
    else if (chance < 4080){
        weaponRarity = "Universal"
        weaponPower = baseWeaponPower * 8
        WeaponDurability = baseWeaponDurability * 8
    }
    else if (chance < 4088){
        weaponRarity = "Divine"
        weaponPower = baseWeaponPower * 9
        WeaponDurability = baseWeaponDurability * 9
    }
    else if (chance < 4092){
        weaponRarity = "Celestial"
        weaponPower = baseWeaponPower * 10
        WeaponDurability = baseWeaponDurability * 10
    }
    else if (chance < 4094){
        weaponRarity = "Transendant"
        weaponPower = baseWeaponPower * 11
        WeaponDurability = baseWeaponDurability * 11
    }
    else if (chance < 4095){
        weaponRarity = "Reality"
        weaponPower = baseWeaponPower * 12
        WeaponDurability = baseWeaponDurability * 12
    }
    else if (chance < 4096){
        refund = weaponPullCost/4
        fail = true
    }
    else{
        console.log("logic error, rarity function ")
    }
    return {weaponRarity,refund,fail,weaponPower,WeaponDurability}
}

function effectAndCurse(itemRarity,alwaysSpEffect,userLv,WeaponDurability,weaponPower,attackSpeed){
    let chance = (Math.round(Math.random()*100))+1
    let curse = "none"
    let effect = "none"
    let unworthy = false
    let levelUnlock = 0
    if (chance < 11 || alwaysSpEffect == true){

        chance = (Math.round(Math.random()*100))+1

        // effects
        if((itemRarity == "Divine" || itemRarity == "Celestial" || itemRarity == "Transendant" || itemRarity == "Reality")&& chance < 6){
            effect = "Godly"
            // (1/64 chance tempary weapon power = weapon power * 1,000,000)= 1/100
        } 
        else if (chance < 16){
            effect = "Burn"
            // (fast damage lv. per 3 sec for 1 min)
        }
        else if (chance < 21){
            effect = "Poison"
            // (slow damage 2*lv. per 10 sec for 3 min)
        }
        else if (chance < 24){
            effect = "Decay"
            // (slow damage 3*lv. per 10 sec for 3 min)
        }
        else if (chance < 28){
            effect = "LifeSteal"
            // (1/10 of damage healed)
        }
        else if (chance < 33){
            effect = "Golden"
            // (double money)
        }
        else if (chance < 35){
            effect = "Shock"
            // (bonus hit but 1/4 weapon power)
        }
        else if (chance < 39){
            effect = "Healer"
            // (does no damage but heals the damage)
        }
        else if (chance < 101){
            effect = "Sturdy"
            WeaponDurability = WeaponDurability * 1.5
            // (1.5*durability)
        }
        else{
            console.log("logic error, function effectAndCurse, Effect section")
        }
    }
    chance = (Math.round(Math.random()*100))+1
    if (chance < 6 && !(itemRarity == "Common" || itemRarity == "Uncommon" || itemRarity == "Rare" || itemRarity == "Epic")){
        
        chance = (Math.round(Math.random()*100))+1
        
        //curses

        if(chance < 19){
            curse = "Brittle"
            WeaponDurability = math.round(WeaponDurability / 4)
            //(1/4 of durability)
        }
        else if (chance < 44){
            curse = "Binding"
            //(cannot be sold or unnequiped auto equiped unless unworthy)
        }
        else if (chance < 53){
            curse = "Money Eater"
            //(halfs money you get when equiped)
        }
        else if (chance < 62){
            curse = "wither"
            //(in inventory take 1% health in damage per use)
        }
        else if (chance < 87){
            curse = "Dull"
            weaponPower = Math.round(weaponPower / 2)
            //(1/2 of weapon power)
        }
        else if (chance < 94){
            curse = "Slowness"
            attackSpeed = Math.round(attackSpeed / 2)
            //( 1/2 attack speed)
        }
        else if(chance < 101){
            if (itemRarity == "Divine" || itemRarity == "Celestial" || itemRarity == "Transendent" || itemRarity == "Reality"){
                curse = "Madness"
                //(every minute partly blinded by red screen when equiped and take 5% health but 2* weapon power)
            }
            else{
                curse = "Glass Cannon"
            }
        }
        else{
            console.log("logic error, function effectAndCurse,Curse section")
        }
    }
    if (userLv < 25 && itemRarity == "Legendary"){
        levelUnlock = 25
        unworthy = ""
    }
    else if (userLv < 50 && itemRarity == "Mythical"){
        levelUnlock = 50
        unworthy = ""
    }
    else if (userLv < 100 && itemRarity == "Cosmic"){
        levelUnlock = 100
        unworthy = ""
    }
    else if (userLv < 150 && itemRarity == "Universal"){
        levelUnlock = 150
        unworthy = ""
    }
    else if (userLv < 250 && itemRarity == "Divine"){
        levelUnlock = 250
        unworthy = ""
    }
    else if (userLv < 500 && itemRarity == "Celestial"){
        levelUnlock = 500
        unworthy = ""
    }
    else if (userLv < 750 && itemRarity == "Transendant"){
        levelUnlock = 750
        unworthy = ""
    }
    else if (userLv < 1000 && itemRarity == "Reality"){
        levelUnlock = 1000
        unworthy = ""
    }
    else{
        unworthy = false
    }
    if (unworthy !== false){
        unworthy = `unworthy - ${itemRarity} (Lv.${levelUnlock})`
    }
    return {effect,curse,unworthy,WeaponDurability,weaponPower,attackSpeed}
}

function weaponRoll(){
    let userGold = document.querySelector("#userGold")
    let userLv  = document.querySelector("#userLv")
    let amountPulled = document.querySelector("#amountPulled")
    let exp = document.querySelector("#exp")
    userGold = parseInt(userGold.innerHTML)
    userLv = parseInt(userLv.innerHTML)
    amountPulled = parseInt(amountPulled.innerHTML)
    exp = parseInt(exp.innerHTML)

    let baseWeaponPower = exp/(userLv/2)
    let weaponPullCost = userLv * amountPulled
    let baseWeaponDurability = userLv * 10
    if (userGold >= weaponPullCost){
        userGold = userGold - weaponPullCost
        let itemRarity = rarity(baseWeaponPower,baseWeaponDurability)

        if (itemRarity.fail == true){
            console.log("refund")
            // replace with innerHtml
            userGold = userGold (weaponPullCost/4)
        }

        else{
            let itemType = weaponType(itemRarity.weaponPower)
            let itemWeaponRarity = itemRarity.weaponRarity
            let itemWeaponDurability = itemRarity.WeaponDurability
            let itemWeaponPower = itemType.weaponPower
            let itemAttackSpeed = itemType.attackSpeed
            let alwaysSpCheck = itemType.alwaysSpEffect
            let itemTypeStore = itemType.weaponType

            let curseAndEffect = effectAndCurse(itemWeaponRarity,alwaysSpCheck,userLv,itemWeaponDurability,itemWeaponPower,itemAttackSpeed)
            let effect = curseAndEffect.effect
            let curse = curseAndEffect.curse
            let unworthy = curseAndEffect.unworthy
            let curses = {curse,unworthy}
            itemWeaponDurability = curseAndEffect.WeaponDurability
            itemWeaponPower = curseAndEffect.weaponPower
            itemAttackSpeed = curseAndEffect.attackSpeed
            if (itemWeaponPower < 1){
                itemWeaponPower = 1
            }
            if ( itemAttackSpeed< 1){
                itemAttackSpeed = 1
            }
            if (itemWeaponDurability < 1){
                itemWeaponDurability = 1
            }
            
            let weapon = {itemWeaponRarity,itemTypeStore,itemWeaponPower,itemAttackSpeed,itemWeaponDurability,effect,curses}
            console.log(weapon)
            // inner html to add to index to use php
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
// console.log(weaponRoll(1000,1,0,1))