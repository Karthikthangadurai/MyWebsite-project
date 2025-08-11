import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
        <p>🌍 ©️ 2025 <b className="text-yellow-500">Karthik Website.</b> All Rights Reserved.</p>
        <div className="flex justify-center space-x-2 mt-4">
            <a href="#" className="text-blue-300 hover:text-blue-500">🌐 Facebook</a>
            <a href="#" className="text-blue-300 hover:text-blue-500">🎭 Twitter</a>
            <a href="#" className="text-blue-300 hover:text-blue-500">📱 Instagram</a>
        </div>
    </footer>
  )
}

export default Footer;