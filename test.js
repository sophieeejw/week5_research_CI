const test = require('tape');
const shot = require('shot');
const router = require('./router');



test('Initialize', (t) =>{
	let num =2 ;
	t.equal(num, 2, 'Num should be equal to two');
	t.end();
});


test('Test home url', (t)=>{
	shot.inject(router, {method:'get', url:'/'}, (response)=>{
		t.equal(response.statusCode, 200, 'status Code should be 200');
		t.equal(response.payload, 'hello', 'Payload should be /hello/');
		t.end();
	});
});


test('Test unknown url', (t)=>{
	shot.inject(router, {method:'get', url:'hhhhhh'}, (response)=>{
		t.equal(response.statusCode, 404, 'Unknown url should return 404');
		t.end();
	});
});


test('Test blog url', (t)=>{
	shot.inject(router, {method:'get',url:'/blog'}, (response)=>{
		t.equal(response.statusCode, 200 , 'status Code should be 200');
		const jsonObj = JSON.parse(response.payload);
		t.equal(jsonObj.length, 3, "length of array should be 3");
		t.equal(typeof(jsonObj[0]),'string', 'Element should be string');
		t.equal(typeof(jsonObj[1]),'string', 'Element should be string');
		t.equal(typeof(jsonObj[2]),'string', 'Element should be string');
		t.end();
	});
});


