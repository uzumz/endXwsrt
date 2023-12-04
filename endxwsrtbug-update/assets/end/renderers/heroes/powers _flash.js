extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "end:power_flash",
    "layer2": "end:power_flash",
});

var utils = implement("fiskheroes:external/utils");;

var speedster = implement("fiskheroes:external/speedster_utils");

function initEffects(renderer) {
    speedster.init(renderer, "fiskheroes:lightning_white");
}

