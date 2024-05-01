'use strict';

import { BlocksGame } from "./blocks.js";

const game = new BlocksGame("canvas");

document.addEventListener("keydown",(event)=>{
    game.setkeydownkey(event.key);
});

document.addEventListener("keyup",(event)=>{
    game.setkeyupkey(event.key);
});
