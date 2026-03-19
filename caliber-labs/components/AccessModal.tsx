'use client'

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

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
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-espresso/20 backdrop-blur-[2px] p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Research access"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto lg:max-h-[calc(100dvh-1.25rem)] lg:max-w-6xl lg:overflow-visible"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center lg:mb-4">
          <Image
            src="/logos/Emblems/Navy%20Emblem.png"
            alt="Caliber Labs"
            width={80}
            height={80}
            className="h-16 w-16 object-contain lg:h-12 lg:w-12"
          />
        </div>

        {/* Step 1: Research Purpose */}
        {step === 'purpose' && (
          <div className="rounded-2xl bg-white p-8 shadow-lg lg:grid lg:max-h-[calc(100dvh-6.5rem)] lg:grid-cols-2 lg:gap-x-10 lg:gap-y-3 lg:p-6 lg:items-stretch">
            <h1 className="font-display mb-2 text-center text-2xl text-espresso lg:col-span-2 lg:mb-0 lg:text-xl">
              Research Use Only
            </h1>
            <div className="mb-6 h-px w-full bg-glass lg:col-span-2 lg:mb-0" />

            <div className="mb-6 space-y-4 lg:mb-0 lg:min-h-0 lg:space-y-2 lg:overflow-y-auto lg:pr-1 lg:text-[13px] lg:leading-snug">
              <p className="text-sm leading-relaxed text-espresso/80 lg:text-[13px]">
                All products offered by Caliber Labs are intended for research
                purposes only and are not approved by the FDA for clinical,
                therapeutic, or personal use. By accessing this website and
                placing an order, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-espresso/70 lg:space-y-1 lg:text-[12px] lg:leading-snug">
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
              <p className="text-sm leading-relaxed text-espresso/80 lg:text-[13px]">
                Caliber Labs reserves the right to verify your eligibility and
                may request documentation of your research affiliation. By
                clicking "Continue" below, you acknowledge that you have read
                and understood this disclaimer and accept full responsibility
                for the lawful use of these products.
              </p>
            </div>

            <div className="flex min-h-0 flex-col lg:min-h-0">
              <p className="mb-4 text-sm font-semibold text-espresso lg:mb-2 lg:text-xs">
                Please select your research purpose:
              </p>
              <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mb-3 lg:gap-2">
                {purposeOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-center rounded-lg border-2 border-glass p-4 transition-colors hover:bg-parchment/50 lg:p-2.5"
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
                      className="h-4 w-4 shrink-0 text-sage"
                    />
                    <span className="ml-3 font-body text-sm text-espresso lg:text-xs lg:leading-tight">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>

              <button
                type="button"
                onClick={handleContinuePurpose}
                disabled={!selectedPurpose}
                className="mt-auto w-full rounded-lg bg-sage py-3 font-body font-semibold text-white transition-colors hover:bg-sage/90 disabled:cursor-not-allowed disabled:opacity-50 lg:py-2.5 lg:text-sm"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Sign In / Register */}
        {step === 'auth' && (
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg lg:max-w-md">
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
