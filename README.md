# static html i18n sample


```
$ npm run i18n:extract
  # テンプレートファイル`pages/hbs/*.htlm`を読み、ファイル内に書かれている
  # 翻訳Keyを`i18n/translations.*.json`に書き出す

  # => `i18n/translations.*.json`に翻訳Keyに合わせてメッセージ及び翻訳メッセージを書く

$ npm run i18n:compile
  # `i18n/translations.*.json`のメッセージを使って、`pages/hbs/*.html`のファイルを
  # 翻訳し、それぞれの言語用フォルダ(`pages/${lang}`)に書き出す
```
