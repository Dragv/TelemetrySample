'use strict'

export default class Data {
    constructor(params) {
        const { buildId, playerId, posX, posY, statusSelect } = params;

        this.buildId = buildId;
        this.playerId = playerId;
        this.posX = posX;
        this.posY = posY;
        this.statusSelect = statusSelect;
    }
}