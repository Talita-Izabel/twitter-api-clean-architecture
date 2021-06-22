
export class ExpressAdapter {
 static call(fn) {
  return async function(req, res, next) {
    try {
      console.log(req.body)
      const obj = await fn(req.params, req.body)
      res.json(obj)
    } catch(err) {
      res.status(400).json({ message: err.message })
    }
  }
 }
}
