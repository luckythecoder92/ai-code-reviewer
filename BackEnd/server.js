require('dotenv').config()
const app = require('./src/app')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`)
  console.log(`📝 To use the AI Code Reviewer:`)
  console.log(`   1. Open Frontend/index.html in a browser`)
  console.log(`   2. Or run: npx http-server Frontend -p 5000`)
  console.log(`   3. Then visit http://localhost:5000`)
})