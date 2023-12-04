extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "end:westron",
    "layer2": "end:westron",
});

var utils = implement("fiskheroes:external/utils");


function init(renderer) {
    parent.init(renderer);
    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("CHESTPLATE");
}

function initEffects(renderer) {
    utils.bindTrail(renderer, "fiskheroes:shazam");
    utils.bindBeam(renderer, "fiskheroes:charged_beam", "fiskheroes:cold_beam", "rightArm", 0x0000FF, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [3.0, 3.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_antimatter"));
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
    renderer.removeCustomAnimation("basic.CHARGED_BEAM");

    addAnimationWithData(renderer, "antimonitor.ANTIBLAST", "fiskheroes:aiming", "fiskheroes:beam_charge");
    
    utils.addFlightAnimation(renderer, "shazam.FLIGHT", "fiskheroes:flight/default.anim.json");
    utils.addHoverAnimation(renderer, "shazam.HOVER", "fiskheroes:flight/idle/default");
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (!isFirstPersonArm && renderLayer == "CHESTPLATE") {
    }
}
