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

const CancellationPolicySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Flexible", "Moderate", "Strict", "Custom"],
    required: true,
  },
  refundPercentageBeforeServiceDate: {
    type: Number,
    min: 0,
    max: 100,
    default: function () {
      switch (this.type) {
        case "Flexible":
          return 100;
        case "Moderate":
          return 50;
        case "Strict":
          return 0;
        default:
          return null; // For 'Custom', this will be required but no default
      }
    },
  },
  refundPercentageOnServiceDate: {
    type: Number,
    min: 0,
    max: 100,
    default: function () {
      switch (this.type) {
        case "Flexible":
          return 100;
        case "Moderate":
          return 0;
        case "Strict":
          return 0;
        default:
          return null; // For 'Custom', this will be required but no default
      }
    },
  },
  reschedulingAllowed: {
    type: Boolean,
    default: function () {
      if (this.type === "Strict") return false;
      return true;
    },
  },
  reschedulingFee: {
    type: Number,
    min: 0,
    default: function () {
      if (this.type === "Moderate") return 10; // Example fee value
      return 0;
    },
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
    mediaFiles: [
      {
        type: String, // 'image' or 'video'
        filename: String,
        mimetype: String,
        path: String,
      },
    ],
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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming your user model is named "User"
    required: true,
  },
  tags: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length <= 10; // Assuming a limit of 10 tags
      },
      message: (props) =>
        `Too many tags! Maximum is 10, but got ${props.value.length}`,
    },
  },
  cancellationPolicy: {
    type: CancellationPolicySchema,
    required: true,
  },
  certifications: [String], // URLs or file paths
  externalReviews: [String], // URLs to external review sites
});

const CreateListing = mongoose.model("CreateListing", CreateListingSchema);

module.exports = CreateListing;
