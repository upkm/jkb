var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const msg = {
  "errcode": "BIS:10200",
  "errmsg": null,
  "data": {
    "code": "1",
    "error": null
  }
};

obj= msg;
body = JSON.stringify(obj);
$done({body});
