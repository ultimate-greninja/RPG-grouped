// weaponRoll()
userHealth()// use in level up
// location.reload() // reloadthepagethinghere

function setCookie(cname, cvalue, exdays) { //from w3schools
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) { //from w3schools
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function Death(){
    let ALL = document.querySelector("body")
    ALL.innerHTML = `<div id = "deadText">You Died</div>
    <div hidden id = "userHealth">0<div>
    <div hidden id = "EnemyHealth">0<div>`
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
        weaponDurability = Math.ceil(weaponDurability * 1.5)
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

    return {effect,curse,unworthy,WeaponDurability,weaponPower,attackSpeed,levelUnlock}
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
    let weaponPullCost = amountPulled * 20
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
            let levelUnlock = curseAndEffect.levelUnlock

            itemWeaponDurability = Math.ceil(curseAndEffect.WeaponDurability)
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
            let itemWeaponName =""
            let curseName = ""
            if (curses.curse !== "none" || effect !== "none"){
                if (curses.curse !== "none" && effect !== "none"){
                    if (curses.curse == "Dull"){
                        curseName = "Dull"
                    }
                    else if (curses.curse == "Binding"){
                        curseName = "Bound"
                    }
                    else if (curses.curse == "Money Eating"){
                        curseName = "Greedy"
                    }
                    else if (curses.curse == "Wither"){
                        curseName = "Withering"
                    }
                    else if (curses.curse == "Brittle"){
                        curseName = "Brittle"
                    }
                    else if (curses.curse == "Madness"){
                        curseName = "Maddening"
                    }
                    else if (curses.curse == "Glass Cannon"){
                        curseName = "Shattering"
                    }
                    else if (curses.curse == "Slowness"){
                        curseName = "Slumberstrike"
                    }

                    if (effect == "Godly"){
                        itemWeaponName = `${itemWeaponRarity} ${curseName} ${itemTypeStore} of godly destruction`
                    }
                    else if (effect == "Burn"){
                        itemWeaponName = `${itemWeaponRarity} ${curseName} ${itemTypeStore} of hell`
                    }
                    else if (effect == "Poison"){
                        itemWeaponName = `${itemWeaponRarity} ${curseName} ${itemTypeStore} of plague`
                    }
                    else if (effect == "Decay"){
                        itemWeaponName = `${itemWeaponRarity} ${curseName} ${itemTypeStore} of rot`
                    }
                    else if (effect == "LifeSteal"){
                        itemWeaponName = `the vampires ${itemWeaponRarity} ${curseName} ${itemTypeStore} of LifeSteal`
                    }
                    else if (effect == "Golden"){
                        itemWeaponName = `${itemWeaponRarity} ${curseName} ${itemTypeStore} of wealth`
                    }
                    else if (effect == "Shock"){
                        itemWeaponName = `${itemWeaponRarity} ${curseName} ${itemTypeStore} of zeus`
                    }
                    else if (effect == "Healer"){
                        itemWeaponName = `${itemWeaponRarity} ${curseName} ${itemTypeStore} of pacifism`
                    }
                    else if (effect == "Sturdy"){
                        itemWeaponName = `${itemWeaponRarity} ${curseName} ${itemTypeStore} of perserverance`
                    }

                }
                else if (curses.curse !== "none" && effect == "none"){
                    if (curses.curse == "Dull"){
                        itemWeaponName = `${itemWeaponRarity} Cursed ${itemTypeStore} of Dullness`
                    }
                    else if (curses.curse == "Binding"){
                        itemWeaponName = `${itemWeaponRarity} Cursed ${itemTypeStore} of Binding`
                    }
                    else if (curses.curse == "Money Eater"){
                        itemWeaponName = `${itemWeaponRarity} Cursed ${itemTypeStore} of Greed`
                    }
                    else if (curses.curse == "Wither"){
                        itemWeaponName = `${itemWeaponRarity} Cursed ${itemTypeStore} of Withering`
                    }
                    else if (curses.curse == "Brittle"){
                        itemWeaponName = `${itemWeaponRarity} Cursed ${itemTypeStore} of Brittleness`
                    }
                    else if (curses.curse == "Madness"){
                        itemWeaponName = `${itemWeaponRarity} Cursed ${itemTypeStore} of Madness`
                    }
                    else if (curses.curse == "Glass Cannon"){
                        itemWeaponName = `${itemWeaponRarity} Cursed ${itemTypeStore} of Shattering`
                    }
                    else if (curses.curse == "Slowness"){
                        itemWeaponName = `${itemWeaponRarity} Cursed ${itemTypeStore} of Sloth`
                    }
                }
                else if (curses.curse == "none" && effect !== "none"){
                    if (effect == "Godly"){
                        itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of godly destruction`
                    }
                    else if (effect == "Burn"){
                        itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of hell`
                    }
                    else if (effect == "Poison"){
                        itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of plague`
                    }
                    else if (effect == "Decay"){
                        itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of rot`
                    }
                    else if (effect == "LifeSteal"){
                        itemWeaponName = `the vampires ${itemWeaponRarity} ${itemTypeStore} of Lifesteal`
                    }
                    else if (effect == "Golden"){
                        itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of wealth`
                    }
                    else if (effect == "Shock"){
                        itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of zeus`
                    }
                    else if (effect == "Healer"){
                        itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of pacifism`
                    }
                    else if (effect == "Sturdy"){
                        itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of perserverance`
                    }
                }
            }//qwertyuiop
            else{
                itemWeaponName = `${itemWeaponRarity} ${itemTypeStore}`
            }

            
            let baseSellPrice = (itemWeaponDurability * itemWeaponPower * itemAttackSpeed)/10000
            let itemSellPrice = Math.ceil(baseSellPrice * itemSellPriceMultiplier)
            let both = false

            if(effect !== "none" && curse !== "none"){
                both = true
            }
            if (effect !== "none" && both == false){
                itemSellPrice = Math.ceil(itemSellPrice * 1.5)//can change to represent the rarity
            }
            if (curse !== "none" && both == false){
                itemSellPrice = Math.ceil(itemSellPrice * 0.5)
            }

            let weapon = {itemWeaponName,itemWeaponRarity,itemTypeStore,itemWeaponPower,itemAttackSpeed,itemWeaponDurability,effect,curses,itemSellPrice}
            console.log(weapon)//weapon logged

            let RT = document.querySelector("#RT")
            let PAD = document.querySelector("#PAD")
            let ECW = document.querySelector("#ECW")
            let Price = document.querySelector("#Price")

            RT.innerHTML = `<p>you have unlocked a ${weapon.itemWeaponRarity} ${weapon.itemTypeStore}<p>`
            PAD.innerHTML = `<p>power: ${weapon.itemWeaponPower}, attack speed: ${weapon.itemAttackSpeed}, durability: ${weapon.itemWeaponDurability}<p>`
            ECW.innerHTML = `<p>effect: ${weapon.effect}, curse: ${weapon.curses.curse}, unworthy: ${weapon.curses.unworthy}<p>`
            Price.innerHTML = `<p>sell price: ${weapon.itemSellPrice} Gold</p>`

            amountPulled = amountPulled +1
            amountPulledid.innerHTML = amountPulled
            userGoldid.innerHTML = userGold

            // let WR = document.querySelector("#WR")
            // let TS = document.querySelector("#TS")
            // let WP = document.querySelector("#WP")
            // let AS = document.querySelector("#AS")
            // let WD = document.querySelector("#WD")
            // let E = document.querySelector("#E")
            // let C = document.querySelector("#C")
            // let UW = document.querySelector("#UW")
            // let SP = document.querySelector("#SP")
            let sellid = document.querySelector("#sell")
            let swingid = document.querySelector("#swing")

            // WR.innerHTML = `${weapon.itemWeaponRarity}`
            // TS.innerHTML = `${weapon.itemTypeStore}`
            // WP.innerHTML = `${weapon.itemWeaponPower}`
            // AS.innerHTML = `${weapon.itemAttackSpeed}`
            // WD.innerHTML = `${weapon.itemWeaponDurability}`
            // E.innerHTML = `${weapon.effect}`
            // C.innerHTML = `${weapon.curses.curse}`
            // UW.innerHTML = `${weapon.curses.unworthy}`
            // SP.innerHTML = `${weapon.itemSellPrice}`
            sellid.innerHTML = `<input id = "sellButton" type="button" onclick= "Sell()" value="Sell"/>`
            swingid.innerHTML = `<input id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>`
            
            setCookie("amountPulled",`${amountPulled}`,1)
            setCookie("gold",`${userGold}`,1)

            setCookie("levelUnlock",`${levelUnlock}`,1)

            setCookie("weaponName",`${weapon.itemWeaponName}`,1)
            setCookie("weaponRarity",`${weapon.itemWeaponRarity}`,1)
            setCookie("typeStore",`${weapon.itemTypeStore}`,1)
            setCookie("weaponPower",`${weapon.itemWeaponPower}`,1)
            setCookie("attackSpeed",`${weapon.itemAttackSpeed}`,1)
            setCookie("weaponDurability",`${weapon.itemWeaponDurability}`,1)
            setCookie("effect",`${weapon.effect}`,1)
            setCookie("curse",`${weapon.curses.curse}`,1)
            setCookie("worthyness",`${weapon.curses.unworthy}`,1)
            setCookie("sellPrice",`${weapon.itemSellPrice}`,1)
            location.reload()
        } 
            
    }
    else if (userGold < weaponPullCost){
        console.log("insufficient funds")
        userGoldid.innerHTML = userGold + 1
        setCookie("gold",`${userGold}`,1)
        console.log("here, have a pity coin")
    }

    else{
        console.log("logic error, weaponRoll")
    }

}

function EnemyHealth(){
    let expid = document.querySelector("#exp")
    let userLvid  = document.querySelector("#userLv")

    let exp = parseInt(expid.innerHTML)
    let userLv = parseInt(userLvid.innerHTML)

    let enemyHealth = Math.floor(Math.random() * (exp * (userLv - 1)) + exp*10);
    enemyHealth = enemyHealth + 100
    return (enemyHealth)
}

function EnemyRace(EH){
    let maxEnemyHealthid = document.querySelector('#maxEnemyHealth')

    let userLvid = document.querySelector("#userLv")

    let EASid = document.querySelector("#EnemySpeed")

    let EAid = document.querySelector("#EnemyAttack")

    let EHid = document.querySelector("#EnemyHealth")

    let ERid = document.querySelector("#EnemyRace")

    let ER = "none"

    let userLv = parseInt(userLvid.innerHTML)

    let EAS = 10

    let EA = 10 * userLv

    let chance = (Math.floor(Math.random()*100))+1

    if (chance < 26){
        chance = (Math.floor(Math.random()*200))+1
        if(chance < 26){
            ER = "Goblin Chief"
            EA = Math.ceil(EA * 1.5)
            EH = Math.ceil(EH * 1.5)
        }
        else{
            ER = "Goblin"
        }
    }
    else if (chance < 41){
        chance = (Math.floor(Math.random()*200))+1
        if (chance < 15){
            ER = "Orc Warlord"
            EA = Math.ceil(EA * 1.5)
            EAS = Math.ceil(EAS * 0.5)
        }
        else{
            ER = "Orc"
            EA = Math.ceil(EA * 2)
            EAS = Math.ceil(EAS * 0.5)
        }
    }
    else if(chance < 56){
        chance = (Math.floor(Math.random()*200))+1
        if (chance < 15){
            ER = "Kobold Shaman"
            EH = Math.ceil(EH * 1.5)
            //add confusion in attack(10%)
        }
        else{
            ER = "Kobold"
            EH = Math.ceil(EH * 1.5)
            //add confusion in attack (10%) and shock (25%)
        }
    }
    else if (chance < 66){
        chance = (Math.floor(Math.random()*200))+1
        if (chance < 15){
            ER = "Lich"
            EH = Math.ceil(EA * 4)
            //add decay in attack (50%)
            
        }
        else{
            ER = "Undead"
            EH = Math.ceil(EA * 4)
            EAS = Math.ceil(EAS * 0.5)
            EA = Math.ceil(EA * 0.5)
        }
    }
    else if (chance < 76){
        chance = (Math.floor(Math.random()*200))+1
        if (chance < 15){
            ER = "Gnoll Cheiftain"
            EAS = Math.ceil(EAS * 4)
            EA = Math.ceil(EA * 4)
        }
        else{
            ER = "Gnoll"
            EAS = Math.ceil(EAS * 2)
            EA = Math.ceil(EA * 2)
        }
    }
    else if (chance < 86){
        chance = (Math.floor(Math.random()*200))+1
        if (chance < 15){
            chance = (Math.floor(Math.random()*2))+1
            EAS = Math.ceil(EAS * 1.5)
            EA = Math.ceil(EA * 3)
            EH = Math.ceil(EH * 3)
            if (chance == 1){
                ER = "Dark Elf High Priest"
            }
            else if (chance == 2){
                ER = "Dark Elf High Priestess"
            }
            else{
                ER = "Dark Elf Preist / Priestess error"
            }
        }
        else{
            ER = "Dark Elf"
            EA = Math.ceil(EA * 2)
            EH = Math.ceil(EH * 2)
        }
    }
    else if (chance < 91){
        chance = (Math.floor(Math.random()*200))+1
        if (chance < 15){
            ER = "Hobgoblin Warlord"
            EA = Math.ceil(EA * 2)
            EH = Math.ceil(EH * 2)
        }
        else{
            ER = "Hobgoblin"
            EA = Math.ceil(EA * 1.5)
            EH = Math.ceil(EH * 1.5)
        }
    }
    else if (chance < 96){
        chance = (Math.floor(Math.random()*200))+1
        if (chance < 15){
            ER = "Demon Overlord"
            EA = Math.ceil(EA * 2.5)
            EH = Math.ceil(EH * 2.5)
            //infict burn on attack (100%)
        }
        else{
            ER = "Demon"
            EA = Math.ceil(EA * 1.5)
            EH = Math.ceil(EH * 1.5)
            //infict burn on attack (80%)
        }
    }
    else if (chance < 99){
        chance = (Math.floor(Math.random()*200))+1
        if (chance < 15){
            ER = "Troll King"
            EA = Math.ceil(EA * 3)
            EH = Math.ceil(EH * 6)
            EAS = Math.ceil(EA * 0.25)
            //lifesteal on attack (100%)
        }
        else{
            ER = "Troll"
            EA = Math.ceil(EA * 2)
            EH = Math.ceil(EH * 4)
            EAS = Math.ceil(EA * 0.25)
            //lifesteal on attack (100%)

        }
    }
    else if (chance <101){
        chance = (Math.floor(Math.random()*200))+1
        if (chance < 15){
            ER = "Ancient Dragon"
            EA = Math.ceil(EA * 10)
            EH = Math.ceil(EH * 10)
            //causes burn that does 2 * more than other burns (100%)
        }
        else{
            ER = "Dragon"
            EA = Math.ceil(EA * 5)
            EH = Math.ceil(EH * 5)
            //causes burn that does 2 * more than other burns (90%)
        }
    }
    else{
        console.log("enemy race logic error")
    }
    EH = EH + 100

    ERid.innerHTML = ER
    EASid.innerHTML = EAS
    EAid.innerHTML = EA
    EHid.innerHTML = EH 
    maxEnemyHealthid.innerHTML = EH
    setCookie("enemyRace",ER,1)
    setCookie("enemyAttackSpeed",EAS,1)
    setCookie("enemyAttack",EA,1)
    setCookie("enemyHealth",EH,1)
    setCookie("enemyMaxHealth",EH,1)

}

function Enemy(){
    let enemyHealthid = document.querySelector("#EnemyHealth")
    let enemyHealth = parseInt(enemyHealthid.innerHTML)


    if (enemyHealth <= 0){

        enemyHealth = EnemyHealth()
        EnemyRace(enemyHealth)
    }
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
    let Cid = document.querySelector("#C")

    let C = Cid.innerHTML
    let WP = parseInt(WPid.innerHTML)

    if (WP !== 0){
        WPcoin = Math.floor(WP /100)

        if (C == "Money Eater"){
            WPcoin = WPcoin/2
        }

        if (WPcoin < 1){
            WPcoin = 1
        }

        let userGold = parseInt(userGoldid.innerHTML)

        userGold = userGold + WPcoin

        userGoldid.innerHTML = `${userGold}`
    }
}

function swingDurabilityDamage(){
    let WNid = document.querySelector("#WN")
    let WN = WNid.innerHTML
    if (WN !== "Fists"){
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
        let swingid = document.querySelector("#swing")
        let sellid = document.querySelector("#sell")
        
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
            sellid.innerHTML = `<input disabled id = "sellButton" type="button" onclick= "Sell()" value="Sell"/>`
            swingid.innerHTML = `<input disabled id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>`
        }
        WDid.innerHTML = WD
        setCookie("weaponDurability",WD,1)
    }
}

function curseAndEffectUse(){

    let Eid = document.querySelector("#E")
    let Cid = document.querySelector("#C")
    let enemyHealthid = document.querySelector("#EnemyHealth")
    let WPid = document.querySelector("#WP")
    let BAid = document.querySelector("#BA")
    let PAid = document.querySelector("#PA")
    let DAid = document.querySelector("#DA")
    let userHealthid = document.querySelector("#userHealth")

    let BA = BAid.innerHTML
    let PA = PAid.innerHTML
    let DA = DAid.innerHTML 

    let userHealth =parseInt(userHealthid.innerHTML)
    let WP = parseInt(WPid.innerHTML)
    let enemyHealth = parseInt(enemyHealthid.innerHTML)
    let E = Eid.innerHTML
    let C = Cid.innerHTML

    let intervalId;
    let elapsedTime = 0
    let damageMultiplier = 1


    if (E !== "none" || C !== "none"){
        //effects and curses here
        if (E == "Godly"){
            chance = Math.floor(Math.random()*64)+1
            if (chance == 43){
                damageMultiplier = 1000
            }
        }
        if (E == "Burn" && BA == "false"){
            BAid.innerHTML = `true`

            intervalId = setInterval(() => {

                enemyHealthid = document.querySelector("#EnemyHealth")
                
                enemyHealth = parseInt(enemyHealthid.innerHTML)

                WP = Math.floor(WP / 144)

                if (WP == 0){
                    WP = 1
                }

                if (enemyHealth !== 0){
                    enemyHealth = enemyHealth - WP
                    setCookie("enemyHealth",enemyHealth,1)
                }

                if (enemyHealth < 0 ){
                    enemyHealth = 0
                }

                enemyHealthid.innerHTML = `${enemyHealth}`
                elapsedTime += 3000; // 3000 milliseconds = 3 seconds
                    if (elapsedTime >= (1 * 60 * 1000) || enemyHealth <= 0) {
                        clearInterval(intervalId); // Stop the interval after 1 minute
                        BAid.innerHTML = `false`
                    }
                },3000)
        }
        
        if (E == "Poison" && PA == "false"){
            PAid.innerHTML = `true`

            intervalId = setInterval(() => {

                enemyHealthid = document.querySelector("#EnemyHealth")
                
                enemyHealth = parseInt(enemyHealthid.innerHTML)

                WP = Math.floor(WP / 48)

                if (WP == 0){
                    WP = 1
                }

                if (enemyHealth !== 0){
                    enemyHealth = enemyHealth - WP
                    setCookie("enemyHealth",enemyHealth,1)
                }

                if (enemyHealth < 0 ){
                    enemyHealth = 0
                }

                enemyHealthid.innerHTML = `${enemyHealth}`
                elapsedTime += 10000; // 3000 milliseconds = 3 seconds
                    if (elapsedTime >= (3 * 60 * 1000) || enemyHealth <= 0) {
                        clearInterval(intervalId); // Stop the interval after 1 minute
                        PAid.innerHTML = `false`
                    }
                
                },10000)
        }

        if (E == "Decay" && DA == "false"){
            DAid.innerHTML = `true`
            
            intervalId = setInterval(() => {

                enemyHealthid = document.querySelector("#EnemyHealth")
                
                enemyHealth = parseInt(enemyHealthid.innerHTML)

                WP = Math.floor(WP / 24)

                if (WP == 0){
                    WP = 1
                }

                if (enemyHealth !== 0){
                    enemyHealth = enemyHealth - WP
                    setCookie("enemyHealth",enemyHealth,1)

                }

                if (enemyHealth < 0 ){
                    enemyHealth = 0
                }

                enemyHealthid.innerHTML = `${enemyHealth}`
                elapsedTime += 10000; // 10000 milliseconds = 10 seconds
                    if (elapsedTime >= (3 * 60 * 1000) || enemyHealth <= 0) {
                        clearInterval(intervalId); // Stop the interval after 3 minute
                        DAid.innerHTML = `false`
                    }
                
                },10000)
        }

        if (E == "Golden"){
            swingCoins()
        }

        if (E == "LifeSteal"){
            let lifeGain = WP/10
            userHealth = userHealth + lifeGain
            userHealthid.innerHTML = userHealth
        }

        if (E == "Shock"){
            shockDamage = WP/4
            enemyHealth = enemyHealth - shockDamage
            enemyHealthid.innerHTML = enemyHealth
            setCookie("enemyHealth",enemyHealth,1)
        }
        //next curse here

        
        
    }
    swingPart2(damageMultiplier)
    

}

function enemyHealthDamage(damageMultiplier){
    let WPid = document.querySelector("#WP")
    let enemyHealthid = document.querySelector("#EnemyHealth")
    let Eid = document.querySelector("#E")
    let userHealthid = document.querySelector("#userHealth")
    let maxUserHealthid = document.querySelector("#maxUserHealth")

    let maxUserHealth = parseInt(maxUserHealthid.innerHTML) 
    let userHealth = parseInt(userHealthid.innerHTML) 
    let E = Eid.innerHTML
    let WP = parseInt(WPid.innerHTML)
    let enemyHealth = parseInt(enemyHealthid.innerHTML)

    if (E == "Healer"){
        Heal = WP * damageMultiplier
        userHealth = userHealth + Heal
        if (userHealth <= maxUserHealth){
            UserHealthid.innerHTML = maxUserHealth
        }
        else{
            userHealthid.innerHTML = userHealth
        }
    }
    else{
        WP = WP * damageMultiplier

        enemyHealth = enemyHealth - WP
        setCookie("enemyHealth",enemyHealth,1)
    }

    let maxEnemyHealthid = document.querySelector("#maxEnemyHealth")

    let maxEnemyHealth = maxEnemyHealthid.innerHTML

    let userGoldid = document.querySelector('#userGold')

    let userGold = parseInt(userGoldid.innerHTML)

    if (enemyHealth < 0){
        enemyHealth = 0
    }
    if (enemyHealth <= 0){
        let corpseGold = Math.ceil(maxEnemyHealth / 20)
        console.log(corpseGold,maxEnemyHealth)
        userGold = parseInt(userGold) + parseInt(corpseGold)
        userGoldid.innerHTML = userGold 

        chance = Math.floor(Math.random()*8192)+1
        //waypoint\\
        if (chance <= 2048){
            setCookie("ore","ironite",1)
        }
        else if (chance <= 3072){
            setCookie("ore","steelite",1)
        }
        else if (chance <= 3584){
            setCookie("ore","siverium",1)
        }
        else if (chance <= 3840){
            setCookie("ore","goldforge",1)
        }
        else if (chance <= 3968){
            setCookie("ore","platium",1)
        }
        else if (chance <= 4032){
            setCookie("ore","mythril",1)
        }
        else if (chance <= 4064){
            setCookie("ore","stardustium",1)
        }
        else if (chance <= 4080){
            setCookie("ore","etherium",1)
        }
        else if (chance <= 4088){
            setCookie("ore","celestium",1)
        }
        else if (chance <= 4092){
            setCookie("ore","etherium",1)
        }
        else if (chance <= 4094){
            setCookie("ore","celestium",1)
        }
        else if (chance <= 4095){
            setCookie("ore","numinite",1)
        }
        else{
            console.log("no ore drops")
        }
    }

    enemyHealthid.innerHTML = `${enemyHealth}` 

}
function userHealth(){
    let userLvid = document.querySelector("#userLv")
    let userLv = parseInt(userLvid.innerHTML)

    let healthid = document.querySelector("#userHealth")
    let health = parseInt(healthid.innerHTML)
    health = 50 + ((userLv * userLv) * 50)
    setCookie("userHealth",health,1)
    setCookie("maxUserHealth",health,1)
}

function enemyAttack(){
    let EnemyRaceid = document.querySelector("#EnemyRace")
    let EnemyRace = EnemyRaceid.innerHTML

    let EnemyHealthid = document.querySelector("#EnemyHealth")
    let EnemyHealth = parseInt(EnemyHealthid.innerHTML)

    let EnemyAttackid = document.querySelector("#EnemyAttack")
    let EnemyAttack = parseInt(EnemyAttackid.innerHTML)

    let UserHealthid = document.querySelector("#userHealth")
    let UserHealth = parseInt(UserHealthid.innerHTML)

    UserHealth = UserHealth - EnemyAttack

    UserHealthid.innerHTML = UserHealth

    if (UserHealth <= 0){
      Death()
    }
    if(EnemyRace == "Kobold"){
        console.log("confusion 10%")
    }
    else if(EnemyRace == "Kobold Shaman"){
        console.log("confusion 10%")
        console.log("shock 25%")
    }
    else if(EnemyRace == "Lich"){
        console.log("decay 50%")
    }
    else if(EnemyRace == "Dark Elf"){
        console.log("decay  75%")
    }
    else if(EnemyRace == "Dark Elf High Priest" || EnemyRace == "Dark Elf High Priestess"){
        console.log("decay 90%")
    }
    else if(EnemyRace == "Demon"){
        console.log("burn 80%")
    }
    else if(EnemyRace == "Demon Overlord"){
        console.log("burn 100%")
    }
    else if(EnemyRace == "Troll" || EnemyRace == "Troll King"){
        console.log("lifesteal 100%")
    }
    else if(EnemyRace == "Dragon" || EnemyRace == "Ancient Dragon"){
        console.log("advanced burn 90%")
    }
    //waypoint(EAC)
}
function enemyTurn(){
    
    enemyAttack()   
}


function swingPart1(){
    let swingid = document.querySelector("#swing")
    swingid.innerHTML = `<input disabled id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>`    

    Enemy()
    swingExp()
    swingCoins()
    swingDurabilityDamage()
    curseAndEffectUse()
}
function swingPart2(damageMultiplier){
    let attackSpeedid = document.querySelector("#AS")
    let attackSpeed = parseInt(attackSpeedid.innerHTML) 
    let speed = 5/attackSpeed
    let swingid = document.querySelector("#swing")
    swingid.innerHTML = `<input disabled id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>`

    enemyHealthDamage(damageMultiplier)
    if (attackSpeed !== 0){
        setTimeout(() => { 
            
            let swingid = document.querySelector("#swing")
            swingid.innerHTML = `<input id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>`
        }, (speed * 1000))
    }
    enemyTurnIterative()
    let SAid = document.querySelector("#SA")
    SAid.innerHTML = `false`

}

// setInterval(() => {
// every 5 seconds
//     elapsedTime += 5000; // 5000 milliseconds = 5 seconds
//         if (elapsedTime >= 3 * 60 * 1000) {
//             clearInterval(intervalId); // Stop the interval after 3 minutes
//         } 
// },5000)

//change depending if you want to pick or not for testing
let weaponPick = false

let Eid = document.querySelector("#E")
let E = Eid.innerHTML

let TSid = document.querySelector("#TS")
let TS = TSid.innerHTML

let WRid = document.querySelector("#WR")
let WR = WRid.innerHTML

let userGoldid = document.querySelector("#userGold")
while ((E !== "Healer" || WR !== "Common") && weaponPick == true){
    weaponRoll()
    TSid = document.querySelector("#E")
    TS = TSid.innerHTML
    WRid = document.querySelector("#WR")
    WR = WRid.innerHTML
    console.log(TS,WR)
    userGoldid.innerHTML = `100000000000`
} 
//this is to get specific items

let WNid = document.querySelector("#WN")
let WN = WNid.innerHTML
// if (WN == "Fists"){
//     //put exeption code here
// }
// else if ("condition here" == "put it here"){
//     //normal code here
// }

function enemyTurnIterative(){
    let SAid = document.querySelector("#SA")

    if (SAid.innerHTML == "true"){
        let enemySpeedid = document.querySelector("#EnemySpeed")

        let enemyHealthid = document.querySelector("#EnemyHealth")

        let enemySpeed = enemySpeedid.innerHTML
        
        enemySpeed = (100/enemySpeed)*2000

        let intervalId = setInterval(() => {

            let UserHealthid = document.querySelector("#userHealth")

            enemyHealthid = document.querySelector("#EnemyHealth")
            
            let enemyHealth = parseInt(enemyHealthid.innerHTML)
            
            if (UserHealthid.innerHTML <= 0){
                clearInterval(intervalId);
            }

            if (enemyHealth <= 0) {
                clearInterval(intervalId)  
                SAid.innerHTML = `true`
            }
            

            // if (enemyHealth <= 0) {
            //     clearInterval(intervalId); 
            //     SAid.innerHTML = `true`
            //     let corpseGold = maxEnemyHealth / 20
            //     console.log(corpseGold,maxEnemyHealth)
            //     userGold = parseInt(userGold) + parseInt(corpseGold)
            //     userGoldid.innerHTML = userGold    
            // }
            if (SAid.innerHTML !== "true"){
                enemyTurn()
            }
            },enemySpeed)
        }
    }
    function Sell(){
        let WNid = document.querySelector("#WN")
        let WN = WNid.innerHTML
        if (WN == "Fists"){
            console.log ("you can't sell your fists")
        }
        else{
            let sellid = document.querySelector("#sell")
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
            let userGoldid = document.querySelector("#userGold")
            let swingid = document.querySelector("#swing")

            let userGold = parseInt(userGoldid.innerHTML)
            let SP = parseInt(SPid.innerHTML)
            
            userGoldid.innerHTML = userGold + SP

            sellid.innerHTML = `<input disabled id = "sellButton" type="button" onclick= "Sell()" value="Sell"/>`
            swingid.innerHTML = `<input disabled id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>`
            WDid.innerHTML = 0
            WRid.innerHTML = `none`
            TSid.innerHTML = `none`
            WPid.innerHTML = 0
            ASid.innerHTML = 0
            Eid.innerHTML = `none`
            Cid.innerHTML = `none`
            UWid.innerHTML = ``
            SPid.innerHTML = `N/A`

            RTid.innerHTML = `item sold`
            PADid.innerHTML = `<p></p>`
            ECWid.innerHTML = `<p></p>`
            Priceid.innerHTML =`<p></p>`
            setCookie("broke","broke",1)

        }    
    }
    function allCookiesMake(){
        let maxUserHealthid = document.querySelector("#maxUserHealth")
        let userHealthid = document.querySelector("#userHealth")
        let userGoldid = document.querySelector("#userGold")
        let userLvid = document.querySelector("#userLv")
        let expid = document.querySelector("#exp")
        let amountPulledid = document.querySelector("#amountPulled")
        setCookie("maxUserHealth",maxUserHealthid.innerHTML,1)
        setCookie("userHealth",userHealthid.innerHTML,1)
        setCookie("gold",userGoldid.innerHTML,1)
        setCookie("userLv",userLvid.innerHTML,1)
        setCookie("exp",expid.innerHTML,1)
        setCookie("amountPulled",amountPulledid.innerHTML,1)
    }
    allCookiesMake()