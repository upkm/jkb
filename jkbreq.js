var body = $request.body;
var url = $request.url;
var obj = JSON.parse(body);

const msg = {
  "qrcode_content" : ""
};

obj = msg;
body = JSON.stringify(obj);
$done({body});
