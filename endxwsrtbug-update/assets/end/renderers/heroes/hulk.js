extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "end:hulk",
    "layer2": "end:hulk",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setTexture((entity, renderLayer) => {
        if (renderLayer == "LEGGINGS") {
            return entity.getWornChestplate().suitType() == $SUIT_NAME ? "layer1" : "layer2";
        }
        else if (renderLayer == "BOOTS") {
            return entity.getWornChestplate().suitType() == $SUIT_NAME ? "layer1" : "layer2";
        }
        return "layer1";
    });

    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("CHESTPLATE");
}
