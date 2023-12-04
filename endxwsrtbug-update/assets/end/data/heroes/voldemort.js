var landing = implement("end:external/superhero_landing_1");

function init(hero) {
    hero.setName("Voldemort");
    hero.setTier(6);

    hero.setHelmet("item.superhero_armor.piece.cowl");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");

    hero.addPowers("end:avada_kedavra")
    hero.addAttribute("PUNCH_DAMAGE", 1000.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("SPRINT_SPEED", 0.3, 1);
    hero.addAttribute("FALL_RESISTANCE", 3.0, 0);
    hero.addAttribute("STEP_HEIGHT", 0.5, 0);
    
    hero.addKeyBind("SHIELD", "Asa", 1);
    hero.addKeyBind("TELEKINESIS", "telekinezi", 2);
    hero.addKeyBind("TELEPORT", "cisimlenme", 3);
    hero.addKeyBind("CHARGED_BEAM", "Avada Kedavraaaaa!", 4);

    hero.setKeyBindEnabled(isKeyBindEnabled);
    hero.setTickHandler((entity, manager) => {
         landing.tick(entity, manager);
    });

    hero.addAttributeProfile("SHIELD", shieldProfile);
    hero.setAttributeProfile(getProfile);
    hero.setDamageProfile(getProfile);
    hero.addDamageProfile("SHIELD", {"types": {"SHARP": 1.0}});
}

function shieldProfile(profile) {
    profile.inheritDefaults();
    profile.addAttribute("PUNCH_DAMAGE", 20.0, 0);
}

function getProfile(entity) {
    return entity.getData("fiskheroes:shield") ? "SHIELD" : null;
}

function isKeyBindEnabled(entity, keyBind) {
    switch (keyBind) {
        case "CHARGED_BEAM":
            return entity.getData("fiskheroes:shield");
        case "TELEPORT":
            return entity.getData("fiskheroes:shield");
    default:
        return true;
    }
}
