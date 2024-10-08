import express from 'express';
import bodyParser from 'body-parser';
const app = express();

// ใช้body-parser ส าหรับแยกข้อมูล JSON
app.use(bodyParser.json());

app.post('/json', (req, res) => {
console.log(req.body); // แสดงข้อมูลใน console
console.log(req.body.name);
console.log(req.body.email);
res.send(`Received JSON Data: ${JSON.stringify(req.body)}`);
});


// ใช้body-parser ส าหรับแยกข้อมูล form (x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/form', (req, res) => {
console.log(req.body); // แสดงข้อมูลใน console
res.send(`Received Form Data: ${JSON.stringify(req.body)}`);
});

app.get('/',(req,res)=> {
res.send(`
    <from method="post" action="/from">
        <input type="text" name>
        <input type="text" email>
        <input type="submit" value=Submit>
    </from>
    `);
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});