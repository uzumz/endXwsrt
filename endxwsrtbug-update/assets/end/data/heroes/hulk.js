function init(hero) {
    hero.setName("hulk");
    hero.setTier(5);
        
    hero.setHelmet("item.superhero_armor.piece.helmet");
    hero.setChestplate("item.superhero_armor.piece.jacket");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.setDefaultScale(1.6);
        
    hero.addPowers("end:hulk");
    hero.addAttribute("PUNCH_DAMAGE", 4.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 4.5, 0);

    hero.addKeyBind("EARTHQUAKE", "key.earthquake", 1);
    hero.addKeyBind("GROUND_SMASH", "key.groundSmash", 2);
}