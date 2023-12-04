function init(hero) {
    hero.setName("westron");
    hero.setTier(9);

    hero.setHelmet("item.superhero_armor.piece.helmet");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");

    hero.addPowers("end:westron");
    hero.addAttribute("PUNCH_DAMAGE", 7.5, 0);
    hero.addAttribute("WEAPON_DAMAGE", 1.5, 0);
    hero.addAttribute("SPRINT_SPEED", 0.7, 1);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("BASE_SPEED_LEVELS", 2.0, 0);

    hero.addKeyBind("CHARGED_BEAM", "Energy Blast", 1);
    hero.addKeyBind("SUPER_SPEED", "key.superSpeed", 2);

    hero.setDefaultScale(1.1);
    hero.setModifierEnabled(isModifierEnabled);
    hero.setKeyBindEnabled(isKeyBindEnabled);
    hero.setTierOverride(getTierOverride);

    hero.setAttributeProfile(entity => entity.hasStatusEffect("fiskheroes:eternium") ? "ETERNIUM" : null);
    hero.addAttributeProfile("ETERNIUM", profile => {
        profile.inheritDefaults();
        profile.addAttribute("PUNCH_DAMAGE", 6.5, 0);
        profile.addAttribute("SPRINT_SPEED", 0.2, 1);
        profile.addAttribute("FALL_RESISTANCE", 5.0, 1);
    });

    hero.setDamageProfile(entity => !entity.getHeldItem().isWeapon() ? "PUNCH" : null);
    hero.addDamageProfile("PUNCH", {
        "types": {
            "BLUNT": 1.0,
            "MAGIC": 0.7
        }
    });
}

function getTierOverride(entity) {
    return entity.hasStatusEffect("fiskheroes:eternium") ? 6 : 9;
}

function isModifierEnabled(entity, modifier) {
    if (modifier.name() != "fiskheroes:eternium_weakness" && entity.hasStatusEffect("fiskheroes:eternium")) {
        return false;
    }
    return modifier.name() != "fiskheroes:super_speed" || !entity.getData("fiskheroes:flying");
}

function isKeyBindEnabled(entity, keyBind) {
    if (entity.hasStatusEffect("fiskheroes:eternium")) {
        return false;
    }
    return keyBind != "SUPER_SPEED" || !entity.getData("fiskheroes:flying");
}
