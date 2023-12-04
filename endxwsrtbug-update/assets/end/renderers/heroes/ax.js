extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "end:ax_layer",
    "layer2": "end:ax_layer",
    "cape": "end:ax_cape"
});

var utils = implement("fiskheroes:external/utils");
var capes = implement("fiskheroes:external/capes");

var cape;

function init(renderer) {
    parent.init(renderer);
    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm");
    renderer.fixHatLayer("CHESTPLATE");
}

function initEffects(renderer) {
    utils.bindBeam(renderer, "fiskheroes:heat_vision", "fiskheroes:cold_beam", "head", 0xFF0000, [
        { "firstPerson": [2.0, 0.0, 1.0], "offset": [2.0, -3.0, -3.0], "size": [1.0, 0.5] },
        { "firstPerson": [-2.0, 0.0, 1.0], "offset": [-2.0, -3.0, -3.0], "size": [1.0, 0.5] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_heat_vision"));
    utils.bindBeam(renderer, "fiskheroes:charged_beam", "fiskheroes:mysterio_beam", "head", 0x40E7F9, [
        { "firstPerson": [0.0, 1.0, 0.0], "offset": [0.0, -1.0, -4.0], "size": [1.2, 0.7] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
    renderer.removeCustomAnimation("basic.AIMING");
    renderer.removeCustomAnimation("basic.CHARGED_BEAM");
    
    utils.addFlightAnimation(renderer, "sentry.FLIGHT", "fiskheroes:flight/default.anim.json");
    utils.addHoverAnimation(renderer, "sentry.HOVER", "fiskheroes:flight/idle/neutral");
    addAnimationWithData(renderer, "iron_man.LAND", "fiskheroes:superhero_landing", "fiskheroes:dyn/superhero_landing_timer")
    .priority = -8;
}
