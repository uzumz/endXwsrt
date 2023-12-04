var speedster_base = implement("fiskheroes:external/speedster_base");

function init(hero) {
    hero.setName("power_flash");
    hero.setTier(5);
    
    hero.setHelmet("item.superhero_armor.piece.cowl");
    hero.setChestplate("suit");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");

    hero.addPowers("end:speed");
    hero.addAttribute("PUNCH_DAMAGE", 5.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 0.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 4.0, 0);
    hero.addAttribute("BASE_SPEED_LEVELS", 5.0, 0);

    hero.addKeyBind("SUPER_SPEED", "key.superSpeed", 1);
    hero.addKeyBind("SLOW_MOTION", "key.slowMotion", 2);
    hero.addKeyBind("SPELL_MENU", "clones", 3);
    
    hero.setHasProperty((entity, property) => property == "MASK_TOGGLE");

    var speedPunch = speedster_base.createSpeedPunch(hero);
    hero.setDamageProfile(entity => speedPunch.get(entity, null));

    hero.addSoundEvent("MASK_OPEN", ["fiskheroes:reverse_flash_vibration_on", "fiskheroes:reverse_flash_vibration_loop"]);
    hero.addSoundOverrides("NEGATIVE", speedster_base.mergeSounds("fiskheroes:speed_force", speedster_base.SOUNDS_NEGATIVE));

    hero.setTickHandler((entity, manager) => {
        speedster_base.tick(entity, manager);
    });
}
