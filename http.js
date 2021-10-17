const http= require("http");
const fs=require("fs");

// if request comes then execute this call back function 
function rqListener(req,res){
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    const url=req.url;
    const method=req.method;

    if(url==='/'){
        res.write('<html>')
        res.write('<head> <title> Enter Message </title> </head>')
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"/> <button type="submit"> Submit </button> </form> </body>')
        res.write('</html>')
        return res.end();
    }
    if(url==="/message" && method==='POST'){

        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk)
        });

        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split("=")[1];
            // console.log(parsedBody);
            // fs.writeFileSync("message.txt",message);
            fs.writeFile("message.txt",message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            })
        })
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head> <title> My First Page </title> </head>')
    res.write('<body> <h1> Hello from Manav </body>')
    res.write('</html>')
    res.end();
}

// rqListener always runs after every incoming request 
const server=http.createServer(rqListener);

server.listen(3000);