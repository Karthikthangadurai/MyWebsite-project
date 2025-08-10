import React from 'react'

const Article = () => {
  return (
   <article className="container mx-auto p-6">   
        <h2 className="text-xl font-bold md:text-2xl">📰 Latest News</h2>
    <div className="flex shadow-lg bg-white p-4 rounded-lg items-center">
        <img className="rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbkelDxvcduRnTyX_24kmWCikFBCF4gCjsg&s" alt="" />
        <div className="ml-4">
            <h3 className="text-sm font-semibold md:text-xl">🚀 Vite is Revolutionizing Frontend </h3>
            <p className="text-gray-600 text-xs mt-2 md:text-lg">Vite is a next-gen frontend tool that delivers fast development.</p>
        </div>
    </div>
   </article>
  )
}

export default Article;