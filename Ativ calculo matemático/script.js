var http = require("http");
var url = require("url");
const operacoes = require("./modulos.js");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    let q = url.parse(req.url, true).query; 
    let n1 = parseInt(q.n1);
    let n2 = parseInt(q.n2);
    let operacao = q.op;
    let resposta;
    switch (operacao) {
      case "soma":
        resposta = "O resultado da operação é:"+operacoes.soma(n1,n2);
        break;
      case "subtracao":
        resposta = "O resultado da operação é:"+operacoes.sub(n1,n2);
        break;
      case "multiplicacao":
        resposta = "O resultado da operação é:"+operacoes.mult(n1,n2);
        break;
      case "divisao":
        resposta = "O resultado da operação é:"+operacoes.div(n1,n2);
        break;
      default:
        resposta = `Selecione uma operação válida`;
        break;
    }
    res.end(resposta);
  }).listen(4000);