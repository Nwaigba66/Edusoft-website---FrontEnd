'use client' 
 
import { useEffect, useState } from 'react'
 
 const info = ''
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [pageError, setPageError] = useState(info)
  useEffect(() => {
    // Log the error to an error reporting service
    setPageError(error.message)
  }, [error])
 
  return (
    <div>
      <h2>{pageError}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}