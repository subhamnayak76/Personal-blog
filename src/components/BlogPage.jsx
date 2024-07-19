import React from 'react';

const blogPosts = [
  { title: "On Developer Marketing", views: 22816 },
  { title: "How I'm Writing CSS in 2024", views: 84971 },
  { title: "2023 Blog Refresh", views: 25777 },
  { title: "Why I'm Using Next.js", views: 104949 },
  { title: "Product and Platform Engineers", views: 25067 },
  { title: "Make Something Developers Want", views: 15630 },
  { title: "Community-Messaging Fit", views: 67949 },
  { title: "Funding Open Source", views: 26320 },
  { title: "2023 State of Databases for Serverless & Edge", views: 0 }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="mb-12">
        <ul className="flex justify-center space-x-6">
          <li><a href="#" className="hover:text-gray-300">home</a></li>
          <li><a href="#" className="hover:text-gray-300">work</a></li>
          <li><a href="#" className="hover:text-gray-300">blog</a></li>
          <li><a href="#" className="hover:text-gray-300">guestbook</a></li>
        </ul>
      </nav>
      
      <main>
        <h1 className="text-3xl font-bold mb-8 text-center">read my blog</h1>
        <ul className="space-y-4">
          {blogPosts.map((post, index) => (
            <li key={index} className="hover:bg-gray-900 p-2 rounded">
              <a href="#" className="block">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-400">{post.views.toLocaleString()} views</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <div className="p-4 m-4 bg-blue-500 text-white">
  If this text is white on a blue background, Tailwind CSS is working!
</div>
    </div>
  );
};

export default BlogPage;