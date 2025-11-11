import Markdown from 'react-markdown'

export default function ClaudeRecipe(props){
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <Markdown>{props.recipe}</Markdown>
            </article>
        </section>
    )
}