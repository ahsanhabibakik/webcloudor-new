// Utility functions for error handling

export interface ErrorInfo {
  message: string
  code?: string
  timestamp: Date
  context?: Record<string, any>
}

export class AppError extends Error {
  public readonly code: string
  public readonly timestamp: Date
  public readonly context?: Record<string, any>

  constructor(message: string, code = 'UNKNOWN_ERROR', context?: Record<string, any>) {
    super(message)
    this.name = 'AppError'
    this.code = code
    this.timestamp = new Date()
    this.context = context
  }
}

// Error logging utility
export function logError(error: Error | AppError, context?: Record<string, any>) {
  const errorInfo: ErrorInfo = {
    message: error.message,
    code: error instanceof AppError ? error.code : 'UNKNOWN_ERROR',
    timestamp: new Date(),
    context: {
      ...context,
      ...(error instanceof AppError ? error.context : {}),
      stack: error.stack,
    }
  }

  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.error('Error logged:', errorInfo)
  }

  // In production, you would send this to your error tracking service
  // Example: Sentry, LogRocket, etc.
  // sendToErrorService(errorInfo)
}

// Async operation wrapper with error handling
export async function withErrorHandling<T>(
  operation: () => Promise<T>,
  errorMessage = 'Operation failed',
  context?: Record<string, any>
): Promise<T> {
  try {
    return await operation()
  } catch (error) {
    const appError = new AppError(
      errorMessage,
      'OPERATION_FAILED',
      { ...context, originalError: error }
    )
    logError(appError)
    throw appError
  }
}

// Retry utility for failed operations
export async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: Error

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error as Error
      
      if (attempt === maxRetries) {
        throw new AppError(
          `Operation failed after ${maxRetries} attempts`,
          'MAX_RETRIES_EXCEEDED',
          { attempts: maxRetries, lastError: lastError.message }
        )
      }

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * attempt))
    }
  }

  throw lastError!
}

// Form validation error handler
export function handleValidationErrors(errors: any[]): Record<string, string> {
  const fieldErrors: Record<string, string> = {}
  
  errors.forEach((error) => {
    if (error.path && error.path[0]) {
      fieldErrors[error.path[0] as string] = error.message
    }
  })
  
  return fieldErrors
}

// Network error classifier
export function classifyNetworkError(error: any): string {
  if (!error) return 'Unknown error occurred'
  
  const message = error.message?.toLowerCase() || ''
  
  if (message.includes('network') || message.includes('fetch')) {
    return 'Network connection error. Please check your internet connection.'
  }
  
  if (message.includes('timeout')) {
    return 'Request timed out. Please try again.'
  }
  
  if (message.includes('cors')) {
    return 'Cross-origin request blocked. Please contact support.'
  }
  
  if (error.status) {
    switch (error.status) {
      case 400:
        return 'Invalid request. Please check your input.'
      case 401:
        return 'Authentication required. Please log in.'
      case 403:
        return 'Access denied. You don\'t have permission for this action.'
      case 404:
        return 'Resource not found.'
      case 429:
        return 'Too many requests. Please wait and try again.'
      case 500:
        return 'Server error. Please try again later.'
      default:
        return `Server error (${error.status}). Please try again later.`
    }
  }
  
  return 'An unexpected error occurred. Please try again.'
}