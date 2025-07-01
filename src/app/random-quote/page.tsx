'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { RefreshCw, Share2, Heart } from 'lucide-react'

const techQuotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates"
  },
  {
    quote: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke"
  },
  {
    quote: "It's not a bug – it's an undocumented feature.",
    author: "Anonymous"
  },
  {
    quote: "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie"
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds"
  },
  {
    quote: "Software is eating the world.",
    author: "Marc Andreessen"
  },
  {
    quote: "The art challenges the technology, and the technology inspires the art.",
    author: "John Lasseter"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates"
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs"
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  }
]

export default function RandomQuotePage() {
  const [currentQuote, setCurrentQuote] = useState(techQuotes[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const randomIndex = Math.floor(Math.random() * techQuotes.length)
    setCurrentQuote(techQuotes[randomIndex])
  }, [])

  const getRandomQuote = () => {
    if (!isClient) return
    
    setIsAnimating(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * techQuotes.length)
      setCurrentQuote(techQuotes[randomIndex])
      setIsAnimating(false)
    }, 300)
  }

  const toggleFavorite = () => {
    const quoteIndex = techQuotes.findIndex(q => q.quote === currentQuote.quote)
    if (favorites.includes(quoteIndex)) {
      setFavorites(favorites.filter(fav => fav !== quoteIndex))
    } else {
      setFavorites([...favorites, quoteIndex])
    }
  }

  const shareQuote = async () => {
    const text = `"${currentQuote.quote}" - ${currentQuote.author}`
    if (navigator.share) {
      try {
        await navigator.share({ text })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(text)
      alert('Quote copied to clipboard!')
    }
  }

  const isFavorited = favorites.includes(techQuotes.findIndex(q => q.quote === currentQuote.quote))

  if (!isClient) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '700px', padding: '80px 32px 32px 32px' }}>
          <main>
            <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              Tech Quote Generator
            </h1>
            <p style={{ color: '#6B7280', lineHeight: '1.6' }}>Loading...</p>
          </main>
        </div>
        <div style={{ position: 'absolute', top: '32px', left: '32px' }}>
          <Link href="/" style={{ color: '#D2691E', textDecoration: 'none', fontSize: '14px' }}>
            ← Index
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '700px', padding: '80px 32px 32px 32px' }}>
        <main>
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '16px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Quote Generator
          </h1>
          <p style={{ color: '#6B7280', lineHeight: '1.6', marginBottom: '32px' }}>
            Sometimes we all need a little inspiration. Here are some of my favorite quotes from tech leaders, 
            innovators, and programmers who have shaped our digital world.
          </p>

          <div style={{ backgroundColor: '#F9FAFB', borderRadius: '16px', padding: '32px', border: '1px solid #F3F4F6', position: 'relative', overflow: 'hidden', marginBottom: '32px' }}>
            <div style={{ position: 'absolute', top: '16px', left: '24px', fontSize: '64px', color: '#DBEAFE', fontFamily: 'serif' }}>&ldquo;</div>
            
            <div style={{ 
              transition: 'all 0.3s ease', 
              opacity: isAnimating ? 0 : 1, 
              transform: isAnimating ? 'translateY(16px)' : 'translateY(0)' 
            }}>
              <blockquote style={{ fontSize: '20px', fontWeight: '300', color: '#374151', lineHeight: '1.6', marginBottom: '24px', position: 'relative', zIndex: 10 }}>
                {currentQuote.quote}
              </blockquote>
              <cite style={{ fontSize: '16px', color: '#D2691E', fontWeight: '500' }}>
                — {currentQuote.author}
              </cite>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
            <button
              onClick={getRandomQuote}
              disabled={isAnimating}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '12px 24px', 
                backgroundColor: '#D2691E', 
                color: 'white', 
                borderRadius: '8px', 
                border: 'none',
                cursor: isAnimating ? 'not-allowed' : 'pointer',
                opacity: isAnimating ? 0.5 : 1,
                transition: 'all 0.2s ease',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              <RefreshCw style={{ width: '16px', height: '16px', animation: isAnimating ? 'spin 1s linear infinite' : 'none' }} />
              Get New Quote
            </button>     
          </div>

          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontSize: '14px', color: '#9CA3AF' }}>
              Quote {techQuotes.findIndex(q => q.quote === currentQuote.quote) + 1} of {techQuotes.length} 
              • {favorites.length} favorites
            </p>
          </div>

          <div style={{ backgroundColor: '#F0F9FF', borderRadius: '16px', padding: '24px', border: '1px solid #E0F2FE', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#1E3A8A', marginBottom: '12px' }}>Feeling Inspired?</h3>
            <p style={{ color: '#1E40AF', marginBottom: '16px', lineHeight: '1.6' }}>
              These quotes remind me to stay woke and keep on building. 
              Want to see what I&apos;ve been working on?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Link href="/contact" style={{ color: '#D2691E', textDecoration: 'none' }}>
                Let&apos;s Chat
              </Link>
            </div>
          </div>
        </main>
      </div>

      <div style={{ position: 'absolute', top: '32px', left: '32px' }}>
        <Link href="/" style={{ color: '#D2691E', textDecoration: 'none', fontSize: '14px' }}>
          ← Index
        </Link>
      </div>
    </div>
  )
}