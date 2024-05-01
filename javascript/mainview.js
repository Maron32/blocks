'use strict';
import { view } from "./view.js";
import { Ball } from "./ball.js";


export class MainView extends view {

    
    #ball = null;

    constructor(context) {
        super(context);

        this.#ball = new Ball(context,20,440,5,2,2);
    }

    // プレイヤーのキーアクションを実行する
    executePlayerAction(key) {
        // {"Enter":true}
        //エンターキーが押されたら画面を非表示にする
        if (key["Enter"] === true) {
            this.isVisible = false;
        }
    }

    // 描画する
    draw() {
        //タイトルを描画
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillStyle = "white";
        this.context.font = "24px Arial";
        this.context.fillText("ブロック崩し",
            this.context.canvas.width / 2,
            this.context.canvas.height / 2
        );
        //メッセージを描画する
        this.context.cont = "16px Arial";
        this.context.fillText("Press Enter",
            this.context.canvas.width / 2,
            this.context.canvas.height / 2 + 40
        );
    }
}