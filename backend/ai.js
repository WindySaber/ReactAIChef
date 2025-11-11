import dotenv from 'dotenv'
dotenv.config()

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

// 🚨👉 只改了：HF_ACCESS_TOKEN → ALIYUN_API_KEY
const ALIYUN_API_KEY = process.env.ALIYUN_API_KEY

// ✅ 函数名、参数、注释风格完全保留
export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        // ✅ 内部改用阿里云，但对外接口不变
        const res = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${ALIYUN_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "qwen-turbo",  // 阿里云免费模型
                input: {
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` }
                    ]
                },
                parameters: { max_tokens: 1024 }
            })
        })
        
        const data = await res.json()
        // ✅ 适配返回结构，但对外行为一致
        return data.output?.text || 'No recipe generated'
        
    } catch (err) {
        // ✅ 错误处理风格完全保留
        console.error(err.message)
        return `Error: ${err.message}`
    }
}