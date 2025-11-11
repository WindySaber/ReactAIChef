import express from 'express'
import cors from 'cors'
import { getRecipeFromMistral } from './ai.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/recipe', async (req, res) => {
  try {
    const recipe = await getRecipeFromMistral(req.body.ingredients)
    res.json({ recipe })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(3000, () => console.log('✅ Server running on port 3000'))