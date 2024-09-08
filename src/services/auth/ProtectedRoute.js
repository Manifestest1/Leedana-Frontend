'use client'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import AuthContext from './AuthContext'

const ProtectedRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user)
    {
      navigate('/login')
    }
  }, [loading, user, navigate])

  if (loading || !user)
  {
    return <p>Loading...</p>
  }

  return children
}

export default ProtectedRoute
