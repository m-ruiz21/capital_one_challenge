const OMDB_API_KEY = process.env.OMDB_API_KEY;

export default async (req, res) => {
    const { param } = req.query
    
    if(param[0]=='byTitle'){
      var url =  'http://www.omdbapi.com/?type=movie&t='+param[1]+'&apikey=' + OMDB_API_KEY;    
    } else {
      var url =  'http://www.omdbapi.com/?type=movie&s='+param[1]+'&apikey=' + OMDB_API_KEY + '&page='+param[2]; 
    }

    const response = await fetch(url)
    const dataResponse = await response.json();
    res.status(200).json(dataResponse)
    // res.json(json)
  }
  