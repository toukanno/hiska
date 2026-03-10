# ♠ ヒソカ・モロウ 紹介ページ

> 「死人には名乗っても意味がない。」— ヒソカ

HUNTER×HUNTER のキャラクター **ヒソカ・モロウ** をテーマにした紹介サイト。

🌐 **公開URL:** https://toukanno.github.io/hiska/

---

## 画面構成

| タブ | 内容 |
|---|---|
| ♠ プロフィール | 基本データ（所属・念系統・身長・体重など） |
| ♦ 能力 | バンジーガム・テクスチャーサプライズの解説 |
| ♥ ステータス | 念能力・戦闘力・スピードなどのバー表示 |
| ♣ 名言 | カルーセル形式で名言を表示 |

## 技術スタック

- **React 18** （CDN / Babel Standalone でビルド不要）
- **Tailwind CSS** （CDN）
- **Google Fonts** — Noto Serif JP
- **GitHub Pages** でホスティング

## ローカルで開く

ビルド不要。`index.html` をブラウザで開くだけ。

```bash
open index.html
```

## デプロイ

このリポジトリには GitHub Actions (`.github/workflows/deploy-pages.yml`) を追加してあり、`main` または `master` ブランチへの push で自動デプロイされます。

1. GitHub の **Settings → Pages** で **Build and deployment / Source** を **GitHub Actions** に設定
2. `main` または `master` に push
3. Actions の `Deploy static site to GitHub Pages` が完了すると公開URLへ反映

---

*HUNTER × HUNTER © 冨樫義博 / 集英社　— ファンメイドページ*
