export default class Pokemon {
    constructor (nickname, move1, move2, move3, move4, item, nature, hp, atk, def, spa, spdef, spe) {
        this.nickname = nickname;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
        this.item = item;
        this.nature = nature;
        this.hpEV = hp;
        this.atkEV = atk;
        this.defEV = def;
        this.spaEV = spa;
        this.spdefEV = spdef;
        this.speEV = spe;
    }
}