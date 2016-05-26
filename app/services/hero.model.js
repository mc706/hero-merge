var Attributes = (function () {
    function Attributes() {
    }
    return Attributes;
})();
var Hero = (function () {
    function Hero(hero_name, real_name, gender, attributes, powers, weaknesses) {
        this.hero_name = hero_name;
        this.real_name = real_name;
        this.gender = gender;
        this.attributes = attributes;
        this.powers = powers;
        this.weaknesses = weaknesses;
    }
    return Hero;
})();
exports.Hero = Hero;
//# sourceMappingURL=hero.model.js.map