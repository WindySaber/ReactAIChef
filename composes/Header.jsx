import chefClaudeLogo from "/chef-claude-icon.png"

export default function Header(){
    return (
        <header className="header">
            <img src={chefClaudeLogo} alt="chef claude" />
            <h1>Chef Qwen</h1>
        </header>
    )
}