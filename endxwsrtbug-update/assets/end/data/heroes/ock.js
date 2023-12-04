function init(hero) {
    hero.setName("Ock-Arm"); 
    hero.setTier(1); 
    

    hero.setChestplate("item.superhero_armor.piece.chestpiece"); 
    
    hero.addPowers("fiskheroes:mechanical_smart_arms"); 
    hero.addAttribute("PUNCH_DAMAGE", 4.5, 0); 
    hero.addAttribute("WEAPON_DAMAGE", 4.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 4, 0);
    hero.addAttribute("SPRINT_SPEED", 0.2, 1);

    hero.addKeyBind("TENTACLE_JAB", "key.tentacleJab", 1);
    hero.addKeyBind("TENTACLE_GRAB", "key.tentacleGrab", 2);
    hero.addKeyBind("TENTACLE_STRIKE", "key.tentacleStrike", 3);
    hero.addKeyBind("TENTACLES", "key.tentacles", 5);

    hero.setKeyBindEnabled(isKeyBindEnabled);
}
function isKeyBindEnabled(entity, keyBind) {
    return keyBind == "TENTACLES" || entity.getData("fiskheroes:tentacles") != null;
}

