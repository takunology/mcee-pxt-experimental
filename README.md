# mcee-pxt-experimental

Minecraft Education の MakeCode で、カスタムブロックとして作れる入力や形を試すための実験用拡張機能です。

## 入っているブロック例

- トリガー: `... のトリガーを受け取ったとき` / `... のトリガーを発火する`
- イベント: 上に接続しない開始イベント風ブロック、イベント内で値を使えるブロック
- 変数: 拡張機能内の数値スロット、真偽スロット
- 計算: 四則演算、最大・最小、範囲におさめる
- 条件: 真偽値 reporter、条件が正しいときだけ実行するブロック
- 配列: 数値配列の合計、指定位置の読み出し
- トグルメニュー: オン/オフの field editor
- スライダーUI: 0から100の数値スライダー
- リスト表示: enum の通常ドロップダウン、文字列候補のドロップダウン
- グリッド選択: enum を 2列や3列の grid picker で表示
- チェックグリッド: `gridLiteral=1` を使った 3x3 / 5x5 のオン・オフ入力
- カラー選択: `.jres` のアイコンを使った `imagedropdown`
- 拡張引数: `+` ボタンで追加設定を開く/増やすブロック

## 入力UIの使い分け

- 戻り値がある関数は、上下に接続しない reporter ブロックになります。
- コールバック引数を持つ関数は、イベントや条件分岐のように中にブロックを入れる形になります。
- `draggableParameters="reporter"` を使うと、イベント内で使える値をドラッグできる reporter として表示できます。
- `||` と `expandableArgumentMode` を使うと、`+` ボタンで任意引数を開くブロックを作れます。
- 通常の enum 引数は、`gridpicker` を指定しなければ文字だけのドロップダウンになります。
- `fieldEditor="gridpicker"` を付けると、enum 候補がグリッド表示になります。
- `fieldOptions.columns` でグリッドの列数を指定できます。
- `fieldOptions.width` はポップアップ全体の幅を調整するための実験用注釈として入れています。セル1つずつを必ず同じ幅にそろえる公式オプションではないため、見た目はエディタ側の実装に依存します。
- `imageLiteralColumns` / `imageLiteralRows` / `gridLiteral=1` を使うと、チェックボックス風のオン・オフグリッドを入力できます。
- `imagedropdown` で enum 候補にアイコンを出す場合は、enum メンバーに `jres=...` を付け、`pxt.json` の `files` に `.jres` ファイルを追加します。

## 形状別の書き方

### 普通の命令ブロック

上下にくっつく、いちばん普通のブロックです。戻り値を `void` にします。

```ts
//% blockId=my_set_value
//% block="値を $value にする"
//% value.defl=10
export function setValue(value: number): void {
}
```

### 値ブロック

丸い数値ブロックや、六角形の真偽値ブロックのように、他のブロックへ差し込む形です。戻り値を付けます。

```ts
//% blockId=my_score
//% block="スコア"
export function score(): number {
    return 10;
}

//% blockId=my_is_clear
//% block="クリアした"
export function isClear(): boolean {
    return true;
}
```

### イベントブロック

上に何もくっつかない、最初だけのような形です。関数の引数に `handler: () => void` を取り、`handlerStatement=1` を付けます。

```ts
//% blockId=my_on_start
//% block="はじめる"
//% handlerStatement=1
export function onStart(handler: () => void): void {
    handler();
}
```

イベントの中で使える値を出したいときは、コールバックに引数を付けて `draggableParameters="reporter"` を使います。

```ts
//% blockId=my_on_value
//% block="値 $value を受け取ったとき"
//% draggableParameters="reporter"
//% handlerStatement=1
export function onValue(value: number, handler: (value: number) => void): void {
    handler(value);
}
```

### 条件分岐ブロック

中にブロックを入れる C 字型のブロックです。イベントと同じく `handler` を受け取り、条件が合うときだけ `handler()` を呼びます。

```ts
//% blockId=my_if
//% block="もし $condition なら"
//% handlerStatement=1
export function ifDo(condition: boolean, handler: () => void): void {
    if (condition) {
        handler();
    }
}
```

### プラスで開くブロック

`||` より後ろが折りたたまれます。`expandableArgumentMode="toggle"` は、`+` を押すと任意項目をまとめて開きます。

```ts
//% blockId=my_message_options
//% block="メッセージ $message || 回数 $repeat 有効 $enabled"
//% expandableArgumentMode="toggle"
//% repeat.defl=1 repeat.min=1 repeat.max=5
//% enabled.shadow="toggleOnOff"
export function messageOptions(message: string, repeat?: number, enabled?: boolean): void {
}
```

`expandableArgumentMode="enabled"` にすると、`+` を押すたびに項目を1つずつ増やす形になります。

```ts
//% blockId=my_expand_math
//% block="$value を調整 || 足す $add かける $multiply 最大 $limit"
//% expandableArgumentMode="enabled"
export function expandMath(value: number, add?: number, multiply?: number, limit?: number): number {
    return value;
}
```

### enum の文字リスト

enum 引数は、何も指定しなければ文字だけのドロップダウンになります。

```ts
enum MyMode {
    //% block="やさしい"
    Easy,
    //% block="むずかしい"
    Hard
}

//% blockId=my_set_mode
//% block="モードを $mode にする"
export function setMode(mode: MyMode): void {
}
```

### enum のグリッド選択

同じ enum でも、`fieldEditor="gridpicker"` を付けるとグリッド表示になります。`columns` で列数を指定できます。

```ts
//% blockId=my_choose_cell
//% block="場所 $cell を選ぶ"
//% cell.fieldEditor="gridpicker"
//% cell.fieldOptions.columns=3
export function chooseCell(cell: MyCell): void {
}
```

### オン・オフのトグル

boolean 引数に `toggleOnOff` を shadow として指定します。

```ts
//% blockId=my_toggle
//% block="有効を $enabled にする"
//% enabled.shadow="toggleOnOff"
export function setEnabled(enabled: boolean): void {
}
```

### 数値スライダー

number 引数に `min` / `max` / `defl` を付けます。

```ts
//% blockId=my_power
//% block="強さを $power にする"
//% power.min=0 power.max=100 power.defl=50
export function setPower(power: number): void {
}
```

### 文字列リスト

文字列を候補から選ばせたいときは、隠し shadow ブロックを作って、その blockId を本体の引数に指定します。

```ts
//% blockId=my_label_dropdown
//% block="$value"
//% blockHidden=true
//% value.fieldEditor="dropdown"
//% value.fieldOptions.decompileLiterals=true
//% value.fieldOptions.values='[["草原"], ["砂漠"], ["村"]]'
export function __labelDropdown(value: string): string {
    return value;
}

//% blockId=my_pick_label
//% block="ラベル $label を選ぶ"
//% label.shadow="my_label_dropdown"
export function pickLabel(label: string): void {
}
```

### チェックボックス風グリッド

3x3 や 5x5 のオン・オフ入力は、隠し shadow ブロックに `imageLiteralColumns` / `imageLiteralRows` / `gridLiteral=1` を付けます。値は文字列として渡ってきます。

```ts
//% blockId=my_pattern_3x3
//% block="3x3"
//% imageLiteralColumns=3 imageLiteralRows=3 gridLiteral=1
//% blockHidden=true
export function __pattern3x3(pattern: string): string {
    return pattern;
}

//% blockId=my_set_pattern
//% block="3x3チェック $pattern を保存する"
//% pattern.shadow="my_pattern_3x3"
export function setPattern(pattern: string): void {
}
```

### アイコン付きカラー選択

enum メンバーに `jres` を付け、引数側に `imagedropdown` を指定します。`.jres` ファイルは `pxt.json` の `files` に追加します。

```ts
enum MyColor {
    //% block="あか"
    //% jres=MyColorIcon.red
    Red,
    //% block="あお"
    //% jres=MyColorIcon.blue
    Blue
}

//% blockId=my_pick_color
//% block="色 $color を選ぶ"
//% color.fieldEditor="imagedropdown"
//% color.fieldOptions.columns=4
export function pickColor(color: MyColor): void {
}
```

```json
{
    "files": [
        "main.ts",
        "icons.jres",
        "README.md"
    ]
}
```

### 配列を受け取るブロック

引数を `number[]` や `string[]` にすると、配列を受け取れます。`lists_create_with` を shadow にすると、最初から配列ブロックが入ります。

```ts
//% blockId=my_sum
//% block="$values の合計"
//% values.shadow="lists_create_with"
export function sum(values: number[]): number {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total;
}
```

## 公式資料メモ

MakeCode のブロックは TypeScript の `//% block=...` などの注釈で定義できます。入力UIは `shadow` や `fieldEditor` の注釈で指定でき、公式資料では Range、Toggle、Grid Picker などの built-in field editor が案内されています。

- Defining blocks: https://makecode.com/defining-blocks
- pxt.json: https://makecode.com/extensions/pxt-json
- mkc: https://microsoft.github.io/pxt-mkc/

## ビルド

```powershell
npx --yes --package makecode mkc build -j
```
