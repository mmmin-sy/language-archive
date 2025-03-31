// server.js
const express = require('express');
const { Client } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL 클라이언트 설정
const client = new Client({
	user: 'postgres',       // PostgreSQL 사용자 이름
	host: 'localhost',    // PostgreSQL 호스트 (로컬에서 실행 중)
	database: 'mydb',    // PostgreSQL 데이터베이스 이름
	password: 'postgres', // 사용자 비밀번호
	port: 5432,           // PostgreSQL 포트
});

// 데이터베이스 연결
client.connect()
		.then(() => {
			console.log('PostgreSQL connected');
		})
		.catch((err) => {
			console.error('Database connection error', err.stack);
		});

// JSON 바디 파싱 미들웨어: 클라이언트가 보내는 JSON 데이터를 Express 서버가 처리할 수 있도록 하기 위해, 서버의 미들웨어에 express.json()을 추가해야 합니다.
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

// select
app.get('/data', async (req, res) => {
	const { search } = req.query;
	const query = search
			? `select * from archive where category LIKE $1 OR example LIKE $1 OR translate LIKE $1 OR comment LIKE $1`
			: 'select * from archive';

	try{
		const result = search ? await client.query(query, [`%${search}%`]) :  await client.query(query);
		res.status(200).json(result.rows);
	} catch(err){
		console.error('Error executing query', err.stack);
		res.status(500).json({ message: 'Error retrieving data' });
	}
});

// Insert
app.post('/data', (req, res) => {
	const { category, example, translate, comment } = req.body;

	const query = `
		INSERT INTO archive (category, example, translate, comment)
		VALUES ($1, $2, $3, $4)
	`;

	const values = [category, example, translate, comment];
	client.query(query, values)
			.then(() => {
				res.status(200).json({ message: 'Success insert'})
			})
			.catch(err => {
				console.error('Error', err.stack);
				res.status(500).json({ message: 'Insert fail'})
			})

});

// 서버 시작
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});