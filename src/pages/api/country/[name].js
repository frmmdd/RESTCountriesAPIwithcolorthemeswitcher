import countries from '../../../mocks/countries.json'

export default function handler(req, res) {
    const { name } = req.query;

   //const country = countries.filter((country => parseInt(country.callingCodes[0]) == parseInt(code)))
   const country = countries.filter((country => country.name.toLowerCase() === name.toLowerCase()))
    
    res.status(200).json(country)
}