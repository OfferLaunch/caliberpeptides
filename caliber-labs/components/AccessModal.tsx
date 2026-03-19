'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ResearchPurpose =
  | 'independent'
  | 'pharma'
  | 'academic'
  | 'lab'
  | 'cosmetic'
  | 'supply'

export default function AccessModal() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const nextPath = searchParams.get('next') || '/'

  const [step, setStep] = useState<'purpose' | 'auth'>('purpose')
  const [selectedPurpose, setSelectedPurpose] = useState<ResearchPurpose | null>(
    null
  )
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkEmail, setCheckEmail] = useState(false)

  const purposeOptions: { value: ResearchPurpose; label: string }[] = [
    { value: 'independent', label: 'Independent Researcher' },
    { value: 'pharma', label: 'Pharmaceutical Research' },
    {
      value: 'academic',
      label: 'Academic/Research Institution',
    },
    { value: 'lab', label: 'Laboratory/CRO' },
    { value: 'cosmetic', label: 'Cosmetic Research' },
    { value: 'supply', label: 'Chemical Supply/Distribution' },
  ]

  const handleContinuePurpose = () => {
    if (!selectedPurpose) return
    document.cookie = `caliber_research_purpose=${selectedPurpose}; path=/; max-age=2592000`
    setStep('auth')
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createSupabaseBrowserClient()
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      router.push(nextPath)
    } catch (err) {
      setError('An unexpected error occurred')
      setLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createSupabaseBrowserClient()
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      // If user is immediately authenticated, email confirmation is disabled
      if (data.session) {
        router.push(nextPath)
      } else {
        // Otherwise show "check your email" message
        setCheckEmail(true)
        setLoading(false)
      }
    } catch (err) {
      setError('An unexpected error occurred')
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logos/Emblems/Navy%20Emblem.png"
            alt="Caliber Labs"
            width={80}
            height={80}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Step 1: Research Purpose */}
        {step === 'purpose' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="font-display text-2xl text-espresso mb-2 text-center">
              Research Use Only
            </h1>
            <div className="w-full h-px bg-glass mb-6" />

            <div className="mb-6 space-y-4">
              <p className="text-sm text-espresso/80 leading-relaxed">
                All products offered by Caliber Labs are intended for research
                purposes only and are not approved by the FDA for clinical,
                therapeutic, or personal use. By accessing this website and
                placing an order, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-espresso/70">
                <li>
                  You are purchasing these products for legitimate research
                  purposes only
                </li>
                <li>
                  You understand these lyophilized chemicals are not for human
                  or animal consumption
                </li>
                <li>
                  You are affiliated with a recognized research institution,
                  laboratory, or educational organization, or are a qualified
                  independent researcher
                </li>
                <li>
                  You comply with all applicable local, state, and federal laws
                  governing the purchase and use of these materials
                </li>
              </ul>
              <p className="text-sm text-espresso/80 leading-relaxed">
                Caliber Labs reserves the right to verify your eligibility and
                may request documentation of your research affiliation. By
                clicking "Continue" below, you acknowledge that you have read
                and understood this disclaimer and accept full responsibility
                for the lawful use of these products.
              </p>
            </div>

            <div className="mb-8 space-y-3">
              <p className="text-sm font-semibold text-espresso mb-4">
                Please select your research purpose:
              </p>
              {purposeOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center p-4 border-2 border-glass rounded-lg cursor-pointer hover:bg-parchment/50 transition-colors"
                  style={{
                    borderColor:
                      selectedPurpose === option.value ? '#7D8F78' : '#D1DBCB',
                    backgroundColor:
                      selectedPurpose === option.value ? '#F5F2ED' : 'white',
                  }}
                >
                  <input
                    type="radio"
                    name="purpose"
                    value={option.value}
                    checked={selectedPurpose === option.value}
                    onChange={() => setSelectedPurpose(option.value)}
                    className="w-4 h-4 text-sage"
                  />
                  <span className="ml-3 text-espresso font-body">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            <button
              onClick={handleContinuePurpose}
              disabled={!selectedPurpose}
              className="w-full bg-sage text-white rounded-lg py-3 font-body font-semibold hover:bg-sage/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Sign In / Register */}
        {step === 'auth' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="font-display text-2xl text-espresso mb-2 text-center">
              {authMode === 'signin' ? 'Sign In' : 'Create Account'}
            </h1>
            <div className="w-full h-px bg-glass mb-6" />

            {checkEmail ? (
              <div className="mb-6 p-4 bg-sage/10 border border-sage rounded-lg">
                <p className="text-sm text-espresso">
                  ✓ Check your email to confirm your account. Then you can
                  sign in.
                </p>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-glass">
                  <button
                    onClick={() => setAuthMode('signin')}
                    className={`pb-3 font-body font-semibold transition-colors ${
                      authMode === 'signin'
                        ? 'text-sage border-b-2 border-sage'
                        : 'text-espresso/50 hover:text-espresso'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setAuthMode('signup')}
                    className={`pb-3 font-body font-semibold transition-colors ${
                      authMode === 'signup'
                        ? 'text-sage border-b-2 border-sage'
                        : 'text-espresso/50 hover:text-espresso'
                    }`}
                  >
                    Create Account
                  </button>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                    {error}
                  </div>
                )}

                {/* Form */}
                <form
                  onSubmit={
                    authMode === 'signin' ? handleSignIn : handleSignUp
                  }
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-body font-semibold text-espresso mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-glass rounded-lg font-body text-espresso placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-sage"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-espresso mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-glass rounded-lg font-body text-espresso placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-sage"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-sage text-white rounded-lg py-3 font-body font-semibold hover:bg-sage/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-6"
                  >
                    {loading
                      ? 'Loading...'
                      : authMode === 'signin'
                        ? 'Sign In'
                        : 'Create Account'}
                  </button>
                </form>
              </>
            )}

            {!checkEmail && (
              <button
                onClick={() => setStep('purpose')}
                className="w-full mt-4 text-sage font-body font-semibold hover:text-sage/80 transition-colors"
              >
                ← Back to Purpose
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}
