const mongoose = require("mongoose");

// Centralize enum values
const PRICING_MODELS = ["Hourly", "Fixed", "Custom"];
const DURATION_UNITS = ["days", "hours", "minutes"];
const LOCATION_TYPES = ["Physical", "Remote"];
const PAYMENT_STATUSES = ["Pending", "Completed", "Refunded", "Failed"];

// Sub-schema for Pricing
const PricingSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    enum: PRICING_MODELS,
  },
  basePrice: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Sub-schema for Duration
const DurationSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
    enum: DURATION_UNITS,
  },
  hoursPerDay: {
    type: Number,
    default: null, // Optional, default is null
  },
});

// Main CreateListing Schema
const CreateListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 3000,
  },
  category: {
    type: String,
    required: true,
  },
  pricing: {
    type: PricingSchema,
    required: true,
  },
  duration: {
    type: DurationSchema,
    required: true,
  },
  availability: {
    calendar: [Date],
    bookingCalendar: [Date],
  },
  location: {
    type: {
      type: String,
      required: true,
      enum: LOCATION_TYPES,
    },
    serviceArea: String,
  },
  media: {
    images: [String],
    videos: [String],
  },
  attachments: {
    documents: [String],
    photos: [String],
  },
  requirements: [String],
  toolsEquipment: [String],
  qualifications: [String],
  languageSupport: String,
  currency: String,
  validation: {
    type: Boolean,
    default: false,
  },
  fileUploads: {
    type: Boolean,
    default: false,
  },
  stripePayment: {
    type: String,
    required: true,
    enum: PAYMENT_STATUSES,
  },
  reviews: [String],
  contactButton: {
    type: Boolean,
    default: true,
  },
  reportListing: {
    type: Boolean,
    default: false,
  },
  bookmarkListing: {
    type: Boolean,
    default: false,
  },
});

const CreateListing = mongoose.model("CreateListing", CreateListingSchema);

module.exports = CreateListing;
