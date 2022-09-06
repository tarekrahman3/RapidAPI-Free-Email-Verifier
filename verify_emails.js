const emails = [
	"dick@01a.com",
	"spressly@10pointcapital.com",
	"mpierson@dunnrush.com"
]; 

async function verifyEmail() {
  for (var i=0;i<emails.length;i++){
    var result = await verify(emails[i]);
    console.log(i,' - ',emails[i],result.response.email_status,result.response.format,result.response.professional,result.response.server_status);
  }
}

async function verify(email){
	let data = null;
	await fetch(`https://email-verifier-completely-free.p.rapidapi.com/email-verification/${email}`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9dbe12c5eamsha4d44d19a26912dp18ff2ajsnd29a2cfe24e4',
			'X-RapidAPI-Host': 'email-verifier-completely-free.p.rapidapi.com'
		}
	})
	.then(response=>response.json())
	.then(response=>{ data = response})
	return data
}

verifyEmail();
