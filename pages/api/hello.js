// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {

  const returnObject = { 
    name: 'John Doe 2',
    src: 'https://www.w3schools.com/tags/img_girl.jpg'
   };

  res.status(200).json(returnObject)
}
