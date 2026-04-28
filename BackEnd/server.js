require('dotenv').config()
const app = require('./src/app')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`)
  console.log(`🌐 Allowed frontend origin: ${process.env.FRONTEND_URL || 'any origin (dev mode)'}`)
  console.log(`📝 Frontend dev server: cd Frontend && npm run dev`)
})