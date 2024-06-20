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
  # テンプレートファイル`pages/hbs/*.htlm`を読み、ファイル内に書かれている
  # 翻訳Keyを`i18n/translations.*.json`に書き出す

  # => `i18n/translations.*.json`に翻訳Keyに合わせてメッセージ及び翻訳メッセージを書く

$ npm run i18n:compile
  # `i18n/translations.*.json`のメッセージを使って、`pages/hbs/*.html`のファイルを
  # 翻訳し、それぞれの言語用フォルダ(`pages/${lang}`)に書き出す
```
