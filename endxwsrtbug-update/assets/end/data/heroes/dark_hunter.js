function init(hero) {
    hero.setName("dark_hunter");
    hero.setTier(6);

    hero.setChestplate("item.superhero_armor.piece.chestpiece");

    hero.addPowers("end:dark_hunter");
    hero.addAttribute("PUNCH_DAMAGE", 7.5, 0);
    hero.addAttribute("WEAPON_DAMAGE", 1.5, 0);
    hero.addAttribute("SPRINT_SPEED", 0.7, 1);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("BASE_SPEED_LEVELS", 3.0, 0);

    hero.addKeyBind("SUPER_SPEED", "key.superSpeed", 1);
    hero.addKeyBind("GROUND_SMASH", "key.groundSmash", 2);
    hero.addKeyBind("INTANGIBILITY", "key.intangibility", 3);

    hero.setDefaultScale(1.1);
    hero.setModifierEnabled(isModifierEnabled);
    hero.setKeyBindEnabled(isKeyBindEnabled);
}

function isModifierEnabled(entity, modifier) {
    return modifier.name() != "fiskheroes:super_speed" || !entity.getData("fiskheroes:flying");
}

function isKeyBindEnabled(entity, keyBind) {
    return keyBind != "SUPER_SPEED" || !entity.getData("fiskheroes:flying");
}
