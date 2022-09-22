let input= document.querySelector("#input");
let form = document.querySelector("form");
let box = document.querySelector(".box");
let hero = document.querySelector(".hero");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9b6557e86msh06946b4817b2c6bp1302d7jsn3be438c35662',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};





form.addEventListener("submit", getMovies);
function getData(){
	
}
function getMovies(e)
{
	e.preventDefault();
    box.innerHTML=" ";
    console.log(input.value);
	fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${input.value}`, options)
		.then(response => response.json())
		.then(data => {
		  const list= data.d;
		  list.map((item)=>{
			console.log(item);
			if(item.rank)
			{   
				const name= item.l;
				const poster= item.i.imageUrl;
				const movie= `<li><img src=${poster}> <h4>${name}</h4></li>`
				document.querySelector(".box").innerHTML += movie;
			}
			 
		  })
	   })
		.catch(err => console.error(err));
	  form.reset();
}
