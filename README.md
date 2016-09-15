# これは何

FirebaseでIoTした時の例です。

Webブラウザから遠隔地にあるarduinoのLEDをチカチカさせます。

* [IoTLT 広島 Vol3](http://iotlt.connpass.com/event/39413/)
* [スライド](https://speakerdeck.com/eiel/firebasedeltikasitemita)

# 使い方

## Arduino側

* JonyFiveが使えるようにarduinoのファームウェアにFirmatをいれておく。
* ArduinoにPCやラズパイを接続しておく
* 接続したPCで本リポジトリ内の server/index.jsを実行する
* 例 `npm install && node server/index.js`

## ウェブ側

* public/index.htmlをブラウザで表示する
* 例 'npm install && firebase serve'
  * firebaseがローカルサーバを起動してくれます

