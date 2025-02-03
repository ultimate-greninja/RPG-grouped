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

class User{
    constructor(userHealth,gold,level,exp){
        this.level = level
        this.exp = exp
        this.expNeedLvUp = this.expNeedLvUpCalc(10)
        this.maxUserHealth = 50 + ((this.level * this.level) * 50)
        this.userHealth = userHealth
        this.gold = gold
    }
    expNeedLvUpCalc(Lv1Base){
        if (this.level == 1){
            return(Lv1Base)
        } 
        else if (this.level == 2){
            let prevExpNeedLvUp = Lv1Base
            return(prevExpNeedLvUp * 2)
        }
        else if (this.level > 2 || this.level < 5){
            let prevExpNeedLvUp= 20
            for (let i = 2; i < this.level; i++) {
                prevExpNeedLvUp = prevExpNeedLvUp * 2
                console.log("prevExpNeedLvUp:",prevExpNeedLvUp,"i:",i,"level:",this.level,"muliplier:",2,"next:",prevExpNeedLvUp * 2)     
            }
        }
        else if (this.level > 5){
            let prevExpNeedLvUp= 80
            for (let i = 5; i < this.level; i++) {
                prevExpNeedLvUp = prevExpNeedLvUp * (Math.ceil(i/4))
                console.log("prevExpNeedLvUp:",prevExpNeedLvUp,"i:",i,"level:",this.level,"muliplier:",Math.ceil(i/4),"next:",prevExpNeedLvUp * (Math.ceil(this.level/2)))     
            }
            return(prevExpNeedLvUp * (Math.ceil(this.level/4)))

        }
        else{
            console.log("exp logic error")
        }
    }
    death() {
        let all = document.querySelector("body")
        all.innerHTML = `<div id = "deadText">You Died</div>
        <div hidden id = "userHealth">0</div>
        <div hidden id = "EnemyHealth">0</div>`
    }
    levelUp(){
        let prevMaxHP = this.maxUserHealth
        console.log("maxUserHealth",this.maxUserHealth,"level:",this.level)
        this.level++
        this.maxUserHealth = ((this.level * this.level)*50)+ 50
        this.userHealth = this.maxUserHealth
        this.expNeedLvUp = this.expNeedLvUpCalc(10)
        console.log("prevMaxHP:",prevMaxHP,"maxUserHealth",this.maxUserHealth,"level:",this.level)
    }

    // check(){
    //     console.log(this.maxUserHealth, this.userHealth, this.gold, this.level, this.exp)
    // }
}
class Enemy{
    constructor(enemyType,enemyMaxHealth,enemyCurrentHealth,enemyAttack,enemyAttackSpeed){
        this.enemyType = enemyType
        this.enemyMaxHealth = enemyMaxHealth
        this.enemyCurrentHealth = enemyCurrentHealth
        this.corpseGold = Math.ceil(enemyMaxHealth / 20)
        this.enemyAttack = enemyAttack
        this.enemyAttackSpeed = enemyAttackSpeed
    }
    EnemyHealth(){
        let expid = document.querySelector("#exp")
        let userLvid  = document.querySelector("#userLv")
    
        let exp = parseInt(expid.innerHTML)
        let userLv = parseInt(userLvid.innerHTML)
    
        let enemyHealth = Math.floor(Math.random() * (exp * (userLv - 1)) + exp*10);
        enemyHealth = enemyHealth + 100
        return (enemyHealth)
    }
    EnemyRace(EH){
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
    enemyGen(){
        let enemyHealth = this.EnemyHealth()
        this.EnemyRace(enemyHealth)
    }
    enemyHealthDamage(damageMultiplier){
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
    
            this.enemyHealth = enemyHealth - WP
            setCookie("enemyHealth",this.enemyHealth,1)
            
        }
    
        let maxEnemyHealthid = document.querySelector("#maxEnemyHealth")
    
        let maxEnemyHealth = maxEnemyHealthid.innerHTML
    
        let userGoldid = document.querySelector('#userGold')
    
        let userGold = parseInt(userGoldid.innerHTML)
    
        if (enemyHealth < 0){
            enemyHealth = 0
        }
        if (enemyHealth <= 0){
            console.log(this.corpseGold,maxEnemyHealth)
            userGold = parseInt(userGold) + parseInt(this.corpseGold)
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
    enemyDeadCheck(){

    }
}
class Weapon{
    constructor(weaponName,weaponRarity,weaponRarityNumber,weaponPower,weaponAttackSpeed,weaponDurability,effect,curse,worthyness,sellPrice){
        this.weaponName = weaponName
        this.weaponRarity = weaponRarity
        this.weaponRarityNumber = weaponRarityNumber
        this.weaponPower = weaponPower
        this.weaponAttackSpeed = weaponAttackSpeed
        this.weaponDurability = weaponDurability
        this.effect = effect
        this.curse = curse
        this.worthyness = worthyness
    }
    weaponType(weaponPower,weaponDurability,itemSellPriceMultiplier){
        let attackSpeed = 10
        let alwaysSpEffect = false
        let weaponType = ""
        let chance = (Math.floor(Math.random()*100))+1
    
        if (chance < 21){
            weaponType = "Scythe"
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
            itemSellPriceMultiplier = itemSellPriceMultiplier * 3
            alwaysSpEffect = true
        }
    
        else{
            console.log("logic error, function weaponType")
        }
    
        return {weaponType,weaponPower,attackSpeed,alwaysSpEffect,weaponDurability,itemSellPriceMultiplier}
    }
    rarity(baseWeaponPower,baseWeaponDurability,weaponPullCost,amountPulled){

        let chance = (Math.floor(Math.random()*4096))+1
        if (amountPulled == 0){
            chance =  (Math.floor(Math.random()*3840))+1
        }
        let weaponRarityNum = 0
        let weaponRarity = null
        let weaponPower = 0
        let WeaponDurability = 0
        let fail = false
        let refund = 0
        let itemSellPriceMultiplier = 1
    
        if (chance <= 2048){
            weaponRarity = "Common"
            weaponPower = baseWeaponPower * 1
            WeaponDurability = baseWeaponDurability * 2.5
            itemSellPriceMultiplier = 1
            weaponRarityNum = 1
        }
    
        else if (chance <= 3072){
            weaponRarity = "Uncommon"
            weaponPower = baseWeaponPower * 2
            WeaponDurability = baseWeaponDurability * 4.5
            itemSellPriceMultiplier = 2
            weaponRarityNum = 2
        }
    
        else if (chance <= 3584){
            weaponRarity = "Rare"
            weaponPower = baseWeaponPower * 3
            WeaponDurability = baseWeaponDurability * 6.5
            itemSellPriceMultiplier = 3
            weaponRarityNum = 3
        }
    
        else if (chance <= 3840){
            weaponRarity = "Epic"
            weaponPower = baseWeaponPower * 4
            WeaponDurability = baseWeaponDurability * 8.5
            itemSellPriceMultiplier = 4
            weaponRarityNum = 4
        }
    
        else if (chance <= 3968){
            weaponRarity = "Legendary"
            weaponPower = baseWeaponPower * 5
            WeaponDurability = baseWeaponDurability * 10.5
            itemSellPriceMultiplier = 5
            weaponRarityNum = 5
        }
    
        else if (chance <= 4032){
            weaponRarity = "Mythical"
            weaponPower = baseWeaponPower * 6
            WeaponDurability = baseWeaponDurability * 12.5
            itemSellPriceMultiplier = 6
            weaponRarityNum = 6
        }
    
        else if (chance <= 4064){
            weaponRarity = "Cosmic"
            weaponPower = baseWeaponPower * 7
            WeaponDurability = baseWeaponDurability * 14.5
            itemSellPriceMultiplier = 7
            weaponRarityNum = 7
        }
    
        else if (chance <= 4080){
            weaponRarity = "Universal"
            weaponPower = baseWeaponPower * 8
            WeaponDurability = baseWeaponDurability * 16.5
            itemSellPriceMultiplier = 8
            weaponRarityNum = 8
        }
    
        else if (chance <= 4088){
            weaponRarity = "Divine"
            weaponPower = baseWeaponPower * 9
            WeaponDurability = baseWeaponDurability * 18.5
            itemSellPriceMultiplier = 9
            weaponRarityNum = 9
        }
    
        else if (chance <= 4092){
            weaponRarity = "Celestial"
            weaponPower = baseWeaponPower * 10
            WeaponDurability = baseWeaponDurability * 20.5
            itemSellPriceMultiplier = 10
            weaponRarityNum = 10
        }
    
        else if (chance <= 4094){
            weaponRarity = "Transendant"
            weaponPower = baseWeaponPower * 11
            WeaponDurability = baseWeaponDurability * 22.5
            itemSellPriceMultiplier = 11
            weaponRarityNum = 11
        }
    
        else if (chance <= 4095){
            weaponRarity = "Reality"
            weaponPower = baseWeaponPower * 12
            WeaponDurability = baseWeaponDurability * 24.5
            itemSellPriceMultiplier = 12
            weaponRarityNum = 12
        }
    
        else if (chance <= 4096){
            refund = weaponPullCost/4
            fail = true
        }
    
        else{
            console.log("logic error, rarity function ")
        }
    
        return {weaponRarity,refund,fail,weaponPower,WeaponDurability,itemSellPriceMultiplier,weaponRarityNum}
    }
    effectAndCurse(itemRarity,alwaysSpEffect,userLv,WeaponDurability,weaponPower,attackSpeed){
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
    weaponRoll(){

        let userGoldid = document.querySelector("#userGold")
        let userLvid  = document.querySelector("#userLv")
        let amountPulledid = document.querySelector("#amountPulled")
        let expid = document.querySelector("#exp")
        let weaponRollid = document.querySelector("#weaponRoll")
    
        let userGold = parseInt(userGoldid.innerHTML)
        let userLv = parseInt(userLvid.innerHTML)
        let amountPulled = parseInt(amountPulledid.innerHTML)
        let exp = parseInt(expid.innerHTML)
    
        let baseWeaponPower = userLv * 50
        let weaponPullCost = amountPulled * 20
        let baseWeaponDurability = userLv * 100
        if (userGold >= weaponPullCost){
    
            // weaponRollid.innerHTML = `<input type="button" onclick= "weaponRoll()" value="Weapon roll" disabled/>`
    
            userGold = userGold - weaponPullCost
            let itemRarity = this.rarity(baseWeaponPower,baseWeaponDurability,weaponPullCost,amountPulled)
    
            if (itemRarity.fail == true){
                console.log("refund")
                // replace with innerHtml
                userGold = userGold + (weaponPullCost/4)
            }
    
            else{
                let itemWeaponRarity = itemRarity.weaponRarity
                let itemWeaponDurability = itemRarity.WeaponDurability
                let itemSellPriceMultiplier = itemRarity.itemSellPriceMultiplier
                let weaponRarityNum =itemRarity.weaponRarityNum
    
                let itemType = this.weaponType(itemRarity.weaponPower,itemWeaponDurability,itemSellPriceMultiplier)
                let itemWeaponPower = itemType.weaponPower
                let itemAttackSpeed = itemType.attackSpeed
                let alwaysSpCheck = itemType.alwaysSpEffect
                let itemTypeStore = itemType.weaponType
                itemSellPriceMultiplier = itemType.itemSellPriceMultiplier
                console.log(itemSellPriceMultiplier)
    
                itemWeaponDurability = itemType.weaponDurability
    
                let curseAndEffect = this.effectAndCurse(itemWeaponRarity,alwaysSpCheck,userLv,itemWeaponDurability,itemWeaponPower,itemAttackSpeed)
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
                            itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of Godly Destruction`
                        }
                        else if (effect == "Burn"){
                            itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of Hell`
                        }
                        else if (effect == "Poison"){
                            itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of Plague`
                        }
                        else if (effect == "Decay"){
                            itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of Rot`
                        }
                        else if (effect == "LifeSteal"){
                            itemWeaponName = `The Vampires ${itemWeaponRarity} ${itemTypeStore} of Lifesteal`
                        }
                        else if (effect == "Golden"){
                            itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of Wealth`
                        }
                        else if (effect == "Shock"){
                            itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of Zeus`
                        }
                        else if (effect == "Healer"){
                            itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of Pacifism`
                        }
                        else if (effect == "Sturdy"){
                            itemWeaponName = `${itemWeaponRarity} ${itemTypeStore} of Perserverance`
                        }
                    }
                }
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
    
                amountPulled = amountPulled + 1
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
                setCookie("weaponRarityNum",`${weaponRarityNum}`,1)
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
    sell(){
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

            WNid.innerHTML = `Fists`
            WRid.innerHTML = `Common`
            TSid.innerHTML = `fists`
            WPid.innerHTML = `1`
            ASid.innerHTML = `20`
            WDid.innerHTML = `1000000000`
            Eid.innerHTML = `none`
            Cid.innerHTML = `none`
            UWid.innerHTML = `worthy`
            SPid.innerHTML = `N/A`
    
            RTid.innerHTML = `item sold`
            PADid.innerHTML = `<p>Fists Equipped</p>`
            ECWid.innerHTML = `<p></p>`
            Priceid.innerHTML =`<p></p>`
            sellid.innerHTML = `<input disabled id = "sellButton" type="button" onclick= "Sell()" value="Sell"/>`
            swingid.innerHTML = `<input disabled id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>`
            setCookie("weaponEquipFists",true,1)
        }    
    }
    swingDurabilityDamage(){
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
            let WNid = document.querySelector("WN")
    
            let WD = parseInt(WDid.innerHTML)
            let WP = parseInt(WPid.innerHTML)
    
            let weaponDamage = Math.floor((Math.random() * ((WP / 2) - ((WP / 5) + 1)) + WP / 5)/1.5);
            WD = WD - weaponDamage
            if (WD <= 0){
                WD = 0
                WNid.innerHTML = `Fists`
                WRid.innerHTML = `Common`
                TSid.innerHTML = `fists`
                WPid.innerHTML = `1`
                ASid.innerHTML = `20`
                Eid.innerHTML = `none`
                Cid.innerHTML = `none`
                UWid.innerHTML = `worthy`
                SPid.innerHTML = `N/A`
    
                RTid.innerHTML = `item broke`
                PADid.innerHTML = `<p>Fists Equipped</p>`
                ECWid.innerHTML = `<p></p>`
                Priceid.innerHTML =`<p></p>`
                sellid.innerHTML = `<input disabled id = "sellButton" type="button" onclick= "Sell()" value="Sell"/>`
                swingid.innerHTML = `<input disabled id = "swingButton" type="button" onclick= "swingPart1()" value="Swing"/>`
                setCookie("weaponEquipFists",true,1)
            }
            WDid.innerHTML = WD
            setCookie("weaponDurability",WD,1)
        }
    }
}
class Game{//for the attacks
    constructor(weapon,enemy,user){
        this.weapon = weapon
        this.enemy = enemy
        this.user = user
    }
    swingExp(){
        this.user.exp = this.user.exp + this.weapon.weaponPower
        if (this.user.exp >= this.user.expNeedLvUp){
            this.user.levelUp()
        }
    }
    swingGold(){
        let swingGold = this.weapon.weaponPower/100

        if (this.weapon.curse == "Money Eater"){
            swingGold = swingGold/2
        }
        if (swingGold < 1){
            swingGold = 1
        }
        this.user.gold = this.user.gold + swingGold
    }
    swing(){
        this.swingExp()
        this.swingGold()
        this.weapon.swingDurabilityDamage()
    }
    //keeping this for example for myself
    // changeTest(){
    //     console.log(this.user.maxUserHealth)
    //     this.user.levelUp()
    //     console.log(this.user.maxUserHealth)
    //     let change = document.querySelector("#textChange")
    //     change.innerHTML = `<div style = "font-size:128px; color:#20e680;">changed</div>`
    // }
    //keeping this for example for myself
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
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
allCookiesMake()
let enemyRaceCookie = getCookie("EnemyRace")
let enemyMaxHealthCookie = getCookie("enemyMaxHealth")
let enemyCurrentHealthCookie = getCookie("enemyHealth")
let enemyAttackCookie = getCookie("enemyAttack")
let enemyAttackSpeedCookie = getCookie("enemyAttackSpeed")
let userHealthCookie = getCookie("userHealth")
let goldCookie = getCookie("gold")
let userLvCookie = getCookie("userLv")
let expCookie = getCookie("exp")
let weapon = new Weapon()//add perameters
let enemy = new Enemy(enemyRaceCookie,enemyMaxHealthCookie,enemyCurrentHealthCookie,enemyAttackCookie,enemyAttackSpeedCookie)//add perameters enemyType,enemyMaxHealth,enemyCurrentHealth,enemyAttack,enemyAttackSpeed
let user = new User(userHealthCookie,goldCookie,userLvCookie,expCookie)
let game = new Game(weapon,enemy,user)
// user.check()
// user.levelUp()
// user.check()
// game.changeTest()
// user.check()
// user.levelUp()

