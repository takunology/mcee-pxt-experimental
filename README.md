# mcee-pxt-experimental

Minecraft Education の MakeCode で、カスタムブロックとして作れる入力や形を試すための実験用拡張機能です。

## 入っているブロック例

- トリガー: `... のトリガーを受け取ったとき` / `... のトリガーを発火する`
- 変数: 拡張機能内の数値スロット、真偽スロット
- 計算: 四則演算、最大・最小、範囲におさめる
- トグルメニュー: オン/オフの field editor
- スライダーUI: 0から100の数値スライダー
- グリッド選択: enum を 2列や3列の grid picker で表示

## 公式資料メモ

MakeCode のブロックは TypeScript の `//% block=...` などの注釈で定義できます。入力UIは `shadow` や `fieldEditor` の注釈で指定でき、公式資料では Range、Toggle、Grid Picker などの built-in field editor が案内されています。

- Defining blocks: https://makecode.com/defining-blocks
- pxt.json: https://makecode.com/extensions/pxt-json
- mkc: https://microsoft.github.io/pxt-mkc/

## ビルド

```powershell
npx --yes --package makecode mkc build -j
```
