// ==========================================
// HAXBALL HEADLESS BOT KODU (4V4 QATAR - GÜNCELLENMİŞ)
// ==========================================

const TOKEN = "thr1.AAAAAGrGjhtCKyxxT77arw.lnhGT9AI9XUt"; 
const KURUCU_NICK = "berkwsy";
const DISCORD_LINK = "https://discord.gg/XXErqRBgb";

const room = HBInit({
  token: TOKEN,
  roomName: "⭐ 4v4 QATAR",
  maxPlayers: 12,
  public: true,
  noPlayer: true,
  playerName: "Host",
  password: null
});

// HARİTA YÜKLEME
const MAP_STRING = `{"name":"Premiun world cup 4v4 futbol soccer By pagus from HaxMaps","width":850,"height":350,"spawnDistance":120,"bg":{"type":"hockey","height":0,"width":0,"color":"718C5A","cornerRadius":0,"kickOffRadius":0},"canBeStored":true,"vertexes":[{"x":-700,"y":-321,"trait":"linha","color":"D4AC0D"},{"x":-700,"y":-90,"trait":"linha","color":"D4AC0D"},{"x":-700,"y":91,"trait":"linha","color":"D4AC0D"},{"x":-700,"y":321,"trait":"linha","color":"D4AC0D"},{"x":-701,"y":320,"trait":"linha","color":"111129"},{"x":701,"y":320,"trait":"linha","color":"111129"},{"x":700,"y":321,"trait":"linha","color":"D4AC0D"},{"x":700,"y":90,"trait":"linha","pos":[550,80],"color":"D4AC0D"},{"x":700,"y":-90,"trait":"linha","color":"D4AC0D"},{"x":700,"y":-321,"trait":"linha","color":"D4AC0D"},{"x":701,"y":-320,"trait":"linha","color":"111129"},{"x":-701,"y":-320,"trait":"linha","color":"111129"},{"x":-700,"y":-90,"bCoef":0.5,"cMask":["ball"],"trait":"rede","color":"9C0000","bias":0},{"x":-738,"y":-90,"bCoef":0.5,"cMask":["ball"],"trait":"rede","color":"9C0000","bias":0},{"x":-738,"y":91.45,"bCoef":0.5,"cMask":["ball"],"trait":"rede","color":"9C0000","bias":0,"curve":-90},{"x":-738,"y":90,"bCoef":0.5,"cMask":["ball"],"trait":"rede","color":"9C0000","bias":0},{"x":-700,"y":90,"bCoef":0.5,"cMask":["ball"],"trait":"rede","color":"9C0000","bias":0},{"x":700,"y":90,"bCoef":0.5,"cMask":["ball"],"trait":"rede","pos":[550,80],"color":"002B9C","bias":0},{"x":738,"y":90,"bCoef":0.5,"cMask":["ball"],"trait":"rede","color":"002B9C","bias":0},{"x":738,"y":-90,"bCoef":0.5,"cMask":["ball"],"trait":"rede","color":"002B9C","bias":0},{"x":700,"y":-90,"bCoef":0.5,"cMask":["ball"],"trait":"rede","color":"002B9C","bias":0},{"x":1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":-698,"y":-150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":-600,"y":-150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":-600,"y":150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":-698,"y":150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":698,"y":-90,"trait":"parede","bias":40,"color":"EDEEFF","curve":0},{"x":698,"y":-318,"trait":"parede","bias":40,"color":"EDEEFF","curve":0},{"x":-698,"y":-318,"trait":"parede","bias":40,"color":"FFEDED","curve":0},{"x":-698,"y":-90,"trait":"parede","bias":40,"color":"FFEDED","curve":0},{"x":-698,"y":91,"trait":"parede","bias":40,"color":"FFEDED","curve":0},{"x":-698,"y":318,"trait":"parede","bias":40,"color":"FFEDED","curve":0},{"x":698,"y":318,"trait":"parede","bias":40,"color":"EDEEFF","curve":0},{"x":698,"y":90,"trait":"parede","pos":[550,80],"bias":49,"color":"EDEEFF","curve":0},{"x":0,"y":-350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-90,"trait":"linha","color":"F2F2F2"},{"x":0,"y":90,"trait":"linha","color":"F2F2F2"},{"x":460,"y":-3.125,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":460,"y":3.125,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":460,"y":-2,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":460,"y":2,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":460,"y":-4,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":-685,"y":-320,"trait":"linha","color":"D4AC0D"},{"x":-700,"y":-305,"trait":"linha","color":"D4AC0D"},{"x":685,"y":320,"trait":"linha","color":"D4AC0D"},{"x":700,"y":305,"trait":"linha","color":"D4AC0D"},{"x":-700,"y":305,"trait":"linha","color":"D4AC0D"},{"x":-685,"y":320,"trait":"linha","color":"D4AC0D"},{"x":700,"y":-305,"trait":"linha","color":"D4AC0D"},{"x":685,"y":-320,"trait":"linha","color":"D4AC0D"},{"x":-698,"y":-93,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-741,"y":-93,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-741,"y":93,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-698,"y":93,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":93,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":741,"y":93,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":741,"y":-92,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":-92,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-601.5,"y":-150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":-601.5,"y":150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":601.5,"y":-150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":601.5,"y":150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":400,"y":-318.5,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":400,"y":318.5,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":600,"y":150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":698,"y":150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":600,"y":-150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":698,"y":-150,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":-400,"y":-318.5,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":-400,"y":318.5,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":-700,"y":-90,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":-700,"y":90,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":700,"y":-90,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":700,"y":90,"trait":"linha","curve":0,"color":"D4AC0D"},{"x":-400,"y":-90,"trait":"linha","curve":90,"color":"D4AC0D"},{"x":-400,"y":90,"trait":"linha","curve":90,"color":"D4AC0D"},{"x":400,"y":-90,"trait":"linha","curve":-90,"color":"D4AC0D"},{"x":400,"y":90,"trait":"linha","curve":-90,"color":"D4AC0D"},{"x":-460,"y":-3.125,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":-460,"y":3.125,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":-460,"y":-2,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":-460,"y":2,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":-460,"y":-4,"trait":"linha","curve":180,"color":"D4AC0D"},{"x":-1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":-1,"y":320,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D","vis":false},{"x":-1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D4AC0D","vis":false},{"x":-1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"D4AC0D"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"D4AC0D"},{"x":-701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-700,"y":-318.5,"trait":"linha","curve":-66,"color":"717171"},{"x":-700,"y":318.5,"trait":"linha","curve":-66,"color":"717171"},{"x":700,"y":-318.5,"trait":"linha","curve":66,"color":"717171"},{"x":700,"y":318.5,"trait":"linha","curve":66,"color":"717171"},{"x":-701,"y":320,"trait":"linha","curve":-12},{"x":701,"y":320,"trait":"linha","curve":-12},{"x":-699.7143528027441,"y":-319.71411084872835,"trait":"linha","curve":12},{"x":699.5258398551779,"y":-320.43429158802047,"trait":"linha","curve":12},{"x":701,"y":-320,"cGroup":["wall"],"trait":"linha","color":"D4AC0D","curve":0},{"x":-701,"y":-320,"trait":"linha","color":"D4AC0D","curve":0},{"x":-701,"y":320,"trait":"linha","color":"D4AC0D","curve":0},{"x":701,"y":320,"trait":"linha","color":"D4AC0D","curve":0},{"x":-738,"y":-91.45,"bCoef":0.5,"cMask":["ball"],"trait":"rede","color":"9C0000","bias":0,"curve":90},{"x":738,"y":91.45,"bCoef":0.5,"cMask":["ball"],"trait":"rede","curve":0,"color":"002B9C","bias":0},{"x":738,"y":-91.45,"bCoef":0.5,"cMask":["ball"],"trait":"rede","curve":0,"color":"002B9C","bias":0},{"x":-25.83836800296632,"y":-345.29913194638164,"color":"D4AC0D"},{"x":-25.83836800296632,"y":-326.34663194638165,"color":"D4AC0D"},{"x":-25.50586800296631,"y":-334.99163194638163,"color":"D4AC0D"},{"x":-15.863368002966325,"y":-326.67913194638163,"color":"D4AC0D"},{"x":-11.873368002966316,"y":-342.97163194638165,"color":"D4AC0D"},{"x":-5.888368002966303,"y":-326.01413194638167,"color":"D4AC0D"},{"x":-13.2033680029663,"y":-334.65913194638165,"color":"D4AC0D"},{"x":-8.548368002966328,"y":-334.65913194638165,"color":"D4AC0D"},{"x":3.4920278463781074,"y":-343.7422257203982,"color":"D4AC0D"},{"x":4.086631997033692,"y":-326.67913194638163,"color":"D4AC0D"},{"x":2.7566319970336792,"y":-333.6616319463816,"color":"D4AC0D"},{"x":10.404131997033687,"y":-342.97163194638165,"color":"D4AC0D"},{"x":11.06913199703368,"y":-328.00913194638156,"color":"D4AC0D"},{"x":19.049131997033697,"y":-328.00913194638156,"color":"D4AC0D"},{"x":18.051631997033695,"y":-342.63913194638167,"color":"D4AC0D"},{"x":28.3591319970337,"y":-342.97163194638165,"color":"D4AC0D"},{"x":28.02663199703369,"y":-334.99163194638163,"color":"D4AC0D"},{"x":23.37163199703369,"y":-328.34163194638165,"color":"D4AC0D"},{"x":-700.939196119329,"y":-319.6223275994272,"cMask":["wall"],"trait":"linha","color":"ffffff"},{"x":-700.3998720000003,"y":318.70713600000016,"cMask":["wall"],"cGroup":["wall"],"trait":"linha"},{"x":699.3716503608501,"y":320.72858418260546,"cMask":["wall"],"trait":"linha"},{"x":-698.7311385459533,"y":-320.6447187928669,"cGroup":["wall"],"trait":"linha"},{"x":700.4458161865568,"y":321.5020576131687,"cGroup":["wall"],"trait":"linha"},{"x":-27.363931047209856,"y":-40.83475609803915,"cMask":["wall"],"cGroup":["wall"]},{"x":-20.921143445045505,"y":-20.28869526319548,"cMask":["wall"],"cGroup":["wall"]},{"x":1.3155396746835066,"y":-33.18477920411561,"cMask":["wall"],"cGroup":["wall"]},{"x":-0.42136471088618954,"y":-42.08756468552962,"cMask":["wall"],"cGroup":["wall"]},{"x":2.0508289481703352,"y":23.995654849192217,"cMask":["wall"],"cGroup":["wall"]},{"x":34.310274124950084,"y":-44.75920205003104,"cMask":["wall"],"cGroup":["wall"]},{"x":29.156887462686516,"y":-18.03363980571263,"cMask":["wall"],"cGroup":["wall"]},{"x":18.45065193549777,"y":26.50127202417316,"cMask":["wall"],"cGroup":["wall"]},{"x":-23.849683264211123,"y":-23.044874155674506,"cMask":["wall"],"cGroup":["wall"]},{"x":-13.599793897131459,"y":11.783204576560497,"cMask":["wall"],"cGroup":["wall"]},{"x":-15.531786758312844,"y":44.811449614632686,"cMask":["wall"],"cGroup":["wall"]},{"x":-22.971121318461435,"y":-26.302176483149722,"cMask":["wall"],"cGroup":["wall"]},{"x":4.557152981695352,"y":-4.252745343317487,"cMask":["wall"],"cGroup":["wall"]},{"x":-18.285457607796438,"y":-17.783078088214538,"cMask":["wall"],"cGroup":["wall"]},{"x":-4.814174439634616,"y":-0.7448812983441737,"cMask":["wall"],"cGroup":["wall"]},{"x":-13.892647879048019,"y":2.261859311632944,"cMask":["wall"],"cGroup":["wall"]},{"x":-2.1784886023855563,"y":14.038260034043342,"cMask":["wall"],"cGroup":["wall"]},{"x":1.1722670024206492,"y":36.36715892607374,"cMask":["wall"],"cGroup":["wall"]},{"x":16.10782008016529,"y":30.009136069146475,"cMask":["wall"],"cGroup":["wall"]},{"x":12.593572297166546,"y":41.37839327603561,"cMask":["wall"],"cGroup":["wall"]},{"x":17.572089989748093,"y":28.756327481656005,"cMask":["wall"],"cGroup":["wall"]},{"x":17.572089989748093,"y":43.38288701602037,"cMask":["wall"],"cGroup":["wall"]},{"x":18.45065193549777,"y":40.62670812354134,"cMask":["wall"],"cGroup":["wall"]},{"x":25.056931715854663,"y":44.951331205783795,"cMask":["wall"],"cGroup":["wall"]},{"x":-17.28891064981221,"y":44.5608878971346,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.09715688522887,"y":66.18647531457354,"cMask":["wall"],"cGroup":["wall"]},{"x":-16.294261309952958,"y":55.88486643834928,"cMask":["wall"],"cGroup":["wall"]},{"x":24.06223393470301,"y":58.650779152429664,"cMask":["wall"],"cGroup":["wall"]},{"x":30.32830339035277,"y":67.18872218456589,"cMask":["wall"],"cGroup":["wall"]},{"x":-27.0710770652933,"y":-41.08531781553723,"cMask":["wall"],"cGroup":["wall"]},{"x":1.6333212311937269,"y":-73.66096449388358,"cMask":["wall"],"cGroup":["wall"]},{"x":28.453194486618866,"y":-43.75695518003866,"cMask":["wall"],"cGroup":["wall"]},{"x":4.850006963611917,"y":-43.34037327302007,"cMask":["wall"],"cGroup":["wall"]},{"x":4.557152981695352,"y":-43.590934990518164,"cMask":["wall"],"cGroup":["wall"]},{"x":12.464210493442511,"y":-21.290942133187848,"cMask":["wall"],"cGroup":["wall"]},{"x":25.642639679687786,"y":-24.297682743164973,"cMask":["wall"],"cGroup":["wall"]},{"x":10.707086601943146,"y":-34.320151443088704,"cMask":["wall"],"cGroup":["wall"]},{"x":29.33175643236854,"y":-38.99628254757489,"cMask":["wall"],"cGroup":["wall"]},{"x":31.381734305784473,"y":-46.26257235501961,"cMask":["wall"],"cGroup":["wall"]},{"x":-0.8337482785524308,"y":-61.067429469084765,"cMask":["wall"],"cGroup":["wall"]},{"x":25.179198012283432,"y":-62.34584349619849,"cMask":["wall"],"cGroup":["wall"]},{"x":-4.909850973697653,"y":-73.75893104260513,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.660919239891506,"y":-40.59427729574173,"cMask":["wall"],"cGroup":["wall"]},{"x":-21.469354925192444,"y":-46.96169460917362,"cMask":["wall"],"cGroup":["wall"]},{"x":-15.878272771542976,"y":-68.45999753891633,"cMask":["wall"],"cGroup":["wall"]}],"segments":[{"v0":0,"v1":1,"color":"D4AC0D","trait":"linha","x":-700},{"v0":2,"v1":3,"color":"D4AC0D","trait":"linha","x":-700},{"v0":6,"v1":7,"color":"D4AC0D","trait":"linha","x":700},{"v0":8,"v1":9,"color":"D4AC0D","trait":"linha","x":700},{"v0":12,"v1":13,"color":"9C0000","bCoef":0.5,"cMask":["ball"],"trait":"rede","bias":0,"y":-90},{"v0":15,"v1":16,"color":"9C0000","bCoef":0.5,"cMask":["ball"],"trait":"rede","bias":0,"y":80},{"v0":17,"v1":18,"color":"002B9C","bCoef":0.5,"cMask":["ball"],"trait":"rede","bias":0,"y":80},{"v0":19,"v1":20,"color":"002B9C","bCoef":0.5,"cMask":["ball"],"trait":"rede","bias":0,"y":-90},{"v0":21,"v1":22,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":22,"v1":23,"curve":180,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":23,"v1":22,"curve":180,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":23,"v1":24,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":25,"v1":26,"curve":0,"color":"D4AC0D","trait":"linha","y":-150},{"v0":27,"v1":28,"curve":0,"color":"D4AC0D","trait":"linha","y":150},{"v0":29,"v1":30,"curve":0,"color":"EDEEFF","trait":"parede","bias":40,"x":698},{"v0":30,"v1":31,"color":"969EA8","trait":"parede","bias":40,"y":-318},{"v0":31,"v1":32,"curve":0,"color":"FFEDED","trait":"parede","bias":40,"x":-698},{"v0":33,"v1":34,"curve":0,"color":"FFEDED","trait":"parede","bias":40,"x":-698},{"v0":34,"v1":35,"color":"111129","trait":"parede","bias":40,"y":318},{"v0":35,"v1":36,"curve":0,"color":"EDEEFF","trait":"parede","bias":49,"x":698},{"v0":37,"v1":38,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":39,"v1":40,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":43,"v1":44,"curve":180,"color":"D4AC0D","trait":"linha","x":460},{"v0":44,"v1":43,"curve":180,"color":"D4AC0D","trait":"linha","x":460},{"v0":45,"v1":46,"curve":180,"color":"D4AC0D","trait":"linha","x":460},{"v0":46,"v1":45,"curve":180,"color":"D4AC0D","trait":"linha","x":460},{"v0":48,"v1":49,"curve":90,"color":"D4AC0D","trait":"linha"},{"v0":50,"v1":51,"curve":90,"color":"D4AC0D","trait":"linha"},{"v0":52,"v1":53,"curve":90,"color":"D4AC0D","trait":"linha"},{"v0":54,"v1":55,"curve":90,"color":"D4AC0D","trait":"linha"},{"v0":56,"v1":57,"bCoef":0,"trait":"rede2","bias":20,"y":-93},{"v0":57,"v1":58,"bCoef":0,"trait":"rede2","bias":40,"x":-741},{"v0":58,"v1":59,"bCoef":0,"trait":"rede2","bias":20,"y":93},{"v0":60,"v1":61,"trait":"rede2","bias":20,"y":93},{"v0":61,"v1":62,"trait":"rede2","bias":40,"x":741},{"v0":62,"v1":63,"trait":"rede2","bias":20,"y":-92},{"v0":64,"v1":65,"curve":0,"color":"D4AC0D","trait":"linha","y":150,"x":-601.5},{"v0":66,"v1":67,"curve":0,"color":"D4AC0D","trait":"linha","y":150,"x":601.5},{"v0":68,"v1":69,"curve":0,"color":"D4AC0D","trait":"linha","y":150,"x":400},{"v0":70,"v1":71,"curve":0,"color":"D4AC0D","trait":"linha","y":150,"x":571.5},{"v0":72,"v1":73,"curve":0,"color":"D4AC0D","trait":"linha","y":150,"x":571.5},{"v0":74,"v1":75,"curve":0,"color":"D4AC0D","trait":"linha","y":150,"x":-400},{"v0":76,"v1":77,"curve":0,"color":"D4AC0D","trait":"linha","y":150},{"v0":78,"v1":79,"curve":0,"color":"D4AC0D","trait":"linha","y":150,"x":700},{"v0":80,"v1":81,"curve":90,"color":"D4AC0D","trait":"linha","y":150,"x":-400},{"v0":82,"v1":83,"curve":-90,"color":"D4AC0D","trait":"linha","y":150,"x":400},{"v0":84,"v1":85,"curve":180,"color":"D4AC0D","trait":"linha","y":-460},{"v0":85,"v1":84,"curve":180,"color":"D4AC0D","trait":"linha","y":-460},{"v0":86,"v1":87,"curve":180,"color":"D4AC0D","trait":"linha","y":-460},{"v0":87,"v1":86,"curve":180,"color":"D4AC0D","trait":"linha","y":-460},{"v0":89,"v1":90,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":91,"v1":92,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":94,"v1":93,"curve":177,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":95,"v1":96,"curve":177,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":109,"v1":110,"curve":0,"color":"D4AC0D","trait":"linha","y":-320},{"v0":111,"v1":112,"curve":0,"color":"D4AC0D","trait":"linha","y":320},{"v0":14,"v1":113,"vis":true,"color":"9C0000","bCoef":0.5,"cMask":["ball"],"trait":"rede","bias":0},{"v0":115,"v1":114,"curve":0,"vis":true,"color":"002B9C","bCoef":0.5,"cMask":["ball"],"trait":"rede","bias":0},{"v0":116,"v1":117,"color":"D4AC0D"},{"v0":116,"v1":118,"curve":227.02005768762112,"color":"D4AC0D"},{"v0":119,"v1":120,"color":"D4AC0D"},{"v0":120,"v1":121,"color":"D4AC0D"},{"v0":122,"v1":123,"color":"D4AC0D"},{"v0":124,"v1":125,"curve":-152.18567440496827,"color":"D4AC0D"},{"v0":125,"v1":126,"curve":-168.71890113568645,"color":"D4AC0D"},{"v0":127,"v1":128,"color":"D4AC0D"},{"v0":128,"v1":129,"curve":-76.38883911627045,"color":"D4AC0D"},{"v0":129,"v1":130,"color":"D4AC0D"},{"v0":131,"v1":132,"curve":-195.81034722299796,"color":"D4AC0D"},{"v0":132,"v1":133,"curve":191.21854889289168,"color":"D4AC0D"},{"v0":134,"v1":135,"curve":-38.738421259593586,"color":"D4AC0D","cMask":["wall"],"trait":"linha"},{"v0":109,"v1":136,"curve":40.35281348884163,"color":"D4AC0D","cMask":["wall"],"trait":"linha"},{"v0":139,"v1":140,"curve":-45.94378175989523,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":139,"v1":141,"curve":-115.12517595056087,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":143,"curve":47.5689117165083,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":145,"curve":48.311405061193724,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":145,"v1":146,"curve":-14.647446050673901,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":147,"v1":148,"curve":-38.351391210877324,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":149,"curve":39.01459555951337,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":150,"v1":151,"curve":60.97821899489893,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":152,"v1":153,"curve":-60.19526907007014,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":154,"v1":155,"curve":-58.62150223241443,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":146,"v1":156,"curve":37.11412637277013,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":157,"v1":158,"curve":22.289791183309458,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":159,"v1":160,"curve":10.492355880121197,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":161,"v1":162,"curve":146.59880968116153,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":163,"v1":162,"curve":-60.57990821630474,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":163,"v1":164,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":165,"v1":166,"curve":-40.91715589254906,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":164,"v1":167,"curve":-14.910411597814639,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":167,"v1":162,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":168,"v1":169,"curve":111.9877421007794,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":170,"curve":-170.79235012865755,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":171,"curve":118.14518142351533,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":172,"v1":173,"curve":44.99041535453081,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":173,"v1":174,"curve":186.53647322949197,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":174,"v1":170,"curve":-52.329712063026335,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":175,"v1":176,"curve":-50.78934417297905,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":177,"v1":169,"curve":-93.73357304777697,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":178,"v1":179,"curve":-41.32160578240396,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":178,"v1":180,"curve":51.20491329149248,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":181,"v1":182,"curve":8.267801009030215,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":182,"v1":183,"curve":-79.94927137460826,"color":"efb810","cMask":["wall"],"cGroup":["wall"]},{"v0":182,"v1":182,"curve":8.267801009030215,"color":"efb810","cMask":["wall"],"cGroup":["wall"]}],"goals":[{"p0":[-708.25,-90],"p1":[-708.25,90],"team":"red"},{"p0":[708.25,90],"p1":[708.25,-90],"team":"blue"}],"discs":[{"radius":6.25,"invMass":1.5,"pos":[0,0],"color":"8DF400","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":5,"pos":[-700,90],"color":"9C0000","trait":"traveRed"},{"radius":5,"pos":[-700,-90],"color":"9C0000","trait":"traveRed"},{"radius":5,"pos":[700,90],"color":"002B9C","trait":"traveBlue"},{"radius":5,"pos":[700,-90],"color":"002B9C","trait":"traveBlue"},{"pos":[-700,320],"color":"DF5B00","trait":"bandeiraRed"},{"pos":[-700,-320],"color":"DF5B00","trait":"bandeiraRed"},{"pos":[700,320],"color":"DF5B00","trait":"bandeiraBlue"},{"pos":[700,-320],"color":"DF5B00","trait":"bandeiraBlue"}],"planes":[{"normal":[0,1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8"},{"normal":[1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8"},{"normal":[0,-1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8"},{"normal":[-1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8"}],"traits":{"rede":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"F2F2F2"},"rede2":{"vis":false,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},"parede":{"vis":false,"bCoef":1,"cMask":["ball"],"bias":10},"traveRed":{"radius":6,"invMass":0,"bCoef":0.5,"color":"E18977"},"traveBlue":{"radius":6,"invMass":0,"bCoef":0.5,"color":"85ACF3"},"bandeiraRed":{"radius":3,"color":"E18977","cMask":[""]},"bandeiraBlue":{"radius":3,"color":"85ACF3","cMask":[""]},"linha":{"cMask":[""],"color":"F2F2F2"},"hb":{"cMask":[""],"color":"F2F2F2"}},"ballPhysics":"disc0","playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.95},"joints":[],"redSpawnPoints":[[-530,0],[-135,90],[-135,-90],[-285,0],[-765,0]],"blueSpawnPoints":[[530,0],[135,90],[135,-90],[285,0],[765,0]]}`;

try {
  room.setCustomStadium(MAP_STRING);
} catch (e) {}

room.setScoreLimit(3);
room.setTimeLimit(3);

let stats = {};

try {
  const saved = localStorage.getItem("haxball_player_stats");
  if (saved) stats = JSON.parse(saved);
} catch (e) { stats = {}; }

function saveStats() {
  try { localStorage.setItem("haxball_player_stats", JSON.stringify(stats)); } catch (e) {}
}

const joinTimes = {};
const lastChatTimes = {};
const lastDiceTimes = {};
const mutedPlayers = new Map();
const afkPlayers = new Set();
let lastKicker = null;
let secondLastKicker = null;

const playerPositions = {};
const lastMoveTime = {};

const badWords = ["amk", "aq", "orospu", "o.ç", "piç", "sik", "anan", "amina", "orospucocugu", "oc", "salak", "mal", "gerizekali"];
function containsBadWord(text) {
  const lower = text.toLowerCase();
  return badWords.some(word => lower.includes(word));
}

function updateTeams() {
  const players = room.getPlayerList().filter(p => p.id !== 0 && !afkPlayers.has(p.id));
  const red = players.filter(p => p.team === 1);
  const blue = players.filter(p => p.team === 2);
  const specs = players.filter(p => p.team === 0);

  let totalActive = red.length + blue.length;
  let targetPerTeam = Math.min(4, Math.ceil(totalActive / 2));
  if (targetPerTeam < 1 && players.length >= 2) targetPerTeam = 1;

  while (red.length < targetPerTeam && specs.length > 0) {
    const p = specs.shift();
    room.setPlayerTeam(p.id, 1);
    red.push(p);
  }
  while (blue.length < targetPerTeam && specs.length > 0) {
    const p = specs.shift();
    room.setPlayerTeam(p.id, 2);
    blue.push(p);
  }

  while (red.length > blue.length + 1) {
    const p = red.pop();
    room.setPlayerTeam(p.id, 2);
    blue.push(p);
  }
  while (blue.length > red.length + 1) {
    const p = blue.pop();
    room.setPlayerTeam(p.id, 1);
    red.push(p);
  }
  
  tryStartGame();
}

function tryStartGame() {
  try {
    const redCount = room.getPlayerList().filter(p => p.team === 1).length;
    const blueCount = room.getPlayerList().filter(p => p.team === 2).length;
    if (room.getScores() === null && redCount > 0 && redCount === blueCount) {
      room.startGame();
    }
  } catch (e) {}
}

setInterval(tryStartGame, 1000);

// 10 Saniye Hareketsizlik Kontrolü
setInterval(() => {
  const now = Date.now();
  const list = room.getPlayerList();
  
  list.forEach(p => {
    if (p.id === 0) return;
    if (p.team === 0 || afkPlayers.has(p.id)) {
      delete playerPositions[p.id];
      delete lastMoveTime[p.id];
      return;
    }

    const pos = p.position;
    if (!pos) return;

    if (!playerPositions[p.id]) {
      playerPositions[p.id] = { x: pos.x, y: pos.y };
      lastMoveTime[p.id] = now;
      return;
    }

    const moved = Math.abs(pos.x - playerPositions[p.id].x) > 2 || Math.abs(pos.y - playerPositions[p.id].y) > 2;

    if (moved) {
      playerPositions[p.id] = { x: pos.x, y: pos.y };
      lastMoveTime[p.id] = now;
    } else {
      if (now - lastMoveTime[p.id] >= 10000) {
        afkPlayers.add(p.id);
        room.setPlayerTeam(p.id, 0);
        room.sendAnnouncement(`💤 ${p.name}, 10 sn boyunca hareket etmediğin için afk'sın. Afk'dan ayrılmak için !afk`, null, 0xFF9900, "bold");
        delete playerPositions[p.id];
        delete lastMoveTime[p.id];
        updateTeams();
      }
    }
  });
}, 1000);

function getTargetPlayer(param) {
  if (!param) return null;
  const list = room.getPlayerList();
  if (!isNaN(param)) {
    return list.find(p => p.id === parseInt(param));
  }
  const query = param.toLowerCase();
  return list.find(p => p.name.toLowerCase().includes(query));
}

room.onPlayerJoin = function(player) {
  const existingPlayers = room.getPlayerList().filter(p => p.id !== player.id);
  const nameCollision = existingPlayers.some(p => p.name.toLowerCase() === player.name.toLowerCase());

  if (nameCollision) {
    room.kickPlayer(player.id, "Bu isimle zaten bir oyuncu odada var!", true);
    return;
  }

  if (!stats[player.name]) {
    stats[player.name] = { goals: 0, assists: 0, value: 0, golSevinci: "", streak: 0 };
  } else {
    if (stats[player.name].streak === undefined) stats[player.name].streak = 0;
    if (!stats[player.name].golSevinci) stats[player.name].golSevinci = "";
  }
  saveStats();
  
  joinTimes[player.id] = Date.now();
  
  if (player.name === KURUCU_NICK) {
    room.setPlayerAdmin(player.id, true);
    room.sendAnnouncement("✅ Admin yetkisi başarıyla tanımlandı.", player.id, 0x00FF00, "bold");
  }

  room.sendAnnouncement(`👋 Hoş geldin, ⚽ ${player.name} !`, player.id, 0xFFFF00, "bold");
  room.sendAnnouncement(`💼 Oyuncu Değerin Yüklendi`, player.id, 0xAAAAAA, "normal");
  room.sendAnnouncement(`💰 Güncel Değerin: ${stats[player.name].value.toLocaleString()} €`, player.id, 0x00FF7F, "bold");
  room.sendAnnouncement(`⚽ Sahaya çık ve değerini yükselt!`, player.id, 0x00FFFF, "normal");

  updateTeams();
};

room.onPlayerLeave = function(player) {
  delete joinTimes[player.id];
  delete lastChatTimes[player.id];
  delete lastDiceTimes[player.id];
  delete playerPositions[player.id];
  delete lastMoveTime[player.id];
  mutedPlayers.delete(player.id);
  afkPlayers.delete(player.id);
  updateTeams();
};

room.onPlayerTeamChange = function(player, byPlayer) {
  updateTeams();
};

room.onPlayerChat = function(player, msg) {
  if (mutedPlayers.has(player.id)) {
    const expireTime = mutedPlayers.get(player.id);
    if (Date.now() < expireTime) {
      room.sendAnnouncement("🔇 Susturulduğun için konuşamazsın!", player.id, 0xFF0000, "normal");
      return false;
    } else {
      mutedPlayers.delete(player.id);
    }
  }

  const now = Date.now();
  if (now - (lastChatTimes[player.id] || 0) < 2000 && !player.admin) {
    room.sendAnnouncement("⏳ Çok hızlı yazıyorsun! 2 saniye bekle.", player.id, 0xFF9900, "normal");
    return false;
  }
  lastChatTimes[player.id] = now;

  let text = msg.trim();

  if (containsBadWord(text)) {
    room.sendAnnouncement("⚠️ Küfür veya hakaret içeren mesajlar yasaktır!", player.id, 0xFF0000, "bold");
    return false;
  }

  if (text.includes(":D")) {
    text = text.replaceAll(":D", "😄");
  }

  const lowerMsg = text.toLowerCase();
  if (lowerMsg === "es") {
    text = "Eline sağlık";
  } else if (lowerMsg === "nt") {
    text = "İyi deneme";
  } else if (lowerMsg === "np") {
    text = "Sorun değil";
  } else if (lowerMsg === "sa" || lowerMsg === "s.a" || lowerMsg === "selam") {
    text = "SelamınAleyküm";
  } else if (lowerMsg === "as" || lowerMsg === "a.s" || lowerMsg === "aleykümselam") {
    text = "AleykümSelam";
  }

  const args = text.split(" ");
  const cmd = args[0].toLowerCase();
  let isCommandHandled = false;

  if (cmd === "!golsevinci") {
    isCommandHandled = true;
    if (!args[1]) {
      room.sendAnnouncement("❌ Kullanım: !golsevinci <mesaj>", player.id, 0xFF0000, "normal");
      return false;
    }
    const newSevinc = args.slice(1).join(" ");
    if (containsBadWord(newSevinc)) {
      room.sendAnnouncement("❌ Gol sevincinde küfür/hakaret kullanamazsın!", player.id, 0xFF0000, "bold");
      return false;
    }
    if (!stats[player.name]) stats[player.name] = { goals: 0, assists: 0, value: 0, golSevinci: "", streak: 0 };
    stats[player.name].golSevinci = newSevinc;
    saveStats();
    
    room.sendAnnouncement(`🎉 Kişisel gol sevincin başarıyla ayarlandı: "${newSevinc}"`, player.id, 0x00FF00, "bold");
    return false;
  }

  const color = player.admin ? 0xFFFF00 : 0xFFFFFF;
  room.sendAnnouncement(`⚽ ${player.name} (#${player.id}): ${text}`, null, color, "normal");

  if (cmd === "!komutlar" || cmd === "!yardim") {
    isCommandHandled = true;
    room.sendAnnouncement("📜 [KOMUTLAR]: !değer, !değersıralama, !topgol, !topasist, !id, !afk, !onlinesürem, !dc, !zar, !tekrar, !golsevinci <mesaj>", player.id, 0x00FFFF, "bold");
    if (player.admin) {
      room.sendAnnouncement("👑 [ADMİN]: !kick <nick/id>, !ban <nick/id>, !unban <nick/all>, !mute <id> <dk>, !unmute <nick>, !sure <dk>, !gol <sayı>, !cc", player.id, 0xFF3333, "bold");
    }
    return false;
  }

  if (cmd === "!id") {
    isCommandHandled = true;
    const list = room.getPlayerList();
    room.sendAnnouncement("📋 --- OYUNCU ID LİSTESİ ---", player.id, 0x00FFFF, "bold");
    list.forEach(p => {
      room.sendAnnouncement(`🆔 ID: [${p.id}] ➜ ⚽ ${p.name} (Takım: ${p.team === 1 ? "Kırmızı" : p.team === 2 ? "Mavi" : "İzleyici"})`, player.id, 0xFFFFFF, "normal");
    });
    return false;
  }

  if (cmd === "!değer" || cmd === "!deger") {
    isCommandHandled = true;
    let targetName = args[1] ? args.slice(1).join(" ") : player.name;
    let foundKey = Object.keys(stats).find(k => k.toLowerCase().includes(targetName.toLowerCase()));
    
    if (!foundKey) {
      room.sendAnnouncement("❌ Oyuncu verisi bulunamadı!", player.id, 0xFF0000, "normal");
      return false;
    }
    const p = stats[foundKey];
    room.sendAnnouncement("💎 " + foundKey + " | Değer: " + p.value.toLocaleString() + " € | Gol: " + p.goals + " | Asist: " + p.assists, player.id, 0x00FFFF, "bold");
    return false;
  }

  if (cmd === "!değersıralama" || cmd === "!degersiralama" || cmd === "!top5") {
    isCommandHandled = true;
    const sortedPlayers = Object.entries(stats)
      .sort((a, b) => b[1].value - a[1].value)
      .slice(0, 5);

    room.sendAnnouncement("═══════════════════════════════════", player.id, 0xFFFF00, "bold");
    room.sendAnnouncement("🏆  D E Ğ E R   S I R A L A M A S I  ( İ L K  5 )", player.id, 0x00FFFF, "bold");
    room.sendAnnouncement("═══════════════════════════════════", player.id, 0xFFFF00, "bold");
    
    if (sortedPlayers.length === 0) {
      room.sendAnnouncement("ℹ️ Henüz kayıtlı oyuncu verisi yok.", player.id, 0xFF9900, "normal");
    } else {
      sortedPlayers.forEach((entry, index) => {
        const rankEmoji = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🏅";
        room.sendAnnouncement(rankEmoji + " " + (index + 1) + ". " + entry[0] + " ➜ " + entry[1].value.toLocaleString() + " € (Gol: " + entry[1].goals + ")", player.id, 0x00FF7F, "normal");
      });
    }
    room.sendAnnouncement("═══════════════════════════════════", player.id, 0xFFFF00, "bold");
    return false;
  }

  if (cmd === "!topgol") {
    isCommandHandled = true;
    const sortedGoals = Object.entries(stats)
      .sort((a, b) => b[1].goals - a[1].goals)
      .slice(0, 5);

    room.sendAnnouncement("⚽ --- GOL KRALLIĞI ( İ L K  5 ) ---", player.id, 0x00FFFF, "bold");
    sortedGoals.forEach((entry, index) => {
      room.sendAnnouncement(`${index + 1}. ${entry[0]} ➜ ${entry[1].goals} Gol`, player.id, 0x00FF7F, "normal");
    });
    return false;
  }

  if (cmd === "!topasist") {
    isCommandHandled = true;
    const sortedAssists = Object.entries(stats)
      .sort((a, b) => b[1].assists - a[1].assists)
      .slice(0, 5);

    room.sendAnnouncement("🎯 --- ASİST KRALLIĞI ( İ L K  5 ) ---", player.id, 0x00FFFF, "bold");
    sortedAssists.forEach((entry, index) => {
      room.sendAnnouncement(`${index + 1}. ${entry[0]} ➜ ${entry[1].assists} Asist`, player.id, 0x00FF7F, "normal");
    });
    return false;
  }

  // YENİ: !tekrar / !replay komutu
  if (cmd === "!tekrar" || cmd === "!replay") {
    isCommandHandled = true;
    room.sendAnnouncement(`🎬 ${player.name} son pozisyonun tekrarını (replay) istedi!`, null, 0x00FFFF, "bold");
    return false;
  }

  if (cmd === "!onlinesürem") {
    isCommandHandled = true;
    const sec = Math.floor((Date.now() - (joinTimes[player.id] || Date.now())) / 1000);
    room.sendAnnouncement("⏱️ Süren: " + Math.floor(sec/60) + " dk " + (sec%60) + " sn", player.id, 0x00FFFF, "bold");
    return false;
  }

  if (cmd === "!afk") {
    isCommandHandled = true;
    if (afkPlayers.has(player.id)) {
      afkPlayers.delete(player.id);
      room.sendAnnouncement("🟢 Artık AFK değilsin, sıraya alındın.", player.id, 0x00FF00, "normal");
    } else {
      afkPlayers.add(player.id);
      room.setPlayerTeam(player.id, 0);
      room.sendAnnouncement("💤 AFK moduna geçtin.", player.id, 0xFFFF00, "normal");
    }
    updateTeams();
    return false;
  }

  if (cmd === "!dc" || cmd === "!discord") {
    isCommandHandled = true;
    room.sendAnnouncement("💬 Discord Sunucumuz: " + DISCORD_LINK, player.id, 0x5865F2, "bold");
    return false;
  }

  if (cmd === "!zar") {
    isCommandHandled = true;
    const cooldown = 10 * 60 * 1000;
    const lastDice = lastDiceTimes[player.id] || 0;
    
    if (now - lastDice < cooldown && !player.admin) {
      const remainingSec = Math.ceil((cooldown - (now - lastDice)) / 1000);
      const remMin = Math.floor(remainingSec / 60);
      const remS = remainingSec % 60;
      room.sendAnnouncement("⏳ Tekrar zar atmak için " + remMin + " dk " + remS + " sn beklemelisin!", player.id, 0xFF9900, "normal");
      return false;
    }

    lastDiceTimes[player.id] = now;
    const dice = Math.floor(Math.random() * 6) + 1;
    
    if (!stats[player.name]) stats[player.name] = { goals: 0, assists: 0, value: 0, golSevinci: "", streak: 0 };

    if (dice === 6) {
      stats[player.name].value += 10000;
      saveStats();
      room.sendAnnouncement("🎲 " + player.name + " zar attı ve 6 geldi! Şansına **+10.000 Değer** kazandı! 🌟", null, 0xFF00FF, "bold");
    } else if (dice === 1) {
      stats[player.name].value = Math.max(0, stats[player.name].value - 5000);
      saveStats();
      room.sendAnnouncement("🎲 " + player.name + " zar attı ve 1 geldi! Şanssızlık, **-5.000 Değer** kaybetti! 😢", null, 0xFF0000, "bold");
    } else {
      room.sendAnnouncement("🎲 " + player.name + " zar attı ve **" + dice + "** geldi!", null, 0xFF00FF, "bold");
    }
    return false;
  }

  if (player.admin) {
    if (cmd === "!kick" && args[1]) {
      isCommandHandled = true;
      const targetArg = args.slice(1).join(" ");
      const t = getTargetPlayer(targetArg);
      if (t) {
        room.kickPlayer(t.id, "Sunucudan atıldın!", false);
        room.sendAnnouncement(`👢 ${t.name} sunucudan atıldı.`, player.id, 0xFF3333, "normal");
      } else {
        room.sendAnnouncement("❌ Oyuncu bulunamadı!", player.id, 0xFF0000, "normal");
      }
      return false;
    }

    if (cmd === "!ban" && args[1]) {
      isCommandHandled = true;
      const targetArg = args.slice(1).join(" ");
      const t = getTargetPlayer(targetArg);
      if (t) {
        room.kickPlayer(t.id, "Sunucudan banlandın!", true);
        room.sendAnnouncement(`🔨 ${t.name} banlandı.`, player.id, 0xFF3333, "normal");
      } else {
        room.sendAnnouncement("❌ Oyuncu bulunamadı!", player.id, 0xFF0000, "normal");
      }
      return false;
    }

    if (cmd === "!unban") {
      isCommandHandled = true;
      if (!args[1]) {
        room.sendAnnouncement("❌ Kullanım: !unban all VEYA !unban <oyuncu_adi>", player.id, 0xFF0000, "normal");
        return false;
      }

      if (args[1].toLowerCase() === "all") {
        room.clearBans();
        room.sendAnnouncement("🔓 Odadaki HERKESİN banı tamamen kaldırıldı!", player.id, 0x00FF00, "bold");
      } else {
        const targetName = args.slice(1).join(" ").toLowerCase();
        const banList = room.getBanList();
        const foundBan = banList.find(b => b.name.toLowerCase().includes(targetName));

        if (foundBan) {
          room.clearBans(foundBan.id);
          room.sendAnnouncement(`🔓 ${foundBan.name} adlı oyuncunun banı kaldırıldı!`, player.id, 0x00FF00, "bold");
        } else {
          room.sendAnnouncement("❌ Ban listesinde bu isimle eşleşen oyuncu bulunamadı!", player.id, 0xFF0000, "normal");
        }
      }
      return false;
    }

    if (cmd === "!mute" && args[1]) {
      isCommandHandled = true;
      const targetArg = args[1];
      const minuteArg = args[2] ? parseInt(args[2]) : 5;
      const t = getTargetPlayer(targetArg);
      
      if (t) {
        const expireMs = Date.now() + (minuteArg * 60 * 1000);
        mutedPlayers.set(t.id, expireMs);
        room.sendAnnouncement(`🔇 ${t.name} adlı oyuncu ${minuteArg} dakika süreyle susturuldu.`, null, 0xFF3333, "bold");
      } else {
        room.sendAnnouncement("❌ Oyuncu bulunamadı!", player.id, 0xFF0000, "normal");
      }
      return false;
    }

    if (cmd === "!unmute" && args[1]) {
      isCommandHandled = true;
      const targetArg = args.slice(1).join(" ");
      const t = getTargetPlayer(targetArg);
      if (t && mutedPlayers.has(t.id)) {
        mutedPlayers.delete(t.id);
        room.sendAnnouncement(`🔊 ${t.name} adlı oyuncunun susturulması kaldırıldı.`, null, 0x00FF00, "bold");
      } else {
        room.sendAnnouncement("❌ Oyuncu susturulanlar arasında bulunamadı!", player.id, 0xFF0000, "normal");
      }
      return false;
    }

    if (cmd === "!sure" && args[1]) {
      isCommandHandled = true;
      const min = parseInt(args[1]);
      if (!isNaN(min) && min > 0) {
        room.setTimeLimit(min);
        room.sendAnnouncement(`⏱️ Maç süresi ${min} dakika olarak ayarlandı!`, null, 0x00FFFF, "bold");
      } else {
        room.sendAnnouncement("❌ Geçerli bir dakika gir!", player.id, 0xFF0000, "normal");
      }
      return false;
    }

    if (cmd === "!gol" && args[1]) {
      isCommandHandled = true;
      const goalLimit = parseInt(args[1]);
      if (!isNaN(goalLimit) && goalLimit > 0) {
        room.setScoreLimit(goalLimit);
        room.sendAnnouncement(`⚽ Kazanma gol sınırı ${goalLimit} olarak ayarlandı!`, null, 0x00FFFF, "bold");
      } else {
        room.sendAnnouncement("❌ Geçerli bir sayı gir!", player.id, 0xFF0000, "normal");
      }
      return false;
    }

    if (cmd === "!degersifirla" && args[1]) {
      isCommandHandled = true;
      const targetArg = args.slice(1).join(" ");
      let foundKey = Object.keys(stats).find(k => k.toLowerCase().includes(targetArg.toLowerCase()));
      
      if (foundKey) {
        stats[foundKey] = { goals: 0, assists: 0, value: 0, golSevinci: "", streak: 0 };
        saveStats();
        room.sendAnnouncement(`🔄 ${foundKey} adlı oyuncunun değerleri sıfırlandı!`, player.id, 0x00FF00, "bold");
      } else {
        room.sendAnnouncement("❌ Kayıtlı böyle bir oyuncu bulunamadı!", player.id, 0xFF0000, "normal");
      }
      return false;
    }

    if (cmd === "!cc") {
      isCommandHandled = true;
      for (let i = 0; i < 20; i++) room.sendAnnouncement(" ", null, 0xFFFFFF, "normal");
      return false;
    }
  }

  if (text.startsWith("!")) {
    if (!isCommandHandled) {
      room.sendAnnouncement("❌ Öyle bir komut yok!", player.id, 0xFF0000, "normal");
    }
    return false;
  }

  return false; 
};

room.onPlayerBallKick = function(player) {
  if (!lastKicker || lastKicker.id !== player.id) {
    secondLastKicker = lastKicker;
    lastKicker = player;
  }
};

room.onTeamGoal = function(team) {
  if (lastKicker && lastKicker.team !== team) {
    if (!stats[lastKicker.name]) stats[lastKicker.name] = { goals: 0, assists: 0, value: 0, golSevinci: "", streak: 0 };
    stats[lastKicker.name].value -= 5000;
    saveStats();
    room.sendAnnouncement("⚽ Kendi kalesine gol: " + lastKicker.name + " (-5.000 €)", null, 0xFF0000, "bold");
  } else if (lastKicker && lastKicker.team === team) {
    if (!stats[lastKicker.name]) stats[lastKicker.name] = { goals: 0, assists: 0, value: 0, golSevinci: "", streak: 0 };
    stats[lastKicker.name].goals++;
    stats[lastKicker.name].value += 15000;
    
    let assistText = "";
    if (secondLastKicker && secondLastKicker.team === team && secondLastKicker.id !== lastKicker.id) {
      if (!stats[secondLastKicker.name]) stats[secondLastKicker.name] = { goals: 0, assists: 0, value: 0, golSevinci: "", streak: 0 };
      stats[secondLastKicker.name].assists++;
      stats[secondLastKicker.name].value += 5000;
      assistText = ` | 🎯 Asist: ${secondLastKicker.name} (+5.000 €)`;
    }
    saveStats();
    
    const pData = stats[lastKicker.name];
    const sevinciGoster = (pData && pData.golSevinci && pData.golSevinci.trim() !== "") 
      ? `🔥 ${pData.golSevinci} 🔥` 
      : "⚽ G O O L L !";

    room.sendAnnouncement("═══════════════════════════════════════", null, 0xFFD700, "bold");
    room.sendAnnouncement(sevinciGoster, null, 0xFF4500, "bold");
    room.sendAnnouncement(`⚽ Golü Atan: ${lastKicker.name} (+15.000 €)${assistText}`, null, 0x00FF7F, "bold");
    room.sendAnnouncement("═══════════════════════════════════════", null, 0xFFD700, "bold");
  }
  lastKicker = null;
  secondLastKicker = null;
};

room.onTeamVictory = function(scores) {
  const win = scores.red > scores.blue ? 1 : 2;
  const lose = win === 1 ? 2 : 1;
  room.sendAnnouncement("🏆 Kazanan takım tebrikler! (+50.000 €)", null, 0xFF00FF, "bold");
  
  room.getPlayerList().forEach(p => {
    if (p.id === 0) return;
    if (!stats[p.name]) stats[p.name] = { goals: 0, assists: 0, value: 0, golSevinci: "", streak: 0 };
    
    if (p.team === win) {
      stats[p.name].value += 50000;
      stats[p.name].streak = (stats[p.name].streak || 0) + 1;
      
      if (stats[p.name].streak >= 3) {
        room.sendAnnouncement(`🔥 ${p.name} üst üste ${stats[p.name].streak} maçtır kazanıyor ve durdurulamıyor! 🚀`, null, 0xFF00FF, "bold");
      }
    } else if (p.team === lose) {
      stats[p.name].value -= 25000;
      stats[p.name].streak = 0;
      room.setPlayerTeam(p.id, 0);
    }
  });
  saveStats();
  setTimeout(updateTeams, 2000);
};
