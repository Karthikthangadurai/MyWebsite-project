import React from 'react'

const Header = () => {
  return (
    <header
    className="h-96 bg-cover bg-center flex items-center justify-center text-white"
    style={{backgroundImage:"url('https://arqqa.net/wp-content/uploads/2024/08/Digital-advertising.jpg')"}}>
        <h1 className="text-2xl font-bold bg-black/65 rounded-lg backdrop:blur-sm p-4 md:text-4xl">🚀 Welcome to MyWebsite</h1>
    </header>
  );
}

export default Header;