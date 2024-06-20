# static html i18n sample

## Directory structure

```shell
ROOT/
├─ i18n/
│  ├─ translations.en.json # オリジナルメッセージファイル
│  └─ translations.ja.json # 日本語メッセージファイル
├─ pages/
│  ├─ en/ # 英語翻訳済みファイル
│  │  ├─ index.html
│  │  └─ top.html
│  ├─ hbs/ # 翻訳対象テンプレートファイル
│  │  ├─ index.html
│  │  └─ top.html
│  └─ ja/ # 日本語翻訳済みファイル
│     ├─ index.html
│     └─ top.html
├─ i18n.js # 翻訳処理実行ファイル
├─ .gitignore
├─ package.json
└─ README.md
```

## Translation Flow

```shell
$ npm run i18n:extract
  # テンプレートファイル`pages/hbs/*.html`を読み、ファイル内に書かれている
  # 翻訳Keyを`i18n/translations.*.json`に書き出す

  # => `i18n/translations.*.json`に翻訳Keyに合わせてメッセージ及び翻訳メッセージを書く

$ npm run i18n:compile
  # `i18n/translations.*.json`のメッセージを使って、`pages/hbs/*.html`のファイルを
  # 翻訳し、それぞれの言語用フォルダ(`pages/${lang}`)に書き出す
```

## Concerns

* `i18n:extract`では、メッセージ文章を一部変更した場合やメッセージの削除を拾うのはなかなか難しそう
  * [Weblate](https://weblate.org/ja/)のような翻訳サーバーを使えば管理できそうだが、労力的にヘビー
* `handlebars-i18n`ではデフォルトメッセージを扱えない(要調査)ため、翻訳をミスるった場合に翻訳Keyが表示されてしまう
  * 「翻訳作業ミスっても最低英語メッセージは出る」ということが期待できない？
* [`handlebars-i18n`](https://www.npmjs.com/package/handlebars-i18n)自体あまり使われてなさそう
  * Weekly Downloadsが1,500とかなので、個人開発という感じ。開発自体は継続されてそうだが。