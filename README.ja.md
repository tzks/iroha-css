# iroha-css

[English](README.md) | [日本語](README.ja.md)

AI生成サイトを、人間が設計したようなWebデザインへ。

iroha-css は、AI が HTML/CSS を生成するときに美しい初期値と設計ルールを与えるための軽量 SCSS/CSS デザインシステムです。単なる和色変数集ではなく、色、余白、影、レイアウト、コンポーネント、AI向けルールを統合します。

## インストール

```bash
npm install iroha-css
```

```scss
@use "iroha-css";
```

## 使い方

```html
<section class="wa-section" data-wa-theme="matcha">
  <div class="wa-container wa-stack">
    <h1 class="wa-hero__title">静かな余白を持つページ</h1>
    <p class="wa-text-muted">semantic token と wa-* クラスで構成します。</p>
    <a class="wa-button" href="#">始める</a>
  </div>
</section>
```

## 和色テーマ

`data-wa-theme` に `sakura`、`sumi`、`ai`、`matcha`、`kurenai`、`yamabuki` を指定できます。色名や色値は外部データをコピーせず、伝統色に着想を得た独自トークンとして設計しています。

## レイアウトパターン

`wa-container`、`wa-section`、`wa-stack`、`wa-grid`、`wa-cluster`、`wa-split`、`wa-frame`、`wa-flow`、`wa-offset`、`wa-layer`、`wa-ma` などを提供します。

## コンポーネント

CSS only の `wa-button`、`wa-card`、`wa-hero`、`wa-nav`、`wa-form`、`wa-badge`、`wa-alert`、`wa-article`、`wa-footer` を含みます。

## Codex / Cursor / Claude Code

`docs/ai/` 以下の公開用ドキュメントを読ませることで、AIが勝手にクラス名や色変数を増やさず、量産型の中央寄せ hero やカード乱用を避けるように誘導できます。

## サンプルHTML

`examples/` に landing-page、portfolio、blog、product、dashboard のプレーン HTML 例があります。

## ライセンス

MIT

