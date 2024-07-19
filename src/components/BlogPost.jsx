import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = () => {
  const codeSnippet = `
import React, { useRef, useState } from 'react';

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);
      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <form onSubmit={subscribe}>
      <label htmlFor="email-input">{'Email Address'}</label>
      <input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputEl}
        type="email"
      />
      <div>
        {message
          ? message
          : \`I'll only send emails when new content is posted. No spam.\`}
      </div>
      <button type="submit">{'✨ Subscribe 💌'}</button>
    </form>
  );
}

export default Subscribe;
  `;

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
      
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Create A Newsletter with Next.js API Routes and Mailchimp</h1>
        <div className="text-gray-400 mb-8">
          <span>November 10, 2019 (4y ago)</span>
          <span className="ml-4">23,597 views</span>
        </div>
        
        <article className="space-y-6">
          <p>
            You've probably noticed the rise of newsletters (especially in the developer community).
            They're an excellent way to promote content to those who really want to read it. If you've
            ever thought about starting a newsletter, then you've found the right article.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">Mailchimp vs. The World</h2>
          
          <p>
            If you're just starting a newsletter, you probably want something with a free tier. That was
            my rationale for adopting TinyLetter. It was simple, easy to set up, and didn't require an API
            route. Perfect!
          </p>
          
          <p>
            However, it wasn't exactly a frictionless sign-up process. When a user clicked "subscribe",
            it launched a pop-up window where they had to confirm their email address again. Again, it
            works, but we can do better.
          </p>
          
          <p>
            I started to explore using Mailchimp as an alternative. It also has a free tier if you have less
            than 2,000 subscribers. Perfect.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">Why Next.js?</h2>
          
          <p>
            Now that our API is created, we need a way to gather user input. Let's create a component
            to send a request to our API.
          </p>
          
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeSnippet}
          </SyntaxHighlighter>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;