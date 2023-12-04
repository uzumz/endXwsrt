
function init(hero) {
    hero.setName("Cosmic axolot");
    hero.setTier(9);
    
    hero.setChestplate("item.superhero_armor.piece.torso");
    
    hero.addPowers("end:ax_physiology");
    hero.addAttribute("PUNCH_DAMAGE", 13.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 1.5, 0);
    hero.addAttribute("SPRINT_SPEED", 0.20, 1);
    hero.addAttribute("JUMP_HEIGHT", 2.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("BASE_SPEED_LEVELS", 3.0, 0);
    
    hero.addKeyBind("CHARGED_BEAM", "cold", 2);
    hero.addKeyBind("TELEPORT", "Teleport", 3);
    hero.addKeyBind("TELEKINESIS", "Telekinesis", 4);
    hero.addKeyBind("HEAT_VISION", "Vision", 5)

    hero.setDefaultScale(1.1);
    hero.setHasProperty(hasProperty);
}

function hasProperty(entity, property) {
    return property == "BREATHE_SPACE";
}
