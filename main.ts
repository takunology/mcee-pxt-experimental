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

enum ExperimentalColor {
    //% block="しろ"
    //% jres=ExperimentalColorIcon.white
    White = 0,
    //% block="オレンジ"
    //% jres=ExperimentalColorIcon.orange
    Orange = 1,
    //% block="きいろ"
    //% jres=ExperimentalColorIcon.yellow
    Yellow = 2,
    //% block="きみどり"
    //% jres=ExperimentalColorIcon.lime
    Lime = 3,
    //% block="あお"
    //% jres=ExperimentalColorIcon.blue
    Blue = 4,
    //% block="むらさき"
    //% jres=ExperimentalColorIcon.purple
    Purple = 5,
    //% block="あか"
    //% jres=ExperimentalColorIcon.red
    Red = 6,
    //% block="くろ"
    //% jres=ExperimentalColorIcon.black
    Black = 7
}

enum ExperimentalAddonItem {
    //% block="木の剣"
    //% jres=ExperimentalAddonItemIcon.woodenSword
    WoodenSword = 0,
    //% block="石の剣"
    //% jres=ExperimentalAddonItemIcon.stoneSword
    StoneSword = 1,
    //% block="鉄の剣"
    //% jres=ExperimentalAddonItemIcon.ironSword
    IronSword = 2,
    //% block="金の剣"
    //% jres=ExperimentalAddonItemIcon.goldenSword
    GoldenSword = 3,
    //% block="ダイヤの剣"
    //% jres=ExperimentalAddonItemIcon.diamondSword
    DiamondSword = 4,
    //% block="ネザライトの剣"
    //% jres=ExperimentalAddonItemIcon.netheriteSword
    NetheriteSword = 5
}

enum ExperimentalScrollItem {
    //% block="01 木の剣"
    //% jres=ExperimentalAddonItemIcon.woodenSword
    Item01 = 1,
    //% block="02 石の剣"
    //% jres=ExperimentalAddonItemIcon.stoneSword
    Item02 = 2,
    //% block="03 鉄の剣"
    //% jres=ExperimentalAddonItemIcon.ironSword
    Item03 = 3,
    //% block="04 金の剣"
    //% jres=ExperimentalAddonItemIcon.goldenSword
    Item04 = 4,
    //% block="05 ダイヤ"
    //% jres=ExperimentalAddonItemIcon.diamondSword
    Item05 = 5,
    //% block="06 ネザライト"
    //% jres=ExperimentalAddonItemIcon.netheriteSword
    Item06 = 6,
    //% block="07 木の剣"
    //% jres=ExperimentalAddonItemIcon.woodenSword
    Item07 = 7,
    //% block="08 石の剣"
    //% jres=ExperimentalAddonItemIcon.stoneSword
    Item08 = 8,
    //% block="09 鉄の剣"
    //% jres=ExperimentalAddonItemIcon.ironSword
    Item09 = 9,
    //% block="10 金の剣"
    //% jres=ExperimentalAddonItemIcon.goldenSword
    Item10 = 10,
    //% block="11 ダイヤ"
    //% jres=ExperimentalAddonItemIcon.diamondSword
    Item11 = 11,
    //% block="12 ネザライト"
    //% jres=ExperimentalAddonItemIcon.netheriteSword
    Item12 = 12,
    //% block="13 木の剣"
    //% jres=ExperimentalAddonItemIcon.woodenSword
    Item13 = 13,
    //% block="14 石の剣"
    //% jres=ExperimentalAddonItemIcon.stoneSword
    Item14 = 14,
    //% block="15 鉄の剣"
    //% jres=ExperimentalAddonItemIcon.ironSword
    Item15 = 15,
    //% block="16 金の剣"
    //% jres=ExperimentalAddonItemIcon.goldenSword
    Item16 = 16,
    //% block="17 ダイヤ"
    //% jres=ExperimentalAddonItemIcon.diamondSword
    Item17 = 17,
    //% block="18 ネザライト"
    //% jres=ExperimentalAddonItemIcon.netheriteSword
    Item18 = 18,
    //% block="19 木の剣"
    //% jres=ExperimentalAddonItemIcon.woodenSword
    Item19 = 19,
    //% block="20 石の剣"
    //% jres=ExperimentalAddonItemIcon.stoneSword
    Item20 = 20,
    //% block="21 鉄の剣"
    //% jres=ExperimentalAddonItemIcon.ironSword
    Item21 = 21,
    //% block="22 金の剣"
    //% jres=ExperimentalAddonItemIcon.goldenSword
    Item22 = 22,
    //% block="23 ダイヤ"
    //% jres=ExperimentalAddonItemIcon.diamondSword
    Item23 = 23,
    //% block="24 ネザライト"
    //% jres=ExperimentalAddonItemIcon.netheriteSword
    Item24 = 24,
    //% block="25 木の剣"
    //% jres=ExperimentalAddonItemIcon.woodenSword
    Item25 = 25,
    //% block="26 石の剣"
    //% jres=ExperimentalAddonItemIcon.stoneSword
    Item26 = 26,
    //% block="27 鉄の剣"
    //% jres=ExperimentalAddonItemIcon.ironSword
    Item27 = 27,
    //% block="28 金の剣"
    //% jres=ExperimentalAddonItemIcon.goldenSword
    Item28 = 28,
    //% block="29 ダイヤ"
    //% jres=ExperimentalAddonItemIcon.diamondSword
    Item29 = 29,
    //% block="30 ネザライト"
    //% jres=ExperimentalAddonItemIcon.netheriteSword
    Item30 = 30,
    //% block="31 木の剣"
    //% jres=ExperimentalAddonItemIcon.woodenSword
    Item31 = 31,
    //% block="32 石の剣"
    //% jres=ExperimentalAddonItemIcon.stoneSword
    Item32 = 32,
    //% block="33 鉄の剣"
    //% jres=ExperimentalAddonItemIcon.ironSword
    Item33 = 33,
    //% block="34 金の剣"
    //% jres=ExperimentalAddonItemIcon.goldenSword
    Item34 = 34,
    //% block="35 ダイヤ"
    //% jres=ExperimentalAddonItemIcon.diamondSword
    Item35 = 35,
    //% block="36 ネザライト"
    //% jres=ExperimentalAddonItemIcon.netheriteSword
    Item36 = 36
}

enum ExperimentalImageSizeIcon {
    //% block="16px"
    //% jres=ExperimentalAddonItemIcon.sword16
    Sword16 = 16,
    //% block="32px"
    //% jres=ExperimentalAddonItemIcon.sword32
    Sword32 = 32,
    //% block="64px"
    //% jres=ExperimentalAddonItemIcon.sword64
    Sword64 = 64
}
type ExperimentalHandler = () => void;

/**
 * Experimental MakeCode blocks for Minecraft Education.
 */
//% weight=100 color="#2a7f62" icon="\uf1b2"
//% groups='["イベント", "トリガー", "変数", "計算", "条件", "配列", "メニュー", "UI入力", "リスト", "グリッド", "チェック", "カラー", "Minecraft", "拡張"]'
namespace mceeExperimental {
    let triggerIds: number[] = [];
    let triggerHandlers: ExperimentalHandler[] = [];
    let numberSlots: number[] = [0, 0, 0, 0];
    let flagSlots: boolean[] = [false, false, false, false];
    let currentMode = ExperimentalMode.Normal;
    let lastGridCell = ExperimentalGridCell.Center;
    let lastDirection = ExperimentalDirection.Up;
    let lastPower = 50;
    let lastLabel = "草原";
    let lastPattern = "000000000";
    let lastColor = ExperimentalColor.Red;
    let lastMessage = "";
    let lastItem = Item.Apple;
    let lastAddonItem = ExperimentalAddonItem.WoodenSword;
    let lastScrollItem = ExperimentalScrollItem.Item01;
    let lastImageSizeIcon = ExperimentalImageSizeIcon.Sword32;

    /**
     * 文字列候補をドロップダウンで選びます。
     * @param value 文字列候補
     */
    //% blockId=mcee_exp_label_dropdown
    //% block="$value"
    //% blockHidden=true
    //% value.fieldEditor="dropdown"
    //% value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.values='[["草原"], ["砂漠"], ["雪原"], ["洞窟"], ["村"]]'
    export function __labelDropdown(value: string): string {
        return value;
    }

    /**
     * 3x3 のオン/オフグリッド入力です。
     * @param pattern グリッド状態
     */
    //% blockId=mcee_exp_pattern_3x3
    //% block="3x3"
    //% imageLiteralColumns=3 imageLiteralRows=3 gridLiteral=1
    //% blockHidden=true
    export function __pattern3x3(pattern: string): string {
        return normalizePattern(pattern, 9);
    }

    /**
     * 5x5 のオン/オフグリッド入力です。
     * @param pattern グリッド状態
     */
    //% blockId=mcee_exp_pattern_5x5
    //% block="5x5"
    //% imageLiteralColumns=5 imageLiteralRows=5 gridLiteral=1
    //% blockHidden=true
    export function __pattern5x5(pattern: string): string {
        return normalizePattern(pattern, 25);
    }

    /**
     * プログラムの開始場所として使うイベント風ブロックです。
     * @param handler 実行する処理
     */
    //% blockId=mcee_exp_on_start
    //% block="実験をはじめる"
    //% weight=100 group="イベント"
    export function onStart(handler: () => void): void {
        handler();
    }

    /**
     * イベントの中で値を使える形のブロックです。
     * @param value イベントに渡す値
     * @param handler 実行する処理
     */
    //% blockId=mcee_exp_on_value
    //% block="値イベント $value を受け取ったとき"
    //% value.defl=1
    //% draggableParameters="reporter"
    //% weight=90 group="イベント"
    export function onValue(value: number, handler: (value: number) => void): void {
        handler(value);
    }

    /**
     * 指定したトリガーが発火したときに実行します。
     * @param trigger トリガーの種類
     * @param handler 実行する処理
     */
    //% blockId=mcee_exp_on_trigger
    //% block="$trigger のトリガーを受け取ったとき"
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
     * 条件が正しいときだけ中の処理を実行します。
     * @param condition 条件
     * @param handler 実行する処理
     */
    //% blockId=mcee_exp_if
    //% block="もし $condition なら"
    //% handlerStatement=true
    //% weight=100 group="条件"
    export function ifDo(condition: boolean, handler: () => void): void {
        if (condition) {
            handler();
        }
    }

    /**
     * 条件が正しくないときだけ中の処理を実行します。
     * @param condition 条件
     * @param handler 実行する処理
     */
    //% blockId=mcee_exp_else
    //% block="でなければ $condition"
    //% handlerStatement=true
    //% weight=95 group="条件"
    export function elseDo(condition: boolean, handler: () => void): void {
        if (!condition) {
            handler();
        }
    }

    /**
     * 数値を比べて真偽値を返します。
     * @param left 左の数
     * @param right 右の数
     */
    //% blockId=mcee_exp_is_greater
    //% block="$left が $right より大きい"
    //% left.defl=10
    //% right.defl=5
    //% weight=90 group="条件"
    export function isGreater(left: number, right: number): boolean {
        return left > right;
    }

    /**
     * 数値の配列を合計します。
     * @param values 数値の配列
     */
    //% blockId=mcee_exp_sum_numbers
    //% block="$values の合計"
    //% values.shadow="lists_create_with"
    //% weight=100 group="配列"
    export function sumNumbers(values: number[]): number {
        let total = 0;
        for (let i = 0; i < values.length; i++) {
            total += values[i];
        }
        return total;
    }

    /**
     * 配列の指定した番号の値を返します。
     * @param values 数値の配列
     * @param index 読み出す番号
     */
    //% blockId=mcee_exp_array_get
    //% block="$values の $index 番目"
    //% values.shadow="lists_create_with"
    //% index.defl=0
    //% weight=90 group="配列"
    export function arrayGet(values: number[], index: number): number {
        if (index < 0 || index >= values.length) {
            return 0;
        }
        return values[index];
    }

    /**
     * モードを選択します。
     * @param mode 選択するモード
     */
    //% blockId=mcee_exp_set_mode
    //% block="モードを $mode にする"
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
     * enum を普通のドロップダウンリストで選びます。
     * @param mode 選択するモード
     */
    //% blockId=mcee_exp_pick_mode_list
    //% block="文字リストでモード $mode を選ぶ"
    //% weight=100 group="リスト"
    export function pickModeList(mode: ExperimentalMode): void {
        currentMode = mode;
    }

    /**
     * 文字列そのものを候補リストから選んで保存します。
     * @param label 保存する文字列
     */
    //% blockId=mcee_exp_pick_label_list
    //% block="文字列リストで $label を選ぶ"
    //% label.shadow="mcee_exp_label_dropdown"
    //% weight=90 group="リスト"
    export function pickLabelList(label: string): void {
        lastLabel = label;
    }

    /**
     * 最後に選んだ文字列を返します。
     */
    //% blockId=mcee_exp_label
    //% block="選んだ文字列"
    //% weight=80 group="リスト"
    export function label(): string {
        return lastLabel;
    }

    /**
     * 方向をグリッドから選びます。
     * @param direction 方向
     */
    //% blockId=mcee_exp_choose_direction
    //% block="方向グリッドで $direction を選ぶ"
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2 direction.fieldOptions.width=220
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
    //% cell.fieldEditor="gridpicker" cell.fieldOptions.columns=3 cell.fieldOptions.width=300
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

    /**
     * 3x3 のチェックボックス風グリッドを保存します。
     * @param pattern 保存するグリッド
     */
    //% blockId=mcee_exp_set_pattern_3x3
    //% block="3x3チェック $pattern を保存する"
    //% pattern.shadow="mcee_exp_pattern_3x3"
    //% weight=100 group="チェック"
    export function setPattern3x3(pattern: string): void {
        lastPattern = normalizePattern(pattern, 9);
    }

    /**
     * 5x5 のチェックボックス風グリッドを保存します。
     * @param pattern 保存するグリッド
     */
    //% blockId=mcee_exp_set_pattern_5x5
    //% block="5x5チェック $pattern を保存する"
    //% pattern.shadow="mcee_exp_pattern_5x5"
    //% weight=90 group="チェック"
    export function setPattern5x5(pattern: string): void {
        lastPattern = normalizePattern(pattern, 25);
    }

    /**
     * 保存したチェック数を返します。
     */
    //% blockId=mcee_exp_pattern_count
    //% block="チェックされた数"
    //% weight=80 group="チェック"
    export function checkedCount(): number {
        return countPattern(lastPattern);
    }

    /**
     * 保存したチェック状態を 0 と 1 の文字列で返します。
     */
    //% blockId=mcee_exp_pattern_text
    //% block="チェック文字列"
    //% weight=70 group="チェック"
    export function patternText(): string {
        return lastPattern;
    }

    /**
     * アイコン付きドロップダウンで色を選びます。
     * @param color 選ぶ色
     */
    //% blockId=mcee_exp_pick_color
    //% block="カラーピッカーで $color を選ぶ"
    //% color.defl=ExperimentalColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=100 group="カラー"
    export function pickColor(color: ExperimentalColor): void {
        lastColor = color;
    }

    /**
     * 最後に選んだ色を返します。
     */
    //% blockId=mcee_exp_color
    //% block="選んだ色"
    //% weight=90 group="カラー"
    export function color(): ExperimentalColor {
        return lastColor;
    }

    /**
     * Minecraft 標準のアイテムピッカーでアイテムを選びます。
     * @param item 選ぶアイテム
     */
    //% blockId=mcee_exp_pick_item
    //% block="アイテムピッカーで $item を選ぶ"
    //% item.defl=Item.Apple
    //% weight=100 group="Minecraft"
    export function pickItem(item: Item): void {
        lastItem = item;
    }

    /**
     * 最後に選んだアイテムを返します。
     */
    //% blockId=mcee_exp_item
    //% block="選んだアイテム"
    //% weight=90 group="Minecraft"
    export function item(): Item {
        return lastItem;
    }

    /**
     * jres アイコン付きの自作アドオンアイテム候補を選びます。
     * @param item 選ぶ自作アイテム
     */
    //% blockId=mcee_exp_pick_addon_item
    //% block="自作アイテム $item を選ぶ"
    //% item.defl=ExperimentalAddonItem.WoodenSword
    //% item.fieldEditor="imagedropdown"
    //% item.fieldOptions.columns=3
    //% weight=80 group="Minecraft"
    export function pickAddonItem(item: ExperimentalAddonItem): void {
        lastAddonItem = item;
    }

    /**
     * 自作アドオンアイテムの Minecraft ID を返します。
     * @param item 自作アイテム
     */
    //% blockId=mcee_exp_addon_item_id
    //% block="自作アイテム $item のID"
    //% item.defl=ExperimentalAddonItem.WoodenSword
    //% item.fieldEditor="imagedropdown"
    //% item.fieldOptions.columns=3
    //% weight=70 group="Minecraft"
    export function addonItemId(item: ExperimentalAddonItem): string {
        if (item == ExperimentalAddonItem.StoneSword) return "mcee:stone_sword";
        if (item == ExperimentalAddonItem.IronSword) return "mcee:iron_sword";
        if (item == ExperimentalAddonItem.GoldenSword) return "mcee:golden_sword";
        if (item == ExperimentalAddonItem.DiamondSword) return "mcee:diamond_sword";
        if (item == ExperimentalAddonItem.NetheriteSword) return "mcee:netherite_sword";
        return "mcee:wooden_sword";
    }

    /**
     * 最後に選んだ自作アドオンアイテムの Minecraft ID を返します。
     */
    //% blockId=mcee_exp_selected_addon_item_id
    //% block="選んだ自作アイテムのID"
    //% weight=60 group="Minecraft"
    export function selectedAddonItemId(): string {
        return addonItemId(lastAddonItem);
    }

    /**
     * 36個の候補を6列グリッドで並べる自作アイテムピッカーです。
     * @param item 選ぶ候補
     */
    //% blockId=mcee_exp_pick_scroll_item
    //% block="スクロールアイテムピッカーで $item を選ぶ"
    //% item.defl=ExperimentalScrollItem.Item01
    //% item.fieldEditor="imagedropdown"
    //% item.fieldOptions.columns=6
    //% item.fieldOptions.width=420
    //% weight=50 group="Minecraft"
    export function pickScrollItem(item: ExperimentalScrollItem): void {
        lastScrollItem = item;
    }

    /**
     * スクロールアイテムピッカーで最後に選んだ候補のIDを返します。
     */
    //% blockId=mcee_exp_scroll_item_id
    //% block="スクロールアイテムピッカーのID"
    //% weight=40 group="Minecraft"
    export function scrollItemId(): string {
        return "mcee:scroll_item_" + lastScrollItem;
    }

    /**
     * jres 画像サイズの見え方を比べるためのピッカーです。
     * @param icon 比較する画像サイズ
     */
    //% blockId=mcee_exp_compare_image_size
    //% block="画像サイズ比較 $icon を選ぶ"
    //% icon.defl=ExperimentalImageSizeIcon.Sword32
    //% icon.fieldEditor="imagedropdown"
    //% icon.fieldOptions.columns=3
    //% icon.fieldOptions.width=280
    //% weight=30 group="Minecraft"
    export function compareImageSize(icon: ExperimentalImageSizeIcon): void {
        lastImageSizeIcon = icon;
    }

    /**
     * 画像サイズ比較で最後に選んだ画像の元サイズを返します。
     */
    //% blockId=mcee_exp_image_size_value
    //% block="選んだ画像サイズ"
    //% weight=20 group="Minecraft"
    export function imageSizeValue(): number {
        return lastImageSizeIcon;
    }

    /**
     * ＋ボタンで追加設定を開けるメッセージブロックです。
     * @param message 表示する文字
     * @param repeat 回数
     * @param enabled オンなら保存する
     */
    //% blockId=mcee_exp_message_options
    //% block="メッセージ $message を保存 || 回数 $repeat 有効 $enabled"
    //% expandableArgumentMode="toggle"
    //% message.defl="こんにちは"
    //% repeat.defl=1 repeat.min=1 repeat.max=5
    //% enabled.shadow="toggleOnOff"
    //% weight=100 group="拡張"
    export function messageOptions(message: string, repeat?: number, enabled?: boolean): void {
        if (repeat == undefined) {
            repeat = 1;
        }
        if (enabled == undefined) {
            enabled = true;
        }
        lastMessage = "";
        if (enabled) {
            for (let i = 0; i < repeat; i++) {
                lastMessage = lastMessage + message;
            }
        }
    }

    /**
     * ＋ボタンを押すたびに計算オプションが増えるブロックです。
     * @param value 元の値
     * @param add 足す数
     * @param multiply かける数
     * @param limit 最大値
     */
    //% blockId=mcee_exp_expand_math
    //% block="$value を調整 || 足す $add かける $multiply 最大 $limit"
    //% expandableArgumentMode="enabled"
    //% value.defl=10
    //% add.defl=1
    //% multiply.defl=2
    //% limit.defl=100
    //% weight=90 group="拡張"
    export function expandMath(value: number, add?: number, multiply?: number, limit?: number): number {
        if (add != undefined) {
            value += add;
        }
        if (multiply != undefined) {
            value *= multiply;
        }
        if (limit != undefined) {
            value = Math.min(value, limit);
        }
        return value;
    }

    /**
     * 最後に保存したメッセージを返します。
     */
    //% blockId=mcee_exp_last_message
    //% block="最後のメッセージ"
    //% weight=80 group="拡張"
    export function message(): string {
        return lastMessage;
    }

    function normalizePattern(pattern: string, size: number): string {
        let out = "";
        for (let i = 0; i < pattern.length; i++) {
            let c = pattern.charAt(i);
            if (c == "0" || c == ".") {
                out = out + "0";
            } else if (c == " " || c == "\n" || c == "\t" || c == "\r") {
            } else {
                out = out + "1";
            }
        }
        while (out.length < size) {
            out = out + "0";
        }
        if (out.length > size) {
            out = out.substr(0, size);
        }
        return out;
    }

    function countPattern(pattern: string): number {
        let count = 0;
        for (let i = 0; i < pattern.length; i++) {
            if (pattern.charAt(i) == "1") {
                count++;
            }
        }
        return count;
    }
}
