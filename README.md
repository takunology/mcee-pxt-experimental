# mcee-pxt-experimental

Minecraft Education の MakeCode で、カスタムブロックとして作れる入力や形を試すための実験用拡張機能です。

## 入っているブロック例

- トリガー: `... のトリガーを受け取ったとき` / `... のトリガーを発火する`
- イベント: 上に接続しない開始イベント風ブロック、イベント内で値を使えるブロック
- 変数: 拡張機能内の数値スロット、真偽スロット
- 計算: 四則演算、最大・最小、範囲におさめる
- 条件: 真偽値 reporter、条件が正しいときだけ実行するブロック
- 条件の回避例: 拡張では完全な if/else 型は作れないため、`もし ... なら` と `でなければ ...` を分けたブロック
- 配列: 数値配列の合計、指定位置の読み出し
- トグルメニュー: オン/オフの field editor
- スライダーUI: 0から100の数値スライダー
- リスト表示: enum の通常ドロップダウン、文字列候補のドロップダウン
- グリッド選択: enum を 2列や3列の grid picker で表示
- チェックグリッド: `gridLiteral=1` を使った 3x3 / 5x5 のオン・オフ入力
- カラー選択: `.jres` のアイコンを使った `imagedropdown`
- Minecraft標準ピッカー: `Item` 型を使った標準アイテムピッカー
- 自作アドオンアイテム風ピッカー: `.jres` の剣アイコン付き enum で、アドオン側の item ID を選ぶブロック
- 6列スクロールアイテムピッカー: `.jres` アイコン付き enum を `columns=6` と `maxRows` でスクロール表示するブロック
- 画像サイズ比較: 16px / 32px / 64px の `.jres` 画像を同じ `imagedropdown` で比べるブロック
- 拡張引数: `+` ボタンで追加設定を開く/増やすブロック

## 入力UIの使い分け

- 戻り値がある関数は、上下に接続しない reporter ブロックになります。
- コールバック引数を持つ関数は、イベントや条件分岐のように中にブロックを入れる形になります。
- Minecraft MakeCode のイベント型は、標準ブロックと同じく `handler: () => void` を持つ callback 関数として書くと、上にくっつかない形になります。
- 他 target では上にくっつかないイベント型に `topblock=true` を使う例がありますが、Minecraft Education では標準イベント例に合わせて付けないほうが安定しました。
- repeat や if のように前後につながる C 字ブロックにしたい場合は `topblock=false` または未指定にします。
- `draggableParameters="reporter"` を使うと、イベント内で使える値をドラッグできる reporter として表示できます。
- `||` と `expandableArgumentMode` を使うと、`+` ボタンで任意引数を開くブロックを作れます。
- 通常の enum 引数は、`gridpicker` を指定しなければ文字だけのドロップダウンになります。
- `fieldEditor="gridpicker"` を付けると、enum 候補がグリッド表示になります。
- `fieldOptions.columns` でグリッドの列数を指定できます。
- `fieldOptions.width` はポップアップ全体の幅を調整します。`imagedropdown` では `width / columns` に近い幅で各セルが並びます。
- `fieldOptions.maxRows` を指定すると、指定行数ぶんだけ表示して、残りはドロップダウン内でスクロールできます。
- `imageLiteralColumns` / `imageLiteralRows` / `gridLiteral=1` を使うと、チェックボックス風のオン・オフグリッドを入力できます。
- `imagedropdown` で enum 候補にアイコンを出す場合は、enum メンバーに `jres=...` を付け、`pxt.json` の `files` に `.jres` ファイルを追加します。
- 組み込みの if/else のような、複数の口を持つヨ字型ブロックは拡張機能だけでは再現できません。
- Minecraft の検索付きアイテムピッカーのような複雑な UI は、通常の拡張だけで完全自作するのは難しいです。ただし、`Item` のような target が用意している型を使うと、標準ピッカーを呼び出せます。
- `.jres` は MakeCode エディタ上のアイコン表示用です。Minecraft に本物の自作アイテムを追加するには、別途アドオンの behavior pack / resource pack が必要です。

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

上に何もくっつかない、最初だけのような形です。Minecraft MakeCode では、標準の `プレイヤーが つかまった とき` のように、関数の引数に `handler: () => void` を取るだけの形が安定しました。

```ts
//% blockId=my_on_start
//% block="はじめる"
export function onStart(handler: () => void): void {
    handler();
}
```

イベントの中で使える値を出したいときは、コールバックに引数を付けて `draggableParameters="reporter"` を使います。

```ts
//% blockId=my_on_value
//% block="値 $value を受け取ったとき"
//% draggableParameters="reporter"
export function onValue(value: number, handler: (value: number) => void): void {
    handler(value);
}
```

### 条件分岐ブロック

中にブロックを入れる C 字型のブロックです。イベントと同じく `handler` を受け取り、条件が合うときだけ `handler()` を呼びます。前後につながる制御ブロックにしたいので、ここでは `topblock=true` を付けません。

```ts
//% blockId=my_if
//% block="もし $condition なら"
//% handlerStatement=true
export function ifDo(condition: boolean, handler: () => void): void {
    if (condition) {
        handler();
    }
}
```

### if/else のようなヨ字型ブロック

組み込みの if/else ブロックのように、複数の口を持つヨ字型ブロックは拡張機能だけでは作れません。

理由は大きく2つあります。

- 拡張のカスタムブロックは基本的に関数呼び出しへ変換されるため、JavaScript の `if { } else { }` 文そのものにはなりません。
- 組み込み if/else のような複数 statement 入力と `+` / `-` で else if や else を増やす mutator は、通常の拡張ブロックAPIでは公開されていません。

近い教材用ブロックにするなら、`もし ... なら` と `でなければ ...` を別々の C 字ブロックとして作ります。

```ts
//% blockId=my_if
//% block="もし $condition なら"
//% handlerStatement=true
export function ifDo(condition: boolean, handler: () => void): void {
    if (condition) {
        handler();
    }
}

//% blockId=my_else
//% block="でなければ $condition"
//% handlerStatement=true
export function elseDo(condition: boolean, handler: () => void): void {
    if (!condition) {
        handler();
    }
}
```

見た目を完全に if/else と同じにしたい場合は、拡張ではなく MakeCode target 側や Blockly 側の実装に踏み込む必要があります。

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

### Minecraft 標準のアイテムピッカー

画像のような検索付きアイテムピッカーは、Minecraft MakeCode target 側に組み込まれている専用 field editor です。通常の GitHub 拡張機能だけで、この検索UIそのものを新しく自作するのは難しいです。

ただし、Minecraft target が持っている `Item` 型を引数にすると、標準のアイテム選択UIを使える可能性があります。

```ts
let lastItem = Item.Apple;

//% blockId=my_pick_item
//% block="アイテムピッカーで $item を選ぶ"
//% item.defl=Item.Apple
export function pickItem(item: Item): void {
    lastItem = item;
}

//% blockId=my_item
//% block="選んだアイテム"
export function item(): Item {
    return lastItem;
}
```

完全に独自の検索付きピッカーを作りたい場合は、普通の拡張ではなく MakeCode target / editor extension 側の実装が必要になります。拡張だけでできる現実的な範囲は、`gridpicker`、`dropdown`、`imagedropdown`、`gridLiteral`、または target が既に持っている `Item` / `Block` などの型を利用するところまでです。

### jres で自作アドオンアイテム風ピッカー

`.jres` を使うと、MakeCode のブロック上に自作アイテムっぽいアイコン付き候補を出せます。ただし、これはあくまで MakeCode エディタ上の見た目です。

Minecraft の世界に本物の自作アイテムを追加するには、別途アドオン側で item を登録する必要があります。

- behavior pack: item の identifier や component を定義する
- resource pack: texture や表示名を定義する
- MakeCode extension: その item ID を選びやすいブロックとして出す

MakeCode 側では、enum と `.jres` を使って候補を作り、選んだ値を `mcee:wooden_sword` のような item ID 文字列へ変換します。

```ts
enum AddonItem {
    //% block="木の剣"
    //% jres=AddonItemIcon.woodenSword
    WoodenSword,
    //% block="ダイヤの剣"
    //% jres=AddonItemIcon.diamondSword
    DiamondSword
}

//% blockId=my_pick_addon_item
//% block="自作アイテム $item を選ぶ"
//% item.fieldEditor="imagedropdown"
//% item.fieldOptions.columns=4
export function pickAddonItem(item: AddonItem): void {
}

//% blockId=my_addon_item_id
//% block="自作アイテム $item のID"
//% item.fieldEditor="imagedropdown"
//% item.fieldOptions.columns=3
export function addonItemId(item: AddonItem): string {
    if (item == AddonItem.DiamondSword) return "mcee:diamond_sword";
    return "mcee:wooden_sword";
}
```

```json
{
  "*": {
    "namespace": "AddonItemIcon",
    "dataEncoding": "base64"
  },
  "woodenSword": {
    "icon": "data:image/png;base64,..."
  },
  "diamondSword": {
    "icon": "data:image/png;base64,..."
  }
}
```

`pxt.json` の `files` には、この `.jres` を追加します。

```json
{
    "files": [
        "main.ts",
        "addon-icons.jres",
        "README.md"
    ]
}
```

この方式は、標準の検索付き `Item` ピッカーに自作アイテムを混ぜるものではありません。自作候補だけの `imagedropdown` を作り、選択結果をアドオンの identifier 文字列として扱う方法です。

### 6列でスクロールできるアイテムグリッド

候補をたくさん用意して、`imagedropdown` の `fieldOptions.columns=6` を指定すると、6列に並ぶアイテム候補を作れます。さらに `fieldOptions.maxRows` を指定すると、表示する行数に上限が付き、残りの候補はドロップダウン内でスクロールできます。

MakeCode 本体の `imagedropdown` 実装には、`columns`、`maxRows`、`width` のオプションがあります。Minecraft 標準のアイテムピッカーも `gridpicker` 側で `columns` と `maxRows` を使っています。

```ts
enum ScrollItem {
    //% block="01 木の剣"
    //% jres=AddonItemIcon.woodenSword
    Item01 = 1,
    //% block="02 石の剣"
    //% jres=AddonItemIcon.stoneSword
    Item02 = 2,
    // ...
    //% block="36 ネザライト"
    //% jres=AddonItemIcon.netheriteSword
    Item36 = 36
}

//% blockId=my_pick_scroll_item
//% block="6列スクロールアイテムピッカーで $item を選ぶ"
//% item.fieldEditor="imagedropdown"
//% item.fieldOptions.columns=6
//% item.fieldOptions.maxRows="4"
//% item.fieldOptions.width=420
export function pickScrollItem(item: ScrollItem): void {
}
```

これは検索付きの標準 `Item` ピッカーではなく、自作候補を固定の6列グリッドに整列させるための方法です。検索バー付きの完全な標準アイテムピッカーを自作するには target / editor extension 側の実装が必要ですが、スクロール付きの画像グリッドだけなら `imagedropdown` の `maxRows` で作れます。

#### 画像サイズについて

`imagedropdown` で表示される画像を大きくしたい場合は、まず `.jres` に入れるPNG自体を大きめに作ります。たとえば 16x16 ではなく 32x32 や 64x64 の画像を入れると、エディタ側がその画像を使って候補を描画します。

ただし、候補セルの表示サイズは MakeCode エディタ側の `imagedropdown` 実装にも依存します。`fieldOptions.width` はポップアップ全体の幅を広げる指定で、アイコン1個を必ず拡大する指定ではありません。確実に確認するには、同じ enum で 16x16 / 32x32 / 64x64 の `.jres` を差し替えて、Minecraft Education の MakeCode 上で表示を比べるのがよさそうです。

このリポジトリには、比較用に `画像サイズ比較` ブロックも入れています。同じダイヤ剣の 16px / 32px / 64px 画像を `imagedropdown` に並べているので、Minecraft Education の MakeCode 上でどこまで見た目が変わるかを確認できます。

```ts
enum ImageSizeIcon {
    //% block="16px"
    //% jres=AddonItemIcon.sword16
    Sword16 = 16,
    //% block="32px"
    //% jres=AddonItemIcon.sword32
    Sword32 = 32,
    //% block="64px"
    //% jres=AddonItemIcon.sword64
    Sword64 = 64
}

//% blockId=my_compare_image_size
//% block="画像サイズ比較 $icon を選ぶ"
//% icon.fieldEditor="imagedropdown"
//% icon.fieldOptions.columns=3
//% icon.fieldOptions.width=280
export function compareImageSize(icon: ImageSizeIcon): void {
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
