enum ExperimentalTrigger {
    //% block="スタート"
    Start = 1,
    //% block="ゴール"
    Goal = 2,
    //% block="チェックポイント"
    Checkpoint = 3,
    //% block="カスタム"
    Custom = 4
}

enum ExperimentalSlot {
    //% block="A"
    A = 0,
    //% block="B"
    B = 1,
    //% block="C"
    C = 2,
    //% block="D"
    D = 3
}

enum ExperimentalOperation {
    //% block="足し算"
    Add = 0,
    //% block="引き算"
    Subtract = 1,
    //% block="かけ算"
    Multiply = 2,
    //% block="わり算"
    Divide = 3,
    //% block="最大"
    Max = 4,
    //% block="最小"
    Min = 5
}

enum ExperimentalMode {
    //% block="やさしい"
    Easy = 0,
    //% block="ふつう"
    Normal = 1,
    //% block="むずかしい"
    Hard = 2,
    //% block="デバッグ"
    Debug = 3
}

enum ExperimentalDirection {
    //% block="上"
    Up = 0,
    //% block="右"
    Right = 1,
    //% block="下"
    Down = 2,
    //% block="左"
    Left = 3
}

enum ExperimentalGridCell {
    //% block="左上"
    TopLeft = 0,
    //% block="上"
    Top = 1,
    //% block="右上"
    TopRight = 2,
    //% block="左"
    Left = 3,
    //% block="中央"
    Center = 4,
    //% block="右"
    Right = 5,
    //% block="左下"
    BottomLeft = 6,
    //% block="下"
    Bottom = 7,
    //% block="右下"
    BottomRight = 8
}

type ExperimentalHandler = () => void;

/**
 * Experimental MakeCode blocks for Minecraft Education.
 */
//% weight=100 color="#2a7f62" icon="\uf1b2"
//% groups='["トリガー", "変数", "計算", "メニュー", "UI入力", "グリッド"]'
namespace mceeExperimental {
    let triggerIds: number[] = [];
    let triggerHandlers: ExperimentalHandler[] = [];
    let numberSlots: number[] = [0, 0, 0, 0];
    let flagSlots: boolean[] = [false, false, false, false];
    let currentMode = ExperimentalMode.Normal;
    let lastGridCell = ExperimentalGridCell.Center;
    let lastDirection = ExperimentalDirection.Up;
    let lastPower = 50;

    /**
     * 指定したトリガーが発火したときに実行します。
     * @param trigger トリガーの種類
     * @param handler 実行する処理
     */
    //% blockId=mcee_exp_on_trigger
    //% block="$trigger のトリガーを受け取ったとき"
    //% trigger.fieldEditor="gridpicker" trigger.fieldOptions.columns=2
    //% handlerStatement=1
    //% weight=100 group="トリガー"
    export function onTrigger(trigger: ExperimentalTrigger, handler: () => void): void {
        triggerIds.push(trigger);
        triggerHandlers.push(handler);
    }

    /**
     * 登録済みのトリガーを発火します。
     * @param trigger 発火するトリガー
     */
    //% blockId=mcee_exp_fire_trigger
    //% block="$trigger のトリガーを発火する"
    //% trigger.fieldEditor="gridpicker" trigger.fieldOptions.columns=2
    //% weight=90 group="トリガー"
    export function fireTrigger(trigger: ExperimentalTrigger): void {
        for (let i = 0; i < triggerIds.length; i++) {
            if (triggerIds[i] == trigger) {
                triggerHandlers[i]();
            }
        }
    }

    /**
     * 数値スロットに値を入れます。
     * @param slot 保存先のスロット
     * @param value 保存する値
     */
    //% blockId=mcee_exp_set_number
    //% block="$slot の数値を $value にする"
    //% slot.fieldEditor="gridpicker" slot.fieldOptions.columns=2
    //% value.defl=10
    //% weight=100 group="変数"
    export function setNumber(slot: ExperimentalSlot, value: number): void {
        numberSlots[slot] = value;
    }

    /**
     * 数値スロットの値を取り出します。
     * @param slot 読み出すスロット
     */
    //% blockId=mcee_exp_get_number
    //% block="$slot の数値"
    //% slot.fieldEditor="gridpicker" slot.fieldOptions.columns=2
    //% weight=90 group="変数"
    export function getNumber(slot: ExperimentalSlot): number {
        return numberSlots[slot];
    }

    /**
     * 真偽スロットにオン/オフを保存します。
     * @param slot 保存先のスロット
     * @param enabled オンなら真
     */
    //% blockId=mcee_exp_set_flag
    //% block="$slot のフラグを $enabled にする"
    //% slot.fieldEditor="gridpicker" slot.fieldOptions.columns=2
    //% enabled.shadow="toggleOnOff"
    //% weight=80 group="変数"
    export function setFlag(slot: ExperimentalSlot, enabled: boolean): void {
        flagSlots[slot] = enabled;
    }

    /**
     * 真偽スロットのオン/オフを取り出します。
     * @param slot 読み出すスロット
     */
    //% blockId=mcee_exp_get_flag
    //% block="$slot のフラグ"
    //% slot.fieldEditor="gridpicker" slot.fieldOptions.columns=2
    //% weight=70 group="変数"
    export function getFlag(slot: ExperimentalSlot): boolean {
        return flagSlots[slot];
    }

    /**
     * 2つの数値を選んだ計算方法で計算します。
     * @param left 左の数
     * @param operation 計算方法
     * @param right 右の数
     */
    //% blockId=mcee_exp_calculate
    //% block="$left を $operation で $right と計算"
    //% left.defl=10
    //% right.defl=2
    //% operation.fieldEditor="gridpicker" operation.fieldOptions.columns=3
    //% weight=100 group="計算"
    export function calculate(left: number, operation: ExperimentalOperation, right: number): number {
        if (operation == ExperimentalOperation.Add) return left + right;
        if (operation == ExperimentalOperation.Subtract) return left - right;
        if (operation == ExperimentalOperation.Multiply) return left * right;
        if (operation == ExperimentalOperation.Divide) {
            if (right == 0) return 0;
            return left / right;
        }
        if (operation == ExperimentalOperation.Max) return Math.max(left, right);
        return Math.min(left, right);
    }

    /**
     * 値を下限と上限の間におさめます。
     * @param value 値
     * @param minimum 下限
     * @param maximum 上限
     */
    //% blockId=mcee_exp_clamp
    //% block="$value を $minimum から $maximum におさめる"
    //% value.defl=50
    //% minimum.defl=0
    //% maximum.defl=100
    //% weight=90 group="計算"
    export function clamp(value: number, minimum: number, maximum: number): number {
        if (minimum > maximum) {
            let tmp = minimum;
            minimum = maximum;
            maximum = tmp;
        }
        return Math.min(Math.max(value, minimum), maximum);
    }

    /**
     * モードを選択します。
     * @param mode 選択するモード
     */
    //% blockId=mcee_exp_set_mode
    //% block="モードを $mode にする"
    //% mode.fieldEditor="gridpicker" mode.fieldOptions.columns=2
    //% weight=100 group="メニュー"
    export function setMode(mode: ExperimentalMode): void {
        currentMode = mode;
    }

    /**
     * 現在のモードを数値で返します。
     */
    //% blockId=mcee_exp_current_mode
    //% block="現在のモード"
    //% weight=90 group="メニュー"
    export function mode(): ExperimentalMode {
        return currentMode;
    }

    /**
     * オン/オフを選んで保存します。
     * @param enabled オンなら真
     */
    //% blockId=mcee_exp_toggle_menu
    //% block="トグルメニューを $enabled にする"
    //% enabled.shadow="toggleOnOff"
    //% weight=100 group="UI入力"
    export function setToggleMenu(enabled: boolean): void {
        flagSlots[ExperimentalSlot.A] = enabled;
    }

    /**
     * スライダーで強さを選んで保存します。
     * @param power 0から100までの強さ
     */
    //% blockId=mcee_exp_slider_power
    //% block="スライダーの強さを $power にする"
    //% power.min=0 power.max=100 power.defl=50
    //% weight=90 group="UI入力"
    export function setPower(power: number): void {
        lastPower = clamp(power, 0, 100);
    }

    /**
     * 保存した強さを返します。
     */
    //% blockId=mcee_exp_power
    //% block="スライダーの強さ"
    //% weight=80 group="UI入力"
    export function power(): number {
        return lastPower;
    }

    /**
     * 方向をグリッドから選びます。
     * @param direction 方向
     */
    //% blockId=mcee_exp_choose_direction
    //% block="方向グリッドで $direction を選ぶ"
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    //% weight=100 group="グリッド"
    export function chooseDirection(direction: ExperimentalDirection): void {
        lastDirection = direction;
    }

    /**
     * 3x3グリッドから場所を選びます。
     * @param cell 場所
     */
    //% blockId=mcee_exp_choose_cell
    //% block="3x3グリッドで $cell を選ぶ"
    //% cell.fieldEditor="gridpicker" cell.fieldOptions.columns=3
    //% weight=90 group="グリッド"
    export function chooseCell(cell: ExperimentalGridCell): void {
        lastGridCell = cell;
    }

    /**
     * 最後に選んだ方向を返します。
     */
    //% blockId=mcee_exp_last_direction
    //% block="選んだ方向"
    //% weight=80 group="グリッド"
    export function direction(): ExperimentalDirection {
        return lastDirection;
    }

    /**
     * 最後に選んだグリッド位置を返します。
     */
    //% blockId=mcee_exp_last_cell
    //% block="選んだグリッド位置"
    //% weight=70 group="グリッド"
    export function cell(): ExperimentalGridCell {
        return lastGridCell;
    }
}
