const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define nested schemas first
const AddressSchema = new Schema(
  {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    isBilling: Boolean,
    isShipping: Boolean,
  },
  { _id: false }
);

const ContactSchema = new Schema(
  {
    email: { primary: String, secondary: String },
    phone: String,
    addresses: [AddressSchema],
  },
  { _id: false }
);

const VerificationSchema = new Schema(
  {
    emailVerified: Boolean,
    phoneVerified: Boolean,
    identityVerified: Boolean,
  },
  { _id: false }
);

const PreferencesSchema = new Schema(
  {
    serviceCategories: [String],
    locations: [String],
    radius: Number,
    budgetRange: { min: Number, max: Number },
    serviceQuality: String,
    providerRatings: Number,
    timeSlots: [String],
    languages: [String],
    certifications: [String],
    skills: [String],
    availability: { weekdays: Boolean, weekends: Boolean },
    jobTypes: [String],
    salaryRange: { min: Number, max: Number },
    remoteOptions: Boolean,
    educationLevels: [String],
    experienceLevels: [String],
    genders: [String],
  },
  { _id: false }
);

const TransactionHistorySchema = new Schema(
  {
    serviceId: Schema.Types.ObjectId,
    date: Date,
    amount: Number,
    status: String,
  },
  { _id: false }
);

const FeedbackSchema = new Schema(
  {
    comment: String,
    rating: Number,
    date: Date,
  },
  { _id: false }
);

const ProviderProfileSchema = new Schema(
  {
    servicesOffered: [String],
    skills: [String],
    accreditations: [{ type: String, issuingBody: String, validUntil: Date }],
    ratings: Number,
    feedback: [FeedbackSchema],
    availability: { type: Map, of: Boolean },
    travelWillingness: Number,
    insurance: { provider: String, policyNumber: String },
  },
  { _id: false }
);

const BehavioralDataSchema = new Schema(
  {
    appUsageStats: {
      frequency: Number,
      sessionDuration: Number,
      featuresUsed: [{ featureName: String, usageCount: Number }],
    },
    searchPatterns: [{ searchTerm: String, frequency: Number }],
    engagementStats: {
      promotionsEngaged: { type: Map, of: Number },
      surveysParticipated: [
        { surveyId: String, responses: { type: Map, of: String } },
      ],
    },
  },
  { _id: false }
);

// Main User Profile Schema
const UserProfileSchema = new Schema({
  userId: { type: String, required: true, unique: true, index: true },
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  name: {
    first: String,
    last: String,
    middle: String,
    preferred: String,
  },
  profilePicture: String,
  dob: Date,
  genderIdentity: String,
  pronouns: String,
  bio: String,
  contact: ContactSchema,
  languagePreferences: [String],
  nationality: String,
  ethnicity: String,
  accessibilityPreferences: { type: Map, of: String },
  timezone: String,
  currencyPreference: String,
  accountStatus: { type: String, default: "Active" },
  verification: VerificationSchema,
  preferences: PreferencesSchema,
  transactionHistory: [TransactionHistorySchema],
  providerProfile: ProviderProfileSchema,
  behavioralData: BehavioralDataSchema,
  // ... Additional fields as needed ...

  // Communication Preferences (Missing)
  communicationPreferences: {
    contactMethodPreference: String,
    marketingCommunicationsConsent: String, // Opt-in/opt-out status
    newsletterSubscriptionStatus: String, // With topics of interest
    // ... Other missing fields for communication preferences ...
  },

  // Service Interaction (Missing)
  serviceInteraction: {
    serviceCategoryPreferences: [String],
    subcategoryPreferences: [String],
    serviceTimePreferences: String,
    serviceDurationPreferences: String,
    locationBasedServicePreferences: String,
    serviceProviderGenderPreference: String,
    instantBookingSettings: Boolean,
    lastMinuteBookingSettings: String, // You may need to adjust the data type.
    recurringServiceSettings: String, // You may need to adjust the data type.
    serviceQualityPreference: String,
    paymentPreferences: String, // Saved methods, default choice
    inAppPaymentLimits: String, // Daily, weekly, monthly
    externalPaymentMethods: String, // Linkages, usage frequency
    refundHistory: String, // Requests, outcomes, amounts
    disputeHistory: String, // Nature, resolution, provider feedback
    cancellationRate: String, // Percentage, reasons
    noShowHistory: String, // Incidents, provider feedback
    tippingHistory: String, // Amounts, frequency
    wishlistServices: String, // Saved, reminders set
    loyaltyProgramMembership: String, // Tier, points balance
    specialOffersUsed: String, // Types, frequency
    customBudgetLimits: String, // Service-specific, flexible
    bookingNotes: String, // Preferences, special instructions
    // ... Other missing fields for service interaction ...
  },

  // Provider Profile (Missing)
  providerProfileDetails: {
    serviceOfferings: [String],
    skillsAndExpertise: [String],
    portfolioLink: String, // Link to work, reviews, ratings
    professionalBiography: String, // Narrative, achievements, goals
    accreditationDetails: String, // Type, issuing body, validity
    providerRatings: String, // Average, distribution, trends
    customerFeedback: String, // Volume, sentiment analysis
    responseTime: String, // Average, distribution
    availabilityCalendar: String, // Calendar, real-time updates
    preferredServiceAreas: String, // Defined geographically
    travelWillingnessDetails: String, // Radius, transportation means
    equipmentAndToolsProvided: String, // List, condition
    bookingLeadTime: String, // Minimum, maximum
    cancellationPolicy: String, // Terms, historical adherence
    paymentTerms: String, // Invoices, net periods
    insuranceCoverage: String, // Type, provider, policy details
    backgroundCheckStatus: String, // Date, type, outcome
    languageProficiency: String, // List, proficiency level
    culturalCompetence: String, // Training, experience
    serviceGuarantees: String, // Terms, historical fulfillment
    providerPartnerships: String, // Co-op services, affiliations
    seasonalAvailability: String, // Special hours, services
    peakTimePreferences: String, // Pricing, availability
    offPeakDiscounts: String, // Conditions, frequency
    emergencyServiceCapability: String, // Response time, surcharge
    // ... Other missing fields for provider profile ...
  },

  // Booking and Transactions (Missing)
  bookingAndTransactions: {
    activeBookings: String, // List, statuses, countdowns
    completedBookings: String, // Historical data, ratings given
    upcomingBookings: String, // Schedule, preparations
    preferredBookingChannels: String, // App, web, phone
    paymentHistory: String, // Detailed, exportable
    invoiceHistory: String, // Sent, received, status
    taxDocuments: String, // Access, download, submission status
    subscriptionPlans: String, // Current, history, benefits
    membershipTiers: String, // Current tier, progress to next
    upsellHistory: String, // Services, effectiveness
    crossSellHistory: String, // Products, effectiveness
    giftCardBalances: String, // Purchases, redemptions
    walletTransactions: String, // Deposits, withdrawals, transfers
    financialDisputes: String, // Nature, resolution, provider feedback
    loyaltyPoints: String, // Earnings, redemptions, expirations
    // ... Other missing fields for booking and transactions ...
  },

  // Social and Community Engagement (Missing)
  socialAndCommunityEngagement: {
    userGeneratedContent: String, // Posts, comments, media
    communityPosts: String, // Topics, engagement rates
    socialSharing: String, // Platforms used, frequency
    followersCount: String, // Count, growth rate, demographics
    followingCount: String, // Count, interests, demographics
    socialInfluenceMetrics: String, // Engagement metrics, reach
    forumActivity: String, // Posts, replies, likes
    communityEventParticipation: String, // Types, frequency
    contentFlaggingHistory: String, // Actions taken, outcomes
    moderationActions: String, // Type, frequency
    // ... Other missing fields for social and community engagement ...
  },

  // ... Add other missing fields here ...
});

// Compile model from schema
const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;
