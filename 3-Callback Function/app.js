console.log("User 1 mengakses database");
console.log("User 2 mengakses database");
console.log("User 3 mengakses database");

function serveData(){
	console.log('database di berikan setelah diproses selama 5 detik');
}

setTimeout(serveData,5000);