// percentage
// console.log(Math.round((Math.random()*100)+1))
// percentage

function transfer(){
    let stats = document.querySelector("#data")
    stats = stats.innerHTML
    console.log(stats)
    return stats
}

//weapon type

function weaponType(weaponPower,weaponDurability){
    let attackSpeed = 10
    let alwaysSpEffect = false
    let weaponType = ""
    let chance = (Math.floor(Math.random()*100))+1

    if (chance < 21){
        weaponType = "War Hammer"
        weaponPower = weaponPower * 2
        attackSpeed = Math.round(attackSpeed / 2)
        weaponDurability = weaponDurability * 2
    }

    else if (chance < 41){
        weaponType = "Sword"
        weaponPower = weaponPower * 1
        attackSpeed = attackSpeed * 1
        weaponDurability = weaponDurability * 1
    }

    else if (chance < 61){
        weaponType = "Daggers"
        weaponPower = Math.round(weaponPower / 2)
        attackSpeed = attackSpeed * 2
        weaponDurability = weaponDurability * 1
    }

    else if (chance < 81){
        weaponType = "Claymore"
        weaponPower = weaponPower * 3
        attackSpeed = Math.round(attackSpeed / 3)
        weaponDurability = weaponDurability * 3
    }
    else if (chance < 101){
        weaponType = "Wand"
        weaponPower = Math.round(weaponPower / 4)
        weaponDurability = weaponDurability / 2
        alwaysSpEffect = true
    }

    else{
        console.log("logic error, function weaponType")
    }

    return {weaponType,weaponPower,attackSpeed,alwaysSpEffect,weaponDurability}
}

// rarity

function rarity(baseWeaponPower,baseWeaponDurability,weaponPullCost,amountPulled){
    let chance = (Math.floor(Math.random()*4096))+1
    if (amountPulled == 0){
        chance =  (Math.floor(Math.random()*3840))+1
    }
    let weaponRarity = null
    let weaponPower = 0
    let WeaponDurability = 0
    let fail = false
    let refund = 0
    let itemSellPriceMultiplier = 1

    if (chance < 2048){
        weaponRarity = "Common"
        weaponPower = baseWeaponPower * 1
        WeaponDurability = baseWeaponDurability * 2.5
        itemSellPriceMultiplier = 1
    }

    else if (chance < 3072){
        weaponRarity = "Uncommon"
        weaponPower = baseWeaponPower * 2
        WeaponDurability = baseWeaponDurability * 4.5
        itemSellPriceMultiplier = 2
    }

    else if (chance < 3584){
        weaponRarity = "Rare"
        weaponPower = baseWeaponPower * 3
        WeaponDurability = baseWeaponDurability * 6.5
        itemSellPriceMultiplier = 3
    }

    else if (chance < 3840){
        weaponRarity = "Epic"
        weaponPower = baseWeaponPower * 4
        WeaponDurability = baseWeaponDurability * 8.5
        itemSellPriceMultiplier = 4
    }

    else if (chance < 3968){
        weaponRarity = "Legendary"
        weaponPower = baseWeaponPower * 5
        WeaponDurability = baseWeaponDurability * 10.5
        itemSellPriceMultiplier = 5
    }

    else if (chance < 4032){
        weaponRarity = "Mythical"
        weaponPower = baseWeaponPower * 6
        WeaponDurability = baseWeaponDurability * 12.5
        itemSellPriceMultiplier = 6
    }

    else if (chance < 4064){
        weaponRarity = "Cosmic"
        weaponPower = baseWeaponPower * 7
        WeaponDurability = baseWeaponDurability * 14.5
        itemSellPriceMultiplier = 7
    }

    else if (chance < 4080){
        weaponRarity = "Universal"
        weaponPower = baseWeaponPower * 8
        WeaponDurability = baseWeaponDurability * 16.5
        itemSellPriceMultiplier = 8
    }

    else if (chance < 4088){
        weaponRarity = "Divine"
        weaponPower = baseWeaponPower * 9
        WeaponDurability = baseWeaponDurability * 18.5
        itemSellPriceMultiplier = 9
    }

    else if (chance < 4092){
        weaponRarity = "Celestial"
        weaponPower = baseWeaponPower * 10
        WeaponDurability = baseWeaponDurability * 20.5
        itemSellPriceMultiplier = 10
    }

    else if (chance < 4094){
        weaponRarity = "Transendant"
        weaponPower = baseWeaponPower * 11
        WeaponDurability = baseWeaponDurability * 22.5
        itemSellPriceMultiplier = 11
    }

    else if (chance < 4095){
        weaponRarity = "Reality"
        weaponPower = baseWeaponPower * 12
        WeaponDurability = baseWeaponDurability * 24.5
        itemSellPriceMultiplier = 12
    }

    else if (chance < 4096){
        refund = weaponPullCost/4
        fail = true
    }

    else{
        console.log("logic error, rarity function ")
    }

    return {weaponRarity,refund,fail,weaponPower,WeaponDurability,itemSellPriceMultiplier}
}

//curse and effect

function effectAndCurse(itemRarity,alwaysSpEffect,userLv,WeaponDurability,weaponPower,attackSpeed){
    let chance = (Math.floor(Math.random()*100))+1
    let curse = "none"
    let effect = "none"
    let unworthy = false
    let levelUnlock = 0

    if (((chance < 11) && (itemRarity !== "Common" && itemRarity !== "Uncommon")) || (alwaysSpEffect == true )){

        chance = (Math.floor(Math.random()*100))+1

        // effects
        if((itemRarity == "Divine" || itemRarity == "Celestial" || itemRarity == "Transendant" || itemRarity == "Reality")&& chance < 6){
            effect = "Godly"
            // (1/64 chance tempary weapon power = weapon power * 1,000,000)= 1/100
        } 

        else if (chance < 16){
            effect = "Burn"
            // (fast damage weapon power / 144 per 3 sec for 1 min)
        }

        else if (chance < 21){
            effect = "Poison"
            // (slow damage weapon power / 48 per 10 sec for 3 min minimum damage per tick 1)
        }

        else if (chance < 24){
            effect = "Decay"
            // (slow damage weapon power / 24 per 10 sec for 3 min minimum damage per tick 1)
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
    chance = (Math.floor(Math.random()*100))+1
    if (chance < 6 && !(itemRarity == "Common" || itemRarity == "Uncommon" || itemRarity == "Rare" || itemRarity == "Epic")){

        chance = (Math.floor(Math.random()*100))+1

        //curses

        if(chance < 19){
            curse = "Brittle"
            WeaponDurability = Math.round(WeaponDurability / 4)
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
                WeaponDurability = 1
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

//weapon roll

function weaponRoll(){
    let userGoldid = document.querySelector("#userGold")
    let userLvid  = document.querySelector("#userLv")
    let amountPulledid = document.querySelector("#amountPulled")
    let expid = document.querySelector("#exp")

    let userGold = parseInt(userGoldid.innerHTML)
    let userLv = parseInt(userLvid.innerHTML)
    let amountPulled = parseInt(amountPulledid.innerHTML)
    let exp = parseInt(expid.innerHTML)

    let baseWeaponPower = userLv * 50
    let weaponPullCost = userLv * amountPulled
    let baseWeaponDurability = userLv * 100
    if (userGold >= weaponPullCost){
        userGold = userGold - weaponPullCost
        let itemRarity = rarity(baseWeaponPower,baseWeaponDurability,weaponPullCost,amountPulled)

        if (itemRarity.fail == true){
            console.log("refund")
            // replace with innerHtml
            userGold = userGold + (weaponPullCost/4)
        }

        else{
            let itemWeaponRarity = itemRarity.weaponRarity
            let itemWeaponDurability = itemRarity.WeaponDurability
            let itemSellPriceMultiplier = itemRarity.itemSellPriceMultiplier

            let itemType = weaponType(itemRarity.weaponPower,itemWeaponDurability)
            let itemWeaponPower = itemType.weaponPower
            let itemAttackSpeed = itemType.attackSpeed
            let alwaysSpCheck = itemType.alwaysSpEffect
            let itemTypeStore = itemType.weaponType

            itemWeaponDurability = itemType.weaponDurability

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

            let baseSellPrice = (itemWeaponDurability + itemWeaponPower + itemAttackSpeed)/10
            let itemSellPrice = Math.floor(baseSellPrice * itemSellPriceMultiplier)

            let weapon = {itemWeaponRarity,itemTypeStore,itemWeaponPower,itemAttackSpeed,itemWeaponDurability,effect,curses,itemSellPrice}
            console.log(weapon)

            let RT = document.querySelector("#RT")
            let PAD = document.querySelector("#PAD")
            let ECW = document.querySelector("#ECW")
            let Price = document.querySelector("#Price")

            RT.innerHTML = `<p>you have unlocked a ${weapon.itemWeaponRarity} ${weapon.itemTypeStore}<p>`
            PAD.innerHTML = `<p>power: ${weapon.itemWeaponPower}, attack speed: ${weapon.itemAttackSpeed}, durability: ${weapon.itemWeaponDurability}<p>`
            ECW.innerHTML = `<p>effect: ${weapon.effect}, curse: ${weapon.curses.curse}, unworthy: ${weapon.curses.unworthy}<p>`
            Price.innerHTML = `<p>sell price:${weapon.itemSellPrice} Gold</p>`

            amountPulledid.innerHTML = amountPulled+ 1
            userGoldid.innerHTML = userGold

            let WR = document.querySelector("#WR")
            let TS = document.querySelector("#TS")
            let WP = document.querySelector("#WP")
            let AS = document.querySelector("#AS")
            let WD = document.querySelector("#WD")
            let E = document.querySelector("#E")
            let C = document.querySelector("#C")
            let UW = document.querySelector("#UW")
            let SP = document.querySelector("#SP")

            WR.innerHTML = `${weapon.itemWeaponRarity}`
            TS.innerHTML = `${weapon.itemTypeStore}`
            WP.innerHTML = `${weapon.itemWeaponPower}`
            AS.innerHTML = `${weapon.itemAttackSpeed}`
            WD.innerHTML = `${weapon.itemWeaponDurability}`
            E.innerHTML = `${weapon.effect}`
            C.innerHTML = `${weapon.curses.curse}`
            UW.innerHTML = `${weapon.curses.unworthy}`
            SP.innerHTML = `${weapon.itemSellPrice}`

        } // inner html php test later
            // inner html to add to index to use php
    }
    else if (userGold < weaponPullCost){
        console.log("insufficient funds")
        // replace with innerHTML
    }

    else{
        console.log("logic error, weaponRoll")
    }

}

function buttonAppear(){
    let swingid = document.querySelector("#swing")
    swingid.innerHTML = `<input id = "swing" type="button" onclick= "swingPart1()" value="Swing"/>`
    swingPart2(damageMultiplier)
}

function newEnemy (){
    let expid = document.querySelector("#exp")
    let userLvid  = document.querySelector("#userLv")

    let exp = parseInt(expid.innerHTML)
    let userLv = parseInt(userLvid.innerHTML)

    let enemyHealth = Math.floor(Math.random() * (exp * (userLv - 1)) + exp*10);
    return enemyHealth
}

function Enemy(){
    let enemyHealthid = document.querySelector("#EnemyHealth")
    let enemyHealth = parseInt(enemyHealthid.innerHTML)
    if (enemyHealth <= 0){
        enemyHealth = newEnemy()
        enemyHealthid.innerHTML = enemyHealth
    }

    return(enemyHealth)
}

function swingExp(){

    let expid = document.querySelector("#exp")
    let WPid = document.querySelector("#WP")

    let WP = parseInt(WPid.innerHTML)

    if(WP !== 0){
        WPexp = Math.floor(WP /100)

        if (WPexp < 1){
            WPexp = 1
        }

        let exp = parseInt(expid.innerHTML)

        exp = exp + WPexp

        expid.innerHTML = `${exp}`
    }
}

function swingCoins(){
    let userGoldid = document.querySelector("#userGold")
    let WPid = document.querySelector("#WP")

    let WP = parseInt(WPid.innerHTML)

    if (WP !== 0){
        WPcoin = Math.floor(WP /100)

        if (WPcoin < 1){
            WPcoin = 1
        }

        let userGold = parseInt(userGoldid.innerHTML)

        userGold = userGold + WPcoin

        userGoldid.innerHTML = `${userGold}`
    }
}

function swingDurabilityDamage(){
    let WRid = document.querySelector("#WR")
    let TSid = document.querySelector("#TS")
    let WPid = document.querySelector("#WP")
    let ASid = document.querySelector("#AS")
    let WDid = document.querySelector("#WD")
    let Eid = document.querySelector("#E")
    let Cid = document.querySelector("#C")
    let UWid = document.querySelector("#UW")
    let SPid = document.querySelector("#SP")
    let RTid = document.querySelector("#RT")
    let PADid = document.querySelector("#PAD")
    let ECWid = document.querySelector("#ECW")
    let Priceid = document.querySelector("#Price")
    
    let WD = parseInt(WDid.innerHTML)
    let WP = parseInt(WPid.innerHTML)

    weaponDamage = Math.floor((Math.random() * (WP / 2 - WP / 5 + 1) + WP / 5)/1.5);
    WD = WD - weaponDamage
    if (WD <= 0){
        WD = 0
        WRid.innerHTML = `none`
        TSid.innerHTML = `none`
        WPid.innerHTML = `0`
        ASid.innerHTML = `0`
        Eid.innerHTML = `none`
        Cid.innerHTML = `none`
        UWid.innerHTML = ``
        SPid.innerHTML = `N/A`

        RTid.innerHTML = `item broke`
        PADid.innerHTML = `<p></p>`
        ECWid.innerHTML = `<p></p>`
        Priceid.innerHTML =`<p></p>`
    }
    WDid.innerHTML = `${WD}`
}

function curseAndEffectUse(){

    let Eid = document.querySelector("#E")
    let Cid = document.querySelector("#C")
    let enemyHealthid = document.querySelector("#EnemyHealth")
    let WPid = document.querySelector("#WP")
    let BAid = document.querySelector("#BA")
    let PAid = document.querySelector("#PA")
    let DAid = document.querySelector("#DA")

    let BA = BAid.innerHTML
    let PA = PAid.innerHTML
    let DA = DAid.innerHTML 

    let WP = parseInt(WPid.innerHTML)
    let enemyHealth = parseInt(enemyHealthid.innerHTML)
    let E = Eid.innerHTML
    let C = Cid.innerHTML

    let intervalId;
    let elapsedTime = 0
    let damageMultiplier = 1
    let count = 1

    console.log(E,C,"here")

    if (E !== "none" || C !== "none"){
        //effects and curses here
        if (E == "Godly"){
            chance = Math.floor(Math.random()*64)+1
            if (chance == 43){
                damageMultiplier = 1000
            }
            buttonAppear()
        }
        if (E == "Burn" && BA == "false"){
            console.log("use stuff at bottom to make 'Burn'")
            intervalId = setInterval(() => {
                BAid = document.querySelector("#BA")

                BA = BAid.innerHTML

                enemyHealthid = document.querySelector("#EnemyHealth")
                WPid = document.querySelector("#WP")

                WP = parseInt(WPid.innerHTML)
                enemyHealth = parseInt(enemyHealthid.innerHTML)

                if (count == 1){
                    swingid = document.querySelector("#swing")
                    swingid.innerHTML = `<input id = "swing" type="button" onclick= "swingPart1()" value="Swing"/>`
                    swingPart2(damageMultiplier)
                    BAid.innerHTML = `true`
                }

                WP = Math.floor(WP / 144)

                if (WP == 0){
                    WP = 1
                }

                if (enemyHealth !== 0){
                enemyHealth = enemyHealth - WP
                }

                enemyHealthid.innerHTML = `${enemyHealth}`
                elapsedTime += 3000; // 3000 milliseconds = 3 seconds
                    if (elapsedTime >= (1 * 60 * 1000) || enemyHealth <= 0) {
                        clearInterval(intervalId); // Stop the interval after 1 minute
                        BAid.innerHTML = `false`
                    }
                count++
                },3000)
        }

        if (E == "Golden"){
            swingCoins()
            buttonAppear()
        }

        //next effect here

        else{
            buttonAppear()
        }
        
    }
    else{
        swingid.innerHTML = `<input id = "swing" type="button" onclick= "swingPart1()" value="Swing"/>`
        swingPart2(damageMultiplier)
    }

}

function enemyHealthDamage(damageMultiplier){
    let WPid = document.querySelector("#WP")
    let enemyHealthid = document.querySelector("#EnemyHealth")

    let WP = parseInt(WPid.innerHTML)
    let enemyHealth = parseInt(enemyHealthid.innerHTML)

    WP = WP * damageMultiplier

    enemyHealth = enemyHealth - WP

    enemyHealthid.innerHTML = `${enemyHealth}` 
}

function swingPart1(){
    let swingid = document.querySelector("#swing")
    swingid.innerHTML = `<input disabled id = "swing" type="button" onclick= "swingPart1()" value="Swing"/>`

    Enemy()
    swingExp()
    swingCoins()
    curseAndEffectUse()
}
function swingPart2(damageMultiplier){
    enemyHealthDamage(damageMultiplier)
    swingDurabilityDamage()
    Enemy()
}

// setInterval(() => {
// every 5 seconds
//     elapsedTime += 5000; // 5000 milliseconds = 5 seconds
//         if (elapsedTime >= 3 * 60 * 1000) {
//             clearInterval(intervalId); // Stop the interval after 3 minutes
//         } 
// },5000)

let Eid = document.querySelector("#E")
let E = Eid.innerHTML

let userGoldid = document.querySelector("#userGold")
while (E !== "Golden"){
    weaponRoll()
    Eid = document.querySelector("#E")
    E = Eid.innerHTML
    userGoldid.innerHTML = `100000000000`
} 
//this is to get specific items