extend("fiskheroes:hero_basic");

loadTextures({

    "layer1": "end:loki_skin",

    "layer2": "end:loki_skin",

    "spec": "end:scep"

});



var utils = implement("fiskheroes:external/utils");



var scep;

var glow;

function init(renderer) {

    parent.init(renderer);

    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm");

    renderer.fixHatLayer("CHESTPLATE");

}



function initEffects(renderer) {

    glow = renderer.createEffect("fiskheroes:glowerlay");

    glow.color.set(386641);



    scep = renderer.createEffect("fiskheroes:model");

    scep.setModel(utils.createModel(renderer, "end:scepter", "scep"));

    scep.anchor.set("rightArm");

    scep.mirror = false;



    var forcefield = renderer.bindProperty("fiskheroes:forcefield");

    forcefield.color.set(386641);

    forcefield.setShape(36, 18).setOffset(0.0, 6.0, 0.0).setScale(1.25);

    forcefield.setCondition(entity => {

        forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.15;

        return true;

    });



    utils.bindParticles(renderer, "fiskheroes:harbinger_glow");

    utils.bindCloud(renderer, "fiskheroes:telekinesis", "end:sentry");

    

    utils.bindBeam(renderer, "fiskheroes:charged_beam", "end:odin_beam", "rightArm", 386641, [

        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-2.10, 7.70, -19.75], "size": [3.0, 3.0] }

    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_antimatter"));

}



function initAnimations(renderer) {

    parent.initAnimations(renderer);

    addAnimationWithData(renderer, "antimonitor.ANTIBLAST", "fiskheroes:aiming", "fiskheroes:beam_charge");

    

    utils.addFlightAnimation(renderer, "mmcw.FLIGHT", "fiskheroes:flight/default_arms_forward.anim.json");

    utils.addHoverAnimation(renderer, "sentry.HOVER", "fiskheroes:flight/idle/neutral");

    addAnimationWithData(renderer, "iron_man.LAND", "fiskheroes:superhero_landing", "fiskheroes:dyn/superhero_landing_timer")

        .priority = -8;

}



function render(entity, renderLayer, isFirstPersonArm) {

    glow.opacity = entity.getInterpolatedData("fiskheroes:teleport_timer");

    glow.render();

    if (renderLayer == "CHESTPLATE") {

        scep.opacity = entity.getInterpolatedData("fiskheroes:shield");

        scep.render();

    }

}

